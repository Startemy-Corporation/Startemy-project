import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { api } from '../../services/api';

import 'react-toastify/dist/ReactToastify.css';
import { Params } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { iClassProps } from '../ClassesContext/types';
import { iNewData } from '../../pages/profilePage';
import { iCoursesProps, iCoursesProvider } from './types';
export interface iCourseList {
  classes: Array<iClassProps>;
  author: string;
  category: string;
  description: string;
  id: number;
  image: string;
  numberClasses: number | string;
  price: number;
  ranking: number;
  title: string;
  userId: number;
}

export const CoursesContext = createContext<iCoursesProvider>(
  {} as iCoursesProvider,
);

export const CoursesProvider = ({ children }: iCoursesProps) => {
  const { userLog, updateUserLog } = useContext(AuthContext);

  const { idCourse } = useParams();

  const { category }: Readonly<Params<string>> = useParams();

  const [courseList, setCourseList] = useState<iCourseList[]>(
    [] as iCourseList[],
  );

  const [search, setSearch] = useState('todos');

  const [checked, setChecked] = useState('Todos');

  const [infoCourse, setInfoCourse] = useState({} as iCourseList);

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [isFavorite, setIsFavorite] = useState('');

  const [loading, setLoading] = useState(false);

  const [filter, setFilter] = useState(category ? category : '' || undefined);

  const [classes, setClasses] = useState([] as Array<iClassProps>);

  const navigate = useNavigate();

  useEffect(() => {
    if (loading === true) setClasses(infoCourse.classes);
  }, [loading]);

  useEffect(() => {
    getCourses();
    const getCousesById = async () => {
      try {
        const { data } = await api.get(`/courses/${idCourse}`);

        setInfoCourse(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(true);
      }
    };

    if (idCourse) {
      getCousesById();
    }

    if (!idCourse) {
      setInfoCourse({} as iCourseList);
    }
  }, [idCourse]);

  useEffect(() => {
    const haveFavorite = () => {
      if (
        userLog.favoriteCourses?.some(
          (elt: iCourseList) => elt.id === infoCourse.id,
        )
      ) {
        setIsFavorite('favorited');
      } else {
        setIsFavorite('');
      }
    };
    if (Object.keys(infoCourse).length) {
      haveFavorite();
    }
  }, [infoCourse]);

  const checkIsFavorite = async () => {
    if (!localStorage.getItem('@Startemy:token')) {
      toast.error('Você precisa estar logado para favoritar');
      setButtonDisabled(true);
      return;
    }

    const listFavorites = userLog.favoriteCourses;

    if (isFavorite) {
      const newListFavorites: iCourseList[] | undefined = listFavorites?.filter(
        (elt: iCourseList) => elt.id !== infoCourse.id,
      );

      const body = {
        favoriteCourses: newListFavorites,
      };

      setFavoriteUser(body);
    } else {
      const body = {
        favoriteCourses: [infoCourse, ...(listFavorites as [])],
      };

      setFavoriteUser(body);
    }
  };

  const setFavoriteUser = async (body: {
    favoriteCourses: iCourseList[] | undefined;
  }) => {
    setButtonDisabled(true);
    try {
      await api.patch(`/users/${localStorage.getItem('@Startemy:id')}`, body, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('@Startemy:token')}`,
        },
      });

      updateUserLog();
      isFavorite ? setIsFavorite('') : setIsFavorite('favorited');
    } catch (error) {
      console.error(error);
    } finally {
      setButtonDisabled(false);
    }
  };

  useEffect(() => {
    setFilter(category);
  }, [category]);

  useEffect(() => {
    getCourses();
  }, [filter]);

  const getCourses = async () => {
    try {
      const { data } = await api.get(
        filter ? `/courses?category=${filter}` : '/courses',
      );

      setCourseList(data);
    } catch (error) {
      console.error(error);
    }
  };

  const addChecked = (string: string) => {
    setChecked(string);
  };

  //  search
  const filterSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(!event.target.value.trim() ? 'todos' : event.target.value);
  };

  const filteredArray = courseList.filter((item) => {
    return search.toLocaleLowerCase() === 'todos'
      ? true
      : item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.category.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase()) ||
          item.author.toLowerCase().includes(search.toLowerCase());
  });

  const getHoursClasses = (course = infoCourse) => {
    const time = course.classes.map((elt) =>
      elt.classTime.replace(/[^0-9]/g, ''),
    );

    const minutes = time.reduce(
      (acc: number, cur) => acc + Number(cur.substring(0, 2)),
      0,
    );

    const seconds = time.reduce(
      (acc: number, cur) => acc + Number(cur.substring(2, 4)),
      0,
    );

    const hours = time.reduce(
      (acc: number, cur) =>
        time.length === 5
          ? acc + Number(cur.substring(0, 1))
          : time.length === 6
          ? acc + Number(cur.substring(0, 2))
          : 0,
      0,
    );

    const convertHours = ((hours * 60 + minutes * 60 + seconds) / 3.6).toFixed(
      0,
    );

    if (convertHours.length === 3) {
      return `00:${(+convertHours * 60).toString().substring(0, 2)}m`;
    } else if (convertHours.length === 4) {
      const hrs = convertHours.substring(0, 1);
      const min = (Number(convertHours.substring(1)) * 60)
        .toString()
        .substring(0, 2);
      return `${hrs}:${min}h`;
    }
  };

  const createCourse = async (body: iNewData) => {
    try {
      const response = await api.post('/courses/', body, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('@Startemy:token')}`,
        },
      });

      toast.success('Curso adicionado com sucesso!');
      setCourseList([...courseList, response.data]);
    } catch (error) {
      console.error(error);
      toast.error('Oops algo deu errado!');
    }
  };

  const addCourseClasses = async (data: iClassProps[]) => {
    const body = {
      classes: data,
    };
    const getToken = localStorage.getItem('@Startemy:token');

    try {
      await api.patch(`/courses/${idCourse}`, body, {
        headers: {
          authorization: `Bearer ${getToken}`,
        },
      });

      toast.success('Curso adicionado com sucesso!');
    } catch (error) {
      console.error(error);
      toast.error('Oops algo deu errado!');
    }
  };
  const deleteCourse = async () => {
    const getToken = localStorage.getItem('@Startemy:token');

    try {
      await api.delete(`/courses/${idCourse}`, {
        headers: {
          authorization: `Bearer ${getToken}`,
        },
      });

      navigate('/courses');
      toast.success('Curso deletado com sucesso!');
    } catch (error) {
      console.error(error);
      toast.error('Oops algo deu errado!');
    }
  };

  return (
    <CoursesContext.Provider
      value={{
        addChecked,
        checked,
        courseList,
        filterSearch,
        filteredArray,
        idCourse,
        infoCourse,
        buttonDisabled,
        checkIsFavorite,
        isFavorite,
        filter,
        getHoursClasses,
        createCourse,
        classes,
        addCourseClasses,
        deleteCourse,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};
