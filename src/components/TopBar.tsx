import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const TopBar = () => {
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <Text>Instagram</Text>
        <View style={styles.wrapperIconDM}>
          <Image
            style={styles.iconDM}
            source={require('../assets/icon/IDm.png')}
          />
          <View style={styles.notifIconDM}>
            <Text style={styles.notifIconDMText}>8</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
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
    transform: [{rotateX: '10deg'}, {rotateZ: '10deg'}],
    width: 35,
    height: 35,
  },
  notifIconDM: {
    top: -3,
    right: -4,
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
