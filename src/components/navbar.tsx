import React, { useCallback } from 'react';
import { HStack, IconButton } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

const NavBar = () => {
  const navigation = useNavigation<DrawerNavigationProp<{}>>();
  const handlePressMenuButton = useCallback(() => {
    navigation.openDrawer();
  }, [navigation]);

  return (
    <HStack w="full" h={40} alignItems="center" alignContent="center" p={4}>
      <IconButton
        onPress={handlePressMenuButton}
        borderRadius={100}
      >
        <Feather
          name="menu"
          size={24}
          color="white"
        />
      </IconButton>
    </HStack>
  );
};

export default NavBar;
