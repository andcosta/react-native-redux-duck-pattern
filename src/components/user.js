import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { persistor } from '../store';
import { Creators as UserActions } from '../store/redux-ducks/user'
import Styles from '../util/styles';

class User extends Component {
    constructor(props) {
        super(props);
        this.setUser = this.setUser.bind(this);
        this.cleanUser = this.cleanUser.bind(this);
    }
    
    async setUser() {
       await this.props.userRequest();
    }

    async cleanUser() {
        await persistor.purge();
        // await AsyncStorage.removeItem('persist:root');
     }

    render() {


        if(this.props.isFetching === true){
            return (
                <View style={Styles.loading}>
                    <ActivityIndicator size="large" color="black" />
                </View>
            );
        }

        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableWithoutFeedback onPress={this.setUser}>
                    <View style={Styles.button}>
                        <Text style={Styles.buttonText}>change user</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.cleanUser}>
                    <View style={[Styles.button, { marginLeft: 10 }]}>
                        <Text style={Styles.buttonText}>Clean</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const mapStatetoProps = states => ({
    isFetching : states.user.isFetching,

    user : states.user,
});


const mapDispatchToProps = {
    ...UserActions,
};


export default connect(mapStatetoProps, mapDispatchToProps)(User);