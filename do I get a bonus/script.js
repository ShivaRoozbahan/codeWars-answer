function bonusTime(salary, bonus) {
  if (bonus === true) {
    salary = salary * 10;
  }
  return `£${salary}`.toString();
}
// console.log(bonusTime(1000, true));
