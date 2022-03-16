import {StyleSheet} from 'react-native';
import {APP_WHITE, APP_BLACK, APP_DISABLE_GRAY} from './constant';

export const background = StyleSheet.create({
  white: {backgroundColor: APP_WHITE},
  black: {backgroundColor: APP_BLACK},
  gray: {backgroundColor: `#F1F1F1`},
  green: {backgroundColor: `#05612E`},
  intro_gray: {backgroundColor: APP_DISABLE_GRAY},
  light_green: {backgroundColor: `#ECF5F0`},
  faint_green: {backgroundColor: `#D7F1E3`},
  yellow: {backgroundColor: `#FDD394`},
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
