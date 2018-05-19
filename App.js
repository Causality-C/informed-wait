import React from 'react';
import {
    ActivityIndicator,
    Text,
    TextInput,
    View,
    StyleSheet,
    FlatList
} from 'react-native';

export default class FetchExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }

    componentDidMount() {
        // Latitude/Longitude arguments are New York City
        return fetch('https://informed-wait.herokuapp.com/nearby_restaurants?lat=40.7128&lon=-74.0060')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }


    render() {

        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (

            <View style={styles.container}>
                <FlatList
                    style={styles.listR}
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{item[0]}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        height: '100%'

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    listR: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        paddingTop: 50
    },
});