import 'babel-polyfill'
import Medication from '../models/medication'
import Router from 'koa-router'
import { baseApi } from '../config'

const api = 'medication'

const router = new Router();

router.prefix(`/${baseApi}/${api}`)

/* eslint-disable no-unused-vars, no-param-reassign, new-cap */

/**
 * @api {get} /api/medication Get all medications
 * @apiName GetMedications
 * @apiGroup Medication
 * @apiSuccessExample {application/json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "updatedAt": "2017-10-08T11:40:29.178Z",
 *       "createdAt": "2017-10-08T11:40:29.178Z",
 *       "name": "Ibuprofen",
 *       "dose": "120mg",
 *       "packageSize": "10 tablets",
 *       "_id": "59da0ead38cb8764a192345b"
 *     },
 *     {
 *       "updatedAt": "2017-10-08T11:43:17.956Z",
 *       "createdAt": "2017-10-08T11:43:17.956Z",
 *       "name": "Vicodin",
 *       "dose": "500mg",
 *       "packageSize": "5 tablets",
 *       "_id": "59da0f5538cb8764a192345c"
 *     }]
 */
router.get('/', async(ctx) =>
  ctx.body = await Medication.find()
)

/**
 * @api {post} /api/medication Add a new medication
 * @apiName AddMedication
 * @apiGroup Medication
 * @apiHeaderExample {application/json} Header:
 *     {
 *       "Accept-Encoding": "application/json"
 *     }
 * @apiSuccessExample {application/json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "updatedAt": "2017-10-08T11:40:29.178Z",
 *       "createdAt": "2017-10-08T11:40:29.178Z",
 *       "name": "Ibuprofen",
 *       "dose": "120mg",
 *       "packageSize": "10 tablets",
 *       "_id": "59da0ead38cb8764a192345b"
 *     }
 * @apiErrorExample {application/json} Error-Response:
 *     HTTP/1.1 422 Unprocessable Entity
 * @apiParamExample {application/json} Example:
 *     {
 *       "name": "Ibuprofen",
 *       "dose": "120mg",
 *       "packageSize": "10 tablets"
 *     }
 * @apiParam {String} name Name of the Medication.
 * @apiParam {String} dose Dose of the Medication.
 * @apiParam {String} packageSize Package size.
 */
router.post('/', async(ctx) => {
  try {
    const medication = await new Medication(ctx.request.body).save()
    ctx.body = medication
  } catch (err) {
    console.error('[Medication] Error during POST', err.message);

    ctx.throw(422)
  }
})

/**
 * @api {get} /api/medication/{id} Get a medication
 * @apiName GetMedication
 * @apiGroup Medication
 * @apiSuccessExample {application/json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "updatedAt": "2017-10-08T11:40:29.178Z",
 *       "createdAt": "2017-10-08T11:40:29.178Z",
 *       "name": "Ibuprofen",
 *       "dose": "120mg",
 *       "packageSize": "10 tablets",
 *       "_id": "59da0ead38cb8764a192345b"
 *     }
 * @apiErrorExample {application/json} Error-Response:
 *     HTTP/1.1 404 Not Found
 * @apiParam {String} id    `Medication` _id.
 */
router.get('/:id', async(ctx) => {
  try {
    const medication = await Medication.findById(ctx.params.id)
    if (!medication) {
      ctx.throw(404)
    }
    ctx.body = medication
  } catch (err) {
    console.error('[Medication] Error during GET ', err.message);

    if (err.name === 'CastError' || err.name === 'NotFoundError') {
      ctx.throw(404)
    }
    ctx.throw(500)
  }
})

/**
 * @api {put} /api/medication/{id} Update a medication
 * @apiName UpdateMedication
 * @apiGroup Medication
 * @apiHeaderExample {application/json} Header:
 *     {
 *       "Accept-Encoding": "application/json"
 *     }
 * @apiSuccessExample {application/json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "updatedAt": "2017-10-08T11:40:29.178Z",
 *       "createdAt": "2017-10-08T11:45:29.178Z",
 *       "name": "Ibuprofen",
 *       "dose": "150mg",
 *       "packageSize": "9 tablets",
 *       "_id": "59da0ead38cb8764a192345b"
 *     }
 * @apiErrorExample {application/json} Error-Response:
 *     HTTP/1.1 422 Unprocessable Entity
 * @apiParamExample {application/json} Example:
 *     {
 *       "name": "Ibuprofen",
 *       "dose": "150mg",
 *       "packageSize": "9 tablets"
 *     }
 * @apiParam {String} name Name of the Medication.
 * @apiParam {String} dose Dose of the Medication.
 * @apiParam {String} packageSize Package size.
 */
router.put('/:id', async(ctx) => {
  try {
    const medication = await Medication.findByIdAndUpdate(ctx.params.id, ctx.request.body)
    if (!medication) {
      ctx.throw(404)
    }
    ctx.body = medication
  } catch (err) {
    console.error('[Medication] Error during PUT ', err.message);

    if (err.name === 'CastError' || err.name === 'NotFoundError') {
      ctx.throw(404)
    }
    ctx.throw(500)
  }
})

/**
 * @api {delete} /api/medication/{id} Delete a medication entry
 * @apiName DeleteMedication
 * @apiGroup Medication
 * @apiParam {String} id    `Medication` _id.
 */
router.delete('/:id', async(ctx) => {
  try {
    const medication = await Medication.findByIdAndRemove(ctx.params.id)
    if (!medication) {
      ctx.throw(404)
    }
    ctx.body = medication
  } catch (err) {
    console.error('[Medication] Error during DELETE', err.message);

    if (err.name === 'CastError' || err.name === 'NotFoundError') {
      ctx.throw(404)
    }
    ctx.throw(500)
  }
})

/* eslint-enable no-unused-vars, no-param-reassign, new-cap */

export default router
