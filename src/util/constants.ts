export const appConstants = {
  notAvailableString: 'N/A',
  noImageUrl: 'https://static.thenounproject.com/png/3674271-200.png',
  appBaseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '9618b5cf6ae9661f92fff553c697bed4',
  imageBaseUrl: 'https://image.tmdb.org/t/p/w200',
};

export const networkConstants = {
  getTopRatedMovies: 'movie/top_rated',
};

export const appStrings = {
  error: 'Error',
  warning: 'Warning',
  success: 'Success',
  somethingWentWrong: 'Something went wrong while fetching data',
  noNetworkConnectivity: 'You have lost your network connectivity',
};

export enum Status {
  idle,
  error,
  success,
  fotterLoading,
}

export enum ToastType {
  success = 'success',
  error = 'error',
  info = 'info',
}
