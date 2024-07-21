import { Request, Response } from "express";
import { db } from "../config/db_config";

export const fetchAgents = async (req: Request, res: Response) => {
	try {
		const agents = await db.agentname.findMany();

		return res.status(200).json({
			success: true,
			message: "Successfully fetched records",
			data: agents,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Server Error. An error occured while fetching records",
			error,
		});
	}
};
