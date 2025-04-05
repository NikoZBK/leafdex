import React from 'react';
import { classes } from '../styles/classes';

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
            plant identification accessible and fun.
          </p>

          <h2 className={classes.heading2}>Our Mission</h2>
          <p className={classes.paragraph}>
            We believe that everyone should have the ability to connect with
            nature and understand the plants that surround them. Our mission is
            to make plant identification accessible, educational, and engaging
            for everyone.
          </p>

          <h2 className={classes.heading2}>How It Works</h2>
          <div className={`${classes.grid3} mb-8`}>
            <div className={classes.card}>
              <div className={classes.cardBody}>
                <h3 className={classes.heading3}>1. Take a Photo</h3>
                <p>
                  Capture a clear photo of the plant you want to identify using
                  your device's camera.
                </p>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardBody}>
                <h3 className={classes.heading3}>2. AI Analysis</h3>
                <p>
                  Our advanced AI technology analyzes your photo to identify the
                  plant species.
                </p>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardBody}>
                <h3 className={classes.heading3}>3. Get Results</h3>
                <p>
                  Receive detailed information about the plant, including care
                  instructions and fun facts.
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
