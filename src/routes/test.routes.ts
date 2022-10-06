import express, { Router, Request, Response } from 'express'
import TestController from '../controllers/test.controllers'

const TestRouter: Router = express.Router()


TestRouter.get('/test-data', async (req: Request, res: Response) => {
    let response = await TestController.getTest()
    res.status(response.status).send(response)
})

TestRouter.get('/test-data/:id', async (req: Request, res: Response) => {
    let response = await TestController.getOneTest(parseInt(req.params.id))
    res.status(response.status).send(response)
})


TestRouter.post('/test-data', async (req: Request, res: Response) => {
    let response = await TestController.createTest(req.body)
    res.status(response.status).send(response)
})

TestRouter.put('/test-data', async (req: Request, res: Response) => {
    let response = await TestController.updateTest(req.body)
    res.status(response.status).send(response)
})

TestRouter.delete('/test-data/:id', async (req: Request, res: Response) => {
    let response = await TestController.deleteTest({ id: parseInt(req.params.id) })
    res.status(response.status).send(response)
})

export default TestRouter