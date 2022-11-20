import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const SearchBar = () => {
  const [text, setText] = useState('');
  return (
    <View style={{margin: 10}}>
      <View style={style.header}>
        <Image
          source={require('../assets/icon/backWhite.png')}
          style={{height: 35, width: 35}}
        />
        <TextInput
          style={style.input}
          placeholder="Cari..."
          placeholderTextColor="gray"
          underlineColorAndroid="transparent  "
          onChangeText={setText}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 40,
            bottom: 10,
          }}>
          {text ? (
            <Image
              source={require('../assets/icon/iconclose.png')}
              style={{height: 15, width: 15}}
            />
          ) : null}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    height: 35,
    width: 270,
    borderWidth: 1,
    fontSize: 15,
    color: 'white',
    borderRadius: 12,
    backgroundColor: 'black',
    left: 20,
    textAlign: 'left',
  },
});
