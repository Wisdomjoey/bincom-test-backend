import { Request, Response } from "express";
import { db } from "../config/db_config.js";
import { generateId } from "../helpers.js";

export const fetchLGAResults = async (req: Request, res: Response) => {
  try {
    const results = await db.announced_lga_results.findMany();

    return res.status(200).json({
      success: true,
      message: "Successfully fetched records",
      data: results,
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

export const fetchPUResults = async (req: Request, res: Response) => {
  try {
    const results = await db.announced_pu_results.findMany();

    return res.status(200).json({
      success: true,
      message: "Successfully fetched records",
      data: results,
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

export const fetchLGAResult = async (req: Request, res: Response) => {
  try {
    const { lga_id } = req.body;
    const results = await db.announced_lga_results.findMany({
      where: { lga_id },
    });

    return res.status(200).json({
      success: true,
      message: "Successfully fetched records",
      data: results,
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

export const fetchLGAPUResults = async (req: Request, res: Response) => {
  try {
    const { lga_id } = req.body;
    const units = await db.polling_unit.findMany({
      where: { lga_id },
      select: { uniqueid: true },
    });
    const results = await db.$transaction([
      ...units.map((val) =>
        db.announced_pu_results.findMany({
          where: { polling_unit_uniqueid: val.uniqueid },
        })
      ),
    ]);

    return res.status(200).json({
      success: true,
      message: "Successfully fetched records",
      data: results,
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

export const fetchPUResult = async (req: Request, res: Response) => {
  try {
    const { uniqueid } = req.body;
    const results = await db.announced_pu_results.findMany({
      where: { polling_unit_uniqueid: uniqueid },
    });

    return res.status(200).json({
      success: true,
      message: "Successfully fetched records",
      data: results,
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

export const uploadPUResult = async (req: Request, res: Response) => {
  try {
    const { uniqueid, results, entered_by } = req.body;

    let result_id = parseInt(generateId(6));
    let existingResult = await db.announced_pu_results.findUnique({
      where: { result_id },
    });

    while (existingResult) {
      result_id = parseInt(generateId(6));
      existingResult = await db.announced_pu_results.findUnique({
        where: { result_id },
      });
    }

    await db.$transaction([
      ...(results as { party: string; score: number }[]).map((result) =>
        db.announced_pu_results.create({
          data: {
            date_entered: new Date(),
            party_abbreviation: result.party,
            party_score: result.score,
            polling_unit_uniqueid: uniqueid,
            result_id,
            entered_by_user: entered_by,
            user_ip_address: req.ip,
          },
        })
      ),
    ]);

    return res.status(201).json({
      success: true,
      message: "Successfully created records",
      data: results,
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

export const fetchTotalPUResults = async (req: Request, res: Response) => {
  try {
    const parties = await db.party.findMany();
    const results = await db.$transaction([
      ...parties.map((val) =>
        db.announced_pu_results.aggregate({
          where: { party_abbreviation: val.partyname },
          _sum: { party_score: true },
        })
      ),
    ]);

    return res.status(200).json({
      success: true,
      message: "Successfully fetched records",
      data: [
        ...parties.map((val, ind) => ({
          party: val.partyname,
          result: results[ind]._sum.party_score ?? 0,
        })),
      ],
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
