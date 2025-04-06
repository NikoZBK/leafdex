import { useContext } from 'react';
import { PlantContext } from '../context/PlantContextHelper';

export const usePlants = () => {
  const context = useContext(PlantContext);
  if (context === undefined) {
    throw new Error('usePlants must be used within a PlantProvider');
  }
  return context;
};
