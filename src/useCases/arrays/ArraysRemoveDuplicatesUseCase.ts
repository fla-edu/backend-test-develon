export class ArraysRemoveDuplicatesUseCase {

  removeDuplicates(values: string[]): string[] {
    return Array.from(new Set(values))
  }
}