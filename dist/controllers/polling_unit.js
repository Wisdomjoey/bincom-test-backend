var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { db } from "../config/db_config.js";
import { generateId } from "../helpers.js";
export var fetchPollingUnits = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var pollingUnits, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db.polling_unit.findMany()];
            case 1:
                pollingUnits = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        success: true,
                        message: "Successfully fetched records",
                        data: pollingUnits,
                    })];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/, res.status(500).json({
                        success: false,
                        message: "Server Error. An error occured while fetching records",
                        error: error_1,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
export var fetchTotalPollingUnits = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var count, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db.polling_unit.count()];
            case 1:
                count = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        success: true,
                        message: "Successfully fetched records",
                        data: count,
                    })];
            case 2:
                error_2 = _a.sent();
                return [2 /*return*/, res.status(500).json({
                        success: false,
                        message: "Server Error. An error occured while fetching records",
                        error: error_2,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
export var fetchLGAPollingUnits = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var lga_id, pollingUnits, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                lga_id = req.body.lga_id;
                return [4 /*yield*/, db.polling_unit.findMany({ where: { lga_id: lga_id } })];
            case 1:
                pollingUnits = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        success: true,
                        message: "Successfully fetched records",
                        data: pollingUnits,
                    })];
            case 2:
                error_3 = _a.sent();
                return [2 /*return*/, res.status(500).json({
                        success: false,
                        message: "Server Error. An error occured while fetching records",
                        error: error_3,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
export var fetchWardPollingUnits = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var ward_id, pollingUnits, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                ward_id = req.body.ward_id;
                return [4 /*yield*/, db.polling_unit.findMany({ where: { ward_id: ward_id } })];
            case 1:
                pollingUnits = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        success: true,
                        message: "Successfully fetched records",
                        data: pollingUnits,
                    })];
            case 2:
                error_4 = _a.sent();
                return [2 /*return*/, res.status(500).json({
                        success: false,
                        message: "Server Error. An error occured while fetching records",
                        error: error_4,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
export var createPollingUnit = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, lat, lga_id, long, name, ward_id, entered_by, description, ward, unit_id, existingUnit, uniqueid, unit_number, pollingUnit, error_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 15, , 16]);
                _a = req.body, lat = _a.lat, lga_id = _a.lga_id, long = _a.long, name = _a.name, ward_id = _a.ward_id, entered_by = _a.entered_by, description = _a.description;
                return [4 /*yield*/, db.ward.findUnique({ where: { ward_id: ward_id } })];
            case 1:
                ward = _b.sent();
                if (!ward)
                    return [2 /*return*/, res
                            .status(400)
                            .json({ success: false, message: "Ward not found" })];
                unit_id = parseInt(generateId(6));
                return [4 /*yield*/, db.polling_unit.findUnique({
                        where: { polling_unit_id: unit_id },
                    })];
            case 2:
                existingUnit = _b.sent();
                _b.label = 3;
            case 3:
                if (!existingUnit) return [3 /*break*/, 5];
                unit_id = parseInt(generateId(6));
                return [4 /*yield*/, db.polling_unit.findUnique({
                        where: { polling_unit_id: unit_id },
                    })];
            case 4:
                existingUnit = _b.sent();
                return [3 /*break*/, 3];
            case 5:
                uniqueid = parseInt(generateId(6));
                return [4 /*yield*/, db.polling_unit.findUnique({ where: { uniqueid: uniqueid } })];
            case 6:
                existingUnit = _b.sent();
                _b.label = 7;
            case 7:
                if (!existingUnit) return [3 /*break*/, 9];
                uniqueid = parseInt(generateId(6));
                return [4 /*yield*/, db.polling_unit.findUnique({ where: { uniqueid: uniqueid } })];
            case 8:
                existingUnit = _b.sent();
                return [3 /*break*/, 7];
            case 9:
                unit_number = "DT".concat(generateId(6));
                return [4 /*yield*/, db.polling_unit.findUnique({
                        where: { polling_unit_number: unit_number },
                    })];
            case 10:
                existingUnit = _b.sent();
                _b.label = 11;
            case 11:
                if (!existingUnit) return [3 /*break*/, 13];
                unit_number = generateId(6);
                return [4 /*yield*/, db.polling_unit.findUnique({ where: { uniqueid: uniqueid } })];
            case 12:
                existingUnit = _b.sent();
                return [3 /*break*/, 11];
            case 13: return [4 /*yield*/, db.polling_unit.create({
                    data: {
                        date_entered: new Date(),
                        lat: lat,
                        lga_id: lga_id,
                        long: long,
                        polling_unit_id: unit_id,
                        polling_unit_name: name,
                        polling_unit_number: unit_number,
                        uniqueid: uniqueid,
                        uniquewardid: ward.uniqueid,
                        entered_by_user: entered_by,
                        polling_unit_description: description,
                        user_ip_address: req.ip,
                        ward_id: ward.ward_id,
                    },
                    select: { polling_unit_id: true },
                })];
            case 14:
                pollingUnit = _b.sent();
                return [2 /*return*/, res.status(201).json({
                        success: true,
                        message: "Successfully created new Polling Unit",
                        data: pollingUnit.polling_unit_id,
                    })];
            case 15:
                error_5 = _b.sent();
                return [2 /*return*/, res.status(500).json({
                        success: false,
                        message: "Server Error. An error occured while creating record",
                        error: error_5,
                    })];
            case 16: return [2 /*return*/];
        }
    });
}); };
export var fetchPollingUnitById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var unit_id, pollingUnit, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                unit_id = req.body.unit_id;
                return [4 /*yield*/, db.polling_unit.findUnique({
                        where: { polling_unit_id: unit_id },
                    })];
            case 1:
                pollingUnit = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        success: true,
                        message: "Successfully fetched records",
                        data: pollingUnit,
                    })];
            case 2:
                error_6 = _a.sent();
                return [2 /*return*/, res.status(500).json({
                        success: false,
                        message: "Server Error. An error occured while fetching records",
                        error: error_6,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
