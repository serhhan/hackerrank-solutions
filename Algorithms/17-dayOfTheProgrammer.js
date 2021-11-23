function dayOfProgrammer(year) {
  const isLeapYear =
    year % 4 === 0 && (year < 1918 || year % 400 === 0 || year % 100 !== 0);
  const date =
    year === 1918
      ? `26.09.1918`
      : isLeapYear
      ? `12.09.${year}`
      : `13.09.${year}`;

  return date;
}
