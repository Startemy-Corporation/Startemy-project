import { useDisclosure } from '@chakra-ui/hooks';
import { AxiosError } from 'axios';
import { createContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import { iCourseList } from '../CoursesContext';
import { iAuthTypes, iData, iDefaultResponse, iObject } from './types';

interface iAuthProvider {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as iAuthTypes);

export const AuthProvider = ({ children }: iAuthProvider) => {
  const [disable, setDisable] = useState(false);

  const [userLog, setUserLog] = useState({} as iObject);

  const [loading, setLoading] = useState(true);

  const [inCart, setInCart] = useState(true);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('@Startemy:cart') as string) || [],
  );

  const navigate = useNavigate();

  const userLogin = async (data: iData) => {
    setDisable(true);
    try {
      const resp = await api.post('/login', data);

      setUserLog(resp.data.user);

      localStorage.setItem('@Startemy:token', resp.data.accessToken);
      localStorage.setItem('@Startemy:id', resp.data.user.id);

      toast.success(`Seja bem vindo ${resp.data.user.name}!`);

      navigate('/');
    } catch (error) {
      setDisable(false);
      toast.error('Ops, algo deu errado!');
      console.error(error);
    } finally {
      setDisable(false);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const getIdUser = localStorage.getItem('@Startemy:id');

      if (!getIdUser) {
        setLoading(false);
        return <Navigate to='/login' replace={true} />;
      }

      if (getIdUser) {
        try {
          const { data } = await api.get(
            `/users/${localStorage.getItem('@Startemy:id')}`,
          );

          setUserLog(data);
          setLoading(false);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    };
    getUser();
  }, []);

  const userRegister = async (data: iData) => {
    setDisable(true);
    try {
      await api.post('/register', data);
      toast.success('Usuário cadastrado!');
      navigate('/login');
    } catch (error) {
      setDisable(false);
      toast.error('Ops, algo deu errado!');
      console.error(error);
    } finally {
      setDisable(false);
    }
  };

  const editUser = async (data: iObject) => {
    setDisable(true);

    const newData = { ...data, isAdmin: userLog.isAdmin };

    const getToken = localStorage.getItem('@Startemy:token');
    const getId = localStorage.getItem('@Startemy:id');

    try {
      const response = await api.patch(`/users/${getId}`, newData, {
        headers: {
          authorization: `Bearer ${getToken}`,
        },
      });

      toast.success('Editado com suceso!');
      setUserLog(response.data);

      setDisable(false);
    } catch (error) {
      console.error(error);
    } finally {
      setDisable(false);
    }
  };

  const userLogout = async () => {
    navigate('/');
    toast.success('Deslogado com sucesso!');
    setUserLog({} as iObject);
    localStorage.clear();
  };

  const addToCart = (course: iCourseList) => {
    if (!cart.some((elt: iCourseList) => elt.id === course.id)) {
      localStorage.setItem('@Startemy:cart', JSON.stringify([...cart, course]));
    }
  };
  const removeToCart = (course: iCourseList) => {
    if (cart.some((elt: iCourseList) => elt.id === course.id)) {
      const newCart = cart.filter((elt: iCourseList) => elt.id !== course.id);
      localStorage.setItem('@Startemy:cart', JSON.stringify(newCart));
      setCart(newCart);
    }
  };

  const checkCart = (course: iCourseList) => {
    if (!cart.some((elt: iCourseList) => elt.id === course.id)) {
      addToCart(course);
      updateCart();
      setInCart(false);
    } else {
      removeToCart(course);
      updateCart();
      setInCart(true);
    }
  };

  const addInCart = (course: iCourseList) => {
    if (!cart.some((elt: iCourseList) => elt.id === course.id)) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  };

  const checkout = async () => {
    const listPurchased = userLog.purchasedCourses;

    const newListPurchased = {
      purchasedCourses: [...(listPurchased as []), ...cart],
    };

    try {
      await api.patch(
        `users/${localStorage.getItem('@Startemy:id')}`,
        newListPurchased,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('@Startemy:token')}`,
          },
        },
      );

      localStorage.removeItem('@Startemy:cart');
      updateCart();
      updateUserLog();
      toast.success('Compra efetuada com sucesso!');
      navigate('/payment/success');
    } catch (err) {
      const { response } = err as AxiosError<iDefaultResponse>;
      if (response?.data.includes('id') || response?.data.includes('jwt')) {
        toast.error('Você precisa estar logado para comprar');
        navigate('/login');
      }
    }
  };

  const updateCart = () => {
    setCart(JSON.parse(localStorage.getItem('@Startemy:cart') as string) || []);
  };

  const updateUserLog = async () => {
    try {
      const { data } = await api.get(
        `/users/${localStorage.getItem('@Startemy:id')}`,
      );

      setUserLog(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userLogin,
        userRegister,
        userLogout,
        disable,
        userLog,
        loading,
        cart,
        setCart,
        checkCart,
        inCart,
        addToCart,
        removeToCart,
        addInCart,
        isOpen,
        onOpen,
        onClose,
        editUser,
        checkout,
        updateCart,
        updateUserLog,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
