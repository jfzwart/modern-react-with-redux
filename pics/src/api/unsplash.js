import axios from 'axios';

// setting up pre configured client

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ohJ4w3VVqJbPJC3KWSgmTLsMplCsD20auiEruZKrNkA'
    }
})

