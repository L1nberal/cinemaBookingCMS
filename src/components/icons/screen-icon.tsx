import clsx from 'clsx';

type TScreenIcon = {
  className?: string;
};

export const ScreenIcon = ({ className }: TScreenIcon) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={clsx(
        'icon icon-tabler icon-tabler-device-desktop-analytics w-5 h-5',
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
      <path d='M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z' />
      <path d='M7 20h10' />
      <path d='M9 16v4' />
      <path d='M15 16v4' />
      <path d='M9 12v-4' />
      <path d='M12 12v-1' />
      <path d='M15 12v-2' />
      <path d='M12 12v-1' />
    </svg>
  );
};
