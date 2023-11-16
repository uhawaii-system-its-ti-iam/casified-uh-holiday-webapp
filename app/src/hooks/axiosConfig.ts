import axios from 'axios';
import {URL_DATA_ROOT} from '../constants/constants';

export default axios.create({
    baseURL: URL_DATA_ROOT,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});