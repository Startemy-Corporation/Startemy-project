import {
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Spinner,
  Box,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';
import { Button } from '../../components/Button';
import { TabComponent } from '../../components/Tab';
import {
  HeaderProfile,
  ProfileInfo,
  ProfileContainer,
  FormModal,
  AdminBtn,
  StyledProfileSection,
} from './styles';
import { Edit } from 'iconsax-react';
import { Header } from '../../components/Header';
import { Container } from '../../styles/Container';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { editSchema } from './schema';
import { InputForm } from '../../components/Input';
import { SelectForm } from '../../components/Select';
import { StyledButton } from '../../components/Button/styles';
import { colors } from '../../styles/Colors';

import { AnimatePresence, motion } from 'framer-motion';
import { List } from '../../components/List';
import { Card } from '../../components/Card';
import { CoursesContext } from '../../context/CoursesContext';
import { iObject } from '../../context/AuthContext/types';

interface iFormEdit {
  email?: string;
  password?: string;
  currentPassword?: string;
  name?: string;
  educationLevel?: string;
  contact?: string;
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
export interface iNewData {
  classes: never[];
  email?: string | undefined;
  password?: string | undefined;
  currentPassword?: string | undefined;
  name?: string | undefined;
  educationLevel?: string | undefined;
  contact?: string | undefined;
  image?: string | undefined;
  userId: number;
}
export const ProfilePage = () => {
  const { userLog, editUser, disable } = useContext(AuthContext);
  const { createCourse, checked, courseList } = useContext(CoursesContext);

  const [modalId, setModalId] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();

  const finalRef = React.useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iFormEdit>({
    resolver: yupResolver(editSchema),
  });
  const submit = handleSubmit((data) => {
    editUser(data as iObject);
    reset();
    onClose();
  });

  const submitCourse = handleSubmit((data) => {
    const newData: iNewData = {
      ...data,
      classes: [],
      userId: 1,
    };
    createCourse(newData);
    onClose();
  });

  const handlePhone = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    return (input.value = phoneMask(input.value));
  };
  const phoneMask = (value: string) => {
    if (!value) return '';
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    return value;
  };
  return (
    <>
      <Modal
        finalFocusRef={finalRef}
        id={modalId}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          {modalId === '1' ? (
            <ModalHeader>Editar informações pessoais</ModalHeader>
          ) : modalId === '2' ? (
            <ModalHeader>Criar Curso</ModalHeader>
          ) : modalId === '3' ? (
            <ModalHeader>Editar foto do perfil</ModalHeader>
          ) : null}
          <ModalCloseButton />
          <ModalBody>
            {modalId === '1' ? (
              <FormModal onSubmit={submit}>
                <div>
                  <InputForm
                    label='Nome'
                    type='text'
                    register={register('name')}
                    error={errors.name}
                    inputIcon='name'
                    defaultValue={userLog.name}
                  />
                  <InputForm
                    label='Email'
                    type='email'
                    register={register('email')}
                    error={errors.email}
                    inputIcon='email'
                    defaultValue={userLog.email}
                  />

                  <InputForm
                    label='Nova senha'
                    type='password'
                    register={register('password')}
                    error={errors.password}
                    inputIcon='password'
                  />
                  <InputForm
                    label='Contato'
                    type='tel'
                    keyUp={(event) => handlePhone(event)}
                    register={register('contact')}
                    error={errors.contact}
                    inputIcon='contact'
                    maxlength={15}
                    defaultValue={userLog.contact}
                  />
                  <SelectForm
                    label='Nível de escolaridade'
                    id='educationLevel'
                    register={register('educationLevel')}
                    error={errors.educationLevel}
                    defaultValue={userLog.educationLevel}
                  >
                    <option value='' disabled>
                      Selecione o nivel
                    </option>
                    <option value='Fundamental incompleta'>
                      Fundamental incompleta
                    </option>
                    <option value='Fundamental completa'>
                      Fundamental completa
                    </option>
                    <option value='Média incompleta'>Média incompleta</option>
                    <option value='Média completa'>Média completa</option>
                    <option value='Superior incompleta'>
                      Superior incompleta
                    </option>
                    <option value='Superior completa'>Superior completa</option>
                  </SelectForm>
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
            ) : modalId === '2' ? (
              <FormModal onSubmit={submitCourse}>
                <div>
                  <InputForm
                    label='Título'
                    type='text'
                    register={register('title')}
                    inputIcon='title'
                  />
                  <InputForm
                    label='Descrição do curso'
                    type='text'
                    register={register('description')}
                    inputIcon='description'
                  />
                  <InputForm
                    label='Autor'
                    type='text'
                    register={register('author')}
                    inputIcon='name'
                  />
                  <InputForm
                    label='Imagem'
                    type='text'
                    register={register('image')}
                    inputIcon='img'
                  />
                  <InputForm
                    label='Preço'
                    type='number'
                    register={register('price')}
                    inputIcon='preco'
                  />
                  <InputForm
                    label='Ranking'
                    type='number'
                    register={register('ranking')}
                    inputIcon='ranking'
                  />

                  <SelectForm
                    label='Selecione a Categoria'
                    id='category'
                    register={register('category')}
                  >
                    <option value='' disabled>
                      Selecione a categoria
                    </option>
                    <option value='HTML'>HTML</option>
                    <option value='React'>React</option>
                    <option value='Javascript'>Javascript</option>
                    <option value='Typescript'>Typescript</option>
                    <option value='Figma'>Figma</option>
                  </SelectForm>
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
                    'Confirmar Curso'
                  )}
                </StyledButton>
              </FormModal>
            ) : modalId === '3' ? (
              <FormModal onSubmit={submit}>
                <div>
                  <InputForm
                    label='Nova Url'
                    type='text'
                    register={register('image')}
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
      <Container>
        <Header profile={false} />
      </Container>
      <HeaderProfile />
      <ProfileContainer>
        <button
          onClick={() => {
            setModalId('3');
            onOpen();
          }}
          className='userAvatar'
        >
          <img
            src={
              userLog.image === ''
                ? 'https://img.freepik.com/free-icon/user_318-792327.jpg?w=2000'
                : userLog.image
            }
            alt=''
          />
        </button>
        <ProfileInfo>
          <div
            ref={finalRef}
            tabIndex={-1}
            aria-label='Focus moved to this box'
            className='userData'
          >
            <div className='userNameContainer'>
              <p>{userLog.name}</p>
              <Button
                click={() => {
                  setModalId('1');
                  onOpen();
                }}
                type={'button'}
              >
                <Edit size='16' />
              </Button>
            </div>
            <span className='educationLevel'>{userLog.educationLevel}</span>
          </div>
          <div className='courses'>
            <Badge fontSize='0.8em' className='courseBadge'>
              {userLog.purchasedCourses?.length} Cursos
            </Badge>
          </div>
        </ProfileInfo>
      </ProfileContainer>
      {userLog.isAdmin == false ? (
        <TabComponent />
      ) : courseList.length ? (
        <Container>
          <AdminBtn>
            <button
              className=''
              onClick={() => {
                setModalId('2');
                onOpen();
              }}
            >
              Criar Curso
            </button>
          </AdminBtn>

          <StyledProfileSection>
            <AnimatePresence mode='wait'>
              <motion.div
                key={checked}
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <List>
                  <Card coursesList={courseList} />
                </List>
              </motion.div>
            </AnimatePresence>
          </StyledProfileSection>
        </Container>
      ) : (
        <Container>
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
