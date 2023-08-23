/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose'
import { IOffice, OfficeModel } from './office.interface'

const OfficeSchema = new Schema<IOffice, OfficeModel>(
  {
    url: {
      type: String,
      required: true,
    },
    uploadedBy: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Office = model<IOffice, OfficeModel>('Office', OfficeSchema)
