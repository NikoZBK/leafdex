import React from 'react';
import { classes } from '../../styles/classes';

interface PlantCardProps {
  name: string;
  scientificName?: string;
  imageUrl: string;
  status?: string;
  onCollect: () => void;
}

const PlantCard: React.FC<PlantCardProps> = ({
  name,
  scientificName,
  imageUrl,
  status,
  onCollect,
}) => {
  return (
    <div className={classes.card}>
      <figure className="px-4 pt-4">
        <img
          src={imageUrl}
          alt={name}
          className="rounded-xl h-48 w-full object-cover"
        />
      </figure>
      <div className={classes.cardBody}>
        <h2 className={classes.cardTitle}>{name}</h2>
        {scientificName && (
          <p className="text-sm text-base-content/70">{scientificName}</p>
        )}
        {status && (
          <div className="badge badge-primary">
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </div>
        )}
        <div className="card-actions justify-end mt-4">
          <button className={classes.btnPrimary} onClick={onCollect}>
            Collect
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
