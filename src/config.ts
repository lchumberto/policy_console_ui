export const HTTP_TIMEOUT_MILLISECONDS: number = parseInt(
  process.env.REACT_APP_HTTP_TIMEOUT_MILLISECONDS || '',
  10,
);
export const API_URL: string = process.env.REACT_APP_API_URL || '';
