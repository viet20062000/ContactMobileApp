import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../../assets/themes/colors';
import styles from './styles';

const CustomButton = ({
  title,
  disabled,
  loading,
  primary,
  secondary,
  danger,
  onPress,
}) => {
  const getBgColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.primary;
    }
    if (secondary) {
      return colors.secondary;
    }
    if (danger) {
      return colors.danger;
    } else {
      return colors.grey;
    }
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
      <View style={[styles.loaderSection]}>
        {loading && (
          <ActivityIndicator
            color={primary ? colors.secondary : colors.primary}
          />
        )}
        {title && (
          // eslint-disable-next-line react-native/no-inline-styles
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{color: disabled ? 'black' : colors.white, paddingLeft: 10}}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
