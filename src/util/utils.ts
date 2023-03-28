import config from './config';
import {appConstants} from './constants';

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
