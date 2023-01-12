import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export const ProtectedRoutes = () => {
  const { userLog, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <Box padding='30' bg='white'>
        <SkeletonCircle size='10' />
        <SkeletonText mt='20' noOfLines={4} spacing='8' skeletonHeight='5' />
      </Box>
    );
  }

  return Object.keys(userLog).length ? <Outlet /> : <Navigate to='/login' />;
};
