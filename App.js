import { createAppContainer } from 'react-navigation';
import { myNewDrawer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import Login from "./login"
import Setting from "./screens/SettingScreen";
import Home from './screens/HomeScreen'

const AppNavigator = createStackNavigator(


  {

      Login,
      Home,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: falsegit add README.md,
      header: null,
      headerForceInset: { top: 'never', bottom: 'never' },
    },
  },



);


export default createAppContainer(AppNavigator)