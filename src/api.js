import axios from 'axios'

export const userApi =  axios.create({
    baseURL:'https://uinames.com/api/'
});

export const mainPageApi =  axios.create({
    baseURL:'https://api.publicapis.org/random'
});