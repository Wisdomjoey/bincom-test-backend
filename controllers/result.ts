import { Request, Response } from "express";
import { db } from "../config/db_config.js";

export const fetchLGAResults = async (req: Request, res: Response) => {
	try {
		const results = await db.announced_lga_results.findMany();

		return res.status(200).json({
			success: true,
			message: "Successfully fetched records",
			data: results,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Server Error. An error occured while fetching records",
			error,
		});
	}
};

export const fetchPUResults = async (req: Request, res: Response) => {
	try {
		const results = await db.announced_pu_results.findMany();

		return res.status(200).json({
			success: true,
			message: "Successfully fetched records",
			data: results,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Server Error. An error occured while fetching records",
			error,
		});
	}
};
