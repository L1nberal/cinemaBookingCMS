import { Image } from '@mantine/core';
import underConstructionImage from '../../assets/underconstruction.png';

export const UnderContruction = () => {
  return (
    <div className='flex justify-center'>
      <Image className='!w-[600px]' src={underConstructionImage} />
    </div>
  );
};
