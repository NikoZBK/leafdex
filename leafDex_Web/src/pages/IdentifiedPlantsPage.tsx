import React from 'react';
import Upload from '../upload';
import {ContextWrapper} from '../uploadContext';

const IdentifiedPlantsPage: React.FC = () => {
  return (
        <ContextWrapper>
          <Upload/>
        </ContextWrapper>
  );
};
export default IdentifiedPlantsPage;