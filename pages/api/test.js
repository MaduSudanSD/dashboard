import { connectToDatabase } from "../../utils/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  //console.log(db)

  const test = await db.collection('FirstProject').find({}).toArray();

  res.json(test);
};