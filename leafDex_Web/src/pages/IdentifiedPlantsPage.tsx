import React from 'react';
import { classes } from '../styles/classes';
import Upload from '../upload';
import { ImageContext } from '../uploadContext';

const IdentifiedPlantsPage: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.maxWidth}>
        <div className={classes.spaceY6}>
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <h1 className={classes.heading1}>My Plants</h1>
            <div className={classes.gap4}>
              <button className={classes.btnPrimary}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Add Plant
              </button>
            </div>
          </div>

          {/* Filters Section */}
          <div className={classes.flexCenter}>
            <div className={classes.formControl}>
              <input
                type="text"
                placeholder="Search plants..."
                className={classes.input}
              />
            </div>
            <select className={classes.input}>
              <option value="">All Categories</option>
              <option value="indoor">Indoor</option>
              <option value="outdoor">Outdoor</option>
              <option value="succulent">Succulent</option>
            </select>
            <select className={classes.input}>
              <option value="">Sort By</option>
              <option value="date">Date Added</option>
              <option value="name">Name</option>
              <option value="category">Category</option>
            </select>
          </div>

          {/* Plants Grid */}
          {/* Use upload component and context*/}
          <ImageContext.Provider value={{ images: [], addImage: () => {} }}>
            <Upload />
          </ImageContext.Provider>
        </div>
      </div>
    </div>
  );
};
export default IdentifiedPlantsPage;
