export function random(length: number) {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  const numberic = "0123456789";

  for (let i = 0; i < length; i++) {
    const randomInd = Math.floor(
      Math.random() * (characters.length + numberic.length),
    );
    if (randomInd < characters.length) {
      result += characters.charAt(randomInd);
    } else {
      result += numberic.charAt(randomInd - characters.length);
    }
  }

  return result;
}
