import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './routes';

import './config/reactotronConfig';

YellowBox.ignoreWarnings(['Encountered two children with the same key']);

export default function App() {
    return (
        <>
            <StatusBar backgroundColor="#2196f3" barStyle="light-content" />
            <Routes />
        </>
    );
}
