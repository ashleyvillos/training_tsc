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

TestRouter.get('/testing/:id', async (req: Request, res: Response) => {
    let response = await TestController.getTestByIDAndAvailability(parseInt(req.params.id))
    res.status(response.status).send(response)
})

// and
TestRouter.get('/testing2/:id', async (req: Request, res: Response) => {
    let response = await TestController.getTestAndOp(parseInt(req.params.id))
    res.status(response.status).send(response)
})

// like
TestRouter.get('/testing3/:name', async (req: Request, res: Response) => {
    let response = await TestController.getLike(req.params.name)
    res.status(response.status).send(response)
})

// like
TestRouter.get('/testing4/:name', async (req: Request, res: Response) => {
    let response = await TestController.getILike(req.params.name)
    res.status(response.status).send(response)
})

// greater than
TestRouter.get('/testing5/:id', async (req: Request, res: Response) => {
    let response = await TestController.getGt(parseInt(req.params.id))
    res.status(response.status).send(response)
})

// greater than or equal to
TestRouter.get('/testing6/:id', async (req: Request, res: Response) => {
    let response = await TestController.getGte(parseInt(req.params.id))
    res.status(response.status).send(response)
})

// less than
TestRouter.get('/testing7/:id', async (req: Request, res: Response) => {
    let response = await TestController.getLt(parseInt(req.params.id))
    res.status(response.status).send(response)
})

// less than or equal to
TestRouter.get('/testing8/:id', async (req: Request, res: Response) => {
    let response = await TestController.getLte(parseInt(req.params.id))
    res.status(response.status).send(response)
})

// starts with
TestRouter.get('/testing9/:name', async (req: Request, res: Response) => {
    let response = await TestController.getStartsWith(req.params.name)
    res.status(response.status).send(response)
})

// ends with
TestRouter.get('/testing10/:name', async (req: Request, res: Response) => {
    let response = await TestController.getEndsWith(req.params.name)
    res.status(response.status).send(response)
})

// ends with
TestRouter.get('/testing11/:expression', async (req: Request, res: Response) => {
    let response = await TestController.getIRegexp(req.params.expression)
    res.status(response.status).send(response)
})

export default TestRouter