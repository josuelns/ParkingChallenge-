import axios from 'axios';
import Cookies from 'js-cookie';

export default axios.create({
  baseURL: process.env.REACT_APP_URL_CONFIG,
  headers: {
    Authorization: Cookies.get('parking-token'),
  },
});
