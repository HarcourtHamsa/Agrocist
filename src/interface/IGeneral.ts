import {ImageSourcePropType} from 'react-native';

export interface GeneralObject {
  [key: string]: any;
}

export interface IOptions {
  id: number;
  text: string;
  image: ImageSourcePropType;
}
