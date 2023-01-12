import { LiStyled } from './styles';
import imgDefault from '../../assets/bgDefaultCardCourses.svg';
import { CoursesContext, iCourseList } from '../../context/CoursesContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

interface iCardProp {
  coursesList: iCourseList[];
}

export const Card = ({ coursesList }: iCardProp) => {
  const { addChecked, getHoursClasses } = useContext(CoursesContext);

  return (
    <>
      {coursesList.map((elt: iCourseList) => (
        <LiStyled key={elt.id}>
          <div className='topDiv'>
            <img src={elt.image ? elt.image : imgDefault} alt={elt.title} />
            <small>{elt.category}</small>
            <span>
              {elt.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <div></div>
          </div>
          <div className='botDiv'>
            <h2>{elt.title}</h2>
            <div>
              <small>{Object.keys(elt.classes).length} Aulas</small>
              <small>{getHoursClasses(elt)}</small>
            </div>
            <Link
              to={`/courses/info/${elt.id}`}
              onClick={() => addChecked('Todos')}
            >
              Ver Curso
            </Link>
          </div>
        </LiStyled>
      ))}
    </>
  );
};
