import dbConnect from "@/util/dbConnect";
import Category from "@/models/Category";

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
            const category = await Category.findById(id);
            res.status(200).json(category);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Failed to fetch category" });
        }
    }
    if (method === "DELETE") {
        try {
            const category = await Category.findByIdAndDelete(id);
            res.status(200).json(category);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Failed to delete category" });
        }
    }
};

export default handler;
