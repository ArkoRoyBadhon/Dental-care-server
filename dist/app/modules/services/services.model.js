"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
/* eslint-disable @typescript-eslint/no-this-alias */
const mongoose_1 = require("mongoose");
const ServiceSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    uploadedBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Service = (0, mongoose_1.model)('Service', ServiceSchema);
