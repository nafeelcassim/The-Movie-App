import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {appConstants, ToastType} from './constants';
import NetInfo from '@react-native-community/netinfo';

// Function to get and set image if any errors
export const getImage = (isError: boolean, path?: string): string => {
  if (isError) {
    return appConstants.noImageUrl;
  }
  if (!path) {
    return appConstants.noImageUrl;
  }
  const imageUrl = `${appConstants.imageBaseUrl}${path}`;
  return imageUrl;
};

// Function to show toast data
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

// Function to check network connectivity
export const isNetworkConnected = async (): Promise<boolean> => {
  try {
    const state = await NetInfo.fetch();
    if (!state) {
      return false;
    }
    return state.isConnected ?? false;
  } catch (error) {
    return false;
  }
};
