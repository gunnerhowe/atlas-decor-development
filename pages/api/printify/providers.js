import axios from 'axios';

export default async function handler(req, res) {
    //get all providers
     const url = `https://api.printify.com/v1/catalog/print_providers.json`;
    var getShop = await axios.get(url, {
        headers: {
            authorization: 'Bearer ' + process.env.PRINTIFY_KEY
        }
    });

    console.log(getShop.data)
    res.json(getShop.data);
}
