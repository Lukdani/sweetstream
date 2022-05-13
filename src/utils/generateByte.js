export const generateByte = () => {
  let byte = [0, 0, 0, 0, 0, 0, 0, 0];
  byte.forEach((byteItem, index) => {
    let randomNumber = Math.floor(Math.random() * 2);
    byte[index] = randomNumber;
  });
  return byte;
};
