import axios from 'axios';

export const getCategories = () => {
  return {
    type: 'GET_CATEGORIES',
    payload: axios.get('http://192.168.100.51:3000/category')
  }
}

export const addCategories = (data) => {
  return {
    type: 'POST_CATEGORIES',
    payload: axios.post('http://192.168.100.51:3000/category', {
      name: data 
    })
  }
}
