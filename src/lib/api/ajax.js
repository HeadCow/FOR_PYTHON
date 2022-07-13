import axios from "axios";

const BASE_URL = 'http://localhost:7001'

export default function ajax(url, params={}, method='GET') {
	
	return new Promise((resolve, reject) => {
		url = BASE_URL + url;
		console.log(url)
		let promise;
		if (method === 'GET') {
			promise = axios.get(url, {
				params: params
			});
		} else {
			promise = axios.post(url, params);
		}
		
		// 将response获得的结果设为promise的result
		promise.then(response => {
			resolve(response.data);
		});
	})
}
