import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>

      <Image
        source={{ uri: 'https://i.pinimg.com/736x/f2/43/d6/f243d6711ebf25c706a9ad6c8aebb805.jpg' }} 
        style={styles.avatar}
      />
      
      <Text style={styles.text}>Торгаева Камила</Text>
      <Text style={styles.text}><b>CS-404</b></Text>
      <Text style={styles.text}>Хобби: Дорамы, игры, фильмы</Text>
      <Text style={styles.text}>Цитата: <b>"Зачем забивать себе голову тем, чего уже не вернешь, – надо думать о том, что еще можно изменить..."</b></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // Круглая аватарка
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: 'black',
    marginBottom: 10, // Отступ между строками
  },
});

export default App;
