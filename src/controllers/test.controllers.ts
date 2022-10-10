import TestService from "../services/test.services";
import { CreateTestDTO, DeleteTestDTO, UpdateTestDTO } from '../models/dto/TestDTO'

class TestController {
    async getTest() {
        let response = await TestService.getTest()
        return response
    }

    async getOneTest(testId: number) {
        let response = await TestService.getOneTest(testId)
        return response
    }

    async createTest (dto: CreateTestDTO) { 
        let response = await TestService.createTest(dto)
        return response
    }

    async updateTest (dto: UpdateTestDTO) {
        let response = await TestService.updateTest(dto)
        return response
    }

    async deleteTest (dto: DeleteTestDTO) {
        let response = await TestService.deleteTest(dto)
        return response
    }

    async getTestByIDAndAvailability(id: number) {
        let response = await TestService.getTestByIDAndAvailability(id)
        return response
    }




    // and
    async getTestAndOp(id: number) {
        let response = await TestService.getTestAndOp(id)
        return response
    }

    // like
    async getLike(name: string) {
        let response = await TestService.getLike(name)
        return response
    }

    // ilike
    async getILike(name: string) {
        let response = await TestService.getILike(name)
        return response
    }

    // greater than
    async getGt(id: number) {
        let response = await TestService.getGt(id)
        return response
    }

    // greater than or equal to
    async getGte(id: number) {
        let response = await TestService.getGte(id)
        return response
    }

    // less than
    async getLt(id: number) {
        let response = await TestService.getLt(id)
        return response
    }

    // less than or equal to
    async getLte(id: number) {
        let response = await TestService.getLte(id)
        return response
    }

    // starts with
    async getStartsWith(name: string) {
        let response = await TestService.getStartsWith(name)
        return response
    }

    // ends with
    async getEndsWith(name: string) {
        let response = await TestService.getEndsWith(name)
        return response
    }

    // case insensitive regexp
    async getIRegexp(expression: string) {
        let response = await TestService.getIRegexp(expression)
        return response
    }
}

export default new TestController