import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
    const newData = req.body

    console.log(newData)

   try {
       const client = await clientPromise;
       const db = client.db("Atlas_Interior");

       const credits = await db
        .collection("credits")
        .updateOne(
            {email: newData.email},
            {
                $set: {email: newData.email,
                        credits: 3},
            },
            {
                upsert: true
            }
        )
        res.json(credits);
   } catch (e) {
       console.error(e);
   }
};