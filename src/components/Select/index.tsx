import {
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  extendTheme,
  Box,
  Select,
} from '@chakra-ui/react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { colors } from '../../styles/Colors';
import { DivFLex } from './style';
const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
};
export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              backgroundColor: `${colors.gray0}`,
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top',
            },
          },
        },
      },
    },
  },
});
interface iInputForm {
  label?: string;
  register: UseFormRegisterReturn;
  id?: string;
  error?: FieldError;
  children: React.ReactNode;
  defaultValue?: string;
}

export const SelectForm = ({
  label,
  register,
  id,
  error,
  children,
  defaultValue,
}: iInputForm) => {
  return (
    <ChakraProvider theme={theme}>
      <Box p={0}>
        <DivFLex>
          <FormControl
            id={id}
            variant='floating'
            isRequired
            isInvalid={error ? true : false}
          >
            <Select
              {...register}
              defaultValue={defaultValue}
              focusBorderColor={colors.colorSecondaryDark}
              // style={{ backgroundColor: `${colors.gray0}` }}
            >
              {children}
            </Select>
            <FormLabel>{label}</FormLabel>
            {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
          </FormControl>
        </DivFLex>
      </Box>
    </ChakraProvider>
  );
};
