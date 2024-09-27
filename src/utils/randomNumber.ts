export function getRandomNumber(top: number, bottom: number = 1): number {
    return Math.floor(Math.random() * (top - (bottom - 1)) + bottom)
}