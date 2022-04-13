/* eslint-disable operator-linebreak, indent */
import React, { CSSProperties } from 'react';

export type ButtonProps = {
  type: 'primary' | 'secondary';
  clear?: boolean;
  label: string;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  id?: string;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  type,
  clear,
  className,
  style,
  onClick,
  id,
}) => {
  const basicCx =
    'flex-0 rounded-full w-auto sm:py-2 sm:px-10 py-2 px-4 font-second font-semibold focus:outline-none lg:text-lg md:text-lg text-sm';

  const primaryCx = `
    ${
      clear
        ? 'border-2 border-primary-green text-text-light'
        : 'bg-primary-green hover:bg-hover-green text-text-dark'
    }
  `;

  const secondaryCx = `
    hover:opacity-75
    ${
      clear
        ? 'border-2 border-primary-pink text-text-light'
        : 'bg-primary-pink hover:bg-hover-pink text-text-dark'
    }
  `;

  const cx = type === 'primary' ? primaryCx : secondaryCx;

  return (
    <button
      type="button"
      className={`${basicCx} ${cx} ${className}`}
      onClick={onClick}
      style={style}
      id={id}
    >
      {label}
    </button>
  );
};
