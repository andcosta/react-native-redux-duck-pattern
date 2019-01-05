
import React from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import Styles from '../util/styles';
import User from './user';

const Footer = ({ user }) => (
    <View style={[Styles.container, {backgroundColor: '#FFEFD5'}]}>
        <Text style={Styles.title}>- Footer -</Text>
        <Image style={Styles.avatar} source={{uri: user.userAvatar}} />
        <Text style={Styles.user}>{user.userName}</Text>
        <User />
    </View>
);

const mapStatetoProps = states => ({
    user: states.user.data
});

export default connect(mapStatetoProps)(Footer);