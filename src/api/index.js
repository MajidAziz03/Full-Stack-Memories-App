import axios from 'axios'
const url = 'http://localhost:5000/posts'


// export const fetchUrl = ()=> axios.get(url)

const fetchUrl = async () => {
    const res = await axios.get(url)
}

export default fetchUrl;