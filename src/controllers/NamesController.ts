import { Request, Response } from "express";
import { INamesDTO } from "../DTO/INamesDTO"
import BadRequest from "../errors/badRequest";
import { NamesUseCase } from "../useCases/names/NamesUseCase"

export class NamesController {

  namesToUpperCaseFirstLetter (request: Request, response: Response): Response<INamesDTO> {
    const { name, surname } = request.query

    if (!name) {
      throw new BadRequest('name')
    }
    if (!surname) {
      throw new BadRequest('surname')
    }
    const result = new NamesUseCase().namesToUpperCaseFirstLetter({ name: name.toString(), surname: surname.toString() })
    return response.json(result)
  }
}
