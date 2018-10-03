import React, {Component} from "react";
import {View, Text} from "react-native";
import {MyDrawer, Tabbar} from "./Router";

export default class Main extends Component {
    render() {
        return (
            <View style = {{flex: 1}}>
                <MyDrawer/>
                
            </View>
        );
    }
}