import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import FeedStory from '../components/feed/FeedStory';
import FeedStoryMe from '../components/feed/FeedStoryMe';
import TopBar from '../components/TopBar';

const HomeScreen = () => {
  const dataStory = [
    {
      id: 0,
      name: 'Cerita Anda',
      img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ];
  for (let index = 1; index <= 12; index++) {
    dataStory.push({
      id: index,
      name: 'Maria',
      img: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/shutterstock_105623048_1.jpg?itok=IcdHbI7U',
    });
  }
  const renderItemStory = ({item}: any) =>
    item.id === 0 ? (
      <FeedStoryMe key={item.id} name={item.name} img={item.img} />
    ) : (
      <FeedStory key={item.id} name={item.name} img={item.img} />
    );
  return (
    <>
      <TopBar />
      <SafeAreaView style={styles.wrapper}>
        <FlatList
          style={styles.flatListStyle}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dataStory}
          renderItem={renderItemStory}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
  },
  flatListStyle: {
    height: 120,
  },
});

export default HomeScreen;
