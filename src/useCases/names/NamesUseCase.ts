import { INamesDTO } from "../../DTO/INamesDTO";
import { INames } from "../../interfaces/INames";

export class NamesUseCase {
  namesToUpperCaseFirstLetter(names: INames): INamesDTO {
    return {
      name: this.capitalizeFirstLetter(names.name),
      surname: this.capitalizeFirstLetter(names.surname)
    }
  }

  capitalizeFirstLetter(word: string): string {
    return word.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
  }
}