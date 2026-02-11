import dbConnect from "@/util/dbConnect";
import User from "@/models/User";
import * as bcrypt from "bcryptjs";

const handler = async (req, res) => {
    try {
        await dbConnect();
    } catch (err) {
        console.error("Database connection error:", err);
        return res.status(500).json({ error: "External API route error" });
    }

    const { method, query: { id } } = req;

    if (method === "GET") {
        try {
            const user = await User.findById(id);
            res.status(200).json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Failed to fetch user" });
        }
    }
    if (method === "PUT") {
        try {
            if (req.body.password) {
                req.body.password = bcrypt.hashSync(req.body.password, 10);
            }
            const users = await User.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json(users);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Failed to fetch user" });
        }
    }
};

export default handler;
