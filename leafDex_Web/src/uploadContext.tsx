// uploadContext.tsx
import { createContext, useState, ReactNode } from 'react';

// How the context looks
interface UploadContextType {
    images: string[];
    addImage: (img: string) => void;
}

// Create4 instance of context
export const ImageContext = createContext<UploadContextType | undefined>(undefined);

//Allows access to context
export const ContextWrapper = ({ children }: { children: ReactNode }) => {
    //Holds images, implements interface UploadContextType
    const [images, addImages] = useState<string[]>([]);

    //Adds image to context, implements addImage from UploadContextType
    const addImage = (newImage: string) => {
        addImages((prevImages) => [...prevImages, newImage]);
    };

    return (
        <ImageContext.Provider value={{ images, addImage }}>
            {children}
        </ImageContext.Provider>
    );
};
