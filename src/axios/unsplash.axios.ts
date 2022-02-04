import axios from 'axios'

const instance= axios.create({
    baseURL:'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 4IizNsNJ-VfKj9HQuNT63r8Xx1w8wp0zkIHVMf3u0tw',
    }

})

instance.defaults.headers.common["Access-Control-Allow-Origin"] = `*`;

export default instance