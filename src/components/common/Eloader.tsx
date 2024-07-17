import React, { useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

type IMode = 'fullscreen' | 'button';
type ISize = 'small' | 'medium' | 'large';

const ELoader = ({
  loading,
  mode,
  size,
}: {
  loading: boolean;
  mode: IMode;
  size: ISize;
}) => {
  const spinValue = new Animated.Value(0);

  const spin = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1200, // Adjust the duration as needed
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => spin());
  };

  useEffect(() => {
    if (loading) {
      spin();
    }
  }, [loading]);

  if (!loading) {
    return null;
  }

  const spinInterpolation = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const getSize = () => {
    switch (size) {
      case 'large':
        return 18;
      case 'medium':
        return 10;
      default:
        return 6;
    }
  };

  const getMargin = () => {
    switch (size) {
      case 'large':
        return 5;
      case 'medium':
        return 3;
      default:
        return 2;
    }
  };

  return (
    <View style={mode === 'fullscreen' ? styles.fullScreen : styles.button}>
      <Animated.View
        style={{
          transform: [{ rotate: spinInterpolation }],
        }}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ display: 'flex', flexDirection: 'column' }}>
            <View
              style={{
                height: getSize(),
                width: getSize(),
                margin: getMargin(),
                backgroundColor: '#009972',
                borderRadius: getSize() / 2,
              }}
            />
            <View
              style={{
                height: getSize(),
                width: getSize(),
                margin: getMargin(),
                backgroundColor: '#39AC8E',
                borderRadius: getSize() / 2,
              }}
            />
          </View>
          <View style={{ display: 'flex', flexDirection: 'column' }}>
            <View
              style={{
                height: getSize(),
                width: getSize(),
                margin: getMargin(),
                backgroundColor: '#71BDAA',
                borderRadius: getSize() / 2,
              }}
            />
            <View
              style={{
                height: getSize(),
                width: getSize(),
                margin: getMargin(),
                backgroundColor: '#AAD0C6',
                borderRadius: getSize() / 2,
              }}
            />
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ELoader;
