function abbrevName(text) {
  text = text.split(" ");
  let word = text
    .map((word) => word.charAt(0))
    .join(".")
    .toLocaleUpperCase();
  return word;
}
console.log(abbrevName("shiva rooz"));
