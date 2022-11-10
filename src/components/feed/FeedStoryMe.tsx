import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const FeedStoryMe = (props: any) => {
  return (
    <SafeAreaView style={styles.containerWrapper}>
      <View style={styles.wrapper}>
        <Image
          style={styles.imageStory}
          source={{
            uri: props.img,
          }}
        />
        <Text style={styles.imageStoryText}>{props.name}</Text>
        <Image
          style={styles.imageStoryIconPlus}
          source={require('../../assets/icon/IPlus.png')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    paddingHorizontal: 5,
  },
  wrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  wrapperImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: 85,
    height: 85,
  },
  imageStory: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  imageStoryText: {
    fontFamily: 'SF-UI-Display',
    lineHeight: 22,
    marginTop: 6,
    color: 'black',
    fontSize: 14,
  },
  imageStoryIconPlus: {
    position: 'absolute',
    width: 22.5,
    height: 22.5,
    borderWidth: 1.5,
    borderColor: 'white',
    borderRadius: 100,
    bottom: 20,
    left: 50,
  },
});

export default FeedStoryMe;
