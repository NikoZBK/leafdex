import { createContext, useState, useEffect, ReactNode } from 'react';

interface ContextType {
  images: Plant[];
  addImage: (img: Plant) => void;
}

export interface Plant {
  id: number;
  src: string;
  plantName: string;
  description: string;
  timestamp: string;
}

// Initialize context
export const ImageContext = createContext<ContextType | undefined>(undefined);

// Access to context
export const ContextWrapper = ({ children }: { children: ReactNode }) => {
  // Implement images as per the interface
  const [images, addImages] = useState<Plant[]>(() => {
    const localImages = localStorage.getItem('uploaded');
    if (localImages) {
      return JSON.parse(localImages);
    } else {
      return [];
    }
  });

  //Save images when updated
  useEffect(() => {
    localStorage.setItem('uploaded', JSON.stringify(images));
  }, [images]);


  // Implement add image as per Interface
  const addImage = (newImage: Plant) => {
    addImages((prevImages) => [...prevImages, newImage]);
  };

  return (
      <ImageContext.Provider value={{ images, addImage }}>
        {children}
      </ImageContext.Provider>
  );
};
