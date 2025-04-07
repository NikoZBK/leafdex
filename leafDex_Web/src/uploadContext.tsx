// uploadContext.tsx
import { createContext, useState, ReactNode } from 'react';

// How the context looks
interface ImageContextType {
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


// Create4 instance of context
export const ImageContext = createContext<ImageContextType | undefined>(undefined);

//Allows access to context
export const ContextWrapper = ({ children }: { children: ReactNode }) => {
    //Holds images, implements interface ImageContextType
    const [images, addImages] = useState<Plant[]>([]);

    //Adds image to context, implements addImage from ImageContextType
    const addImage = (newImage: Plant) => {
        addImages((prevImages) => [...prevImages, newImage]);
    };

    return (
        <ImageContext.Provider value={{ images, addImage }}>
            {children}
        </ImageContext.Provider>
    );
};
