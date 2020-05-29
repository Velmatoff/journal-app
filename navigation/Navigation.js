import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainEmpty from "../pages/MainEmpty";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import BookmarksPage from "../pages/BookmarksPage";
import CategoryScreen from "../pages/CategoryScreen";
import ManageJournalScreen from "../screens/ManageJournalScreen";
import SubcategoryScreen from "../screens/SubcategoryScreen";
import ChooseJournalScreen from "../screens/ChooseJournalScreen";
import JournalViewScreen from "../screens/JournalViewScreen";
import JournalShortScreen from "../screens/JournalShortScreen";
import JournalFullScreen from "../screens/JournalFullScreen";
import LoginPage from "../pages/LoginPage";
import {useSelector} from "react-redux";
import {createStackNavigator} from '@react-navigation/stack';
import SettingsPage from "../pages/SettingsPage";

const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const mainNavigator = () => {
    const isAuth = useSelector(state => state.auth.isAuth);
    return (
        <Stack.Navigator headerMode='none'>
            {!isAuth
                ?
                <>
                    <Stack.Screen name='login' component={LoginPage}/>
                </>
                :
                <>
                    <Stack.Screen cardOverlay='true' name='Home' component={Home}/>
                    <Stack.Screen name='CategoryScreen' component={CategoryScreen}/>
                    <Stack.Screen name='SubcategoryScreen' component={SubcategoryScreen}/>
                    <Stack.Screen name='ChooseJournalScreen' component={ChooseJournalScreen}/>

                    <Stack.Screen name='ManageJournalScreen' component={ManageJournalScreen}/>
                    <Stack.Screen name='JournalFullScreen' component={JournalFullScreen}/>

                </>
            }

        </Stack.Navigator>

    )
};

const Home = () => {
    return (
        <Tab.Navigator tabBarPosition={'none'}>
            <Tab.Screen name="DrawerHome" component={DrawerHome}/>
            <Tab.Screen name="BookmarksScreen" component={BookmarksPage}/>
        </Tab.Navigator>
    )
};

const DrawerHome = () => {
    const viewMode = useSelector(state => state.interfaceApp.viewMode);
    console.log(viewMode);
    return (
        <Drawer.Navigator
            edgeWidth={200}
            drawerStyle={{width: '85%'}}
            drawerContent={props => <SettingsPage {...props} />}
        >
            {f(viewMode)}
        </Drawer.Navigator>
    )
};

function f(viewMode) {
    if (viewMode === 'empty') {
        return <Drawer.Screen name='MainEmpty' component={MainEmpty}/>
    } else if (viewMode === 'full') {
        return <Drawer.Screen name='JournalFullScreen' component={JournalFullScreen}/>
    } else if (viewMode === 'short') {
        return <Drawer.Screen name='JournalShortScreen' component={JournalShortScreen}/>
    } else if (viewMode === 'cover') {
        return <Drawer.Screen name='JournalViewScreen' component={JournalViewScreen}/>
    }
}


export default mainNavigator;
