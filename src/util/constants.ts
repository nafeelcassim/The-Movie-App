export const appConstants = {
  notAvailableString: 'N/A',
  noImageUrl: 'https://static.thenounproject.com/png/3674271-200.png',
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
