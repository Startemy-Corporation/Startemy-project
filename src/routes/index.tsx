import { Routes, Route } from 'react-router-dom';
import { ProtectedRoutes } from './ProtectedRoutes';

import { LoginPage } from '../pages/loginPage';
import { RegisterPage } from '../pages/registerPage';
import { HomePage } from '../pages/homePage';
import { NotFoundPage } from '../pages/notFoudPage';
import { ProfilePage } from '../pages/profilePage';
import { CoursesProvider } from '../context/CoursesContext';
import { CoursePageStyled } from '../pages/coursePage/styles';
import { ClassesPage } from '../pages/classesPage';
import { InfoCoursePage } from '../pages/InfoCoursePage';
import { CartPage } from '../pages/cart';
import { ClassesProvider } from '../context/ClassesContext';
import { PaymentPage } from '../pages/PaymentPage';
import { PaymentSuccess } from '../pages/PaymentPage/PaymentSuccess';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route
        path='/courses'
        element={
          <CoursesProvider>
            <CoursePageStyled />
          </CoursesProvider>
        }
      />
      <Route
        path='/courses/:category'
        element={
          <CoursesProvider>
            <CoursePageStyled />
          </CoursesProvider>
        }
      />
      <Route
        path='/courses/info/:idCourse'
        element={
          <CoursesProvider>
            <InfoCoursePage />
          </CoursesProvider>
        }
      />
      <Route element={<ProtectedRoutes />}>
        <Route
          path='/profile'
          element={
            <CoursesProvider>
              <ProfilePage />
            </CoursesProvider>
          }
        />
        <Route
          path='/cart'
          element={
            <CoursesProvider>
              <CartPage />
            </CoursesProvider>
          }
        />
        <Route
          path='/payment'
          element={
            <CoursesProvider>
              <PaymentPage />
            </CoursesProvider>
          }
        />

        <Route path='/payment/success' element={<PaymentSuccess />} />

        <Route
          path='/courses/:courseId/classes/:classId'
          element={
            <ClassesProvider>
              <ClassesPage></ClassesPage>
            </ClassesProvider>
          }
        />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};
