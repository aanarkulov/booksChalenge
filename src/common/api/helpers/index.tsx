import axios, { AxiosResponse } from 'axios';
import { IDataBooks } from 'store/book/sagas';
import { basicUrl } from '../constant';

export const getBooksApi = (queryParams: string):Promise<AxiosResponse<IDataBooks>> => {
  const response = axios.get(`${basicUrl}?q=${queryParams}&maxResults=40`);
	return response;
};

export const getSortingBooksApi = (queryParams: string):Promise<AxiosResponse<IDataBooks>> => {
	const response = axios.get(`${basicUrl}?q=${queryParams}&maxResults=40`);
	return response;
};

export const getBookByIDApi = (queryParams: string):Promise<AxiosResponse<IDataBooks>> => {
	const response = axios.get(`${basicUrl}/${queryParams}`);
	return response;
};
