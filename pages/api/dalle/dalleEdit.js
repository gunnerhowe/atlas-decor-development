import { Configuration, OpenAIApi } from "openai";
import request from 'request';

export default async function handler(req, res) {

  const newData = req.body

  //const size = newData.size
  const size = "1024x1024"
  const user = newData.user
  const n = newData.n
  //const prompt = newData.prompt
  const prompt = "digital art"
  //const original = "https://atlastattoo.s3.amazonaws.com/057a4b07-3f5c-49b6-83d5-c237ef278d04"
  //const mask = "https://atlastattoo.s3.amazonaws.com/61632ff2-c0d7-4988-95a0-0f6815a12a13"
  //const mask = newData.url

  console.log('starting the image generation')

  //////////TEST///////////
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createImageEdit(
    //request(original),
    request(newData.url),
    prompt,
    1,
    //size,
    //user
  );

      res.json(response.data.data);
  }