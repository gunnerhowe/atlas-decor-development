import axios from 'axios';

export default async function handler(req, res) {
    const url = `https://api.printify.com/v1/catalog/blueprints/1130/print_providers/66/variants.json`;
    var getShop = await axios.get(url, {
        headers: {
            authorization: 'Bearer ' + process.env.PRINTIFY_KEY
        }
    });

    console.log(getShop.data)
    res.json(getShop.data);
}