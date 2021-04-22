const ServerCall = ({method, url, request, data}) => {
  return axios({
    method: method,
    url: url,
    // data: data,
    data: method === 'post' ? data : null,
  });
};

export default ServerCall;
