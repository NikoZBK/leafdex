import { ChangeEvent, useContext } from 'react';
import { ImageContext, Plant } from './uploadContext';

// Daisy UI
const formClasses = {
    container:
        'min-h-screen w-full fixed top-0 left-0 flex items-center justify-center bg-base-300',
    card: 'card bg-base-200 backdrop-blur-sm w-full max-w-md p-8 mx-4',
    form: 'form-control w-full space-y-4',
    label: 'label-text text-base-content pb-2',
    input:
        'file-input file-input-bordered w-full bg-base-100 text-base-content focus:outline-primary',
    imagePreview: 'rounded-lg border border-base-300 shadow',
    title: 'text-2xl font-semibold text-base-content text-center mb-2',
    subtitle: 'text-base-content/70 text-center text-sm mb-6',
};

const processImage = (src: string, index: number): Plant => {
    const now = new Date().toLocaleString();
    return {
        id: index + 1,
        src: src,
        plantName: `Plant`,
        description: `Plant plant.`,
        timestamp: now
    };
};

const Upload = () => {

    const context = useContext(ImageContext);
    const { images, addImage } = context!;

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        // Get images
        const images = event.target.files;
        if (!images) return;

        //Read and save selected images
        Array.from(images).forEach((image) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (reader.result) {
                    const processed: Plant = processImage(reader.result as string, images.length);
                    addImage(processed);
                }
            };
            reader.readAsDataURL(image);
        });
    };

    //Return JSX
    return (
        <div className={formClasses.container}>
            <div className={formClasses.card}>
                <h2 className={formClasses.title}>Upload Your Plant Photos</h2>
                <p className={formClasses.subtitle}> 🌿🌿🌿🌿🌿🌿🌿</p>

                <div className={formClasses.form}>
                    <label className="label">
                        <span className={formClasses.label}>Select Images</span>
                    </label>
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileChange}
                        className={formClasses.input}
                    />
                </div>

                {images.length > 0 && (
                    <div className="mt-6">
                        <p className="font-medium text-base-content mb-4">
                            Uploaded Images:
                        </p>
                        <div className="flex flex-col gap-4">
                            {images.map((img) => (
                                <div
                                    key={img.id}
                                    className="card bg-base-100 shadow-md flex flex-row"
                                >
                                    <figure className="w-1/3">
                                        <img
                                            src={img.src}
                                            alt={img.plantName}
                                            className="object-cover h-full w-full rounded-l-lg"
                                        />
                                    </figure>
                                    <div className="card-body w-2/3 p-4">
                                        <h2 className="card-title">{img.plantName}</h2>
                                        <p>{img.description}</p>
                                        <p className="text-xs text-base-content/60 mt-2">
                                            Uploaded: {img.timestamp}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Upload;
