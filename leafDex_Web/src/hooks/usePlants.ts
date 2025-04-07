import { useContext } from 'react';
import { PlantContext } from '../contexts/PlantContextHelper';

export const usePlants = () => {
  const context = useContext(PlantContext);
  if (context === undefined) {
    throw new Error('usePlants must be used within a PlantProvider');
  }
  return context;
};
