import {
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  extendTheme,
  Box,
} from '@chakra-ui/react';
import {
  Call,
  DirectboxNotif,
  DocumentText1,
  DollarSquare,
  Edit2,
  Eye,
  EyeSlash,
  Image,
  ReceiptText,
  Star1,
  Text,
} from 'iconsax-react';
import { useState } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import { colors } from '../../styles/Colors';
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
  type: 'text' | 'email' | 'password' | 'date' | 'tel' | 'number';
  register?: UseFormRegisterReturn;
  id?: string;
  error?: FieldError;
  inputIcon?: string;

  keyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  maxlength?: number;
  value?: string;
  defaultValue?: string;
}

export const InputForm = ({
  label,
  type,
  register,
  id,
  error,
  inputIcon,
  keyUp,
  maxlength,
  value,
  defaultValue,
}: iInputForm) => {
  const [isPass, setIsPass] = useState(true);

  const togglePassword = () => {
    setIsPass(!isPass);
  };

  const renderSwitch = (inputIcon?: string) => {
    switch (inputIcon) {
      case 'name':
        return (
          <DocumentText1 size='18' color={`${colors.colorSecondaryDark}`} />
        );
      case 'email':
        return (
          <DirectboxNotif size='18' color={`${colors.colorSecondaryDark}`} />
        );
      case 'password':
        return isPass ? (
          <Eye
            size='18'
            onClick={togglePassword}
            color={`${colors.colorSecondaryDark}`}
          />
        ) : (
          <EyeSlash
            size='18'
            onClick={togglePassword}
            color={`${colors.colorSecondaryDark}`}
          />
        );
      case 'cpf':
        return <Edit2 size='18' color={`${colors.colorSecondaryDark}`} />;
      case 'contact':
        return <Call size='18' color={`${colors.colorSecondaryDark}`} />;
      case 'title':
        return <Text size='18' color={`${colors.colorSecondaryDark}`} />;
      case 'description':
        return <ReceiptText size='18' color={`${colors.colorSecondaryDark}`} />;
      case 'img':
        return <Image size='18' color={`${colors.colorSecondaryDark}`} />;
      case 'preco':
        return (
          <DollarSquare size='18' color={`${colors.colorSecondaryDark}`} />
        );
      case 'ranking':
        return <Star1 size='18' color={`${colors.colorSecondaryDark}`} />;

      default:
        return;
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box p={0}>
        <FormControl
          id={id}
          variant='floating'
          isRequired
          isInvalid={error ? true : false}
        >
          <Input
            {...register}
            focusBorderColor={colors.colorSecondaryDark}
            placeholder=' '
            type={isPass ? type : 'text'}
            defaultValue={defaultValue}
            onKeyUp={keyUp}
            autoComplete='off'
            value={value}
            maxLength={maxlength}
          />

          <FormLabel>{label}</FormLabel>
          {renderSwitch(inputIcon)}
          {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
      </Box>
    </ChakraProvider>
  );
};
