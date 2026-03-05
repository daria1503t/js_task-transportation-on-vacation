/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let rentalCost = days * 40;
  const shortPeriod = 3;
  const mediumPeriod = 6;
  const longPeriod = 7;
  const basicDiscount = 20;
  const longPeriodDiscount = 50;

  if (days >= shortPeriod && days <= mediumPeriod) {
    rentalCost -= basicDiscount;
  } else if (days >= longPeriod) {
    rentalCost -= longPeriodDiscount;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
