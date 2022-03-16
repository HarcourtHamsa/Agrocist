import {IResponse} from 'interface/Request';
import {LOGIN, LOG_OUT, PROFILE} from 'utils/api/constant';
import networkRequest from 'utils/api/networkRequest';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN} from 'utils/data/constant';
import {catchHelper} from 'utils/display';
import {
  UPDATE_USER_DATA,
  USER_AUTHENTICATION,
  USER_LOGOUT,
} from 'store/constant';
import {Dispatch} from 'redux';

type loadingStateSetter = React.Dispatch<
  React.SetStateAction<{
    loading: boolean;
    error: string;
  }>
>;

export const initiateLogin = async (
  dispatch: Dispatch<any>,
): Promise<boolean> => {
  try {
    await dispatch({
      type: USER_AUTHENTICATION,
      payload: null,
    });
    return true;
  } catch (error) {
    return false;
  }
};

export const initiateAuthorization = async (
  mobileNumber: string,
  pin: string,
  setLoadingAndError: loadingStateSetter,
  dispatch: Dispatch<any>,
): Promise<boolean> => {
  try {
    const model = {phonenumber: mobileNumber, password: pin};
    const request: IResponse = await networkRequest.post(LOGIN, model);

    if (request.success === true && request.access_token) {
      await AsyncStorage.setItem(TOKEN, request.access_token);
      await dispatch({
        type: UPDATE_USER_DATA,
        payload: request.user,
      });
      return true;
    }
    catchHelper(setLoadingAndError, request, `Login Failed`);
    return false;
  } catch (error) {
    catchHelper(setLoadingAndError, error, `Network Error`);
    return false;
  }
};

export const updateUserData = async (
  dispatch: Dispatch<any>,
): Promise<boolean> => {
  try {
    const request: IResponse = await networkRequest.get(PROFILE);
    console.log({request});
    // await dispatch({
    //   type: UPDATE_USER_DATA,
    //   payload: request,
    // });
    return true;
  } catch (error) {
    return false;
  }
};
export const logoutUser = async (dispatch: Dispatch<any>): Promise<boolean> => {
  try {
    await networkRequest.post(LOG_OUT, {});
    await dispatch({
      type: USER_LOGOUT,
      payload: null,
    });
    return true;
  } catch (error) {
    return false;
  }
};
