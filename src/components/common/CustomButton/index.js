import React from 'react';
import {Text} from 'react-native';
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
  ...props
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
    <TouchableOpacity style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
      <View></View>
      {title && (
        // eslint-disable-next-line react-native/no-inline-styles
        <Text style={{color: disabled ? 'black' : colors.white}}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
