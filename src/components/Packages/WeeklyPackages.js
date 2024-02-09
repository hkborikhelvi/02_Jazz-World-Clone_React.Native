import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import styles from '../../styles/Styles';

const WeeklyPackages = () => {
  return (
    <View style={styles.packContainer}>
      <View style={styles.packHeading}>
        <Text>Weekly Packages</Text>
        <Text>View More</Text>
      </View>
      <ScrollView horizontal>
        <View style={styles.packSlider}>
          <View style={styles.package}>
            <Image
              source={require('../../assets/images/Package/Package.png')}
              style={styles.image}
            />
            <View>
              <Text style={styles.packContent}>Package Details</Text>
              <Text>Package Details</Text>
              <Text>Package Details</Text>
              <Text>Package Details</Text>
              <Text style={styles.button}>Subscribe</Text>
            </View>
          </View>
          <View style={styles.package}>
            <Image
              source={require('../../assets/images/Package/Package.png')}
              style={styles.image}
            />
            <View>
              <Text style={styles.packContent}>Package Details</Text>
              <Text>Package Details</Text>
              <Text>Package Details</Text>
              <Text>Package Details</Text>
              <Text style={styles.button}>Subscribe</Text>
            </View>
          </View>
          <View style={styles.package}>
            <Image
              source={require('../../assets/images/Package/Package.png')}
              style={styles.image}
            />
            <View>
              <Text style={styles.packContent}>Package Details</Text>
              <Text>Package Details</Text>
              <Text>Package Details</Text>
              <Text>Package Details</Text>
              <Text style={styles.button}>Subscribe</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default WeeklyPackages;
