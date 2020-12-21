const axios = require('axios').default;

export default function request(url: string, requestConfig: Record<string, any> = {}, requestUtils: Record<string, any> = {}) {
  const { CancelToken } = axios;
  const source = CancelToken.source();
  requestConfig = {
    method: 'GET',
    url,
    cancelToken: source.token,
    ...requestConfig,
    headers: {
      ...requestConfig.headers
    }
  };
  Object(requestUtils).cancel = () => {
    source.cancel('Operation canceled by the user.');
  };
  return axios(requestConfig)
    .then((res: any) => res.data);
}