import {createStackNavigator} from "react-navigation";
import {MainScreen, HomeScreen, CartScreen, ContactScreen,
    OrderHistoryScreen, ChangeInfoScreen, SearchScreen} from "./ScreenKey";
import {createBottomTabNavigator} from "react-navigation";
import Main from "./Main";
import Home from "./components/Main/Home/Home";
import Card from "./components/Main/Card/Card";
import Search from "./components/Main/Search/Search";
import Contact from "./components/Main/Contact/Contact";
import {createDrawerNavigator} from "react-navigation";
import Authentication from "./components/Authentication/Authentication";
import OrderHistory from "./components/OrderHistory/OrderHistory";
import ChangeInfo from "./components/ChangeInfo/ChangeInfo";

export const Tabbar = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        },
    },
    Card: {
        screen: Card,
        naviagtionOptions: {
            header: null,
        },
    },
    Search: {
        screen: Search,
        navigationOptions: {
            header: null,
        },
    },
    Contact: {
        screen: Contact,
        navigationOptions: {
            header: null,
        },
    },
});

export const MyDrawer = createDrawerNavigator({ 
    Home: {
        screen: Tabbar,
    },
    Authentication: {
        screen: Authentication,
    },
    ChangeInfo: {
        screen: ChangeInfo,
    },
    OrderHistory: {
        screen: OrderHistory,
    },
});

