import { connectToDatabase } from "../../utils/mongodb";

export default async (req, res) => {

  const { db } = await connectToDatabase();
  //console.log(db)
  console.log(req.method);

  if(req.method === 'POST'){
    const body = req.body
    console.log(body);
    res.status(200).json(body);
  }else{
    const debug = await db.collection('FirstProject').find({}).toArray();
    res.status(200).json(debug);
  }  
};