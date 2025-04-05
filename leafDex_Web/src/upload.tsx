// upload.tsx
import { createContext, useContext, useState, ReactNode, ChangeEvent } from 'react';

// Types
interface UploadContextType {
    images: string[];
    addImage: (img: string) => void;
}

// Create context to hold images
const UploadImageContext = createContext<UploadContextType | undefined>(undefined);

//Add to context
export const useUpload = () => {
    const context = useContext(UploadImageContext);
    if (!context) throw new Error('useUpload must be used within UploadProvider');
    return context;
};

// Context
export const UploadedImagesContext = ({ children }: { children: ReactNode }) => {
    const [images, setImages] = useState<string[]>([]);

    const addImage = (img: string) => {
        setImages(prev => [...prev, img]);
    };

    return (
        <UploadImageContext.Provider value={{ images, addImage }}>
            {children}
        </UploadImageContext.Provider>
    );
};

// Upload component
const Upload = () => {
    const { images, addImage } = useUpload();

    //When files are put into upload form
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        Array.from(files).forEach(file => {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (reader.result) addImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        });
    };

    //Jsx
    return (
        <div className="upload-container">
            <input type="file" accept="image/*" multiple onChange={handleFileChange} />
            {images.length > 0 && (
                <div className="preview-list">
                    <p>Uploaded Images:</p>
                    <ul>
                        {images.map((img, index) => (
                            <li key={index}>
                                <img
                                    src={img}
                                    alt={`Uploaded ${index}`}
                                    style={{ maxWidth: '200px', margin: '10px 0' }}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Upload;
