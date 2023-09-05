"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const services_controller_1 = require("./services.controller");
const router = express_1.default.Router();
router.post('/post', services_controller_1.ServiceController.postService);
router.get('/', services_controller_1.ServiceController.getServices);
router.delete('/delete/:id', services_controller_1.ServiceController.deleteService);
exports.serviceRoutes = router;
