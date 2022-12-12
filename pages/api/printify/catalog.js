import axios from 'axios';

export default async function handler(req, res) {
    //catalog blueprints
     const url = 'https://api.printify.com/v1/catalog/blueprints.json';
    var getShop = await axios.get(url, {
        headers: {
            authorization: 'Bearer ' + process.env.PRINTIFY_KEY
        }
    });
    console.log(getShop.data);
    res.json(getShop.data); 
}