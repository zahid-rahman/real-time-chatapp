import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import httpStatus from "http-status";
import { AuthService } from "./auth.service";
import { logger } from "../../../shared/logger";

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = req.body;
    const result = await AuthService.loginUser(body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User logged in successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;
    console.log('REGISTER:',body)
    const result = await AuthService.storeUser(body);
    return sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "User registered successfully",
      data: result,
    });
  } catch (error) {
    console.error(error);
  }
};

const getUserByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.params;
    console.log(req.params);
    const result = await AuthService.getUserByEmail(email);
    // return sendResponse(res, {
    //   statusCode: httpStatus.CREATED,
    //   success: true,
    //   message: "User fetched successfully",
    //   data: result,
    // });
    logger.info(result);
    return res.json(result);
  } catch (error) {
    logger.error(error);
    console.error(error);
  }
};

export const AuthController = {
  loginUser,
  registerUser,
  getUserByEmail,
};
