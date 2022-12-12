import axios from 'axios';

export default async function handler(req, res) {
    //catalog blueprints
     console.log('made it to print')
    const files = [190,193,196,282,284,492,493,494,534,540,554,555,759,764,852,889,894,900,915,928,937,944,961,983,1024,1033,1061,1068,1098,1130,1140,1159,1191,1206,1220,1226,1236,1238]
    const print = []
    
    for (const file of files) {
    const url = `https://api.printify.com/v1/catalog/blueprints/${file}.json`;
    var getShop = await axios.get(url, {
        headers: {
            authorization: 'Bearer ' + process.env.PRINTIFY_KEY
        }
    });
    print.push(getShop.data);
    }
    console.log(print)
    res.json(print);

}