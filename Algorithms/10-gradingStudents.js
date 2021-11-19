function gradingStudents(grades) {
  const finalNotes = [];
  const findNearestMultiple = (n, multiple) => {
    return Math.ceil(n / multiple) * multiple;
  };

  const findDifference = (a, b) => {
    return a - b;
  };

  for (let i = 0; i < grades.length; i++) {
    const current = grades[i];
    const difference = findDifference(
      findNearestMultiple(grades[i], 5),
      grades[i]
    );
    console.log(difference);
    current < 38
      ? finalNotes.push(current)
      : difference < 3
      ? finalNotes.push(current + difference)
      : finalNotes.push(current);
  }

  return finalNotes;
}
