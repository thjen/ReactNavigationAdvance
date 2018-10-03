import React, {Component} from "react";
import {View, Text, TouchableOpacity, Button} from "react-native";

export default class Authentication extends Component {
    static navigationOptions = {
        drawerLabel: "Authentication",
    };
    render() {
        return (
            <View style = {{flex: 1, backgroundColor: "pink"}}>
                <Text>This is Authentication</Text>
                <Button
                    title = "Go change info"
                    onPress = {() => this.props.navigation.navigate("ChangeInfo")}>
                </Button>
                <Button
                    title = "Go order history"
                    onPress = {() => this.props.navigation.navigate("OrderHistory")}>
                </Button>
            </View>
        );
    }
}