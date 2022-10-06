import Test from "../models/tables/Test"
import CommonResponse from "../utils/response.utils"
import { CreateTestDTO, UpdateTestDTO, DeleteTestDTO } from '../models/dto/TestDTO'
import { OK, CREATED, UPDATE, NOTFOUND, BADREQUEST, INTERNAL_SERVER_ERROR } from '../utils/constants.utils'
import { 
    OK_MESSAGE, 
    CREATED_MESSAGE, 
    UPDATE_MESSAGE, 
    NOTFOUND_MESSAGE, 
    BADREQUEST_MESSAGE, 
    INTERNAL_SERVER_ERROR_MESSAGE, 
    BADREQUEST_USER_EXIST_MESSAGE 
} from '../utils/message.utils'

class TestService extends CommonResponse {
    async getTest() {
        try{
            let exist = await Test.findAll()
            if (exist.length > 0) {
                console.log('pasok here')
                return this.RESPONSE(OK, exist, 0, OK_MESSAGE)
            } else {
                return this.RESPONSE(NOTFOUND, [], 0, NOTFOUND_MESSAGE)
            }
        } catch(err: any) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, [], 0, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }

    async getOneTest(testId: number) {
        try{
            let exist = await Test.findOne({ where: { id: testId } })
            if (exist) {
                return this.RESPONSE(OK, exist, 0, OK_MESSAGE)
            } else {
                return this.RESPONSE(NOTFOUND, [], 0, NOTFOUND_MESSAGE)
            }
        } catch(err: any) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, [], 0, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }

    async createTest (dto: CreateTestDTO) {
        try {
            let response = await Test.create({...dto})
            if (response != null) {
                return this.RESPONSE(OK, response, 0, OK_MESSAGE)
            } else {
                return this.RESPONSE(BADREQUEST, response, 0, BADREQUEST_MESSAGE)
            }
            
        } catch(err: any) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, [], 0, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }

    async updateTest (dto: UpdateTestDTO) {
        try {
            let exist = await Test.findOne({ where: { id: dto.id } })
            if (exist) {
                let updateData = await Test.update(dto, { where: { id: dto.id } })
                if (updateData) {
                    return this.RESPONSE(UPDATE, updateData, 0, UPDATE_MESSAGE)
                } else {
                    return this.RESPONSE(BADREQUEST, {}, 0, BADREQUEST_MESSAGE)
                }
            } else {
                return this.RESPONSE(NOTFOUND, {}, 0, NOTFOUND_MESSAGE)
            }
        } catch(err: any) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, [], 0, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }

    async deleteTest (dto: DeleteTestDTO) {
        try {
            let exist = await Test.findOne({ where: { id: dto.id } })
            if (exist) {
                let removeData = await Test.destroy({ where: { id: dto.id } })
                if (removeData) {
                    return this.RESPONSE(OK, removeData, 0, OK_MESSAGE)
                } else {
                    return this.RESPONSE(BADREQUEST, {}, 0, BADREQUEST_MESSAGE)
                }
            } else {
                return this.RESPONSE(NOTFOUND, {}, 0, NOTFOUND_MESSAGE)
            }
        } catch(err: any) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, [], 0, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }
}

export default new TestService