import {HERE_MAP_API_KEY, YELPS_API_KEY} from '../common/secret-key.tsx';

class Provider {
  async getMainList(req?: any): Promise<any> {
    const {latitude, longitude, category, sortby} = req;
    let url = `https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&limit=50`;
    if (sortby) {
      url = url + `&sort_by=${sortby}`;
    }
    if (category) {
      url = url + `&categories=${category}`;
    }
    console.log('url :: ', url);
    return fetch(url, {
      method: 'GET',
      headers: {
        Authorization: YELPS_API_KEY,
        body: JSON.stringify(req),
      },
    })
      .then(response => response.json())
      .catch(error => console.log('error:: ', error));
  }

  async getAddress(req?: any): Promise<any> {
    const {latitude, longitude} = req;
    const url = `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${latitude}%2C${longitude}&apiKey=${HERE_MAP_API_KEY}`;
    return fetch(url, {
      method: 'GET',
    })
      .then(response => response.json())
      .catch(error => console.log('error:: ', error));
  }
}

export default new Provider();
