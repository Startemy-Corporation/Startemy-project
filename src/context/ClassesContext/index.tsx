import { createContext, useContext, useState } from 'react';
import { api } from '../../services/api';
import { AuthContext } from '../AuthContext';
import { iCompletedClasses } from '../AuthContext/types';
import { iCourseList } from '../CoursesContext';
import { iClassesProps, iClassesProvider, iClassProps } from './types';

export const ClassesContext = createContext<iClassesProvider>(
  {} as iClassesProvider,
);

export const ClassesProvider = ({ children }: iClassesProps) => {
  const { userLog } = useContext(AuthContext);

  const [userCourse, setUserCourse] = useState({} as iCourseList);
  const [currClass, setCurrClass] = useState({} as iClassProps);
  const [currTime, setCurrTime] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [completedClasses, setCompletedClasses] = useState(
    userLog.completedClasses as Array<iCompletedClasses>,
  );

  const getUserCourse = (id: number) => {
    const filtered = userLog.purchasedCourses.find(
      (course) => Number(id) === course.id,
    );
    setUserCourse(filtered as iCourseList);
  };

  const getUserClass = (id: number) => {
    const filtered = userCourse?.classes?.find(
      (item) => Number(id) === item.id,
    );
    setCurrClass(filtered as iClassProps);
  };

  const getVideoTime = (time: number) => {
    setCurrTime(time);
  };

  const calcRemaining = () => {
    const calc = duration - currTime;
    setRemaining(calc);
  };

  const getDuration = (time: number) => {
    setDuration(time);
  };

  const attCompletedClasses = (courseId: number, classId: number) => {
    setCompletedClasses([
      ...completedClasses,
      { courseId: courseId, classId: classId },
    ]);
  };

  const addCompletedClass = async (data: iCompletedClasses[]) => {
    const body = {
      completedClasses: data,
    };
    setIsCompleted(false);
    const getToken = localStorage.getItem('@Startemy:token');
    const getId = localStorage.getItem('@Startemy:id');

    try {
      await api.patch(`/users/${getId}`, body, {
        headers: {
          authorization: `Bearer ${getToken}`,
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsCompleted(true);
    }
  };

  return (
    <ClassesContext.Provider
      value={{
        getUserCourse,
        getUserClass,
        calcRemaining,
        getDuration,
        getVideoTime,
        addCompletedClass,
        attCompletedClasses,
        userCourse,
        currClass,
        duration,
        currTime,
        remaining,
        isCompleted,
        completedClasses,
      }}
    >
      {children}
    </ClassesContext.Provider>
  );
};
