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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { db } from "../config/db_config.js";
import { generateId } from "../helpers.js";
export var fetchLGAResults = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var results, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db.announced_lga_results.findMany()];
            case 1:
                results = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        success: true,
                        message: "Successfully fetched records",
                        data: results,
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
export var fetchPUResults = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var results, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db.announced_pu_results.findMany()];
            case 1:
                results = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        success: true,
                        message: "Successfully fetched records",
                        data: results,
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
export var fetchPUResult = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var uniqueid, results, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                uniqueid = req.body.uniqueid;
                return [4 /*yield*/, db.announced_pu_results.findMany({
                        where: { polling_unit_uniqueid: uniqueid },
                    })];
            case 1:
                results = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        success: true,
                        message: "Successfully fetched records",
                        data: results,
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
export var uploadPUResult = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, uniqueid_1, results, entered_by_1, result_id_1, existingResult, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 7]);
                _a = req.body, uniqueid_1 = _a.uniqueid, results = _a.results, entered_by_1 = _a.entered_by;
                result_id_1 = parseInt(generateId(6));
                return [4 /*yield*/, db.announced_pu_results.findUnique({
                        where: { result_id: result_id_1 },
                    })];
            case 1:
                existingResult = _b.sent();
                _b.label = 2;
            case 2:
                if (!existingResult) return [3 /*break*/, 4];
                result_id_1 = parseInt(generateId(6));
                return [4 /*yield*/, db.announced_pu_results.findUnique({
                        where: { result_id: result_id_1 },
                    })];
            case 3:
                existingResult = _b.sent();
                return [3 /*break*/, 2];
            case 4: return [4 /*yield*/, db.$transaction(__spreadArray([], results.map(function (result) {
                    return db.announced_pu_results.create({
                        data: {
                            date_entered: new Date(),
                            party_abbreviation: result.party,
                            party_score: result.score,
                            polling_unit_uniqueid: uniqueid_1,
                            result_id: result_id_1,
                            entered_by_user: entered_by_1,
                            user_ip_address: req.ip,
                        },
                    });
                }), true))];
            case 5:
                _b.sent();
                return [2 /*return*/, res.status(201).json({
                        success: true,
                        message: "Successfully created records",
                        data: results,
                    })];
            case 6:
                error_4 = _b.sent();
                return [2 /*return*/, res.status(500).json({
                        success: false,
                        message: "Server Error. An error occured while fetching records",
                        error: error_4,
                    })];
            case 7: return [2 /*return*/];
        }
    });
}); };
export var fetchTotalPUResults = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var parties, results_1, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, db.party.findMany()];
            case 1:
                parties = _a.sent();
                return [4 /*yield*/, db.$transaction(__spreadArray([], parties.map(function (val) {
                        return db.announced_pu_results.aggregate({
                            where: { party_abbreviation: val.partyname },
                            _sum: { party_score: true },
                        });
                    }), true))];
            case 2:
                results_1 = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        success: true,
                        message: "Successfully fetched records",
                        data: __spreadArray([], parties.map(function (val, ind) {
                            var _a;
                            return ({
                                party: val.partyname,
                                result: (_a = results_1[ind]._sum.party_score) !== null && _a !== void 0 ? _a : 0,
                            });
                        }), true),
                    })];
            case 3:
                error_5 = _a.sent();
                return [2 /*return*/, res.status(500).json({
                        success: false,
                        message: "Server Error. An error occured while fetching records",
                        error: error_5,
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
