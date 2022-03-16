import {ImageSourcePropType} from 'react-native';

export interface GeneralObject {
  [key: string]: any;
}

export interface IOptions {
  id: number;
  text: string;
  image: ImageSourcePropType;
}

export interface IIntroItem {
  id: number;
  title: string;
  text: string;
  image: ImageSourcePropType;
  height: number;
  width: number;
}
