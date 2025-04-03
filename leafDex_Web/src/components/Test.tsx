/**
 * Test.tsx
 *
 * This component demonstrates the usage of various UI components.
 * Feel free to modify the code to test different components.
 * By default, it includes sample plant data and handlers for search and collect functionality.
 * This component is primarily used for testing and demonstration purposes.
 */

import React, { useState } from 'react';
import PlantCard from './ui/PlantCard';
import SearchBar from './ui/SearchBar';
import PlantForm from './ui/PlantForm';
import PlantList from './ui/PlantList';
import { usePlants } from '../hooks/usePlants';

const Test: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const {
    plants,
    searchQuery,
    setSearchQuery,
    addPlant,
    collectPlant,
    isLoading,
    error,
  } = usePlants();

  const handleSearch = () => {
    // Search logic will be handled by the context
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold mb-6">UI Components Test</h1>

      {error && (
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      )}

      {/* SearchBar Test */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">SearchBar</h2>
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onSearch={handleSearch}
        />
      </section>

      {/* PlantCard Test */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">PlantCard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {plants.length > 0 && (
            <PlantCard
              {...plants[0]}
              onCollect={() => collectPlant(plants[0].id)}
            />
          )}
        </div>
      </section>

      {/* PlantList Test */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">PlantList</h2>
        {isLoading ? (
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <PlantList plants={plants} onCollect={collectPlant} />
        )}
      </section>

      {/* PlantForm Test */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">PlantForm</h2>
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Hide Form' : 'Show Form'}
        </button>
        {showForm && (
          <div className="max-w-md">
            <PlantForm
              onSubmit={addPlant}
              onCancel={() => setShowForm(false)}
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default Test;
