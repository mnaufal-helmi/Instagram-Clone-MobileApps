import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Home from '../assets/svg/Home.svg';
import Search from '../assets/svg/Search.svg';

const BottomBar = () => {
  return (
    <View>
      <TouchableOpacity>
        <Home width={30} height={30} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Search width={30} height={30} />
      </TouchableOpacity>
    </View>
  );
};

export default BottomBar;
