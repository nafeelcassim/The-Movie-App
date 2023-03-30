import {appConstants} from './constants';

// Function to get and set image if any errors
export const mockGetImageFunc = (isError: boolean, path?: string): string => {
  if (isError) {
    return appConstants.noImageUrl;
  }
  if (!path) {
    return appConstants.noImageUrl;
  }
  const imageUrl = `${appConstants.imageBaseUrl}${path}`;
  return imageUrl;
};
