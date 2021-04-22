import AxiosInstance from 'src/api/interceptorCall';
import request from '../api/request';

export async function getCurrentUser() {
  return request.call({
    url: `/user/me`,
    method: 'GET',
  });
}
