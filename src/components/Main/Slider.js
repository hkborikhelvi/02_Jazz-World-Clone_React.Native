import {View, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from '../../styles/Styles';

const Slider = () => {
  return (
    <ScrollView horizontal>
      <View style={styles.slider}>
        <View style={styles.sliderItem}>
          <Image
            style={styles.sliderImage}
            source={require('../../assets/images/Slider/TaxCertificate.png')}
          />
        </View>
        <View style={styles.sliderItem}>
          <Image
            style={styles.sliderImage}
            source={require('../../assets/images/Slider/TaxCertificate.png')}
          />
        </View>
        <View style={styles.sliderItem}>
          <Image
            style={styles.sliderImage}
            source={require('../../assets/images/Slider/TaxCertificate.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Slider;
