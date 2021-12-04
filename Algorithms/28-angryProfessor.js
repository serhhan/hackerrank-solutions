function angryProfessor(k, a) {
  const studentsArrivedOnTime = [];

  a.map((student) => (student <= 0 ? studentsArrivedOnTime.push(student) : ""));

  const result = studentsArrivedOnTime.length >= k ? "NO" : "YES";

  return result;
}
