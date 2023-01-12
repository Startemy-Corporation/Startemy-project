import React from 'react';
import { UlStyled } from './styles';
interface iListProps {
  children: React.ReactNode;
}

export const List = ({ children }: iListProps) => {
  return <UlStyled>{children}</UlStyled>;
};
