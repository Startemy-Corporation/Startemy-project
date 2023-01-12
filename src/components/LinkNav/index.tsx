import { StyledLink } from '../../styles/Link';

import book from '../../assets/imgs/book1.svg';

import loginCurve from '../../assets/imgs/logincurve.svg';
import profileIcon from '../../assets/imgs/user.svg';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Button } from '../Button';
import { LogoutCurve, ShoppingCart } from 'iconsax-react';
import { colors } from '../../styles/Colors';
import { StyledNav } from './styles';

interface iLinkNavProp {
  profile?: boolean;
  course?: boolean;
}

export const LinkNav = ({ course, profile }: iLinkNavProp) => {
  const { cart, userLog, userLogout, onOpen } = useContext(AuthContext);

  return (
    <StyledNav>
      {course == undefined ? (
        <StyledLink className='underlineLink ' to={'/courses'}>
          Cursos
          <img src={book} alt='book' />
        </StyledLink>
      ) : (
        ''
      )}
      {!userLog.isAdmin && (
        <Button type='button' click={onOpen} className='cartBtn'>
          Carrinho
          <figure>
            <ShoppingCart size={20} color={colors.colorSecondaryDark} />
            <small className='cartCounter'>{cart.length}</small>
          </figure>
        </Button>
      )}

      {!Object.keys(userLog).length ? (
        <>
          <StyledLink className='underlineLink' to={'/login'}>
            Login
            <img src={loginCurve} alt='loginCurve' />
          </StyledLink>

          <StyledLink className='createAccount' to={'/register'}>
            Criar Conta
          </StyledLink>
        </>
      ) : profile ? (
        <StyledLink className='underlineLink' to={'/profile'}>
          Perfil
          <img src={profileIcon} alt='profile' />
        </StyledLink>
      ) : (
        <Button click={userLogout} type='button' className='button-logout'>
          Sair
          <LogoutCurve size='24' color={`${colors.colorSecondaryDark}`} />
        </Button>
      )}
    </StyledNav>
  );
};
