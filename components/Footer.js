// components/Footer.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const Footer = () => {
  const handlePress = () => {
    Linking.openURL('https://www.instagram.com/wilkerlisboa_'); // Substitua pelo link desejado
  };

  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2024 </Text>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.footerLink}>Wilker Lisboa</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    backgroundColor: '#1f1f1f',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#ccc',
    fontSize: 14,
    marginRight: 10,
  },
  footerLink: {
    color: '#6200EE',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default Footer;
