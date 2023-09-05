"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfficeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const office_controller_1 = require("./office.controller");
const router = express_1.default.Router();
router.post('/post', office_controller_1.OfficeController.postOfficeImages);
router.get('/', office_controller_1.OfficeController.getOfficeImages);
router.delete('/delete/:id', office_controller_1.OfficeController.deleteOfficeImage);
exports.OfficeRoutes = router;
