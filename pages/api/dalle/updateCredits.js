import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {

    const newData = req.query;

      try {
        //establish connection
        const client = await clientPromise;
        const db = client.db("Atlas_Interior");

        const update = await db
        .collection("credits")
        .updateOne(
            {email: newData.email},
            {
                $set: {credits: Number(newData.credits)},
            }
        )
        res.json(update);
        
        } catch (e) {
        console.error(e);
    }
};