export type PlantStatus = 'new' | 'rare' | 'common';

export interface Plant {
  id: string;
  name: string;
  scientificName?: string;
  imageUrl: string;
  status?: PlantStatus;
  description?: string;
}

export interface PlantFormData {
  name: string;
  scientificName: string;
  description: string;
  imageUrl: string;
}

export interface PlantContextType {
  plants: Plant[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  addPlant: (plant: PlantFormData) => Promise<void>;
  collectPlant: (plantId: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}
