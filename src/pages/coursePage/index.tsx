import { Box } from '@chakra-ui/layout';
import { SkeletonCircle, SkeletonText } from '@chakra-ui/skeleton';

import { Input } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import { Card } from '../../components/Card';
import { FilterCourses } from '../../components/DrawerFilterCourse';
import { Form } from '../../components/Form/Index';
import { Header } from '../../components/Header';
import { InputRadio } from '../../components/InputRadio';
import { List } from '../../components/List';
import { CoursesContext } from '../../context/CoursesContext';
import { colors } from '../../styles/Colors';
import { Container } from '../../styles/Container';

import search from '../../assets/imgs/search.svg';

interface iCoursePageProps {
  className?: string;
}

export const CoursePage = ({ className }: iCoursePageProps) => {
  const { checked, courseList, filteredArray, filterSearch } =
    useContext(CoursesContext);

  return (
    <Container className={className}>
      <Header page='true' course={false} profile={true} />
      <main>
        <div>
          <Form>
            <Input
              focusBorderColor={colors.colorSecondaryDark}
              onChange={filterSearch}
              placeholder={'Pesquisar...'}
              style={{
                width: '100%',
              }}
            />

            <figure>
              <img src={search} alt='' />
            </figure>
          </Form>
          <FilterCourses />
        </div>
        <fieldset>
          <InputRadio />
        </fieldset>

        {filteredArray.length ? (
          <section>
            <AnimatePresence mode='wait'>
              <motion.div
                key={checked}
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <List>
                  <Card
                    coursesList={filteredArray ? filteredArray : courseList}
                  />
                </List>
              </motion.div>
            </AnimatePresence>
          </section>
        ) : (
          <Box padding='6' boxShadow='lg' bg='transparent'>
            <SkeletonCircle size='20' float='right' />
            <SkeletonText
              marginTop='100px'
              noOfLines={6}
              spacing='6'
              skeletonHeight='4'
            />
          </Box>
        )}
      </main>
    </Container>
  );
};
