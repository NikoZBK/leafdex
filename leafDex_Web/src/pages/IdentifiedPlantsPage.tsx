import React from 'react';

const IdentifiedPlantsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary">My Plants</h1>
          <div className="flex gap-2">
            <button className="btn btn-primary">
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
        <div className="flex flex-wrap gap-4">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search plants..."
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <select className="select select-bordered w-full max-w-xs">
            <option value="">All Categories</option>
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
            <option value="succulent">Succulent</option>
          </select>
          <select className="select select-bordered w-full max-w-xs">
            <option value="">Sort By</option>
            <option value="date">Date Added</option>
            <option value="name">Name</option>
            <option value="category">Category</option>
          </select>
        </div>

        {/* Plants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Empty State */}
          <div className="col-span-full text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 text-base-content/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">No Plants Yet</h3>
            <p className="text-base-content/60 mb-4">
              Start by identifying your first plant!
            </p>
            <button className="btn btn-primary">Identify Plant</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentifiedPlantsPage;
