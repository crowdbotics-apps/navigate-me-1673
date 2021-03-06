import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen3251Navigator from '../features/BlankScreen3251/navigator';
import BlankScreen1250Navigator from '../features/BlankScreen1250/navigator';
import BlankScreen2249Navigator from '../features/BlankScreen2249/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen3251: { screen: BlankScreen3251Navigator },
BlankScreen1250: { screen: BlankScreen1250Navigator },
BlankScreen2249: { screen: BlankScreen2249Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
