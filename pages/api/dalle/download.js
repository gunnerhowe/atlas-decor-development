import axios from "axios";

export default async function handler(req, res) {

  console.log('starting base')

  const url = req.body.url;

  console.log(url)

  const response = await axios.get(url, {
    responseType: "arraybuffer",
  },
     {headers: {
          Authorization: "Bearer sess-zZMIcPlTNMom0iLCxV1jggZ3eV4EaEjKSdyNJaWK"}
      });

  const base64 = Buffer.from(response.data, "binary").toString("base64");

  res.status(200).json({ result: base64 });

}