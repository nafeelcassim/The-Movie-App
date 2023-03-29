import {Toast} from 'react-native-toast-message/lib/src/Toast';
import config from './config';
import {appConstants, ToastType} from './constants';

export const getImage = (isError: boolean, path?: string): string => {
  if (isError) {
    return appConstants.noImageUrl;
  }
  if (!path) {
    return appConstants.noImageUrl;
  }
  const imageUrl = `${config.apiImageUrl}${path}`;
  return imageUrl;
};

export const showToastData = (
  toastType: ToastType,
  title: string,
  description: string,
) => {
  Toast.show({
    type: toastType,
    text1: title,
    text2: description,
    position: 'top',
    visibilityTime: 3000,
  });
};
