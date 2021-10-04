import Axios from 'axios';
import getConfig from 'next/config';
const {
  serverRuntimeConfig,
} = getConfig();

const getProjects = async () => {
  const result = await Axios.post('https://api.jsonbin.io/b/615b122a4a82881d6c5aac75', {}, {
    headers: {
      'request-from': 'WEBSITE',
    },
  });

  return {
    result,
  }
}

export default getProjects;