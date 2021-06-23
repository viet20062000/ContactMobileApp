import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  logoImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    paddingTop: 50,
  },

  registerSection: {
    flexDirection: 'row',
  },
  registerBtn: {
    paddingLeft: 20,
    fontSize: 17,
    color: colors.primary,
  },
  infoText: {
    fontSize: 16,
  },
  form: {
    paddingTop: 20,
  },
  Title: {
    textAlign: 'center',
    fontSize: 21,
    paddingTop: 21,
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 17,
    paddingVertical: 20,
  },
});
