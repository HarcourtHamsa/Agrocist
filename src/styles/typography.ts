import {StyleSheet} from 'react-native';
import {normalizeDimension} from 'utils/sizing';

export const font = StyleSheet.create({
  medium: {fontFamily: 'Lato-Black'},
  regular: {fontFamily: 'Lato-Regular'},
  bold: {fontFamily: 'Lato-Bold'},
  light: {fontFamily: 'Lato-Light'},
  thin: {fontFamily: 'Lato-Hairline'},
});

export const color = StyleSheet.create({
  text_gray: {color: '#8F9BB3'},
  text_green: {color: '#05612E'},
  text_white: {color: '#FFFFFF'},
  text_black: {color: '#555555'},
  text_black_purple: {color: '#222B45'},
  text_red: {color: '#EA0015'},
});
export const font_size = StyleSheet.create({
  8: {fontSize: normalizeDimension(8)},
  9: {fontSize: normalizeDimension(9)},
  10: {fontSize: normalizeDimension(10)},
  11: {fontSize: normalizeDimension(11)},
  12: {fontSize: normalizeDimension(12)},
  13: {fontSize: normalizeDimension(13)},
  14: {fontSize: normalizeDimension(14)},
  15: {fontSize: normalizeDimension(15)},
  16: {fontSize: normalizeDimension(16)},
  17: {fontSize: normalizeDimension(17)},
  18: {fontSize: normalizeDimension(18)},
  20: {fontSize: normalizeDimension(20)},
  22: {fontSize: normalizeDimension(22)},
  24: {fontSize: normalizeDimension(24)},
  28: {fontSize: normalizeDimension(28)},
  56: {fontSize: normalizeDimension(56)},
});

export const align = StyleSheet.create({
  left: {textAlign: 'left'},
  right: {textAlign: 'right'},
  center: {textAlign: 'center'},
  vertical_top: {textAlignVertical: 'top'},
});
export const transform = StyleSheet.create({
  capitalize: {textTransform: 'capitalize'},
});
