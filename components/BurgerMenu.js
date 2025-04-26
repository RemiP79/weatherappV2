import React from 'react';
import { Appbar, Menu } from 'react-native-paper';

export default function BurgerMenu() {
  const [visible, setVisible] = React.useState(false);

  return (
    <Appbar.Header>
      <Menu
        visible={visible}
        onDismiss={() => setVisible(false)}
        anchor={<Appbar.Action icon="menu" onPress={() => setVisible(true)} />}>
        <Menu.Item onPress={() => console.log('Accueil')} title="Accueil" />
        <Menu.Item onPress={() => console.log('Prévisions de pluie')} title="Prévisions de pluie" />
        <Menu.Item onPress={() => console.log('Recherche')} title="Recherche" />
      </Menu>
    </Appbar.Header>
  );
}
