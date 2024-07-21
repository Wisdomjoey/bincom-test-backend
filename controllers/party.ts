import { Request, Response } from "express";
import { db } from "../config/db_config.js";

export const fetchParties = async (req: Request, res: Response) => {
	try {
		const parties = await db.party.findMany();

		return res
			.status(200)
			.json({
				success: true,
				message: "Successfully fetched records",
				data: parties,
			});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Server Error. An error occured while fetching records",
			error,
		});
	}
};
