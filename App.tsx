'use strict';
import React from 'react';
import {Splash} from './src/screens/Splash';
import {Onbroading} from './src/screens/onbroading';
import {SafeAreaView} from 'react-native';
import Home from './src/screens/home/home';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Home />
    </SafeAreaView>
  );
}

export default App;
