import React, {useEffect, useState} from 'react';
import { View, Text, Button, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Homevdfd',
    // headerStyle: {
    //   backgroundColor: '#ffeecc'
    // },
    
    headerTintColor: 'green'
  
  };
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="a detalle" onPress={() => navigate('Detalle', { paramEnviado: 'param desde home' })}></Button>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Detalle')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Detalle')}
        />
        <Button
          title="go to last screen"
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    );
  }
}

const DetalleScreen = ({ navigation }) => {
const [cont, setcont] = useState(0);
const incrementar = () => {setcont(cont + 1)};

useEffect(() => {
  navigation.setParams({incrementar})
  return () => {
    cont
  };
}, [cont])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detalle Screen {cont}</Text>
      <Button title="a home" onPress={() => navigation.goBack()}></Button>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="go to last screen"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="SetParams al titulo de navegacion"
        onPress={() => navigation.setParams({ paramEnviado: 'cambiado en detalle con setParamas' })}
      />
    </View>
  )
}

DetalleScreen.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam('paramEnviado', 'parametro defaul Detalle'),
    headerStyle: {
      backgroundColor: '#ffeecc'
    },
    headerTintColor: 'green',
    headerTitleStyle: {
      fontWeight: 'bold'
    },
    headerRight: <Button
    title="mas 1"
    onPress={navigation.getParam('incrementar')}
    color="#8b0000"
    />
  };
}

const Logo = () =>
  <Image
    style={{ width: 50, height: 50 }}
    source={require('./assets/icon.png')}
  />;


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Detalle: {
    screen: DetalleScreen
  }
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#d5f518'
    }
     ,
    headerTitle: <Logo />,
    headerLeft: <Text>fvgbhjk</Text>,
    // headerRight: <Button
    // title="ghjkk"
    // />
  }
});

export default createAppContainer(AppNavigator);