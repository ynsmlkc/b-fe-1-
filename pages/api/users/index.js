import dbConnect from "@/util/dbConnect";
import User from "@/models/User";

const handler = async (req, res) => {
  try {
    await dbConnect();
  } catch (err) {
    console.error("Database connection error:", err);
    return res.status(500).json({ error: "External API route error" });
  }

  const { method } = req;

  if (method === "GET") {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to fetch users" });
    }
  }
  if (method === "POST") {
    try {
      const newUser = await User.create(req.body);
      res.status(200).json(newUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to create user" });
    }
  }
};

export default handler;
