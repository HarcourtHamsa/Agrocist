import {StyleSheet} from 'react-native';
import {APP_WHITE, APP_BLACK} from './constant';

export const background = StyleSheet.create({
  white: {backgroundColor: APP_WHITE},
  black: {backgroundColor: APP_BLACK},
  gray: {backgroundColor: `#F1F1F1`},
  green: {backgroundColor: `#05612E`},
});
export const opacity = StyleSheet.create({
  faint: {opacity: 0.1},
  mild: {opacity: 0.6},
});

export const shadow = StyleSheet.create({
  bold: {
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 6,
  },
});
