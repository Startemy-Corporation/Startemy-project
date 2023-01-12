import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import { HambergerMenu } from 'iconsax-react';
import { colors } from '../../styles/Colors';
import { iHeader } from '../Header';
import { LinkNav } from '../LinkNav';
import { StyledDrawerLink } from './styles';

export const HeaderPopover = ({ profile, course }: iHeader) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        background='transparent'
        _hover={{ bg: 'transparent' }}
        _active={{ bg: `${colors.colorSecondaryDark}` }}
        onClick={onOpen}
        className='menuDrawerButton'
      >
        <HambergerMenu size='32' color={colors.colorPrimary} />
      </Button>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <StyledDrawerLink id='styledDiv'>
              <LinkNav profile={profile} course={course} />
            </StyledDrawerLink>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
