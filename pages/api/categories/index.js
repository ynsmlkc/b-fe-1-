import dbConnect from "@/util/dbConnect";
import Category from "@/models/Category";

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
            const categories = await Category.find();
            res.status(200).json(categories);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Failed to fetch categories" });
        }
    }
    if (method === "POST") {
        try {
            const newCategory = await Category.create(req.body);
            res.status(200).json(newCategory);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Failed to create category" });
        }
    }
};

export default handler;
