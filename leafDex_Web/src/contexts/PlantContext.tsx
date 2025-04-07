import React, { useState, useCallback } from 'react';
import { Plant, PlantFormData } from '../types/plants';
import { PlantContext } from './PlantContextHelper';

/**
 * PlantProvider Component
 *
 * A context provider that manages plant data and related operations.
 *
 * Features:
 * - Maintains a list of plants
 * - Handles search functionality
 * - Provides methods to add and retrieve plants
 * - Tracks loading states and errors
 *
 * Use this provider to wrap components that need access to plant data.
 */
export const PlantProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Add a new plant to the list
  const addPlant = useCallback(async (plantData: PlantFormData) => {
    setIsLoading(true);
    try {
      const newPlant: Plant = {
        id: Date.now().toString(),
        ...plantData,
      };
      setPlants((prev) => [...prev, newPlant]);
    } catch (err) {
      setError(`Failed to add plant: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const collectPlant = useCallback(async (plantId: string) => {
    setIsLoading(true);
    try {
      console.log('Collecting plant:', plantId);
    } catch (err) {
      setError(`Failed to collect plant: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <PlantContext.Provider
      value={{
        plants,
        searchQuery,
        setSearchQuery,
        addPlant,
        collectPlant,
        isLoading,
        error,
      }}
    >
      {children}
    </PlantContext.Provider>
  );
};
