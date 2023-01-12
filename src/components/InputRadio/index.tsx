import { HStack } from '@chakra-ui/react';
import { useContext } from 'react';

import { Link } from 'react-router-dom';
import { CoursesContext } from '../../context/CoursesContext';
import { colors } from '../../styles/Colors';
import { StyledSection } from './styles';

export const InputRadio = () => {
  const { filter } = useContext(CoursesContext);
  const options = [
    {
      label: 'Todos',
      value: '',
    },
    {
      label: 'React',
      value: 'React',
    },
    {
      label: 'Typescript',
      value: 'Typescript',
    },
    {
      label: 'Figma',
      value: 'Figma',
    },
    {
      label: 'HTML',
      value: 'HTML',
    },
    {
      label: 'Javascript',
      value: 'Javascript',
    },
  ];

  return (
    <>
      <StyledSection>
        <HStack>
          {options.map((option) => {
            return (
              <Link
                style={{
                  backgroundColor:
                    filter == option.label || filter == undefined
                      ? colors.colorSecondaryDark
                      : colors.gray0,
                  color:
                    filter == option.label || filter == undefined
                      ? 'white'
                      : colors.colorSecondaryDark,
                  border:
                    filter == option.label || filter == undefined
                      ? colors.colorSecondaryDark
                      : colors.gray0,
                }}
                key={option.value}
                to={`/courses/${option.value}`}
              >
                {option.label}
              </Link>
            );
          })}
        </HStack>
      </StyledSection>
    </>
  );
};
