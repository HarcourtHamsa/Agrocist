import {StyleSheet} from 'react-native';
import {normalizeDimension} from 'utils/sizing';

export const padding = StyleSheet.create({
  // top
  t_5: {paddingTop: 5},
  t_10: {paddingTop: 10},
  t_15: {paddingTop: 15},
  t_20: {paddingTop: 20},
  t_50: {paddingTop: 50},

  // bottom
  b_10: {paddingBottom: 10},
  b_20: {paddingBottom: 20},
  b_20_percent: {paddingBottom: '20%'},
  b_50: {paddingBottom: 50},

  // left
  l_0: {paddingLeft: 0},
  l_5: {paddingLeft: 5},
  l_10: {paddingLeft: 10},
  l_20: {paddingLeft: 20},
  l_40: {paddingLeft: 40},
  // horizontal
  x_0: {paddingHorizontal: 0},
  x_8: {paddingHorizontal: 8},
  x_10: {paddingHorizontal: 10},
  x_20: {paddingHorizontal: 20},
  // vertical
  y_20: {paddingVertical: 20},
  y_40: {paddingVertical: 40},
  y_5: {paddingVertical: 5},
  y_10: {paddingVertical: 10},

  // right
  r_10: {paddingRight: 10},
  r_20: {paddingRight: 20},
});

export const margin = StyleSheet.create({
  zero: {marginBottom: 0, marginTop: 0, marginLeft: 0, marginRight: 0},
  // bottom
  b_0: {marginBottom: 0},
  b_2: {marginBottom: 2},
  b_5: {marginBottom: 5},
  b_10: {marginBottom: 10},
  b_15: {marginBottom: 15},
  b_20: {marginBottom: 20},
  b_30: {marginBottom: 30},
  b_40: {marginBottom: 40},
  b_50: {marginBottom: 50},
  // vertical
  y_5: {marginVertical: 5},
  y_10: {marginVertical: 10},
  y_20: {marginVertical: 20},
  y_30: {marginVertical: 30},

  // horizontal
  x_0: {marginHorizontal: 0},
  x_5: {marginHorizontal: 5},
  x_10: {marginHorizontal: 10},
  x_20: {marginHorizontal: 20},
  // top
  t_1: {marginTop: 1},
  t_5: {marginTop: 5},
  t_10: {marginTop: 10},
  t_12: {marginTop: 12},
  t_15: {marginTop: 15},
  t_20: {marginTop: 20},
  t_30: {marginTop: 30},
  t_40: {marginTop: 40},
  t_50: {marginTop: 50},
  // right
  r_5: {marginRight: 5},
  r_8: {marginRight: 8},
  r_10: {marginRight: 10},
  // left
  l_5: {marginLeft: 5},
  l_30: {marginLeft: 30},
});
export const width = StyleSheet.create({
  // percentage
  half: {width: '50%'},
  sixty: {width: '60%'},
  ninety: {width: '90%'},
  full: {width: '100%'},
  // min
  min_full: {minWidth: '100%'},
  // max
  max_full: {maxWidth: '100%'},
  // absolute
  12: {width: normalizeDimension(12)},
  14: {width: normalizeDimension(14)},
  16: {width: normalizeDimension(16)},
  21: {width: normalizeDimension(21)},
  24: {width: normalizeDimension(24)},
  30: {width: normalizeDimension(30)},
  50: {width: normalizeDimension(50)},
  65: {width: normalizeDimension(65)},
  70: {width: normalizeDimension(70)},
  90: {width: normalizeDimension(90)},
  170: {width: normalizeDimension(170)},
  215: {width: normalizeDimension(215)},
  280: {width: normalizeDimension(280)},
});
export const height = StyleSheet.create({
  // percentage
  full: {height: '100%'},
  half: {height: '50%'},
  // min
  min_full: {minHeight: '100%'},
  min_32: {minHeight: normalizeDimension(32, 'height')},
  min_78: {minHeight: normalizeDimension(78, 'height')},
  min_150: {minHeight: normalizeDimension(150, 'height')},
  // absolute
  12: {height: normalizeDimension(12, 'height')},
  14: {height: normalizeDimension(14, 'height')},
  16: {height: normalizeDimension(16, 'height')},
  20: {height: normalizeDimension(20, 'height')},
  21: {height: normalizeDimension(21, 'height')},
  30: {height: normalizeDimension(30, 'height')},
  40: {height: normalizeDimension(40, 'height')},
  50: {height: normalizeDimension(50, 'height')},
  60: {height: normalizeDimension(60, 'height')},
  65: {height: normalizeDimension(65, 'height')},
  70: {height: normalizeDimension(70, 'height')},
  90: {height: normalizeDimension(90, 'height')},
  97: {height: normalizeDimension(97, 'height')},
  130: {height: normalizeDimension(130, 'height')},
  150: {height: normalizeDimension(150, 'height')},
  160: {height: normalizeDimension(160, 'height')},
  200: {height: normalizeDimension(200, 'height')},
  210: {height: normalizeDimension(210, 'height')},
});
