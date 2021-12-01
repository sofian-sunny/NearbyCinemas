import {http} from './api';

export const fetchApiData = async (payload: any) => {
  const {url, headers} = payload;
  const {data} = await http.get(url, {headers});
  return data;
};
