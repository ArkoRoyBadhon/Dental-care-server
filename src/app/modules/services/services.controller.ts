import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { Request, Response } from 'express'
import { ServiceOperations } from './services.service'

const postService = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceOperations.postServices(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Image Submited Successfully',
    data: result,
  })
})

const getServices = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceOperations.getServices()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Image retrived Successfully',
    data: result,
  })
})

const deleteService = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id

  const result = await ServiceOperations.deleteService(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Image deleted Successfully',
    data: result,
  })
})

export const ServiceController = {
  postService,
  getServices,
  deleteService,
}
