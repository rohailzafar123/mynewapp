import HomeScreen from './App'
import React from 'react';

// import SettingScreen from './screens/SettingScreen'
import { createDrawerNavigator, } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Stack from "./navigation"
import { View, Text, Dimensions } from "react-native"






const AppDrawer = createDrawerNavigator(
    {
        Stack,
    },
    {
        //For the Custom sidebar menu we have to provide our CustomSidebarMenu
        // contentComponent: Hello,
        //Sidebar width
        drawerWidth: Dimensions.get('window').width - 90,
        drawerType: 'slide',
    },
);

export default createAppContainer(AppDrawer);