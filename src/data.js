// ============================================================
// CardMaxx — DATA FILE
// Edit this file to update cards, fees, cashback %, offers etc.
// Changes here automatically reflect in the app after committing.
// ============================================================

// rewardType: "cash" = show % | "points" or "miles" = show X
export const CARDS = [
  {
    id: 1,
    name: "American Airlines AAdvantage MileUp",
    issuer: "Citi",
    network: "Mastercard",
    annualFee: 0,
    rewardType: "points",
    rewardLabel: "AAdvantage Miles",
    color: "#003087",
    rewards: { dining: 2, groceries: 1, gas: 1, travel: 2, amazon: 1, streaming: 1, pharmacy: 1, utilities: 1, base: 1 },
    notes: "2X on American Airlines purchases; 1X everywhere else"
  },
  {
    id: 2,
    name: "Amex Blue Cash Everyday",
    issuer: "American Express",
    network: "Amex",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#006fcf",
    rewards: { dining: 1, groceries: 3, gas: 1, travel: 1, amazon: 1, streaming: 1, pharmacy: 1, utilities: 1, base: 1 },
    notes: "3% at US supermarkets, 2% on gas and transit"
  },
  {
    id: 3,
    name: "Amex Business Gold",
    issuer: "American Express",
    network: "Amex",
    annualFee: 295,
    rewardType: "points",
    rewardLabel: "Membership Rewards Points",
    color: "#b8860b",
    rewards: { dining: 4, groceries: 4, gas: 1, travel: 4, amazon: 1, streaming: 1, pharmacy: 1, utilities: 1, base: 1 },
    notes: "4X points on your top 2 business categories each month; 1X on other purchases"
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
    id: 7,
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
    id: 8,
    name: "Bank of America Customized Cash Rewards",
    issuer: "Bank of America",
    network: "Visa",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#e31837",
    rewards: { dining: 3, groceries: 2, gas: 3, travel: 3, amazon: 3, streaming: 3, pharmacy: 3, utilities: 1, base: 1 },
    notes: "3% in choice category (6% first year); 2% at grocery stores & wholesale clubs; Preferred Rewards boosts"
  },
  {
    id: 9,
    name: "Bilt Mastercard",
    issuer: "Wells Fargo",
    network: "Mastercard",
    annualFee: 0,
    rewardType: "points",
    rewardLabel: "Bilt Points",
    color: "#000000",
    rewards: { dining: 3, groceries: 1, gas: 1, travel: 2, amazon: 1, streaming: 1, pharmacy: 1, utilities: 1, base: 1 },
    notes: "1X on rent (up to 100k pts/yr); requires 5 transactions per statement cycle to earn points"
  },
  {
    id: 10,
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
    id: 11,
    name: "Capital One Quicksilver Cash Rewards",
    issuer: "Capital One",
    network: "Mastercard",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#d03027",
    rewards: { dining: 1.5, groceries: 1.5, gas: 1.5, travel: 1.5, amazon: 1.5, streaming: 1.5, pharmacy: 1.5, utilities: 1.5, base: 1.5 },
    notes: "1.5% cash back on everything; 5% on hotels/cars via Capital One Travel"
  },
  {
    id: 12,
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
    id: 13,
    name: "Capital One Spark Cash",
    issuer: "Capital One",
    network: "Mastercard",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#d03027",
    rewards: { dining: 1, groceries: 1, gas: 1, travel: 1, amazon: 1, streaming: 1, pharmacy: 1, utilities: 1, base: 2 },
    notes: "2% cashback on all business purchases"
  },
  {
    id: 14,
    name: "Capital One Spark Miles",
    issuer: "Capital One",
    network: "Mastercard",
    annualFee: 0,
    rewardType: "miles",
    rewardLabel: "Capital One Miles",
    color: "#d03027",
    rewards: { dining: 2, groceries: 2, gas: 2, travel: 2, amazon: 1, streaming: 1, pharmacy: 1, utilities: 1, base: 2 },
    notes: "2X miles on all business purchases"
  },
  {
    id: 15,
    name: "Capital One Venture Rewards",
    issuer: "Capital One",
    network: "Visa",
    annualFee: 95,
    rewardType: "miles",
    rewardLabel: "Capital One Miles",
    color: "#d03027",
    rewards: { dining: 2, groceries: 2, gas: 2, travel: 5, amazon: 2, streaming: 2, pharmacy: 2, utilities: 2, base: 2 },
    notes: "2X on everything; 5X on hotels/cars via Capital One Travel; $250 travel credit"
  },
  {
    id: 16,
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
    id: 17,
    name: "Chase Freedom Flex",
    issuer: "Chase",
    network: "Visa",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#1a6faf",
    rewards: { dining: 3, groceries: 1, gas: 1, travel: 5, amazon: 1, streaming: 1, pharmacy: 3, utilities: 1, base: 1 },
    notes: "5% rotating quarterly categories (up to $1,500/quarter); 5% Chase Travel; 3% dining & drugstores"
  },
  {
    id: 18,
    name: "Chase Freedom Rise",
    issuer: "Chase",
    network: "Visa",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#1a6faf",
    rewards: { dining: 1.5, groceries: 1.5, gas: 1.5, travel: 1.5, amazon: 1.5, streaming: 1.5, pharmacy: 1.5, utilities: 1.5, base: 1.5 },
    notes: "Flat 1.5% cash back on all purchases; designed for building credit"
  },
  {
    id: 19,
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
    id: 20,
    name: "Chase Ink Business Cash",
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
    id: 21,
    name: "Chase Ink Business Preferred",
    issuer: "Chase",
    network: "Visa",
    annualFee: 95,
    rewardType: "points",
    rewardLabel: "Ultimate Rewards Points",
    color: "#1a6faf",
    rewards: { dining: 3, groceries: 2, gas: 2, travel: 3, amazon: 1, streaming: 1, pharmacy: 1, utilities: 1, base: 1 },
    notes: "3X on travel, shipping, internet & telecom; 1X everything else"
  },
  {
    id: 22,
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
    id: 23,
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
    id: 24,
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
    id: 25,
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
    id: 26,
    name: "Citi Premier Card",
    issuer: "Citi",
    network: "Mastercard",
    annualFee: 95,
    rewardType: "points",
    rewardLabel: "ThankYou Points",
    color: "#003b6f",
    rewards: { dining: 3, groceries: 3, gas: 3, travel: 3, amazon: 1, streaming: 1, pharmacy: 1, utilities: 1, base: 1 },
    notes: "3X on travel, gas, dining & groceries"
  },
  {
    id: 27,
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
    id: 28,
    name: "Delta SkyMiles Blue Amex",
    issuer: "American Express",
    network: "Amex",
    annualFee: 0,
    rewardType: "points",
    rewardLabel: "SkyMiles",
    color: "#003087",
    rewards: { dining: 2, groceries: 2, gas: 1, travel: 2, amazon: 1, streaming: 1, pharmacy: 1, utilities: 1, base: 1 },
    notes: "2X Miles on Delta purchases & dining"
  },
  {
    id: 29,
    name: "Delta SkyMiles Gold Amex",
    issuer: "American Express",
    network: "Amex",
    annualFee: 0,
    rewardType: "points",
    rewardLabel: "SkyMiles",
    color: "#003087",
    rewards: { dining: 2, groceries: 2, gas: 1, travel: 2, amazon: 1, streaming: 1, pharmacy: 1, utilities: 1, base: 1 },
    notes: "2X Miles on Delta purchases & dining"
  },
  {
    id: 30,
    name: "Delta SkyMiles Platinum Amex",
    issuer: "American Express",
    network: "Amex",
    annualFee: 250,
    rewardType: "points",
    rewardLabel: "SkyMiles",
    color: "#003087",
    rewards: { dining: 3, groceries: 3, gas: 1, travel: 3, amazon: 1, streaming: 1, pharmacy: 1, utilities: 1, base: 1 },
    notes: "3X Miles on Delta purchases"
  },
  {
    id: 31,
    name: "Discover it Cash Back",
    issuer: "Discover",
    network: "Discover",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#ff0000",
    rewards: { dining: 1, groceries: 1, gas: 1, travel: 1, amazon: 1, streaming: 1, pharmacy: 1, utilities: 1, base: 1 },
    notes: "5% rotating quarterly categories (up to $1,500/quarter); 1% everything else; first year Cashback Match"
  },
  {
    id: 32,
    name: "Discover it Student Cash Back",
    issuer: "Discover",
    network: "Discover",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#ff0000",
    rewards: { dining: 1, groceries: 1, gas: 1, travel: 1, amazon: 1, streaming: 1, pharmacy: 1, utilities: 1, base: 1 },
    notes: "5% rotating quarterly categories (up to $1,500/quarter); 1% everything else; first year Cashback Match for students"
  },
  {
    id: 33,
    name: "Fidelity Rewards Visa Signature Card",
    issuer: "Fidelity",
    network: "Visa",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#21882d",
    rewards: { dining: 2, groceries: 2, gas: 2, travel: 2, amazon: 2, streaming: 2, pharmacy: 2, utilities: 2, base: 2 },
    notes: "Flat 2% cash back deposited into eligible Fidelity accounts"
  },
  {
    id: 34,
    name: "Marriott Bonvoy Boundless",
    issuer: "Chase",
    network: "Visa",
    annualFee: 95,
    rewardType: "points",
    rewardLabel: "Marriott Bonvoy Points",
    color: "#b8860b",
    rewards: { dining: 2, groceries: 2, gas: 1, travel: 3, amazon: 1, streaming: 1, pharmacy: 1, utilities: 1, base: 1 },
    notes: "6X at Marriott properties; 2X on other travel"
  },
  {
    id: 35,
    name: "Marriott Bonvoy Brilliant",
    issuer: "American Express",
    network: "Amex",
    annualFee: 450,
    rewardType: "points",
    rewardLabel: "Marriott Bonvoy Points",
    color: "#b8860b",
    rewards: { dining: 3, groceries: 3, gas: 2, travel: 6, amazon: 1, streaming: 1, pharmacy: 1, utilities: 1, base: 1 },
    notes: "6X at Marriott properties; 3X on travel; $300 Marriott statement credit"
  },
  {
    id: 36,
    name: "Southwest Rapid Rewards Plus",
    issuer: "Chase",
    network: "Visa",
    annualFee: 69,
    rewardType: "points",
    rewardLabel: "Rapid Rewards Points",
    color: "#e81928",
    rewards: { dining: 2, groceries: 2, gas: 1, travel: 2, amazon: 1, streaming: 1, pharmacy: 1, utilities: 1, base: 1 },
    notes: "2X on Southwest purchases & Rapid Rewards hotels"
  },
  {
    id: 37,
    name: "U.S. Bank Altitude Reserve",
    issuer: "U.S. Bank",
    network: "Visa",
    annualFee: 400,
    rewardType: "points",
    rewardLabel: "Altitude Points",
    color: "#00205b",
    rewards: { dining: 1, groceries: 1, gas: 1, travel: 5, amazon: 1, streaming: 1, pharmacy: 1, utilities: 1, base: 1 },
    notes: "3X points on mobile wallet purchases & eligible travel; 5X on prepaid hotels/cars; $325 annual travel/dining credit"
  },
  {
    id: 38,
    name: "United Explorer Card",
    issuer: "Chase",
    network: "Visa",
    annualFee: 0,
    rewardType: "points",
    rewardLabel: "MileagePlus Miles",
    color: "#003087",
    rewards: { dining: 2, groceries: 1, gas: 1, travel: 2, amazon: 1, streaming: 1, pharmacy: 1, utilities: 1, base: 1 },
    notes: "2X on United airfare & hotel stays; free checked bag"
  },
  {
    id: 39,
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
    id: 40,
    name: "World of Hyatt Credit Card",
    issuer: "Chase",
    network: "Visa",
    annualFee: 95,
    rewardType: "points",
    rewardLabel: "Hyatt Points",
    color: "#b8860b",
    rewards: { dining: 3, groceries: 2, gas: 1, travel: 3, amazon: 1, streaming: 1, pharmacy: 1, utilities: 1, base: 1 },
    notes: "4X at Hyatt hotels; 2X on dining, travel, and transit"
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
