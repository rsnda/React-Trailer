import React, {Component} from 'react';
import {View} from 'react-native';
import {StackNavigator} from 'react-navigation';

import TrailerPage, {TRAILER_PAGE_NAME} from './pages/Trailer'
import TrailersPage, {TRAILERS_PAGE_NAME} from './pages/Trailers'

const stackNavigatorConfig = {};

stackNavigatorConfig[TRAILER_PAGE_NAME] = {
  screen: TrailerPage,
};

stackNavigatorConfig[TRAILERS_PAGE_NAME] = {
  screen: TrailersPage,
};

const ApplicationNavigator = StackNavigator(
    stackNavigatorConfig,
    { initialRouteName: TRAILERS_PAGE_NAME }
)

export default () => <ApplicationNavigator/>
