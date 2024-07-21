import { Request, Response } from "express";
import { db } from "../config/db_config.js";
import { party } from "@prisma/client";
import { APIResponse } from "../types.js";

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

export const fetchTotalPUResults = async (req: Request, res: Response) => {
	try {
		const response = await fetch('/api/parties')

		if (!response.ok) return res.status(500).json({ success: false, message: 'Something went wrong' })

		const data = (await response.json()) as APIResponse
		const parties = data.data as party[]
		const results = await db.$transaction([
			...parties.map(val => db.announced_pu_results.aggregate({ where: { party_abbreviation: val.partyname }, _sum: { party_score: true } }))
		])

		return res.status(200).json({ success: true, message: 'Successfully fetched records', data: [...parties.map((val, ind) => ({ party: val.partyname, result: results[ind]._sum ?? 0 }))] })
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Server Error. An error occured while fetching records",
			error,
		});
	}
}
