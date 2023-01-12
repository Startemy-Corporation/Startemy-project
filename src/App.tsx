import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/AuthContext';
import { GlobalStyles } from './styles/GlobalStyles';
import { RoutesMain as Routes } from './routes';
import { ResetStyles } from './styles/ResetStyles';
import { ChakraProvider } from '@chakra-ui/react';
import 'react-toastify/dist/ReactToastify.min.css';

export const App = () => {
  return (
    <>
      <AuthProvider>
        <ChakraProvider>
          <GlobalStyles />
          <ResetStyles />
          <Routes />
          <ToastContainer position='bottom-right' />
        </ChakraProvider>
      </AuthProvider>
    </>
  );
};
