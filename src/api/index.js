import axios from 'axios'

export default axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
        'content-type':'application/json'
    }
});

// export default {
//     getProducts: (page = 1, limit = 12, search='', category='') =>
//     instance({
//         'method': 'GET',
//         'url': '/products',
//         'params': {
//             'skip': (page - 1) * limit,
//             'limit': limit,
//             'search': search,
//             'category': category
//         }
//     })
// }
