import axios from 'axios';

const LOG_TAG = 'HttpClient >>';

const BASE_URL = 'https://api.github.com/';

var HttpClient = (function () {
  let service = axios.create({
    headers: {},
  });

  service.interceptors.response.use(handleSuccess, handleError);

  function handleSuccess(response: any) {
    return response;
  }

  function handleError(error: any) {
    switch (error?.response?.status) {
      case 401:
        console.log(LOG_TAG, 'Error: 401');

        break;
      case 404:
        console.log(LOG_TAG, 'Error: 401');
        break;
      default:
        console.log(LOG_TAG, error.response.status);
        break;
    }
    return Promise.reject(error);
  }

  return {
    get: function (path: string) {
      return service.get(`${BASE_URL}${path}`);
    },
  };
})();

export default HttpClient;
