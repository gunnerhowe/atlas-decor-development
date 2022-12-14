import clientPromise from "../../../lib/mongodb";
import { hash, compare } from 'bcryptjs';

export async function hashPassword(password) {
    const hashedPassword = await hash(password, 12);
    return hashedPassword;
  }

export default async (req, res) => {

    const newData = req.body;

    const newName = newData.name

    let currentDate = new Date().toJSON().slice(0, 10);

      try {
        //establish connection
        const client = await clientPromise;
        const db = client.db("Atlas_Interior");

        if (newData.password) {
            const password = await hashPassword(newData.password);
            const update = await db
            .collection("users")
            .updateOne(
                {email: newData.email},
                {
                    $set: {email: newData.email,
                            name: newName,
                            password: password,
                            date: currentDate},
                },
                {
                    upsert: true
                }
            )
            res.json(update);
        } else {
            const update = await db
            .collection("users")
            .updateOne(
                {email: newData.email},
                {
                    $set: {email: newData.email,
                            name: newName,
                            date: currentDate}
                },
                {
                    upsert: true
                }
            )
            res.json(update);
        }
        
        } catch (e) {
        console.error(e);
    }
};