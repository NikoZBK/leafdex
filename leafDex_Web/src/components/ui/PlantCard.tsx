import React from 'react';
import { Plant } from '../../types/plants';

interface PlantCardProps extends Omit<Plant, 'id'> {
  onCollect?: () => void;
}

const PlantCard: React.FC<PlantCardProps> = ({
  name,
  scientificName,
  imageUrl,
  status,
  onCollect,
}) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-4 pt-4">
        <img
          src={imageUrl}
          alt={name}
          className="rounded-xl h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        {scientificName && (
          <p className="text-sm text-base-content/70">{scientificName}</p>
        )}
        {status && (
          <div className="badge badge-primary">
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </div>
        )}
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary" onClick={onCollect}>
            Collect
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
