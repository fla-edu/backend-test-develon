import { Request, Response } from "express";
import BadRequest from "../errors/badRequest";
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
}
