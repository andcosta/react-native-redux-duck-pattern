import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text, ActivityIndicator, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '../store/ducks/user'
import Styles from '../util/styles';

class User extends Component {
    constructor(props) {
        super(props);
        this.setUser = this.setUser.bind(this);
    }
    
    async setUser() {
       await this.props.userRequest();
    }

    render() {
        if(this.props.loading === true){
            return (
                <View style={Styles.loading}>
                    <ActivityIndicator size="large" color="black" />
                </View>
            );
        }

        return (
            <TouchableWithoutFeedback onPress={this.setUser}>
                <View style={Styles.button}>
                    <Text style={Styles.buttonText}>change user</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const mapStatetoProps = states => ({
    loading: states.user.loading,
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(UserActions, dispatch);

export default connect(mapStatetoProps, mapDispatchToProps)(User);