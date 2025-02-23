// Helper function to generate random number within a range
const randomInRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Generate dynamic data with seasonal trends
export const revenue = {
  January: {
    subscriptions: randomInRange(35000, 4500),
    advertisements: randomInRange(1000, 14000),
  },
  February: {
    subscriptions: randomInRange(37000, 4700),
    advertisements: randomInRange(1000, 15000),
  },
  March: {
    subscriptions: randomInRange(40000, 5000),
    advertisements: randomInRange(1200, 16000),
  },
  April: {
    subscriptions: randomInRange(42000, 5200),
    advertisements: randomInRange(1300, 17000),
  },
  May: {
    subscriptions: randomInRange(45000, 5000),
    advertisements: randomInRange(4000, 18000),
  },
  June: {
    subscriptions: randomInRange(50000, 6000),
    advertisements: randomInRange(1000, 19000),
  },
  July: {
    subscriptions: randomInRange(55000, 6500),
    advertisements: randomInRange(1600, 20000),
  },
  August: {
    subscriptions: randomInRange(53000, 3000),
    advertisements: randomInRange(1000, 19000),
  },
  September: {
    subscriptions: randomInRange(50000, 6000),
    advertisements: randomInRange(1400, 18000),
  },
  October: {
    subscriptions: randomInRange(4500, 5000),
    advertisements: randomInRange(1000, 17000),
  },
  November: {
    subscriptions: randomInRange(4000, 50000),
    advertisements: randomInRange(12000, 6000),
  },
  December: {
    subscriptions: randomInRange(3800, 48000),
    advertisements: randomInRange(11000, 5000),
  },
};
