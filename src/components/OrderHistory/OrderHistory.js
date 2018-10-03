import React, {Component} from "react";
import {View, Text, Button} from "react-native";

export default class OrderHistory extends Component {
    static navigationOptions = {
        drawerLabel: "Order history",
    };
    render() {
        return (
            <View style = {{flex: 1, backgroundColor: "pink"}}>
                <Text>This is OrderHistory</Text>
                <Button
                    title = "Go authentication"
                    onPress = {() => this.props.navigation.navigate("Authentication")}>
                </Button>
                <Button
                    title = "Go change info"
                    onPress = {() => this.props.navigation.navigate("ChangeInfo")}>
                </Button>
            </View>
        );
    }
}