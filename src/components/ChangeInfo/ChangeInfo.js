import React, {Component} from "react";
import {View, Text, Button} from "react-native";

export default class ChangeInfo extends Component {
    static navigationOptions = {
        drawerLabel: "Change info",
    };
    render() {
        return (
            <View style = {{flex: 1, backgroundColor: "pink"}}>
                <Text>This is ChangeInfo</Text>
                <Button
                    title = "Go authentication"
                    onPress = {() => this.props.navigation.navigate("Authentication")}>
                </Button>
                <Button
                    title = "Go order history"
                    onPress = {() => {this.props.navigation.navigate("OrderHistory")}}>
                </Button>
            </View>
        );
    }
}