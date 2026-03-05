/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  let rentalCost = days * pricePerDay;
  const shortPeriod = 3;
  const mediumPeriod = 6;
  const longPeriod = 7;
  const basicDiscount = 20;
  const longPeriodDiscount = 50;

  if (days >= shortPeriod && days <= mediumPeriod) {
    rentalCost -= basicDiscount;
  }

  if (days >= longPeriod) {
    rentalCost -= longPeriodDiscount;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
