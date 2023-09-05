"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Office = void 0;
/* eslint-disable @typescript-eslint/no-this-alias */
const mongoose_1 = require("mongoose");
const OfficeSchema = new mongoose_1.Schema({
    url: {
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
exports.Office = (0, mongoose_1.model)('Office', OfficeSchema);
