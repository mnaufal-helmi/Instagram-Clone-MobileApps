import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const data = [
  {
    id: 1,
    image: require('../assets/jpg/aing.jpg'),
    username: 'Jajang Sutarjo',
    name: 'Naufal Celalu cayank Kamoe',
  },
  {
    id: 2,
    image: require('../assets/jpg/aji.jpg'),
    username: 'Sutarno Tarjo',
    name: 'Aji Doang',
  },
  {
    id: 3,
    image: require('../assets/jpg/farhan.jpg'),
    username: 'nurfarhanzz',
    name: 'farhandoang',
  },
  {
    id: 4,
    image: require('../assets/jpg/amri.jpg'),
    username: 'amrizz',
    name: 'amridoang',
  },
  {
    id: 5,
    image: require('../assets/jpg/argian.jpg'),
    username: 'argianzz',
    name: 'argiandoang',
  },
  {
    id: 6,
    image: require('../assets/jpg/faiz.jpg'),
    username: 'faizzzz',
    name: 'faizdoang',
  },
  {
    id: 7,
    image: require('../assets/jpg/masdhika.jpg'),
    username: 'dhikazz',
    name: 'Mas Dhika doang',
  },
  {
    id: 8,
    image: require('../assets/jpg/zul.jpg'),
    username: 'ZulParamsz',
    name: 'Mas Zull doang',
  },
  {
    id: 9,
    image: require('../assets/jpg/opik.jpg'),
    username: 'taufikzz',
    name: 'Opick Doang',
  },
  {
    id: 10,
    image: require('../assets/jpg/rezky.jpg'),
    username: 'Rezky',
    name: 'Rezky Doang',
  },
  {
    id: 11,
    image: require('../assets/jpg/nadif.jpg'),
    username: 'nadifzz',
    name: 'nadifdoang',
  },
  {
    id: 12,
    image: require('../assets/jpg/rezky.jpg'),
    username: '',
    name: '',
  },
];

const ScreenSearch = () => {
  const [select, setSetelect] = useState(0);
  return (
    <View>
      <View style={{backgroundColor: 'black'}}>
        <View style={style.headerBtn}>
          <Text style={{color: 'white'}}>Terbaru</Text>
          <TouchableOpacity>
            <Text style={{color: '#005eff'}}>Lihat Semua </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <View style={style.container}>
                <Image source={item.image} style={style.image} />
                <View style={style.wrapper}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>
                    {item.username}
                  </Text>
                  <Text style={{color: 'white', opacity: 0.7}}>
                    {item.name}
                  </Text>
                  <Text style={{color: 'white', opacity: 0.7}}>Mengikuti</Text>
                </View>
                <TouchableOpacity style={{height: 65, width: 65}}>
                  <Image
                    source={require('../assets/icon/iconclose.png')}
                    style={style.iconClose}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ScreenSearch;

const style = StyleSheet.create({
  headerBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    margin: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    right: 50,
    marginHorizontal: 25,
    width: '100%',
  },
  image: {
    height: 65,
    width: 65,
    borderRadius: 35,
    margin: 10,
    marginLeft: 30,
    left: 0,
  },
  wrapper: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 230,
    right: 25,
    left: 0,
  },
  iconClose: {
    height: 10,
    width: 10,
    top: 30,
    left: 0,
    right: 10,
    alignItems: 'center',
  },
});
