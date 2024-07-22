import { Request, Response } from "express";
import { db } from "../config/db_config.js";

export const fetchLGAs = async (req: Request, res: Response) => {
	try {
		const lgas = await db.lga.findMany();

		return res.status(200).json({
			success: true,
			message: "Successfully fetched records",
			data: lgas,
		});
	} catch (error) {
		console.error(error);

return res.status(500).json({
			success: false,
			message: "Server Error. An error occured while fetching records",
			error,
		});
	}
};

export const fetchTotalLGAs = async (req: Request, res: Response) => {
	try {
		const lgas = await db.lga.count();

		return res.status(200).json({
			success: true,
			message: "Successfully fetched records",
			data: lgas,
		});
	} catch (error) {
		console.error(error);

return res.status(500).json({
			success: false,
			message: "Server Error. An error occured while fetching records",
			error,
		});
	}
};
