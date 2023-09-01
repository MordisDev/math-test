export function getRandomNumber(top: number, offset: number = 1): number {
    return Math.floor(Math.random() * (top - (offset - 1)) + offset)
}