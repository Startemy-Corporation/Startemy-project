import { StyledHeader } from './styles';

import logo from '../../assets/imgs/logo.svg';
import search from '../../assets/imgs/search.svg';

import { useContext } from 'react';
import { CoursesContext } from '../../context/CoursesContext';
import { HeaderPopover } from '../HeaderPopover';
import { LinkNav } from '../LinkNav';
import { Link } from 'react-router-dom';
import { DrawerCart } from '../DrawerCart';

export interface iHeader {
  page?: string;
  course?: boolean;
  profile?: boolean;
}

export const Header = ({ page, course, profile }: iHeader) => {
  const { filterSearch } = useContext(CoursesContext);

  return (
    <>
      <DrawerCart />
      <StyledHeader>
        <Link to={'/'}>
          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>
        </Link>
        {page && (
          <div className='search'>
            <input
              type='text'
              onChange={filterSearch}
              placeholder='Pesquisar...'
            />
            <img src={search} alt='search' />
          </div>
        )}

        <LinkNav profile={profile} course={course} />
        <HeaderPopover profile={profile} course={course} />
      </StyledHeader>
    </>
  );
};
