import React, { memo } from 'react';
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
// import * as LoginBackground from '../assets/loginBackground.jpg';
type Props = {
  children: React.ReactNode;
  imgSrc?: any
};

const Background = ({ imgSrc, children }: Props) => (
  <ImageBackground
    resizeMode="cover"
    style={styles.background}

  >
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(Background);
