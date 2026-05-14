// ============================================================
// CardMaxx — DATA FILE
// Edit this file to update cards, fees, cashback %, offers etc.
// Changes here automatically reflect in the app after committing.
// ============================================================

// rewardType: "cash" = show % | "points" or "miles" = show X
export const CARDS = [
  {
    id: 1,
    name: "Chase Freedom Unlimited",
    issuer: "Chase",
    network: "Visa",
    annualFee: 0,
    rewardType: "points",
    rewardLabel: "Ultimate Rewards Points",
    color: "#1a6faf",
    rewards: { dining: 3, groceries: 1.5, gas: 1.5, travel: 5, amazon: 1.5, streaming: 1.5, pharmacy: 3, utilities: 1.5, base: 1.5 },
    notes: "5X travel via Chase portal; 3X dining & drugstores"
  },
  {
    id: 2,
    name: "Chase Sapphire Preferred",
    issuer: "Chase",
    network: "Visa",
    annualFee: 95,
    rewardType: "points",
    rewardLabel: "Ultimate Rewards Points",
    color: "#1a6faf",
    rewards: { dining: 3, groceries: 3, gas: 1, travel: 5, amazon: 1, streaming: 3, pharmacy: 1, utilities: 1, base: 1 },
    notes: "Points worth 25% more via Chase Travel portal"
  },
  {
    id: 3,
    name: "Chase Sapphire Reserve",
    issuer: "Chase",
    network: "Visa",
    annualFee: 550,
    rewardType: "points",
    rewardLabel: "Ultimate Rewards Points",
    color: "#1a6faf",
    rewards: { dining: 3, groceries: 1, gas: 1, travel: 10, amazon: 1, streaming: 1, pharmacy: 1, utilities: 1, base: 1 },
    notes: "$300 travel credit; 10X hotels/cars via Chase Travel"
  },
  {
    id: 4,
    name: "Amex Gold Card",
    issuer: "American Express",
    network: "Amex",
    annualFee: 325,
    rewardType: "points",
    rewardLabel: "Membership Rewards Points",
    color: "#b8860b",
    rewards: { dining: 4, groceries: 4, gas: 1, travel: 1, amazon: 1, streaming: 1, pharmacy: 1, utilities: 1, base: 1 },
    notes: "$120 dining credit + $120 Uber Cash per year"
  },
  {
    id: 5,
    name: "Amex Platinum Card",
    issuer: "American Express",
    network: "Amex",
    annualFee: 895,
    rewardType: "points",
    rewardLabel: "Membership Rewards Points",
    color: "#b8860b",
    rewards: { dining: 1, groceries: 1, gas: 1, travel: 5, amazon: 1, streaming: 1, pharmacy: 1, utilities: 1, base: 1 },
    notes: "5X on flights; $200 airline fee credit; lounge access"
  },
  {
    id: 6,
    name: "Blue Cash Preferred (Amex)",
    issuer: "American Express",
    network: "Amex",
    annualFee: 95,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#006fcf",
    rewards: { dining: 1, groceries: 6, gas: 3, travel: 1, amazon: 1, streaming: 6, pharmacy: 1, utilities: 1, base: 1 },
    notes: "6% US supermarkets up to $6k/yr; 6% streaming"
  },
  {
    id: 7,
    name: "Citi Double Cash",
    issuer: "Citi",
    network: "Mastercard",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#003b6f",
    rewards: { dining: 2, groceries: 2, gas: 2, travel: 2, amazon: 2, streaming: 2, pharmacy: 2, utilities: 2, base: 2 },
    notes: "Flat 2% on everything — 1% buy + 1% pay"
  },
  {
    id: 8,
    name: "Citi Custom Cash",
    issuer: "Citi",
    network: "Mastercard",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#003b6f",
    rewards: { dining: 5, groceries: 5, gas: 5, travel: 5, amazon: 1, streaming: 5, pharmacy: 5, utilities: 5, base: 1 },
    notes: "5% auto on your top spend category each billing cycle"
  },
  {
    id: 9,
    name: "Capital One Savor Cash",
    issuer: "Capital One",
    network: "Mastercard",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#d03027",
    rewards: { dining: 3, groceries: 3, gas: 1, travel: 1, amazon: 1, streaming: 3, pharmacy: 1, utilities: 1, base: 1 },
    notes: "8% on Capital One Entertainment purchases"
  },
  {
    id: 10,
    name: "Capital One Venture X",
    issuer: "Capital One",
    network: "Visa",
    annualFee: 395,
    rewardType: "miles",
    rewardLabel: "Capital One Miles",
    color: "#d03027",
    rewards: { dining: 2, groceries: 2, gas: 2, travel: 10, amazon: 2, streaming: 2, pharmacy: 2, utilities: 2, base: 2 },
    notes: "10X hotels/cars via Capital One Travel; $300 travel credit"
  },
  {
    id: 11,
    name: "Discover it Cash Back",
    issuer: "Discover",
    network: "Discover",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#ff6600",
    rewards: { dining: 1, groceries: 5, gas: 5, travel: 1, amazon: 1, streaming: 1, pharmacy: 1, utilities: 1, base: 1 },
    notes: "Rotating 5% categories quarterly — activate each quarter"
  },
  {
    id: 12,
    name: "Amazon Prime Visa",
    issuer: "Chase",
    network: "Visa",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#ff9900",
    rewards: { dining: 2, groceries: 2, gas: 2, travel: 2, amazon: 5, streaming: 1, pharmacy: 1, utilities: 1, base: 1 },
    notes: "Requires Amazon Prime; 5% at Whole Foods too"
  },
  {
    id: 13,
    name: "Wells Fargo Active Cash",
    issuer: "Wells Fargo",
    network: "Visa",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#cc0000",
    rewards: { dining: 2, groceries: 2, gas: 2, travel: 2, amazon: 2, streaming: 2, pharmacy: 2, utilities: 2, base: 2 },
    notes: "Flat 2% unlimited — no category tracking needed"
  },
  {
    id: 14,
    name: "US Bank Cash+",
    issuer: "US Bank",
    network: "Visa",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#0066cc",
    rewards: { dining: 1, groceries: 2, gas: 1, travel: 1, amazon: 1, streaming: 1, pharmacy: 5, utilities: 5, base: 1 },
    notes: "Choose 2 bonus 5% categories; utilities is selectable"
  },
  {
    id: 15,
    name: "Bank of America CCR",
    issuer: "Bank of America",
    network: "Visa",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#e31837",
    rewards: { dining: 2, groceries: 3, gas: 3, travel: 1, amazon: 3, streaming: 1, pharmacy: 1, utilities: 1, base: 1 },
    notes: "3% on chosen category; Preferred Rewards boosts to 5.25%"
  },
  {
    id: 16,
    name: "PayPal Cashback Mastercard",
    issuer: "Synchrony",
    network: "Mastercard",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#003087",
    rewards: { dining: 2, groceries: 2, gas: 2, travel: 2, amazon: 3, streaming: 2, pharmacy: 2, utilities: 2, base: 2 },
    notes: "3% when paying with PayPal; 2% everywhere else"
  },
  {
    id: 17,
    name: "Apple Card",
    issuer: "Goldman Sachs",
    network: "Mastercard",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Daily Cash",
    color: "#555555",
    rewards: { dining: 2, groceries: 1, gas: 1, travel: 1, amazon: 1, streaming: 1, pharmacy: 1, utilities: 1, base: 1 },
    notes: "3% at Apple & select merchants; 2% Apple Pay; Daily Cash"
  },
  {
    id: 18,
    name: "Costco Anywhere Visa",
    issuer: "Citi",
    network: "Visa",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#005daa",
    rewards: { dining: 3, groceries: 2, gas: 4, travel: 3, amazon: 1, streaming: 1, pharmacy: 1, utilities: 1, base: 1 },
    notes: "4% gas up to $7k/yr; requires Costco membership"
  },
  {
    id: 19,
    name: "Ink Business Cash",
    issuer: "Chase",
    network: "Visa",
    annualFee: 0,
    rewardType: "points",
    rewardLabel: "Ultimate Rewards Points",
    color: "#1a6faf",
    rewards: { dining: 2, groceries: 1, gas: 1, travel: 1, amazon: 1, streaming: 1, pharmacy: 5, utilities: 5, base: 1 },
    notes: "5X office supplies & internet/cable/phone up to $25k/yr"
  },
  {
    id: 20,
    name: "Hilton Honors Amex Surpass",
    issuer: "American Express",
    network: "Amex",
    annualFee: 150,
    rewardType: "points",
    rewardLabel: "Hilton Honors Points",
    color: "#b8860b",
    rewards: { dining: 12, groceries: 6, gas: 3, travel: 3, amazon: 3, streaming: 3, pharmacy: 3, utilities: 3, base: 3 },
    notes: "12X at Hilton hotels; complimentary Hilton Gold status"
  }
];

