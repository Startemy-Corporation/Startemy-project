import { iCourseList } from '../CoursesContext';

export interface iData {
  email?: string;
  password?: string;
  name?: string;
  cpf?: string;
  educationLevel?: string;
  contact?: string;
  birthDate?: string;
  image?: string;
}

export interface iDataLogin {
  email: string;
  password: string;
}

export interface iCompletedClasses {
  courseId: number;
  classId: number;
}

export interface iObject {
  bithday?: string;
  contact?: string;
  cpf?: string;
  educationLevel?: string;
  email?: string;
  id?: number;
  name?: string;
  repeatPass?: string;
  password?: string;
  purchasedCourses: Array<iCourseList>;
  completedClasses: Array<iCompletedClasses>;
  favoriteCourses?: [];
  isAdmin?: boolean;
  image?: string;
  title?: string;
  description?: string;
  author?: string;
  category?: string;
  price?: number;
  ranking?: number;
  classes?: [];
  userId: number;
}

export interface iAuthTypes {
  userLogin(data: iData): void;
  userRegister(data: iData): void;
  userLogout(): void;
  disable: boolean;
  userLog: iObject;
  loading: boolean;
  cart: iCourseList[];
  setCart: React.Dispatch<string>;
  checkCart: (course: iCourseList) => void;
  inCart: boolean;
  addToCart: (course: iCourseList) => void;
  removeToCart: (course: iCourseList) => void;
  addInCart: (course: iCourseList) => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  editUser: (data: iObject) => void;
  checkout: () => void;
  updateCart: () => void;
  updateUserLog: () => void;
}

export interface iDefaultResponse {
  error: string;
  includes: (prop: string) => boolean;
}
