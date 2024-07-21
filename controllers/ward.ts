import { Request, Response } from "express";
import { db } from "../config/db_config.js";

export const fetchWards = async (req: Request, res: Response) => {
	try {
		const wards = await db.ward.findMany();

		return res.status(200).json({
			success: true,
			message: "Successfully fetched records",
			data: wards,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Server Error. An error occured while fetching records",
			error,
		});
	}
};

export const fetchLGAWards = async (req: Request, res: Response) => {
	try {
		const { lga_id } = req.body
		const wards = await db.ward.findMany({ where: { lga_id } });

		return res.status(200).json({
			success: true,
			message: "Successfully fetched records",
			data: wards,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Server Error. An error occured while fetching records",
			error,
		});
	}
};

export const fetchTotalWards = async (req: Request, res: Response) => {
	try {
		const count = await db.ward.count();

		return res.status(200).json({
			success: true,
			message: "Successfully fetched records",
			data: count,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Server Error. An error occured while fetching records",
			error,
		});
	}
};
