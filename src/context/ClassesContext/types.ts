import { iCompletedClasses } from '../AuthContext/types';
import { iCourseList } from '../CoursesContext';

export interface iClassProps {
  title: string;
  classTime: string;
  link: string;
  id: number;
}

export interface iClassesProps {
  children: React.ReactNode;
}

export interface iClassesProvider {
  getUserCourse: (id: number) => void;
  getUserClass: (id: number) => void;
  calcRemaining: () => void;
  getVideoTime: (time: number) => void;
  getDuration: (time: number) => void;
  addCompletedClass: (data: Array<iCompletedClasses>) => Promise<void>;
  attCompletedClasses: (courseId: number, classId: number) => void;
  userCourse: iCourseList;
  currClass: iClassProps;
  duration: number;
  currTime: number;
  remaining: number;
  isCompleted: boolean;
  completedClasses: Array<iCompletedClasses>;
}
