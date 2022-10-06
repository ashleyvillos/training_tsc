export class CreateTestDTO {
    id: number = 0
    name:string = ''
    test_data?:string = ''
}

export class UpdateTestDTO {
    id:number = 0
    name?:string = ''
    test_data?:string = ''
}

export class DeleteTestDTO {
    id:number = 0
}