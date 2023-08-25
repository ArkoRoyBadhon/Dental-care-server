import { IService } from './services.interface'
import { Service } from './services.model'

const postServices = async (payload: IService): Promise<IService> => {
  const result = await Service.create(payload)
  return result
}

const getServices = async (): Promise<IService[]> => {
  const result = await Service.find({}).populate('uploadedBy')
  return result
}

const deleteService = async (id: string) => {
  const result = await Service.findByIdAndDelete(id)
  return result
}

export const ServiceOperations = {
  postServices,
  getServices,
  deleteService,
}
