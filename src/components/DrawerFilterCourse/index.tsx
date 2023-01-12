import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { InputRadio } from '../InputRadio';
import { Filter } from 'iconsax-react';
import { colors } from '../../styles/Colors';
import { StyledDrawerFilter } from './styles';

export const FilterCourses = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>
        <Filter size='24' color={colors.colorSecondaryDark} />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} placement='bottom'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Escolha uma categoria</DrawerHeader>

          <DrawerBody>
            <StyledDrawerFilter>
              <InputRadio />
            </StyledDrawerFilter>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
