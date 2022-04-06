import {
  check,
  request,
  PERMISSIONS,
  openSettings,
  openLimitedPhotoLibraryPicker,
  RESULTS,
} from 'react-native-permissions';

import {PermissionsAndroid, Platform} from 'react-native';
import {displayToastMessage} from 'utils/display';

type PermissionStatus =
  | 'unavailable'
  | 'denied'
  | 'limited'
  | 'granted'
  | 'blocked';

export const requestCameraPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'TaskMePro needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      // If CAMERA Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  } else return true;
};

export const requestExternalWritePermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'External Storage Write Permission',
          message: 'TaskMePro needs write permission',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      // If WRITE_EXTERNAL_STORAGE Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      console.log('Write permission err', err);
    }
    return false;
  } else return true;
};

export const requestCameraPermissionsV2 = (launchCamera: () => void) => {
  try {
    check(PERMISSIONS.ANDROID.CAMERA).then(async (result: PermissionStatus) => {
      console.log({result});
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)',
          );
          break;
        case RESULTS.DENIED:
          console.log(
            'The permission has not been requested / is denied but requestable',
          );
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Cool Photo App Camera Permission',
              message:
                'Cool Photo App needs access to your camera ' +
                'so you can take awesome pictures.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the camera');
          } else {
            console.log('Camera permission denied');
          }
          // request(PERMISSIONS.ANDROID.CAMERA)
          //   .then(result => {
          //     console.log({result});
          //     launchCamera();
          //   })
          //   .catch(error => {
          //     launchCamera();
          //     console.log({error});
          //   });
          break;
        case RESULTS.LIMITED:
          console.log('The permission is limited: some actions are possible');
          break;
        case RESULTS.GRANTED:
          console.log('The permission is granted');
          break;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          break;
        default:
          console.log('Got to the final stage');
          break;
      }
      // if (result === 'denied') {
      //   request(
      //     Platform.OS === 'ios'
      //       ? PERMISSIONS.IOS.CAMERA
      //       : PERMISSIONS.ANDROID.CAMERA,
      //   ).then(request => {
      //     console.log({request}, 'REQUEST');
      //     requestCameraPermissionsV2(launchCamera);
      //   });
      // } else if (result === 'unavailable') {
      //   displayToastMessage('Permission cannot be granted');
      // } else if (result === 'limited') {
      //   displayToastMessage('Limited Permissions');
      //   launchCamera();
      // } else if (result === 'blocked') {
      //   displayToastMessage(
      //     'Permission blocked. Update permissions in settings to proceed',
      //   );
      //   setTimeout(
      //     () =>
      //       openSettings().catch(() => console.warn('cannot open settings')),
      //     2000,
      //   );
      // } else if (result === 'granted') {
      //   launchCamera();
      // }
    });
  } catch (error) {
    displayToastMessage('An error occurred');
  }
};

export const requestFilePermissionsV2 = (
  chooseImage: (value?: any) => void,
) => {
  try {
    check(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    ).then((result: PermissionStatus) => {
      console.log({result});
      if (result === 'denied') {
        displayToastMessage('Denied');
        // request(
        //   Platform.OS === 'ios'
        //     ? PERMISSIONS.IOS.PHOTO_LIBRARY
        //     : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        // )
        //   .then(request => {
        //     console.log({request}, 'REQUEST');
        //     requestFilePermissionsV2(chooseImage);
        //   })
        //   .catch(error => console.log({error}));
      } else if (result === 'unavailable') {
        displayToastMessage('Permission cannot be granted');
      } else if (result === 'limited') {
        openLimitedPhotoLibraryPicker()
          .then(res => {
            console.log({res});
            chooseImage(res);
          })
          .catch(() => {
            displayToastMessage('Cannot open photo library picker');
          });
        // displayToastMessage(
        //   'Cannot open photo library picker. Limited Permission',
        // );
      } else if (result === 'blocked') {
        displayToastMessage(
          'Permission blocked. Update permissions in settings to proceed',
        );
        setTimeout(
          () =>
            openSettings().catch(() => console.warn('cannot open settings')),
          2000,
        );
      } else if (result === 'granted') {
        chooseImage();
      }
    });
  } catch (error) {
    displayToastMessage('An error occurred');
  }
};
