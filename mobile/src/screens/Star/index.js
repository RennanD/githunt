import React from 'react';

import { Container } from './styles';

function Star({ navigation }) {
    return <Container source={{ uri: navigation.getParam('star').html_url }} />;
}

Star.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('star').name,
});

export default Star;
