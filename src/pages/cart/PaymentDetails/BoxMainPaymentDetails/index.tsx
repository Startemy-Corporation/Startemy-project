import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import { TabCards } from '../../../../components/Tab/styles';
import {
  CoursesContext,
  iCourseList,
} from '../../../../context/CoursesContext';
import { StyledOtherCourses, StyledUlSelectedProducts } from './styles';
import imgDefault from '../../../../assets/bgDefaultCardCourses.svg';
import { AuthContext } from '../../../../context/AuthContext';
import { Link } from 'react-router-dom';
import { Badge } from '@chakra-ui/react';

export const BoxPaymentPage = () => {
  const { courseList, idCourse, getHoursClasses } = useContext(CoursesContext);
  const { cart, removeToCart } = useContext(AuthContext);

  return (
    <>
      <section>
        <h2>Carrinho de compras</h2>
        <p>{cart.length} curso no carrinho</p>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StyledUlSelectedProducts>
            {cart.map((ele: iCourseList, index: number) => {
              return (
                <li key={index}>
                  <figure>
                    <img src={ele.image} alt={ele.title} />
                  </figure>
                  <div className='divInfo1'>
                    <h3>{ele.title}</h3>
                    <Badge>{ele.category.toUpperCase()}</Badge>
                    <div>
                      <span>
                        {ele.classes.length} aulas • {getHoursClasses(ele)}{' '}
                        horas
                      </span>
                    </div>
                  </div>
                  <div className='divInfo2'>
                    <h3>R${ele.price.toFixed(2)}</h3>
                    <button onClick={() => removeToCart(ele)}>Remover</button>
                  </div>
                </li>
              );
            })}
          </StyledUlSelectedProducts>
        </motion.div>
      </section>

      <StyledOtherCourses>
        <h3>Veja também</h3>
        <motion.ul className='tabList'>
          {courseList.map((course: iCourseList) =>
            course.id != idCourse ? (
              <AnimatePresence key={course.title}>
                <motion.li
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  <TabCards>
                    <Link to={`/courses/info/${course.id}`}>
                      <div className='topDiv'>
                        <img
                          src={course.image ? course.image : imgDefault}
                          alt={course.title}
                        />
                        <small>{course.category}</small>
                      </div>
                      <div className='botDiv'>
                        <small>{course.title}</small>
                      </div>
                    </Link>
                  </TabCards>
                </motion.li>
              </AnimatePresence>
            ) : null,
          )}
        </motion.ul>
      </StyledOtherCourses>
    </>
  );
};
