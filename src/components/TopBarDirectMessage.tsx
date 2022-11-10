import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationTypes} from '../types/NavigationTypes';

const TopBarDirectMessage = () => {
  const {navigate} = useNavigation<StackNavigationProp<NavigationTypes>>();
  return (
    <SafeAreaView>
      <View style={styles.containerTopBarDm}>
        <View style={styles.wrapperFlex}>
          <TouchableOpacity
            onPress={() => {
              navigate('Home');
            }}>
            <Image
              style={styles.imgBack}
              source={require('../assets/icon/ic-arrow-tail.png')}
            />
          </TouchableOpacity>
          <View style={styles.wrapperTextUser}>
            <Text style={styles.textUser}>aknadhif</Text>
            <Image
              style={styles.imgDropdown}
              source={require('../assets/icon/ic-arrow.png')}
            />
          </View>
        </View>
        <View style={styles.wrapperFlex}>
          <Image
            style={styles.imgRight}
            source={require('../assets/icon/ic-new-message.png')}
          />
          <Image
            style={styles.imgRight}
            source={require('../assets/icon/ic-new-message.png')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerTopBarDm: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5%',
  },
  imgBack: {
    width: 30,
    height: 30,
    color: '#000',
    transform: [{rotate: '270deg'}],
  },
  textUser: {
    paddingHorizontal: 16,
    fontFamily: 'SF-UI-Display',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  wrapperFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgDropdown: {
    width: 20,
    color: 'black',
    height: 20,
    transform: [{rotate: '270deg'}],
    position: 'absolute',
    right: -12,
    top: -3,
  },
  wrapperTextUser: {
    position: 'relative',
  },
  imgRight: {
    marginHorizontal: 5,
    width: 25,
    height: 25,
  },
});

export default TopBarDirectMessage;
