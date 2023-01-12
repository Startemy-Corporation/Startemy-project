import { MouseEventHandler } from 'react';
import { iButtonStyles } from './styles';

interface iButtonProp extends iButtonStyles {
  children: React.ReactNode;
  type: 'submit' | 'reset' | 'button' | undefined;
  click?: MouseEventHandler<Element>;

  className?: string;
  focus?: boolean;
}

export const Button = ({
  type,
  children,
  click,
  className,
  disabled,
}: iButtonProp) => {
  return (
    <button
      onClick={click}
      type={type}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
};
