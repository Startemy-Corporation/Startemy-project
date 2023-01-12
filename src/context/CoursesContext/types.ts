import { iCourseList } from '.';
import { iNewData } from '../../pages/profilePage';
import { iClassProps } from '../ClassesContext/types';

export interface iCoursesProps {
  children: React.ReactNode;
}
export interface iCoursesProvider {
  addChecked: (string: string) => void;
  checked: string;
  filter: string | undefined;
  courseList: iCourseList[];
  filteredArray: iCourseList[];
  filterSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  idCourse: string | number | undefined;
  infoCourse: iCourseList;
  buttonDisabled: boolean;
  checkIsFavorite: () => void;
  isFavorite: string;
  getHoursClasses: (course: iCourseList) => string | undefined;
  createCourse(data: iNewData): void;
  classes: Array<iClassProps>;
  addCourseClasses: (data: iClassProps[]) => void;
  deleteCourse: () => void;
}
