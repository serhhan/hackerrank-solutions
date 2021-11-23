function bonAppetit(bill, k, b) {
  const annaDidntEatIndex = k;
  const annaContribute = b;
  const supposedBillForAnna = [...bill];
  const brianWantsFromAnna = bill.reduce((a, b) => a + b, 0) / 2;

  supposedBillForAnna.splice(annaDidntEatIndex, 1);

  const supposedPaymentForAnna =
    supposedBillForAnna.reduce((a, b) => a + b, 0) / 2;

  function calculateBills() {
    if (annaContribute === supposedPaymentForAnna) {
      return console.log("Bon Appetit");
    } else {
      const finalBill = brianWantsFromAnna - supposedPaymentForAnna;
      return console.log(finalBill);
    }
  }

  return calculateBills();
}

bonAppetit([3, 10, 30, 30, 30, 30], 2, 9);
