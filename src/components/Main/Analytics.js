import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../styles/Styles';

const Analytics = () => {
  return (
    <View style={[styles.mContainer, styles.marginTop]}>
      <View style={styles.tContainer}>
        <Text>Usage Rates</Text>
        <Text>Usage Details</Text>
      </View>
      <View style={styles.aContainer}>
        <View>
          <Text style={styles.center}>Data</Text>
          <View style={styles.charges}>
            <Text>Rs</Text>
            <Text>5.00</Text>
          </View>
          <Text style={styles.center}>Per MB</Text>
        </View>
        <View>
          <Text style={styles.center}>Calls</Text>
          <View style={styles.charges}>
            <Text>Rs</Text>
            <Text>3.50</Text>
          </View>
          <Text style={styles.center}>Per Min</Text>
        </View>
        <View>
          <Text style={styles.center}>SMS</Text>
          <View style={styles.charges}>
            <Text>Rs</Text>
            <Text>2.50</Text>
          </View>
          <Text style={styles.center}>Per SMS</Text>
        </View>
      </View>
    </View>
  );
};

export default Analytics;
