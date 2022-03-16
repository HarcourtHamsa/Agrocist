import {INavigation} from 'interface/IComponent';
import {useCallback} from 'react';
import {BackHandler} from 'react-native';

export const customBackNavigation = (navigation: INavigation, route: string) =>
  useCallback(() => {
    const onBackPress = () => {
      navigation.navigate(route);
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, []);
