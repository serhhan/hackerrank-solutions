function timeConversion(s) {
  const arr = s.slice(0, 8).split(":");
  arr[0] = s.includes("PM")
    ? arr[0] == 12
      ? "12"
      : Number(arr[0]) + 12
    : arr[0] == 12
    ? "00"
    : arr[0];
  return arr.join(":");
}
