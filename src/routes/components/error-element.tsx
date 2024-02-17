import { Button, Image } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import { urls } from '../urls';
import errorImage from '../../assets/404.png';

export const ErrorElement = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center'>
      <Image className='!w-[700px]' src={errorImage} />
      <Button
        variant='outline'
        color='yellow'
        onClick={() => navigate(urls.home)}
      >
        Home
      </Button>
    </div>
  );
};
