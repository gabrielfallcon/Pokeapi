import axios from 'axios';

const createNewRequest = (param: string) => {
  const newRequest =  axios.create({
    baseURL: param,
  })
}

export default createNewRequest