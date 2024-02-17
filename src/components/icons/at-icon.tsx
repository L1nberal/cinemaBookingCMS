import clsx from 'clsx';

type TAtIcon = {
  className?: string;
};

export const AtIcon = ({ className }: TAtIcon) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={clsx('icon icon-tabler icon-tabler-at', className)}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='#000000'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0' />
      <path d='M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28' />
    </svg>
  );
};
