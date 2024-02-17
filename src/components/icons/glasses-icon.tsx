import clsx from 'clsx';

type TGlassesIcon = {
  className?: string;
};

export const GlassesIcon = ({ className }: TGlassesIcon) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={clsx(
        'icon icon-tabler icon-tabler-stereo-glasses w-5 h-5',
        className
      )}
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
      <path d='M8 3h-2l-3 9' />
      <path d='M16 3h2l3 9' />
      <path d='M3 12v7a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707 -.293l2 -2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 0 .707 .293h4.586a1 1 0 0 0 1 -1v-7h-18z' />
      <path d='M7 16h1' />
      <path d='M16 16h1' />
    </svg>
  );
};
