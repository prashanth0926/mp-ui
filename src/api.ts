import axios from 'axios';
import { LOCATION_API } from './utils/constants';

export const addLocationData = async () => {
  const { data: locationData } = await axios(LOCATION_API);
  
  console.log('loc: ', locationData);

  // await axios.post('', locationData);
}