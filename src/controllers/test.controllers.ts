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
}

export default new TestController