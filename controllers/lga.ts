import { Request, Response } from "express";
import { db } from "../config/db_config";

export const fetchLGAs = async (req: Request, res: Response) => {
	try {
		const lgas = await db.lga.findMany();

		return res.status(200).json({
			success: true,
			message: "Successfully fetched records",
			data: lgas,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Server Error. An error occured while fetching records",
			error,
		});
	}
};
