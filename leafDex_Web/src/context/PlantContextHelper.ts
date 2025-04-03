import { createContext } from 'react';
import { PlantContextType } from '../types/plants';

export const PlantContext = createContext<PlantContextType | undefined>(
  undefined
);
