import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationTypes} from '../types/NavigationTypes';

const TopBar = () => {
  const {navigate} = useNavigation<StackNavigationProp<NavigationTypes>>();
  return (
    <View style={styles.wrapper}>
      <Image source={require('../assets/icon/ic-IG-logo.png')} />
      <TouchableOpacity
        onPress={() => {
          navigate('DirectMessage');
        }}>
        <View style={styles.wrapperIconDM}>
          <Image
            style={styles.iconDM}
            source={require('../assets/icon/ic-dm-icon.png')}
          />
          <View style={styles.notifIconDM}>
            <Text style={styles.notifIconDMText}>8</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5%',
  },
  wrapperIconDM: {
    position: 'relative',
  },
  iconDM: {
    width: 35,
    height: 35,
  },
  notifIconDM: {
    top: -4,
    right: -6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    backgroundColor: 'red',
    position: 'absolute',
    borderRadius: 100,
  },
  notifIconDMText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
  },
});

export default TopBar;
