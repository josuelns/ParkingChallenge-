import axios from 'axios';
import Cookies from 'js-cookie';

export default axios.create({
  baseURL: 'https://parking-lot-to-pfz.herokuapp.com',
  headers: {
    Authorization: Cookies.get('parking-token'),
  },
});

export const axiosConfig = {
  headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
  }
}
