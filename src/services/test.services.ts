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
import { Op } from 'sequelize'

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

    async getTestByIDAndAvailability(id: number) {
        try {
            let exist = await Test.findOne({ where: { id: { [Op.or]: [50003, id] } } })
            if (exist) {
                return this.RESPONSE(OK, exist, 0, OK_MESSAGE)
            } else {
                return this.RESPONSE(NOTFOUND, {}, 0, NOTFOUND_MESSAGE)
            }
        } catch(err: any) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, [], 0, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }




    // and
    async getTestAndOp(id: number) {
        try {
            let exist = await Test.findOne({ where: { [Op.and]: [{ id: id }, { name: null }] } })

            if (exist) {
                return this.RESPONSE(OK, exist, 0, OK_MESSAGE)
            } else {
                return this.RESPONSE(NOTFOUND, {}, 0, NOTFOUND_MESSAGE)
            }
        } catch(err: any) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, [], 0, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }

    // like
    async getLike(name: string) {
        try {
            let exist = await Test.findAll({ where: { name: {[Op.like]: `%${name}%`} } })

            if (exist) {
                return this.RESPONSE(OK, exist, 0, OK_MESSAGE)
            } else {
                return this.RESPONSE(NOTFOUND, {}, 0, NOTFOUND_MESSAGE)
            }
        } catch(err: any) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, [], 0, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }

    // like
    async getILike(name: string) {
        try {
            let exist = await Test.findAll({ where: { name: {[Op.iLike]: `%${name}%`} } })
            if (exist) {
                return this.RESPONSE(OK, exist, 0, OK_MESSAGE)
            } else {
                return this.RESPONSE(NOTFOUND, {}, 0, NOTFOUND_MESSAGE)
            }
        } catch(err: any) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, [], 0, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }

    // greater than
    async getGt(id: number) {
        try {
            let exist = await Test.findAll({ where: { id: {[Op.gt]: id} } })

            if (exist) {
                return this.RESPONSE(OK, exist, 0, OK_MESSAGE)
            } else {
                return this.RESPONSE(NOTFOUND, {}, 0, NOTFOUND_MESSAGE)
            }
        } catch(err: any) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, [], 0, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }

    // greater than or equal to
    async getGte(id: number) {
        try {
            let exist = await Test.findAll({ where: { id: {[Op.gte]: id} } })

            if (exist) {
                return this.RESPONSE(OK, exist, 0, OK_MESSAGE)
            } else {
                return this.RESPONSE(NOTFOUND, {}, 0, NOTFOUND_MESSAGE)
            }
        } catch(err: any) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, [], 0, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }

    // less than
    async getLt(id: number) {
        try {
            let exist = await Test.findAll({ where: { id: {[Op.lt]: id} } })

            if (exist) {
                return this.RESPONSE(OK, exist, 0, OK_MESSAGE)
            } else {
                return this.RESPONSE(NOTFOUND, {}, 0, NOTFOUND_MESSAGE)
            }
        } catch(err: any) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, [], 0, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }

    // less than or equal to
    async getLte(id: number) {
        try {
            let exist = await Test.findAll({ where: { id: {[Op.lte]: id} } })

            if (exist) {
                return this.RESPONSE(OK, exist, 0, OK_MESSAGE)
            } else {
                return this.RESPONSE(NOTFOUND, {}, 0, NOTFOUND_MESSAGE)
            }
        } catch(err: any) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, [], 0, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }

    // starts with
    async getStartsWith(name: string) {
        try {
            let exist = await Test.findAll({ where: { name: {[Op.startsWith]: name} } })

            if (exist) {
                return this.RESPONSE(OK, exist, 0, OK_MESSAGE)
            } else {
                return this.RESPONSE(NOTFOUND, {}, 0, NOTFOUND_MESSAGE)
            }
        } catch(err: any) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, [], 0, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }

    // ends with
    async getEndsWith(name: string) {
        try {
            let exist = await Test.findAll({ where: { name: {[Op.endsWith]: name} } })

            if (exist) {
                return this.RESPONSE(OK, exist, 0, OK_MESSAGE)
            } else {
                return this.RESPONSE(NOTFOUND, {}, 0, NOTFOUND_MESSAGE)
            }
        } catch(err: any) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, [], 0, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }

    // case insensitive regexp
    async getIRegexp(expression: string) {
        console.log(expression)
        try {
            let exist = await Test.findAll({ where: { name: {[Op.iRegexp]: expression} } })
            if (exist) {
                return this.RESPONSE(OK, exist, 0, OK_MESSAGE)
            } else {
                return this.RESPONSE(NOTFOUND, {}, 0, NOTFOUND_MESSAGE)
            }
        } catch(err: any) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, [], 0, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }
}

export default new TestService