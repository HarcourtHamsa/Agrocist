import {Dimensions, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const designWidth = 380;
const designHeight = 815;

const widthBaseScale = SCREEN_WIDTH / designWidth;
const heightBaseScale = SCREEN_HEIGHT / designHeight;

export const normalizeDimension = (
  size: number,
  based?: 'width' | 'height',
) => {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
