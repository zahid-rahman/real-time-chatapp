import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import httpStatus from "http-status";
import { AuthService } from "./auth.services";

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

export const AuthController = {
  loginUser,
};
