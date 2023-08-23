import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { Request, Response } from 'express'
import { OfficeService } from './office.service'

const postOfficeImages = catchAsync(async (req: Request, res: Response) => {
  const result = await OfficeService.postOfficeImages(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Image Submited Successfully',
    data: result,
  })
})

const getOfficeImages = catchAsync(async (req: Request, res: Response) => {
  const result = await OfficeService.getOfficeImages()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Image retrived Successfully',
    data: result,
  })
})

const deleteOfficeImage = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id

  const result = await OfficeService.deleteOfficeImage(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Image deleted Successfully',
    data: result,
  })
})

export const OfficeController = {
  postOfficeImages,
  getOfficeImages,
  deleteOfficeImage,
}
