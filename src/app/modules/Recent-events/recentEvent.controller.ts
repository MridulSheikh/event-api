import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { recentEventService } from './recentEvent.service';
import { recentEvent } from './recentEvent.modal';

const createRecentEvent = async (req: Request, res: Response) => {
  try {
    const result = await recentEventService.createRecentEvent(req.body);
    return res.status(httpStatus.OK).send({
      statusCode: httpStatus.OK,
      success: true,
      message: 'Recent Event Create Successfully',
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

const getRecentEvent = async (req: Request, res: Response) => {
  try {
    const result = await recentEvent.find({});

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
      message: 'Recent Event revert successfully',
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

const updateRecentEvent = async (req: Request, res: Response) => {
  try {
    const result = await recentEventService.updateRecentEvent(
      req.body,
      req.params.id,
    );
    return res.status(httpStatus.OK).send({
      statusCode: httpStatus.OK,
      success: true,
      message: 'Recent Event Successfully updated',
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

const deleteRecentEvent = async (req: Request, res: Response) => {
  try {
    const result = await recentEventService.deleteRecentEvent(req.params.id);
    if (result === null) {
      return res.status(httpStatus.BAD_REQUEST).json({
        statusCode: httpStatus.BAD_REQUEST,
        success: false,
      });
    }
    return res.status(httpStatus.OK).send({
      statusCode: httpStatus.OK,
      success: true,
      message: 'Recent Event Successfully deleted',
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

export const recentEventController = {
  createRecentEvent,
  getRecentEvent,
  updateRecentEvent,
  deleteRecentEvent,
};
