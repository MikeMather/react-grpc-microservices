import { API_ENDPOINT } from '../utils/constants';

console.log('Endpoint: ', API_ENDPOINT);
console.log('Hopefully this will help')
const Api = (endpoint: string) => {
    const url = API_ENDPOINT + endpoint
    return {
        getAll: () => fetch(url, {
            headers: {'Access-Control-Allow-Origin': '*'}
        }),
        update: (data: object) => {
            return fetch(url, 
                {
                    method: 'PUT', 
                    body: JSON.stringify(data), 
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                })
        },
        create: (data: object) => {
            return fetch(url, 
                {
                    method: 'POST', 
                    body: JSON.stringify(data), 
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
        },
        delete: (id: any) => fetch(url + `/${id}`, {method: 'DELETE'}),
    }
};

export default Api;