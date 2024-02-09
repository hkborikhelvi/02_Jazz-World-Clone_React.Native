import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../styles/Styles';

const MenuItems = () => {
  return (
    <View style={[styles.wrap, styles.marginTop]}>
      <View style={styles.menuItem}>
        <Text>Logo</Text>
        <Text>Packages</Text>
      </View>
      <View style={styles.menuItem}>
        <Text>Logo</Text>
        <Text>Make ur Bundle</Text>
      </View>
      <View style={styles.menuItem}>
        <Text>Logo</Text>
        <Text>Apps</Text>
      </View>
      <View style={styles.menuItem}>
        <Text>Logo</Text>
        <Text>View History</Text>
      </View>
      <View style={styles.menuItem}>
        <Text>Logo</Text>
        <Text>Simprise</Text>
      </View>
      <View style={styles.menuItem}>
        <Text>Logo</Text>
        <Text>Balance Share</Text>
      </View>
      <View style={styles.menuItem}>
        <Text>Logo</Text>
        <Text>Support</Text>
      </View>
      <View style={styles.menuItem}>
        <Text>Logo</Text>
        <Text>My Account</Text>
      </View>
    </View>
  );
};

export default MenuItems;
