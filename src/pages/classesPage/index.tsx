import { Box, Divider, Grid, GridItem } from '@chakra-ui/layout';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
} from '@chakra-ui/modal';
import { Progress } from '@chakra-ui/progress';
import { useDisclosure } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { Play, PlayCircle, Record, TickCircle, Menu } from 'iconsax-react';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { VideoPlayer } from '../../components/VideoPlayer';
import { AuthContext } from '../../context/AuthContext';
import { ClassesContext } from '../../context/ClassesContext';
import { iCourseList } from '../../context/CoursesContext';
import { colors } from '../../styles/Colors';
import { Container } from '../../styles/Container';
import {
  ClassesContainer,
  DrawerContainer,
  PageContainer,
  PlayerContainer,
} from './style';

export const ClassesPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { courseId, classId } = useParams();
  const { userLog } = useContext(AuthContext);
  const {
    getUserCourse,
    getUserClass,
    addCompletedClass,
    userCourse,
    currClass,
    currTime,
    duration,
    completedClasses,
  } = useContext(ClassesContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const auth = userLog.purchasedCourses.some(
      (elt: iCourseList) => elt.id === userCourse?.id,
    );

    if (loading) {
      if (!auth) {
        setTimeout(() => {
          navigate('/courses');
        }, 3000);
      }
    }
    setLoading(true);
  }, [userCourse]);

  useEffect(() => {
    getUserCourse(Number(courseId));
    getUserClass(Number(classId));
  }, [currClass, classId, userLog]);

  useEffect(() => {
    addCompletedClass(completedClasses);
  }, [completedClasses]);

  return (
    <Container>
      <Header profile={true} />
      {userLog.purchasedCourses.some(
        (elt: iCourseList) => elt.id === userCourse?.id,
      ) ? (
        <PageContainer>
          <PlayerContainer>
            <VideoPlayer
              url={currClass?.link != undefined ? currClass.link : ''}
            />
            <div>
              <button onClick={onOpen} className='drawerButton'>
                <Menu size='20' variant='Bold' /> Lista de aulas
              </button>
              <Drawer onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader borderBottomWidth='1px'>
                    Conteúdo do curso
                  </DrawerHeader>
                  <DrawerBody>
                    <Divider orientation='horizontal' />
                    <DrawerContainer>
                      {userCourse.classes?.map((item) => (
                        <Link
                          key={item.id}
                          to={`/courses/${userCourse.id}/classes/${item.id}`}
                        >
                          <div className='classLine'>
                            <Grid
                              templateColumns='repeat(5, 1fr)'
                              gap={2}
                              templateRows='repeat(1, 1fr)'
                            >
                              <GridItem
                                colSpan={4}
                                h='10'
                                className='gridItem itemStart'
                              >
                                <div className='titleBox'>
                                  {item.id === Number(classId) ? (
                                    <AnimatePresence>
                                      <motion.span
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                      >
                                        <Play
                                          size='16'
                                          color={colors.colorSecondaryDark}
                                          variant='Bold'
                                        />
                                      </motion.span>
                                    </AnimatePresence>
                                  ) : null}
                                  <p className='classTitle'>{item.title}</p>
                                </div>

                                <div className='playIcon'>
                                  <PlayCircle
                                    size='16'
                                    color={colors.colorSecondaryDark}
                                  />
                                  <small>{item.classTime}</small>
                                </div>
                              </GridItem>
                              <GridItem
                                colStart={5}
                                colEnd={6}
                                h='10'
                                className='gridItem itemEnd'
                              >
                                {completedClasses.some(
                                  (elt) =>
                                    elt.classId === item.id &&
                                    elt.courseId === Number(courseId),
                                ) ? (
                                  <AnimatePresence>
                                    <motion.div
                                      initial={{ rotate: 0, opacity: 0 }}
                                      animate={{ rotate: 360, opacity: 1 }}
                                      exit={{ rotate: 0, opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <TickCircle
                                        size='26'
                                        color={colors.colorSecondaryDark}
                                        variant='Bold'
                                      />
                                    </motion.div>
                                  </AnimatePresence>
                                ) : (
                                  <AnimatePresence>
                                    <motion.div
                                      initial={{ rotate: 360, opacity: 0 }}
                                      animate={{ rotate: 1, opacity: 1 }}
                                      exit={{ rotate: 360, opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <Record
                                        size='26'
                                        color={colors.colorSecondaryDark}
                                      />
                                    </motion.div>
                                  </AnimatePresence>
                                )}
                              </GridItem>
                              <GridItem colSpan={5}>
                                {completedClasses.some(
                                  (elt) =>
                                    elt.classId === item.id &&
                                    elt.courseId === Number(courseId),
                                ) ? (
                                  <Progress
                                    value={100}
                                    min={0}
                                    max={100}
                                    size='xs'
                                    hasStripe
                                    colorScheme='facebook'
                                    isAnimated={false}
                                  />
                                ) : item.id === Number(classId) ? (
                                  <Progress
                                    value={currTime}
                                    min={0}
                                    max={duration}
                                    size='xs'
                                    hasStripe
                                    colorScheme='facebook'
                                    isAnimated={true}
                                  />
                                ) : (
                                  <Progress
                                    value={0}
                                    min={0}
                                    max={100}
                                    size='xs'
                                    hasStripe
                                    colorScheme='facebook'
                                    isAnimated={true}
                                  />
                                )}
                              </GridItem>
                            </Grid>
                          </div>
                        </Link>
                      ))}
                    </DrawerContainer>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </div>
            <div className='playerDesc'>
              <h1>{userCourse.title}</h1>
              <h3>Sobre o curso</h3>
              <p>{userCourse.description}</p>
            </div>
          </PlayerContainer>
          <ClassesContainer>
            <Divider orientation='horizontal' />
            <h2>
              <Box as='span' flex='1' textAlign='left'>
                Conteúdo do curso
              </Box>
            </h2>

            {userCourse.classes?.map((item) => (
              <Link
                key={item.id}
                to={`/courses/${userCourse.id}/classes/${item.id}`}
              >
                <Divider orientation='horizontal' />
                <div className='classLine'>
                  <Grid
                    templateColumns='repeat(5, 1fr)'
                    gap={2}
                    templateRows='repeat(1, 1fr)'
                  >
                    <GridItem colSpan={4} h='10' className='gridItem itemStart'>
                      <div className='titleBox'>
                        {item.id === Number(classId) ? (
                          <AnimatePresence>
                            <motion.span
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Play
                                size='16'
                                color={colors.colorSecondaryDark}
                                variant='Bold'
                              />
                            </motion.span>
                          </AnimatePresence>
                        ) : null}
                        <p className='classTitle'>{item.title}</p>
                      </div>

                      <div className='playIcon'>
                        <PlayCircle
                          size='16'
                          color={colors.colorSecondaryDark}
                        />
                        <small>{item.classTime}</small>
                      </div>
                    </GridItem>
                    <GridItem
                      colStart={5}
                      colEnd={6}
                      h='10'
                      className='gridItem itemEnd'
                    >
                      {completedClasses.some(
                        (elt) =>
                          elt.classId === item.id &&
                          elt.courseId === Number(courseId),
                      ) ? (
                        <AnimatePresence>
                          <motion.div
                            initial={{ rotate: 0, opacity: 0 }}
                            animate={{ rotate: 360, opacity: 1 }}
                            exit={{ rotate: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <TickCircle
                              size='26'
                              color={colors.colorSecondaryDark}
                              variant='Bold'
                            />
                          </motion.div>
                        </AnimatePresence>
                      ) : (
                        <AnimatePresence>
                          <motion.div
                            initial={{ rotate: 360, opacity: 0 }}
                            animate={{ rotate: 1, opacity: 1 }}
                            exit={{ rotate: 360, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Record
                              size='26'
                              color={colors.colorSecondaryDark}
                            />
                          </motion.div>
                        </AnimatePresence>
                      )}
                    </GridItem>
                    <GridItem colSpan={5}>
                      {completedClasses.some(
                        (elt) =>
                          elt.classId === item.id &&
                          elt.courseId === Number(courseId),
                      ) ? (
                        <Progress
                          value={100}
                          min={0}
                          max={100}
                          size='xs'
                          hasStripe
                          colorScheme='facebook'
                          isAnimated={false}
                        />
                      ) : item.id === Number(classId) ? (
                        <Progress
                          value={currTime}
                          min={0}
                          max={duration}
                          size='xs'
                          hasStripe
                          colorScheme='facebook'
                          isAnimated={true}
                        />
                      ) : (
                        <Progress
                          value={0}
                          min={0}
                          max={100}
                          size='xs'
                          hasStripe
                          colorScheme='facebook'
                          isAnimated={true}
                        />
                      )}
                    </GridItem>
                  </Grid>
                </div>
              </Link>
            ))}
          </ClassesContainer>
        </PageContainer>
      ) : (
        <PageContainer>
          <div className='notPurchased'>
            <h1 className='notPurchasedTitle'>Você não possui este curso.</h1>
            <small>Você será redirecionado para outra página.</small>
          </div>
        </PageContainer>
      )}
    </Container>
  );
};
