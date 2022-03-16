import Toast from 'react-native-simple-toast';

export const displayToastMessage = (message: string) => {
  try {
    return Toast.show(message, Toast.LONG);
  } catch (error) {
    console.log({error});
  }
};

const setLoaderState = (
  setLoadingAndError: React.Dispatch<React.SetStateAction<any>>,
  value: boolean,
): void => {
  setLoadingAndError((oldState: any) => ({
    ...oldState,
    loading: value,
  }));
};

export const stopLoader = (
  setLoadingAndError: React.Dispatch<React.SetStateAction<any>>,
): void => setLoaderState(setLoadingAndError, false);

export const startLoader = (
  setLoadingAndError: React.Dispatch<React.SetStateAction<any>>,
): void =>
  setLoadingAndError((oldState: any) => ({
    ...oldState,
    error: '',
    loading: true,
  }));

export const catchHelper = (
  setLoadingAndError: React.Dispatch<React.SetStateAction<any>>,
  error: any,
  errorMessage: string,
  hideToast?: boolean,
): void => {
  const errorMessageString =
    typeof error?.message === 'string'
      ? error.message
      : typeof error?.errors?.[0] === 'string'
      ? error.errors[0]
      : errorMessage;
  setLoadingAndError((oldState: any) => ({
    ...oldState,
    loading: false,
    error: errorMessageString,
  }));
  hideToast !== true && Toast.show(errorMessageString, Toast.LONG);
  return;
};
