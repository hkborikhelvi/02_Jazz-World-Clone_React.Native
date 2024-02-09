import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from '../../styles/Styles';

const Card = () => {
  return (
    <View style={styles.packContainer}>
      <View style={styles.packHeading}>
        <Text>Card</Text>
        <Text>View more</Text>
      </View>
      <ScrollView horizontal>
        <View>
          <View style={styles.packSlider}>
            <View style={styles.cardPack}>
              <Image
                style={styles.cardImage}
                source={require('../../assets/images/Card/PubgBundle.jpg')}
              />
              <Text>Enhanced Experience</Text>
            </View>
            <View style={styles.cardPack}>
              <Image
                style={styles.cardImage}
                source={require('../../assets/images/Card/PubgBundle.jpg')}
              />
              <Text>OMNO Recharge</Text>
            </View>
            <View style={styles.cardPack}>
              <Image
                style={styles.cardImage}
                source={require('../../assets/images/Card/PubgBundle.jpg')}
              />
              <Text>Advanced Recharge</Text>
            </View>
            <View style={styles.cardPack}>
              <Image
                style={styles.cardImage}
                source={require('../../assets/images/Card/PubgBundle.jpg')}
              />
              <Text>Enhanced Experience</Text>
            </View>
            <View style={styles.cardPack}>
              <Image
                style={styles.cardImage}
                source={require('../../assets/images/Card/PubgBundle.jpg')}
              />
              <Text>OMNO Recharge</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Card;
