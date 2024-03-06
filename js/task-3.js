function checkForSpam(message) {
  const result_1 = message.toLowerCase();
  const result = result_1.includes('spam', 'sale');
  return result;
}

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(cheeckForSpam('[SPAM] How to earn fast money?')); // true
