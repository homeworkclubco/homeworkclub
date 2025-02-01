/**
 * Extracts the block class name from the typename.
 * Splits the typename string at "Blocks" and returns the part after it.
 *
 * @param {string} typename - The typename string to be processed.
 * @returns {string} - The extracted block class name.
 */
const getBlockName = (typename:string) => {
  const parts = typename.split("Blocks");
  return parts.length > 1 ? parts[1] : "";
};

export { getBlockName };