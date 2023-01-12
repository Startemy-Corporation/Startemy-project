import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, ReactElement, useContext } from 'react';
import { TabCards, TabContainer } from './styles';
import { Book1, Heart, Icon } from 'iconsax-react';
import imgDefault from '../../assets/bgDefaultCardCourses.svg';
import { AuthContext } from '../../context/AuthContext';
import { iCourseList } from '../../context/CoursesContext';
import { Link } from 'react-router-dom';

interface iTabProps {
  icon: Array<ReactElement<Icon>>;
  title: string;
  array?: Array<iCourseList>;
  id: number;
}

const parent = {
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const TabComponent = () => {
  const { userLog } = useContext(AuthContext);

  const tabs: Array<iTabProps> = [
    {
      icon: [
        <Book1 key={1} size='16' />,
        <Book1 key={2} size='16' variant='Bold' />,
      ],
      title: 'Meus Cursos',
      array: userLog.purchasedCourses,
      id: 1,
    },
    {
      icon: [
        <Heart key={1} size='16' />,
        <Heart key={2} size='16' variant='Bold' />,
      ],
      title: 'Lista de Desejos',
      array: userLog.favoriteCourses,
      id: 2,
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <TabContainer>
      <nav>
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={tab === activeTab ? 'selected' : ''}
              onClick={() => setActiveTab(tab)}
            >
              <label>
                {tab.id === activeTab.id ? tab.icon[1] : tab.icon[0]}{' '}
                {tab.title}
              </label>
              {tab.id === activeTab.id ? (
                <motion.div className='underline' layoutId='underline' />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <section>
        <motion.ul variants={parent} className='tabList'>
          {activeTab
            ? activeTab.array?.map((course) => (
                <AnimatePresence key={course.title}>
                  <motion.li
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link to={`/courses/info/${course.id}`}>
                      <TabCards>
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
                      </TabCards>
                    </Link>
                  </motion.li>
                </AnimatePresence>
              ))
            : 'empty'}
        </motion.ul>
      </section>
    </TabContainer>
  );
};
