import {StyleSheet} from 'react-native';
import {APP_WHITE} from './constant';

export const flex = StyleSheet.create({
  flex_1: {flex: 1},
  row: {flexDirection: 'row'},
  column: {flexDirection: 'column'},
  grow_1: {flexGrow: 1},
  justifyStart: {justifyContent: 'flex-start'},
  justifyEnd: {justifyContent: 'flex-end'},
  justifyCenter: {justifyContent: 'center'},
  justifyBetween: {justifyContent: 'space-between'},
  justifyAround: {justifyContent: 'space-around'},
  alignStart: {alignItems: 'flex-start'},
  alignCenter: {alignItems: 'center'},
  alignEnd: {alignItems: 'flex-end'},
  selfCenter: {alignSelf: 'center'},
  selfEnd: {alignSelf: 'flex-end'},
});

export const border = StyleSheet.create({
  radius_4: {borderRadius: 4},
  radius_6: {borderRadius: 6},
  radius_8: {borderRadius: 8},
  radius_12: {borderRadius: 12},
  radius_20: {borderRadius: 20},
  radius_23: {borderRadius: 23},
  radius_25: {borderRadius: 25},
  width_half: {borderWidth: 0.5},
  width_1: {borderWidth: 1},
  width_2: {borderWidth: 2},
  radius_top_right_8: {borderTopRightRadius: 8},
  radius_bottom_right_8: {borderBottomRightRadius: 8},
  radius_top_left_8: {borderTopLeftRadius: 8},
  radius_bottom_left_8: {borderBottomLeftRadius: 8},
  //
  color_white: {borderColor: APP_WHITE},
});

export const position = StyleSheet.create({
  absolute: {position: 'absolute'},
  relative: {position: 'relative'},
  bottom_0: {bottom: 0},
});
export const elevation = StyleSheet.create({
  four: {elevation: 4},
});
export const image = StyleSheet.create({
  aspect_1: {aspectRatio: 1},
});
