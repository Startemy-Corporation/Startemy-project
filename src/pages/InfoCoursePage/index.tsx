import React, { useContext, useEffect, useState } from 'react';

import { Box } from '@chakra-ui/layout';
import { SkeletonCircle, SkeletonText } from '@chakra-ui/skeleton';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from '../../components/Header';
import { TabCards } from '../../components/Tab/styles';
import { CoursesContext, iCourseList } from '../../context/CoursesContext';
import { AuthContext } from '../../context/AuthContext';
import { Container } from '../../styles/Container';
import { InfoCourseStyled } from './styles';
import { Button } from '../../components/Button';
import { Heart, ShopAdd, ShopRemove } from 'iconsax-react';
import { colors } from '../../styles/Colors';
import { Link, useNavigate } from 'react-router-dom';

import imgDefault from '../../assets/bgDefaultCardCourses.svg';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useDisclosure,
} from '@chakra-ui/react';
import { StyledButton } from '../../components/Button/styles';
import { InputForm } from '../../components/Input';
import { FormModal } from '../profilePage/styles';
import { useForm } from 'react-hook-form';
import { iClassProps } from '../../context/ClassesContext/types';

export const InfoCoursePage = () => {
  const {
    infoCourse,
    courseList,
    idCourse,
    buttonDisabled,
    checkIsFavorite,
    isFavorite,
    getHoursClasses,
    classes,
    addCourseClasses,
    deleteCourse,
  } = useContext(CoursesContext);
  const [h1, setH1] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState(0);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [modalId, setModalId] = useState('');

  const addInfoCourseCard = (course: iCourseList) => {
    setH1(course.title);
    setDescription(course.description);
    setImage(course.image);
    setPrice(course.price);
  };

  const { cart, checkCart, inCart, addToCart, addInCart, userLog, disable } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const buyCourse = () => {
    addToCart(infoCourse);
    navigate('/cart');
  };

  useEffect(() => {
    addInCart(infoCourse);
  }, [infoCourse]);

  const { register, handleSubmit } = useForm();

  const submitClass = handleSubmit((data) => {
    const newData = {
      ...data,
      id: infoCourse.classes.length + 1,
    };
    addCourseClasses([...classes, newData] as iClassProps[]);

    onClose();
  });

  return (
    <>
      {Object.keys(infoCourse).length ? (
        <InfoCourseStyled>
          <Container>
            <Header profile={true} />
          </Container>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <main>
              <motion.div>
                <Container>
                  {h1 === infoCourse.title ? (
                    <motion.h1
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {h1}
                    </motion.h1>
                  ) : (
                    <h1>{infoCourse.title}</h1>
                  )}
                </Container>
              </motion.div>
              <Container>
                <motion.section>
                  <h2>Sobre o curso</h2>
                  {description === infoCourse.description ? (
                    <motion.p
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {infoCourse.description}
                    </motion.p>
                  ) : (
                    <p>{infoCourse.description}</p>
                  )}

                  <div>
                    <p>
                      Quantidade de aulas:{' '}
                      {Object.keys(infoCourse.classes).length}
                    </p>
                    <p>Horas de curso: {getHoursClasses(infoCourse)}</p>
                  </div>

                  <div>
                    <h2>Veja também</h2>
                    <motion.ul className='tabList'>
                      {courseList.map((course) =>
                        course.id != idCourse ? (
                          <AnimatePresence key={course.title}>
                            <motion.li
                              initial={{ y: 10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -10, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <TabCards>
                                <Link
                                  to={`/courses/info/${course.id}`}
                                  onClick={() => addInfoCourseCard(course)}
                                >
                                  <div className='topDiv'>
                                    <img
                                      src={
                                        course.image ? course.image : imgDefault
                                      }
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
                  </div>
                </motion.section>

                <section>
                  <div>
                    {image === infoCourse.image ? (
                      <motion.figure
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.img src={image} alt={infoCourse.title} />
                      </motion.figure>
                    ) : (
                      <figure>
                        <img src={infoCourse.image} alt={infoCourse.title} />
                      </figure>
                    )}

                    <div>
                      <p>Valor do curso:</p>
                      {price === infoCourse.price ? (
                        <motion.p
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {price.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          })}
                        </motion.p>
                      ) : (
                        <p>
                          {infoCourse.price.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          })}
                        </p>
                      )}
                    </div>

                    {userLog.isAdmin === true ? (
                      <>
                        <StyledButton
                          onClick={() => {
                            setModalId('1');
                            onOpen();
                          }}
                          className='default'
                        >
                          Deletar Curso
                        </StyledButton>
                        <StyledButton
                          onClick={() => {
                            setModalId('2');
                            onOpen();
                          }}
                          className='default'
                        >
                          Cadastrar aula
                        </StyledButton>
                        <Modal
                          isCentered
                          finalFocusRef={finalRef}
                          id={modalId}
                          isOpen={isOpen}
                          onClose={onClose}
                        >
                          <ModalOverlay />
                          <ModalContent>
                            {modalId === '1' ? (
                              <ModalHeader>Deletar Curso</ModalHeader>
                            ) : modalId === '2' ? (
                              <ModalHeader>Cadastrar Aula</ModalHeader>
                            ) : null}
                            <ModalCloseButton />
                            <ModalBody>
                              {modalId === '1' ? (
                                <FormModal>
                                  <div>
                                    <h3>
                                      Tem certeza? Você não pode desfazer esta
                                      ação depois.
                                    </h3>
                                    <StyledButton
                                      type='button'
                                      onClick={deleteCourse}
                                    >
                                      Deletar
                                    </StyledButton>
                                  </div>
                                </FormModal>
                              ) : modalId === '2' ? (
                                <FormModal onSubmit={submitClass}>
                                  <div>
                                    <InputForm
                                      label='Título'
                                      type='text'
                                      register={register('title')}
                                    />
                                    <InputForm
                                      label='Duração da aula'
                                      type='text'
                                      register={register('classTime')}
                                    />

                                    <InputForm
                                      label='Link da Imagem'
                                      type='text'
                                      register={register('link')}
                                    />
                                  </div>
                                  <StyledButton
                                    type='submit'
                                    textcolor={colors.gray0}
                                    className='default'
                                    disabled={disable ? true : false}
                                  >
                                    {disable ? (
                                      <div>
                                        <Spinner />
                                      </div>
                                    ) : (
                                      'Editar informações'
                                    )}
                                  </StyledButton>
                                </FormModal>
                              ) : null}
                            </ModalBody>
                          </ModalContent>
                        </Modal>
                      </>
                    ) : (
                      <div>
                        <div>
                          <Button
                            type='button'
                            click={() => checkCart(infoCourse)}
                            className={!inCart ? 'remove-to-cart' : ''}
                          >
                            {inCart ? (
                              <ShopAdd
                                size='30'
                                color={colors.colorSecondaryDark}
                              />
                            ) : (
                              <ShopRemove size='30' />
                            )}
                          </Button>
                          <Button
                            type='button'
                            click={() => checkIsFavorite()}
                            disabled={buttonDisabled}
                            className={isFavorite ? 'remove-to-cart' : ''}
                          >
                            <Heart
                              size='30'
                              variant={isFavorite ? 'Bold' : 'Outline'}
                            />
                          </Button>
                        </div>
                        <Button
                          type='button'
                          click={() => {
                            userLog.purchasedCourses?.some(
                              (elt: iCourseList) => elt.id === infoCourse.id,
                            )
                              ? navigate(`/courses/${infoCourse.id}/classes/1`)
                              : buyCourse();
                          }}
                        >
                          {userLog.purchasedCourses?.some(
                            (elt: iCourseList) => elt.id === infoCourse.id,
                          )
                            ? 'Acessar Curso'
                            : cart.some(
                                (course: iCourseList) =>
                                  course.id === infoCourse.id,
                              )
                            ? 'Finalizar compra'
                            : 'Comprar'}
                        </Button>
                      </div>
                    )}
                  </div>
                </section>
              </Container>
            </main>
          </motion.div>
        </InfoCourseStyled>
      ) : (
        <Container>
          <Header />
          <Box padding='6' boxShadow='lg' bg='transparent'>
            <SkeletonCircle size='20' float='right' />
            <SkeletonText
              marginTop='100px'
              noOfLines={6}
              spacing='6'
              skeletonHeight='4'
            />
          </Box>
        </Container>
      )}
    </>
  );
};
