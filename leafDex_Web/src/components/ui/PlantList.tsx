import React from 'react';
import { classes } from '../../styles/classes';
import PlantCard from './PlantCard';

interface Plant {
  id: string;
  name: string;
  scientificName?: string;
  imageUrl: string;
  status?: string;
}

interface PlantListProps {
  plants: Plant[];
  onCollect?: (id: string) => void;
}

const PlantList: React.FC<PlantListProps> = ({ plants, onCollect }) => {
  return (
    <div className={classes.grid3}>
      {plants.map((plant) => (
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
