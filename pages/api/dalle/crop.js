import { Configuration, OpenAIApi } from "openai";
import request from 'request';
import gm from 'gm';
import { response } from "express";
import aws from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {

  const newData = req.body

    const width = 512
    const height = 0

    const base = async () => {
        const response = await axios.get(url, {
            responseType: "arraybuffer",
          },
             {headers: {
                  Authorization: "Bearer sess-zZMIcPlTNMom0iLCxV1jggZ3eV4EaEjKSdyNJaWK"}
              });
        
          const base64 = Buffer.from(response.data, "binary").toString("base64");
        
          res.status(200).json({ result: base64 });
    }

    const loadS3 = async () => {
        const region = "us-east-1";
        const bucketName = "atlastattoo";
        const accessKeyId = process.env.AW_USER_KEY;
        const secretAccessKey = process.env.AW_USER_SECRET;

        const s3 = new aws.S3({
            region,
            accessKeyId,
            secretAccessKey,
            signatureVersion: 'v4'
        })

        const imageName = uuidv4();

        const params = ({
            Bucket: bucketName,
            Key: imageName,
            Expires: 60
        });

        const uploadURL = await s3.getSignedUrlPromise('putObject', params);

        let baseData = await base(file.url);

        const getURL = await fetch("/api/dalle/s3").then(res => res.json());
        console.log(getURL)

        //post the image directly to the s3 bucket
        await fetch(getURL, {
            method: "PUT",
            headers: {
            "Content-Type": 'image/png',
            "Content-Encoding": 'base64',
            },
            body: baseData,
        })

        const varImage = getURL.split('?')[0];
    }

    gm(newData.url)
        .crop(width, height)
        .write('./tmp.png', (err) => {
            if (err) {
                console.log(err);
            } else {
                loadS3()
            }
        })

      res.json(response.data.data);
  }