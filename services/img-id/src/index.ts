import express from 'express';
import { pino } from 'pino';
import { Request, Response } from 'express';
import fs from 'fs';

const PORT = process.env.PORT || 3000;
const REGISTRY_URL = process.env.REGISTRY_URL || 'http://registry:3000';
const IMG_API_URL = process.env.IMG_API_URL || 'https://plant.id/api/v3';
const PLANT_ID_API_KEY = process.env.PLANT_ID_API_KEY;

if (!PLANT_ID_API_KEY) {
  throw new Error('PLANT_ID_API_KEY environment variable is required');
}

const log = pino({ transport: { target: 'pino-pretty' } });

const app = express();
app.use(express.json());

function imageToBase64(imagePath: string) {
  try {
    const imageBuffer = fs.readFileSync(imagePath);
    const base64Image = imageBuffer.toString('base64');
    return `data:image/jpeg;base64,${base64Image}`;
  } catch (err) {
    log.error(`Error converting image to base64: ${(err as Error).message}`);
    return null;
  }
}

// Retry logic for registry
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
      log.warn(
        `Failed to register (attempt ${i + 1}): ${(err as Error).message}`
      );
      await new Promise(r => setTimeout(r, 1000 * (i + 1)));
    }
  }
  log.error('Could not register with registry. Exiting.');
  process.exit(1);
}

// async function lookupService(name: string): Promise<string | null> {
//   try {
//     const res = await fetch(`${REGISTRY_URL}/lookup?name=${name}`);
//     if (!res.ok) throw new Error(`Status ${res.status}`);
//     const { url } = await res.json();
//     return url;
//   } catch (err) {
//     log.error(`Lookup failed for ${name}: ${(err as Error).message}`);
//     return null;
//   }
// }

app.get('/', async (req: Request, res: Response) => {
  const ID_PLANT_ENDPOINT = '/identification';

  // hardcoded img
  // hardcoded img
  const pine: String =
    'data:image/jpeg;base64,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';

  const apiBody = {
    images: [pine],
    latitude: 49.207,
    longitude: 16.608,
    similar_images: true,
  };

  try {
    const apiResponse = await fetch(`${IMG_API_URL}${ID_PLANT_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Api-Key': PLANT_ID_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiBody),
    });

    if (!apiResponse.ok) {
      log.info('Error contacting Image ID API: ', apiResponse);
      throw new Error(`API responded with status: ${apiResponse.status}`);
    }

    const imgData = await apiResponse.json();
    log.info('imgData', imgData);
    const response = {
      from: 'img-id',
      data: imgData,
      timestamp: new Date().toISOString(),
    };

    res.json(response);
  } catch (err) {
    log.error(`Error contacting Image ID API: ${(err as Error).message}`);
    res.status(500).json({ error: 'Error contacting Image ID API' });
  }
});

// app.post('/', async (req: Request, res: Response) => {
//   // Handle POST requests the same way as GET for now
//   return app.get('/', req, res);
// });

app.listen(PORT, () => {
  log.info(`Service Image-ID listening on port ${PORT}`);
  registerWithRetry('img-id', `http://img-id:${PORT}`);
});