export const CATEGORIES = [
  { id: "dining",     label: "Dining",     full: "Dining / Restaurants",        icon: "🍽️", examples: "Restaurants, DoorDash, Uber Eats, cafes" },
  { id: "groceries",  label: "Groceries",  full: "Groceries / Supermarkets",     icon: "🛒", examples: "Kroger, Whole Foods, Trader Joe's, Safeway" },
  { id: "gas",        label: "Gas",        full: "Gas / Fuel",                   icon: "⛽", examples: "Shell, BP, Chevron, EV charging" },
  { id: "travel",     label: "Travel",     full: "Travel / Flights & Hotels",    icon: "✈️", examples: "Airlines, Marriott, Hilton, Airbnb" },
  { id: "amazon",     label: "Amazon",     full: "Amazon / Online Shopping",     icon: "📦", examples: "Amazon.com, Whole Foods, Amazon Fresh" },
  { id: "streaming",  label: "Streaming",  full: "Streaming Services",           icon: "📺", examples: "Netflix, Spotify, Disney+, Hulu" },
  { id: "pharmacy",   label: "Pharmacy",   full: "Pharmacy / Drug Stores",       icon: "💊", examples: "CVS, Walgreens, Rite Aid" },
  { id: "utilities",  label: "Utilities",  full: "Govt / Utilities",             icon: "🏛️", examples: "IRS, DMV, electric, water, gas bills" },
  { id: "base",       label: "Other",      full: "Everything Else",              icon: "💳", examples: "Any purchase not in a bonus category" }
];

