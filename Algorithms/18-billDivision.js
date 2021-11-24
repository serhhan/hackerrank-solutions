function bonAppetit(bill, k, b) {
  const supposedBillForAnna = [...bill];
  supposedBillForAnna.splice(k, 1);

  const brianWantsFromAnna = bill.reduce((a, b) => a + b, 0) / 2;
  const supposedPaymentForAnna =
    supposedBillForAnna.reduce((a, b) => a + b, 0) / 2;

  function calculateBills() {
    if (b === supposedPaymentForAnna) {
      console.log("Bon Appetit");
    } else {
      const finalBill = brianWantsFromAnna - supposedPaymentForAnna;
      console.log(finalBill);
    }
  }

  return calculateBills();
}

bonAppetit([3, 10, 30, 30, 30, 30], 2, 9);
