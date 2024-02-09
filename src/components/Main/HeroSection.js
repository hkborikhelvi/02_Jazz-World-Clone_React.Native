import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../styles/Styles';
const HeroSection = () => {
  return (
    <View style={styles.hContainer}>
      <View>
        <Text style={styles.color}>Your balance is</Text>
        <Text style={styles.color}>RS 0.05</Text>
      </View>
      <View>
        <Text style={styles.color}>Haqdad Khan</Text>
        <Text style={styles.color}>03075168176</Text>
      </View>
    </View>
  );
};

export default HeroSection;
