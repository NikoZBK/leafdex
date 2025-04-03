import React from 'react';
import PlantCard from './PlantCard';

interface Plant {
  id: string;
  name: string;
  scientificName?: string;
  imageUrl: string;
  status?: 'new' | 'rare' | 'common';
}

interface PlantListProps {
  plants: Plant[];
  onCollect?: (plantId: string) => void;
}

const PlantList: React.FC<PlantListProps> = ({ plants, onCollect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {plants.map(plant => (
        <PlantCard
          key={plant.id}
          name={plant.name}
          scientificName={plant.scientificName}
          imageUrl={plant.imageUrl}
          status={plant.status}
          onCollect={() => onCollect?.(plant.id)}
        />
      ))}
    </div>
  );
};

export default PlantList;
