export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandomNumArray(
  length: number,
  min: number,
  max: number,
  exclude?: number[]
) {
  const numbers = new Set<number>();
  while (numbers.size < length) {
    const num = getRandomInt(min, max);
    let addNum = true;
    if (exclude) addNum = !exclude.includes(num);
    if (addNum) numbers.add(num);
  }
  return Array.from(numbers);
}
