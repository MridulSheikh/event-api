import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { ServiceService } from './service.service';
import { Service } from './service.modal';

const createServiceIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await ServiceService.createService(req.body);
    return res.status(httpStatus.OK).send({
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service Create Successfully',
      data: result,
    });
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).send({
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      err,
    });
  }
};

const getServiceFromDB = async (req: Request, res: Response) => {
  try {
    const result = await Service.find({});

    if (result.length === 0) {
      return res.status(httpStatus.NOT_FOUND).send({
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        message: 'not found!',
      });
    }

    return res.status(httpStatus.OK).send({
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service revert successfully',
      data: result,
    });
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).send({
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      err,
    });
  }
};

const updateServiceIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await ServiceService.updateService(req.body, req.params.id);
    return res.status(httpStatus.OK).send({
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service Successfully updated',
      data: result,
    });
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).send({
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      err,
    });
  }
};

const deleteServiceIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await ServiceService.deleteService(req.params.id);
    if (result === null) {
      return res.status(httpStatus.BAD_REQUEST).json({
        statusCode: httpStatus.BAD_REQUEST,
        success: false,
      });
    }
    return res.status(httpStatus.OK).send({
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service Successfully deleted',
      data: result,
    });
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).send({
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      err,
    });
  }
};

export const serviceController = {
  createServiceIntoDB,
  getServiceFromDB,
  updateServiceIntoDB,
  deleteServiceIntoDB,
};
