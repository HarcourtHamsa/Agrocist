import axios, {AxiosResponse, AxiosError} from 'axios';

const instance = axios.create({
  baseURL: 'https://agrocist-api-dev.herokuapp.com/api/v1/',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
});

instance.interceptors.request.use(
  async function (config) {
    // Do something before request is sent
    const token = '';

    if (token !== undefined) {
      // We have data!!
      console.log({token});
      config.headers!.Authorization = token;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  async function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const tokenExpired: boolean =
      error?.response?.data?.message === 'expired token';

    if (tokenExpired) {
      console.log('EXPIRED TOKEN');
      const refreshMessage = {
        response: {data: {message: 'Refreshing, Try again'}},
      };
      return Promise.reject(refreshMessage);
    }
    return Promise.reject(error);
  },
);

export default {
  get(url: string, request?: any) {
    return instance
      .get(url, request)
      .then((response: AxiosResponse) => Promise.resolve(response.data))
      .catch(error => Promise.reject(error?.response?.data));
  },
  post(url: string, request: any): any {
    console.log({url});
    return instance
      .post(url, request)
      .then(response => {
        return Promise.resolve(response.data);
      })
      .catch((error: AxiosError) => {
        console.log(JSON.stringify(error), 'error calling');
        return Promise.resolve(error?.response?.data);
      });
  },

  put(url: string, request: any) {
    return instance
      .put(url, request)
      .then(response => Promise.resolve(response.data))
      .catch((error: AxiosError) => {
        console.log(JSON.stringify(error), 'error calling');
        return Promise.resolve(error?.response?.data);
      });
  },
  patch(url: string, request: any) {
    return instance
      .patch(url, request)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.resolve(error?.response?.data));
  },
  delete(url: string, request: any) {
    return instance
      .delete(url, {data: request})
      .then(response => Promise.resolve(response))
      .catch(error => Promise.resolve(error?.response?.data));
  },
};
