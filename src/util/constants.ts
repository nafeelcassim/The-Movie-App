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
  ERROR: 'Error',
  WARNING: 'Warning',
  SUCCESS: 'Success',
  SOMETHING_WENT_WRONG: 'Something went wrong while fetching data',
};

export enum Status {
  idle,
  error,
  success,
  fotterLoading,
}

export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
}
