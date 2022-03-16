import Toast from 'react-native-simple-toast';

export const formatError = (error: any, collection: string): string => {
  const errorMessage =
    error?.message.split(']')[1] ??
    error.toString() ??
    error?.message ??
    'An error occurred';
  let finalMessage = `${errorMessage} ${collection ?? ''}`;
  console.log({finalMessage});
  if (
    errorMessage.includes(`The caller does not have permission to execute`) &&
    (collection === 'client_notifications' || collection === 'active_tasks')
  ) {
  } else {
    Toast.show(finalMessage, Toast.LONG);
  }
  return finalMessage;
};
