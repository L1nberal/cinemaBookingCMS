import clsx from 'clsx';

type TMovieIcon = {
  className?: string;
};

export const MovieIcon = ({ className }: TMovieIcon) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={clsx('icon icon-tabler icon-tabler-movie w-5 h-5', className)}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' />
      <path d='M8 4l0 16' />
      <path d='M16 4l0 16' />
      <path d='M4 8l4 0' />
      <path d='M4 16l4 0' />
      <path d='M4 12l16 0' />
      <path d='M16 8l4 0' />
      <path d='M16 16l4 0' />
    </svg>
  );
};
