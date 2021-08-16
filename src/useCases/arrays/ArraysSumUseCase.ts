export class ArraysSumUseCase {

  sumAllNumbers(numbers: number[]): number {
    return numbers.reduce((previous, current) => previous + current, 0)
  }
}