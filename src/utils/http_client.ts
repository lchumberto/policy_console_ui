import axios from 'axios';

import { ArgumentError } from 'common-errors';

import { HTTP_TIMEOUT_MILLISECONDS } from '../config';

axios.defaults.timeout = HTTP_TIMEOUT_MILLISECONDS;

class HttpClient {
  public static get(url: string, config?: object) {
    this.validateUrl(url);
    return axios.get(url, config);
  }

  public static delete(url: string, config?: object) {
    this.validateUrl(url);
    return axios.delete(url, config);
  }

  public static post(url: string, data: object = {}, config?: object) {
    this.validateUrl(url);
    return axios.post(url, data, config);
  }

  public static put(url: string, data: object = {}, config?: object) {
    this.validateUrl(url);
    return axios.put(url, data, config);
  }

  public static patch(url: string, data: object = {}, config?: object) {
    this.validateUrl(url);
    return axios.patch(url, data, config);
  }

  private static validateUrl(url: string) {
    if (!url) {
      throw new ArgumentError('Empty URL');
    }
  }

  private constructor() {
  }
}

export default HttpClient;
