import { Request, Response } from 'express';
import { eventItemService } from './eventitem.service';
import httpStatus from 'http-status';
import { EventItem } from './eventitem.model';

const createEvent = async (req: Request, res: Response) => {
  try {
    const result = await eventItemService.createEventItem(req.body);
    return res.status(httpStatus.OK).send({
      statusCode: httpStatus.OK,
      success: true,
      message: 'Event Create Successfully',
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

const getEvent = async (req: Request, res: Response) => {
  try {
    const result = await EventItem.find({});

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
      message: 'Event Create Successfully',
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

const updateEvent = async (req: Request, res: Response) => {
  try {
    const result = await eventItemService.updateEventItem(
      req.body,
      req.params.id,
    );
    return res.status(httpStatus.OK).send({
      statusCode: httpStatus.OK,
      success: true,
      message: 'Event Successfully updated',
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

const deleteEventItem = async (req: Request, res: Response) => {
  try {
    const result = await eventItemService.deleteEventItem(req.params.id);
    if (result === null) {
      return res.status(httpStatus.BAD_REQUEST).json({
        statusCode: httpStatus.BAD_REQUEST,
        success: false,
      });
    }
    return res.status(httpStatus.OK).send({
      statusCode: httpStatus.OK,
      success: true,
      message: 'Event Successfully deleted',
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

export const eventItemController = {
  createEvent,
  getEvent,
  updateEvent,
  deleteEventItem,
};