export const LIMITED_OFFERS = [
  { card: "Chase Sapphire Preferred", offer: "5X points on travel via Chase Travel & Lyft (through 2027)", category: "Travel", bonus: 5, expiry: "2027-09-30", source: "chase.com" },
  { card: "Amex Gold Card", offer: "4X on dining worldwide & US supermarkets up to $25k/yr", category: "Dining & Groceries", bonus: 4, expiry: "2026-12-31", source: "americanexpress.com" },
  { card: "Amex Platinum", offer: "5X on flights & prepaid hotels via Amex Travel", category: "Travel", bonus: 5, expiry: "2026-12-31", source: "americanexpress.com" },
  { card: "Discover it Cash Back", offer: "5% cash back on rotating quarterly categories", category: "Rotating Categories", bonus: 5, expiry: "2026-12-31", source: "discover.com" },
  { card: "Capital One Savor", offer: "8% cash back on Capital One Entertainment", category: "Entertainment", bonus: 8, expiry: "2026-12-31", source: "capitalone.com" },
  { card: "Amazon Prime Visa", offer: "5% cash back at Amazon & Whole Foods with Prime", category: "Groceries & Online", bonus: 5, expiry: "2026-12-31", source: "amazon.com" },
  { card: "Blue Cash Preferred", offer: "6% cash back at US supermarkets up to $6k/yr", category: "Groceries", bonus: 6, expiry: "2026-12-31", source: "americanexpress.com" },
  { card: "Costco Anywhere Visa", offer: "4% cash back on gas & EV charging up to $7k/yr", category: "Gas", bonus: 4, expiry: "2026-12-31", source: "costco.com" }
];

export const PORTALS = [
  { portal: "Rakuten", merchant: "Amazon",      bonus: 1,  bestCard: "Amazon Prime Visa (5%)",       tip: "1% Rakuten + 5% card = 6% total",     url: "rakuten.com" },
  { portal: "Rakuten", merchant: "Walmart",     bonus: 2,  bestCard: "Citi Double Cash (2%)",         tip: "2% Rakuten + 2% card = 4% total",     url: "rakuten.com" },
  { portal: "Rakuten", merchant: "Nike",        bonus: 3,  bestCard: "Citi Double Cash (2%)",         tip: "3% Rakuten + 2% card = 5% total",     url: "rakuten.com" },
  { portal: "Rakuten", merchant: "Hotels.com",  bonus: 3,  bestCard: "Chase Sapphire Preferred (5X)", tip: "3% Rakuten + 5X card = best combo",   url: "rakuten.com" },
  { portal: "Chase Travel Portal",  merchant: "Hotels/Cars",  bonus: 10, bestCard: "Chase Sapphire Reserve",       tip: "10X pts on hotels & rental cars",     url: "chase.com/travel" },
  { portal: "Amex Travel Portal",   merchant: "Flights",      bonus: 5,  bestCard: "Amex Platinum (5X pts)",       tip: "5X Membership Rewards on flights",    url: "americanexpress.com" },
  { portal: "Capital One Travel",   merchant: "Hotels & Cars", bonus: 10, bestCard: "Capital One Venture X",       tip: "10X miles via portal",                url: "capitalone.com/travel" },
  { portal: "TopCashback", merchant: "General", bonus: 1.5, bestCard: "Citi Double Cash (2%)",        tip: "1.5% portal + 2% card = 3.5% total",  url: "topcashback.com" },
  { portal: "BeFrugal",    merchant: "General", bonus: 1,   bestCard: "Citi Double Cash (2%)",        tip: "1% portal + 2% card = 3% total",      url: "befrugal.com" }
];

// Helper: format reward value based on card type
export const fmt = (value, rewardType) =>
  rewardType === "cash" ? `${value}%` : `${value}X`;
