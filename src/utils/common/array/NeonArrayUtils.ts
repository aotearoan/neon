/**
 * Moves an item in an array from one index to another.
 * @param items
 * @param startIndex
 * @param endIndex
 */
export const moveItem = <T>(items: Array<T>, startIndex: number, endIndex: number) => {
  const itemsCopy = [...items];
  const toMove = itemsCopy[startIndex];

  if (startIndex < endIndex) {
    itemsCopy.splice(endIndex + 1, 0, toMove);
    itemsCopy.splice(startIndex, 1);
  } else if (startIndex > endIndex) {
    itemsCopy.splice(startIndex, 1);
    itemsCopy.splice(endIndex, 0, toMove);
  }

  return itemsCopy;
};
