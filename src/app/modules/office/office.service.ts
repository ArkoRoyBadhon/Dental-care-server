import { IOffice } from './office.interface'
import { Office } from './office.model'

const postOfficeImages = async (payload: IOffice): Promise<IOffice> => {
  const result = await Office.create(payload)
  return result
}

const getOfficeImages = async (): Promise<IOffice[]> => {
  const result = await Office.find({}).populate('uploadedBy')
  return result
}

const deleteOfficeImage = async (id: string) => {
  const result = await Office.findByIdAndDelete(id)
  return result
}

export const OfficeService = {
  postOfficeImages,
  getOfficeImages,
  deleteOfficeImage,
}
