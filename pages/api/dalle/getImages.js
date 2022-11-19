import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
    const newData = req.body;

   try {
       const client = await clientPromise;
       const db = client.db("Atlas_Interior");

       const results = await db
            .collection("images")
            .find({email: newData.email})
            .sort({_id: -1})
            .skip(Number(newData.skip))
            .limit(1)
            .toArray()

            res.json(results);

   } catch (e) {
       console.error(e);
   }
};