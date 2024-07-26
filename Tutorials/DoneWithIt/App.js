import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Button, ImageBackground} from 'react-native';
import { styles } from './StyleSheet'

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/images/tesla-bg.jpg')} style={styles.bgImage}>
        <View style={styles.logoContainer}>
          <Image source={require('./assets/images/tesla_logo.png')} style={styles.logo} />
          <Text style={styles.text}>automotive and clean energy company.</Text>
        </View>
      </ImageBackground>
      <View style={styles.loginPanel} />
      <View style={styles.signupPanel} />
    </View>
  );
};

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainBox}>
        <View style={styles.boxOne} />
        <View style={styles.boxMiddle} />
        <View style={styles.boxTwo} />
      </View>
      <Image source={require('./assets/images/tesla-x.jpg')} style={styles.image} />
    </SafeAreaView>
  );
};


export default HomeScreen;


