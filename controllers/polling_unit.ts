import { Request, Response } from "express";
import { db } from "../config/db_config.js";
import { generateId } from "../helpers.js";

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
    const { lga_id } = req.body;
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
    const { ward_id } = req.body;
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

export const createPollingUnit = async (req: Request, res: Response) => {
  try {
    const { lat, lga_id, long, name, ward_id, entered_by, description } =
      req.body;
    const ward = await db.ward.findUnique({ where: { ward_id } });

    if (!ward)
      return res
        .status(400)
        .json({ success: false, message: "Ward not found" });

    let unit_id = parseInt(generateId(6));
    let existingUnit = await db.polling_unit.findUnique({
      where: { polling_unit_id: unit_id },
    });

    while (existingUnit) {
      unit_id = parseInt(generateId(6));
      existingUnit = await db.polling_unit.findUnique({
        where: { polling_unit_id: unit_id },
      });
    }

    let uniqueid = parseInt(generateId(6));
    existingUnit = await db.polling_unit.findUnique({ where: { uniqueid } });

    while (existingUnit) {
      uniqueid = parseInt(generateId(6));
      existingUnit = await db.polling_unit.findUnique({ where: { uniqueid } });
    }

    let unit_number = `DT${generateId(6)}`;
    existingUnit = await db.polling_unit.findUnique({
      where: { polling_unit_number: unit_number },
    });

    while (existingUnit) {
      unit_number = generateId(6);
      existingUnit = await db.polling_unit.findUnique({ where: { uniqueid } });
    }

    const pollingUnit = await db.polling_unit.create({
      data: {
        date_entered: new Date(),
        lat,
        lga_id,
        long,
        polling_unit_id: unit_id,
        polling_unit_name: name,
        polling_unit_number: unit_number,
        uniqueid,
        uniquewardid: ward.uniqueid,
        entered_by_user: entered_by,
        polling_unit_description: description,
        user_ip_address: req.ip,
        ward_id: ward.ward_id,
      },
      select: { polling_unit_id: true },
    });

    return res.status(201).json({
      success: true,
      message: "Successfully created new Polling Unit",
      data: pollingUnit.polling_unit_id,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error. An error occured while creating record",
      error,
    });
  }
};

export const fetchPollingUnitById = async (req: Request, res: Response) => {
  try {
    const { unit_id } = req.body;
    const pollingUnit = await db.polling_unit.findUnique({
      where: { polling_unit_id: unit_id },
    });

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
