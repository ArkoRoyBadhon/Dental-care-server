"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/Auth/auth.route");
const office_route_1 = require("../modules/office/office.route");
const services_route_1 = require("../modules/services/services.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_route_1.UserRoutes,
    },
    {
        path: '/office',
        route: office_route_1.OfficeRoutes,
    },
    {
        path: '/service',
        route: services_route_1.serviceRoutes,
    },
];
moduleRoutes.forEach(route => {
    router.use(route.path, route.route);
});
exports.default = router;
