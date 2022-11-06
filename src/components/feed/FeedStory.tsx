import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const FeedStory = (props: any) => {
  return (
    <SafeAreaView style={styles.containerWrapper}>
      <View style={styles.wrapper}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#fdf497', '#fd5949', '#d6249f']}
          style={styles.wrapperImage}>
          <Image
            style={styles.imageStory}
            source={{
              uri: props.img,
            }}
          />
        </LinearGradient>
        <Text style={styles.imageStoryText}>{props.name}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    paddingHorizontal: 5,
  },
  wrapper: {
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
    borderWidth: 2,
    borderColor: 'white',
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  imageStoryText: {
    marginTop: 1,
    color: 'black',
    fontSize: 12,
  },
});

export default FeedStory;

FeedStory.defaultProps = {
  name: 'Marian',
  img: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/shutterstock_105623048_1.jpg?itok=IcdHbI7U',
};
