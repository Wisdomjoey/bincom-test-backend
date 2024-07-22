import { Request, Response } from "express";
import { db } from "../config/db_config.js";

export const fetchPollingUnits = async (req: Request, res: Response) => {
	try {
		const pollingUnits = await db.polling_unit.findMany();

		return res.status(200).json({
			success: true,
			message: "Successfully fetched records",
			data: pollingUnits,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Server Error. An error occured while fetching records",
			error,
		});
	}
};

export const fetchTotalPollingUnits = async (req: Request, res: Response) => {
	try {
		const count = await db.polling_unit.count();

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

export const fetchLGAPollingUnits = async (req: Request, res: Response) => {
	try {
		const { lga_id } = req.body
		const pollingUnits = await db.polling_unit.findMany({ where: { lga_id } });

		return res.status(200).json({
			success: true,
			message: "Successfully fetched records",
			data: pollingUnits,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Server Error. An error occured while fetching records",
			error,
		});
	}
};

export const fetchWardPollingUnits = async (req: Request, res: Response) => {
	try {
		const { ward_id } = req.body
		const pollingUnits = await db.polling_unit.findMany({ where: { ward_id } });

		return res.status(200).json({
			success: true,
			message: "Successfully fetched records",
			data: pollingUnits,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Server Error. An error occured while fetching records",
			error,
		});
	}
};

export const fetchPollingUnitById = async (req: Request, res: Response) => {
	try {
		const { unit_id } = req.body
		const pollingUnit = await db.polling_unit.findUnique({ where: { polling_unit_id: unit_id } });

		return res.status(200).json({
			success: true,
			message: "Successfully fetched records",
			data: pollingUnit,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Server Error. An error occured while fetching records",
			error,
		});
	}
};
