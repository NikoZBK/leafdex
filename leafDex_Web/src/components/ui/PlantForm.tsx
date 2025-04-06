import React from 'react';

interface PlantFormProps {
  initialData?: {
    name: string;
    scientificName: string;
    description: string;
    imageUrl: string;
  };
  onSubmit: (data: {
    name: string;
    scientificName: string;
    description: string;
    imageUrl: string;
  }) => void;
  onCancel: () => void;
}

const PlantForm: React.FC<PlantFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = React.useState({
    name: initialData?.name || '',
    scientificName: initialData?.scientificName || '',
    description: initialData?.description || '',
    imageUrl: initialData?.imageUrl || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Plant Name</span>
        </label>
        <input
          type="text"
          className="input input-bordered"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Scientific Name</span>
        </label>
        <input
          type="text"
          className="input input-bordered"
          value={formData.scientificName}
          onChange={e =>
            setFormData({ ...formData, scientificName: e.target.value })
          }
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          value={formData.description}
          onChange={e =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Image URL</span>
        </label>
        <input
          type="url"
          className="input input-bordered"
          value={formData.imageUrl}
          onChange={e => setFormData({ ...formData, imageUrl: e.target.value })}
        />
      </div>

      <div className="flex justify-end space-x-2">
        <button type="button" className="btn btn-ghost" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          {initialData ? 'Update' : 'Add'} Plant
        </button>
      </div>
    </form>
  );
};

export default PlantForm;
