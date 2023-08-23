import { Model, Types } from 'mongoose'

export type IOffice = {
  _id?: Types.ObjectId
  url: string
  uploadedBy: Types.ObjectId
}

export type OfficeModel = Model<IOffice, Record<string, unknown>>
