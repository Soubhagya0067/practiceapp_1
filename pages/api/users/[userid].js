import connectMongo from "../../../backend/conn";
import { getUser,  putUsers, deleteUsers } from "../../../controller/userController";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the connection" })
  );

  //type of request
  const { method } = req;

  switch (method) {
    case "GET":
        getUser(req,res)
      break;
    case "PUT":
        putUsers(req, res)
      break;
    case "DELETE":
        deleteUsers(req, res)
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end("Method ${method} not Allowed");
      break;
  }
}
