import axios from 'axios';

export default async function handler(req, res) {

    //Get Shops
     const url = 'https://api.printify.com/v1/shops.json';
    var getShop = await axios.get(url, {
        headers: {
            authorization: 'Bearer ' + process.env.PRINTIFY_KEY
        }
    });
    console.log(getShop);
    res.json(getShop.data); 
}