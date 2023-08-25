import { Model, Types } from 'mongoose'

export type IService = {
  _id?: Types.ObjectId
  title: string
  image: string
  uploadedBy: Types.ObjectId
}

export type ServicesModel = Model<IService, Record<string, unknown>>
