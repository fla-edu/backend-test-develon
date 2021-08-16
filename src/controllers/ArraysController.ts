import { Request, Response } from "express";
import BadRequest from "../errors/badRequest";
import { ArraysRemoveDuplicatesUseCase } from "../useCases/arrays/ArraysRemoveDuplicatesUseCase";
import { ArraysSumUseCase } from "../useCases/arrays/ArraysSumUseCase";

export class ArraysController {

  sumAllNumbers (request: Request, response: Response): Response<number> {
    const { numbers } = request.body

    if (!numbers) {
      throw new BadRequest('numbers')
    }

    const result = new ArraysSumUseCase().sumAllNumbers(numbers)
    return response.json(result)
  }

  removeDuplicates (request: Request, response: Response): Response<number> {
    const { values } = request.body

    if (!values) {
      throw new BadRequest('values')
    }

    const result = new ArraysRemoveDuplicatesUseCase().removeDuplicates(values)
    return response.json(result)
  }
}
