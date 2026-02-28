/**
 * Convert a file into a data URL.
 * @param file The file to convert to a data URL
 * @returns {Promise<string>>} The data URL of the file
 */
export const fileToDataURL = (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
