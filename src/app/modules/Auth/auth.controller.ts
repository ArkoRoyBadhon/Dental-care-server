/* eslint-disable no-constant-condition */
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { Request, Response } from 'express'
import { UserService } from './auth.service'
// import config from '../../../config'

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { ...userData } = req.body

  const result = await UserService.createUser(userData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Created Successfully',
    data: result,
  })
})

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body
  // console.log("LOgin",loginData)

  const result = await UserService.loginUser(loginData)
  // const { refreshToken, accessToken, ...others } = result
  const { refreshToken, accessToken } = result

  // console.log("Login RES",result)

  const cookieOptions = {
    // secure: true,
    httpOnly: true,
  }

  // if((config.env = "production")) cookieOptions.secure = true;

  res.cookie('refreshToken', refreshToken, cookieOptions)
  res.cookie('accessToken', accessToken, cookieOptions)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User logged In successfully !',
    data: accessToken,
  })
})

const LogOut = catchAsync(async (req: Request, res: Response) => {
  const cookieOptions = {
    // secure: config.env === 'development',
    httpOnly: true,
    expires: new Date(0),
  }

  res.cookie('refreshToken', '', cookieOptions)
  res.cookie('accessToken', '', cookieOptions)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Logged out Successfully',
  })
})

const getUser = catchAsync(async (req: Request, res: Response) => {
  const authorizationHeader = req.cookies.accessToken

  // console.log("Test", authorizationHeader);

  if (typeof authorizationHeader === 'string') {
    const token = authorizationHeader.split(' ')[1] || authorizationHeader
    const result = await UserService.getLoggedUser(token)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User Created Successfully',
      data: result,
    })
  }
})

export const UserController = {
  createUser,
  loginUser,
  LogOut,
  getUser,
}
