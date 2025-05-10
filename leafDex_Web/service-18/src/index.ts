import express, { Request, Response } from 'express';
import { pino } from 'pino';
import fetch from 'node-fetch'; // Needed for image fetching in Node < 18
import OpenAI from 'openai';
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const PORT = process.env.PORT || 3000;
const REGISTRY_URL = process.env.REGISTRY_URL || 'http://registry:3000';
const IMG_API_URL = process.env.IMG_API_URL || 'https://plant.id/api/v3';
const PLANT_ID_API_KEY = process.env.PLANT_ID_API_KEY;

// Validate required environment variables
if (!process.env.OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY environment variable is required');
}

if (!PLANT_ID_API_KEY) {
  throw new Error('PLANT_ID_API_KEY environment variable is required');
}

// Log startup configuration (without sensitive data)
const log = pino({ transport: { target: 'pino-pretty' } });
log.info({
  port: PORT,
  registryUrl: REGISTRY_URL,
  imgApiUrl: IMG_API_URL,
  openaiConfigured: !!process.env.OPENAI_API_KEY,
  plantIdConfigured: !!PLANT_ID_API_KEY
}, 'Service configuration');

const app = express();
app.use(express.json());

// Helper to fetch image and convert to base64
async function fetchImageAsBase64(url: string): Promise<string> {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  return `data:image/jpeg;base64,${Buffer.from(buffer).toString('base64')}`;
}

// Service registration logic
async function registerWithRetry(name: string, url: string, maxRetries = 5) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const res = await fetch(`${REGISTRY_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, url }),
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      log.info('Registered with registry');
      return;
    } catch (err) {
      log.warn(`Failed to register (attempt ${i + 1}): ${(err as Error).message}`);
      await new Promise(r => setTimeout(r, 1000 * (i + 1)));
    }
  }
  log.error('Could not register with registry. Exiting.');
  process.exit(1);
}

// Image generation + plant ID endpoint
app.get('/', async (req: Request, res: Response) => {
  // const ID_PLANT_ENDPOINT = '/identification';
  const plantType = req.query.plantType as string || 'Monstera';
  
  log.info({ plantType }, 'Starting request for plant image generation');

  try {
    // Step 1: Generate image from DALL·E
    log.info('Attempting to generate image with DALL-E...');
    const imageRes = await client.images.generate({
      model: 'dall-e-3',
      prompt: `A realistic photo of a ${plantType} plant in a pot on a wooden table`,
      n: 1,
      size: '1024x1024',
    });
    log.info('DALL-E response received');

    if (!imageRes.data?.[0]?.url) {
      log.error('DALL-E response missing image URL', { response: imageRes });
      throw new Error('Failed to generate image URL from OpenAI');
    }

    const imageUrl = imageRes.data[0].url;
    log.info({ imageUrl }, 'Generated image URL received');

    // Step 2: Convert image to base64
    log.info('Converting image to base64...');
    const base64Image = await fetchImageAsBase64(imageUrl);
    log.info('Image converted to base64 successfully');

    // Step 3: Send to Plant.id API
    log.info('Sending request to Plant.id API...');
    const apiBody = {
      images: [base64Image],
      latitude: 49.207,
      longitude: 16.608,
      similar_images: true,
    };

    // const apiResponse = await fetch(`${IMG_API_URL}${ID_PLANT_ENDPOINT}`, {
    //   method: 'POST',
    //   headers: {
    //     'Api-Key': PLANT_ID_API_KEY,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(apiBody),
    // });

    // if (!apiResponse.ok) {
    //   const errorText = await apiResponse.text();
    //   log.error({
    //     status: apiResponse.status,
    //     statusText: apiResponse.statusText,
    //     error: errorText
    //   }, 'Plant.id API error response');
    //   throw new Error(`Plant.id API responded with status: ${apiResponse.status} - ${errorText}`);
    // }

    // const plantData = await apiResponse.json();
    // log.info('Successfully received plant identification data');

    res.json({
      from: 'openai + plant.id',
      generated_image_url: imageUrl,
      // plant_data: plantData,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    log.error({
      error: (err as Error).message,
      stack: (err as Error).stack,
      name:  (err as Error).name,
      phase: (err as Error).message.includes('DALL-E') ? 'image-generation' :
             (err as Error).message.includes('base64') ? 'image-conversion' :
             (err as Error).message.includes('Plant.id') ? 'plant-identification' : 'unknown'
    }, 'Detailed error information');
    
    res.status(500).json({ 
      error: 'Failed to generate or identify plant image',
      details: (err as Error).message,
      phase: (err as Error).message.includes('DALL-E') ? 'image-generation' :
             (err as Error).message.includes('base64') ? 'image-conversion' :
             (err as Error).message.includes('Plant.id') ? 'plant-identification' : 'unknown'
    });
  }
});

// Start server and register
app.listen(PORT, () => {
  log.info(`Service Image-ID listening on port ${PORT}`);
  registerWithRetry('img-id', `http://img-id:${PORT}`);
});
