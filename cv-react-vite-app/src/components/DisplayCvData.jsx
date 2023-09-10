import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { fetchCvDataById } from './CvApi';
import HeaderById from './HeaderById';
import CombinedById from './CombinedById';

export const DisplayCvData = () => {


  return (
<div>
<HeaderById />
<CombinedById />
</div>
    
  );
}

export default DisplayCvData;

