import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import TopBarDirectMessage from '../components/TopBarDirectMessage';

const DirectMessage = () => {
  return (
    <SafeAreaView>
      <TopBarDirectMessage />
      <View>
        <Text>Direct Message Page</Text>
      </View>
    </SafeAreaView>
  );
};

export default DirectMessage;
