import React from 'react';
import { classes } from '../styles/classes';
import cameraStep from '../assets/camera-step.svg';
import aiAnalysis from '../assets/ai-analysis.svg';
import resultsStep from '../assets/results-step.svg';

const AboutPage: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.maxWidth}>
        <h1 className={classes.heading1}>About LeafDex</h1>

        <div className="prose prose-lg max-w-none">
          <p className={`text-lg ${classes.paragraph}`}>
            LeafDex is your personal plant companion, designed to help you
            identify and learn about the plants around you. Whether you're a
            seasoned botanist or just starting your plant journey, LeafDex makes
            plant identification easy for everyone.
          </p>

          <h2 className={classes.heading2}>Grow Your Plant Collection</h2>
          <p className={classes.paragraph}>
            Taking a photo of a plant will add it to your personal collection.
            You can then view the plant's information, care instructions, and
            fun facts, as well as compare your plant collection to others.
          </p>

          <h2 className={classes.heading2}>How It Works</h2>
          <div className={classes.stepsContainer}>
            <div className={classes.step}>
              <div className={classes.stepImage}>
                <img
                  src={cameraStep}
                  alt="Taking a photo of a plant with a smartphone camera"
                  className="w-full h-full"
                />
              </div>
              <div className={classes.stepContent}>
                <h3 className={classes.stepHeading}>Take a Photo</h3>
                <p className={classes.stepText}>
                  Simply point your camera at any plant you want to identify.
                  Our app guides you to capture the best angle for accurate
                  identification.
                </p>
              </div>
            </div>

            <div className={`${classes.step} md:flex-row-reverse`}>
              <div className={classes.stepImage}>
                <img
                  src={aiAnalysis}
                  alt="AI analyzing a plant photo with visual indicators"
                  className="w-full h-full"
                />
              </div>
              <div className={classes.stepContent}>
                <h3 className={classes.stepHeading}>AI Analysis</h3>
                <p className={classes.stepText}>
                  Our advanced AI technology instantly analyzes your photo,
                  identifying key features and comparing them against our
                  extensive plant database.
                </p>
              </div>
            </div>

            <div className={classes.step}>
              <div className={classes.stepImage}>
                <img
                  src={resultsStep}
                  alt="Detailed plant information display with care instructions"
                  className="w-full h-full"
                />
              </div>
              <div className={classes.stepContent}>
                <h3 className={classes.stepHeading}>Get Results</h3>
                <p className={classes.stepText}>
                  Receive comprehensive information about your plant, including
                  species details, care instructions, and interesting facts. Add
                  it to your collection to track your botanical discoveries.
                </p>
              </div>
            </div>
          </div>

          <h2 className={classes.heading2}>Features</h2>
          <ul className={`${classes.listDisc} ${classes.paragraph}`}>
            <li>Instant plant identification using AI technology</li>
            <li>Detailed plant information and care instructions</li>
            <li>Personal plant collection management</li>
            <li>Community sharing and learning</li>
            <li>Regular updates with new plant species</li>
          </ul>

          <h2 className={classes.heading2}>Join Our Community</h2>
          <p className={classes.paragraph}>
            Become part of our growing community of plant enthusiasts. Share
            your discoveries, learn from others, and contribute to our
            collective knowledge of the plant world.
          </p>
          <div className={classes.gap4}>
            <button className={classes.btnPrimary}>Get Started</button>
            <button className={classes.btnOutline}>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
