// ============================================================
// CardMaxx — DATA FILE
// Edit this file to update cards, fees, cashback %, offers etc.
// Changes here automatically reflect in the app after committing.
//
// CATEGORY IDs (always use these exact keys in rewards objects):
// dining, groceries, gas_ev, travel, transit, online_retail,
// streaming, pharmacy, entertainment, utilities, base
// ============================================================

export const CATEGORIES = [
  { id: "dining",       label: "Dining",        full: "Dining & Delivery",          icon: "🍽️", examples: "Restaurants, DoorDash, Uber Eats, cafes" },
  { id: "groceries",    label: "Groceries",     full: "Supermarkets",               icon: "🛒", examples: "Kroger, Whole Foods, Trader Joe's (excludes Walmart/Target)" },
  { id: "gas_ev",       label: "Gas & EV",      full: "Gas & Electric Charging",    icon: "⚡", examples: "Shell, Tesla Superchargers, ChargePoint, BP" },
  { id: "travel",       label: "Travel",        full: "Flights & Hotels",           icon: "✈️", examples: "Airlines, Marriott, Airbnb, Expedia, cruises" },
  { id: "transit",      label: "Transit",       full: "Commuting & Rideshare",      icon: "🚇", examples: "Uber, Lyft, NYC Subway, tolls, parking, trains" },
  { id: "online_retail",label: "Online",        full: "Online Shopping",            icon: "📦", examples: "Amazon, Temu, Walmart.com, Nike.com" },
  { id: "streaming",    label: "Digital",       full: "Streaming & AI Services",    icon: "🎬", examples: "Netflix, Disney+, Spotify, ChatGPT Plus, YouTube Premium" },
  { id: "pharmacy",     label: "Pharmacy",      full: "Drug Stores",                icon: "💊", examples: "CVS, Walgreens, Rite Aid" },
  { id: "entertainment",label: "Entertainment", full: "Events & Recreation",        icon: "🎟️", examples: "Ticketmaster, StubHub, movie theaters, theme parks" },
  { id: "utilities",    label: "Utilities",     full: "Bills & Government",         icon: "🏛️", examples: "Electricity, Water, Phone bills, IRS/Tax payments" },
  { id: "base",         label: "Other",         full: "Everything Else",            icon: "💳", examples: "Insurance, medical bills, local services" }
];

// rewardType: "cash" = show %  |  "points" or "miles" = show X
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
    rewards: { dining: 1, groceries: 2, gas_ev: 1, travel: 2, transit: 1, online_retail: 1, streaming: 1, pharmacy: 1, entertainment: 1, utilities: 1, base: 1 },
    notes: "2X on American Airlines and Grocery stores; 1X everywhere else"
  },
  {
    id: 2,
    name: "Amex Blue Cash Everyday",
    issuer: "American Express",
    network: "Amex",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    referralUrl: "https://americanexpress.com/en-us/referral/blue-cash-everyday-credit-card?ref=NARESK79GD&xl=cp01",
    color: "#006fcf",
    rewards: { dining: 1, groceries: 3, gas_ev: 3, travel: 1, transit: 1, online_retail: 3, streaming: 1, pharmacy: 1, entertainment: 1, utilities: 1, base: 1 },
    notes: "3% on US supermarkets, online retail, and gas (up to $6k/yr per category)"
  },
  {
    id: 3,
    name: "Amex Business Gold",
    issuer: "American Express",
    network: "Amex",
    annualFee: 375,
    rewardType: "points",
    rewardLabel: "Membership Rewards Points",
    color: "#b8860b",
    rewards: { dining: 4, groceries: 1, gas_ev: 4, travel: 3, transit: 4, online_retail: 1, streaming: 1, pharmacy: 1, entertainment: 1, utilities: 1, base: 1 },
    notes: "4X on top 2 business categories monthly (up to $150k/yr); 3X on Amex Travel"
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
    rewards: { dining: 4, groceries: 4, gas_ev: 1, travel: 3, transit: 1, online_retail: 1, streaming: 1, pharmacy: 1, entertainment: 1, utilities: 1, base: 1 },
    notes: "$120 Dining + $120 Uber + $100 Resy + $84 Dunkin' credits annually; 4X on dining & groceries"
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
    rewards: { dining: 1, groceries: 1, gas_ev: 1, travel: 5, transit: 1, online_retail: 1, streaming: 1, pharmacy: 1, entertainment: 1, utilities: 1, base: 1 },
    notes: "$895 fee; $600 Hotel, $400 Resy, $300 Streaming, $200 Airline, $209 CLEAR+ credits"
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
    rewards: { dining: 2, groceries: 1, gas_ev: 1, travel: 1, transit: 1, online_retail: 1, streaming: 1, pharmacy: 1, entertainment: 1, utilities: 1, base: 1 },
    notes: "3% at Apple & select merchants; 2% on all Apple Pay purchases; 1% with physical card"
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
    rewards: { dining: 2, groceries: 3, gas_ev: 3, travel: 1, transit: 1, online_retail: 3, streaming: 1, pharmacy: 1, entertainment: 1, utilities: 1, base: 1 },
    notes: "3% on chosen category; Preferred Rewards boosts up to 5.25%"
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
    rewards: { dining: 3, groceries: 2, gas_ev: 3, travel: 3, transit: 1, online_retail: 3, streaming: 3, pharmacy: 3, entertainment: 1, utilities: 1, base: 1 },
    notes: "3% in choice category (6% first year); 2% at grocery stores & wholesale clubs"
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
    rewards: { dining: 3, groceries: 1, gas_ev: 1, travel: 2, transit: 1, online_retail: 1, streaming: 1, pharmacy: 1, entertainment: 1, utilities: 1, base: 1 },
    notes: "1X on rent (up to 100k pts/yr); requires 5 transactions per statement cycle"
  },
  {
    id: 10,
    name: "Blue Cash Preferred (Amex)",
    issuer: "American Express",
    network: "Amex",
    annualFee: 95,
    rewardType: "cash",
    rewardLabel: "Reward Dollars",
    color: "#006fcf",
    rewards: { dining: 1, groceries: 6, gas_ev: 3, travel: 1, transit: 3, online_retail: 1, streaming: 6, pharmacy: 1, entertainment: 1, utilities: 1, base: 1 },
    notes: "6% Groceries (up to $6k/yr); 6% Streaming; 3% Gas/Transit; $84 Disney Bundle credit"
  },
  {
    id: 11,
    name: "Capital One Quicksilver",
    issuer: "Capital One",
    network: "Mastercard",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#d03027",
    rewards: { dining: 1.5, groceries: 1.5, gas_ev: 1.5, travel: 5, transit: 1.5, online_retail: 1.5, streaming: 1.5, pharmacy: 1.5, entertainment: 5, utilities: 1.5, base: 1.5 },
    notes: "1.5% on all; 5% on Travel & Entertainment via Capital One portal; No foreign fees"
  },
  {
    id: 12,
    name: "Capital One Savor",
    issuer: "Capital One",
    network: "Mastercard",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    referralUrl: "https://i.capitalone.com/JiPOwWnxi",
    color: "#d03027",
    rewards: { dining: 3, groceries: 3, gas_ev: 1, travel: 5, transit: 3, online_retail: 1, streaming: 3, pharmacy: 1, entertainment: 3, utilities: 1, base: 1 },
    notes: "3% Dining/Grocery/Streaming/Entertainment; 10% on Uber/Uber Eats; No annual fee"
  },
  {
    id: 13,
    name: "Capital One Spark Cash Select",
    issuer: "Capital One",
    network: "Mastercard",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#d03027",
    rewards: { dining: 1.5, groceries: 1.5, gas_ev: 1.5, travel: 5, transit: 1.5, online_retail: 1.5, streaming: 1.5, pharmacy: 1.5, entertainment: 1.5, utilities: 1.5, base: 1.5 },
    notes: "1.5% on all business spend; 5% on hotels/cars via Capital One Travel; No annual fee"
  },
  {
    id: 14,
    name: "Capital One Spark Miles",
    issuer: "Capital One",
    network: "Mastercard",
    annualFee: 95,
    rewardType: "miles",
    rewardLabel: "Capital One Miles",
    color: "#d03027",
    rewards: { dining: 2, groceries: 2, gas_ev: 2, travel: 5, transit: 2, online_retail: 2, streaming: 2, pharmacy: 2, entertainment: 2, utilities: 2, base: 2 },
    notes: "2X on all purchases; 5X on hotels/cars via Capital One Travel"
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
    rewards: { dining: 2, groceries: 2, gas_ev: 2, travel: 5, transit: 2, online_retail: 2, streaming: 2, pharmacy: 2, entertainment: 5, utilities: 2, base: 2 },
    notes: "2X on all; 5X on Travel/Entertainment via portal; $120 Global Entry credit"
  },
  {
    id: 16,
    name: "Capital One Venture X",
    issuer: "Capital One",
    network: "Visa",
    annualFee: 395,
    rewardType: "miles",
    rewardLabel: "Capital One Miles",
    referralUrl: "https://i.capitalone.com/Ga90bVx7i",
    color: "#d03027",
    rewards: { dining: 2, groceries: 2, gas_ev: 2, travel: 10, transit: 2, online_retail: 2, streaming: 2, pharmacy: 2, entertainment: 2, utilities: 2, base: 2 },
    notes: "$300 annual travel credit; 10k anniversary miles; Unlimited lounge access; 10X hotels/cars via portal"
  },
  {
    id: 17,
    name: "Chase Freedom Flex",
    issuer: "Chase",
    network: "Mastercard",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#1a6faf",
    rewards: { dining: 3, groceries: 5, gas_ev: 1, travel: 5, transit: 1, online_retail: 5, streaming: 1, pharmacy: 3, entertainment: 1, utilities: 1, base: 1 },
    notes: "Q2 2026: 5% at Amazon, Whole Foods & Chase Travel; 3% Dining & Drugstores"
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
    rewards: { dining: 1.5, groceries: 1.5, gas_ev: 1.5, travel: 1.5, transit: 1.5, online_retail: 1.5, streaming: 1.5, pharmacy: 1.5, entertainment: 1.5, utilities: 1.5, base: 1.5 },
    notes: "Flat 1.5% back; $25 credit for autopay enrollment; evaluated for Unlimited upgrade after 12 months"
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
    rewards: { dining: 3, groceries: 1.5, gas_ev: 1.5, travel: 5, transit: 1.5, online_retail: 1.5, streaming: 1.5, pharmacy: 3, entertainment: 1.5, utilities: 1.5, base: 1.5 },
    notes: "1.5X on all spend; 3X Dining & Drugstores; 5X Chase Travel"
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
    rewards: { dining: 2, groceries: 1, gas_ev: 2, travel: 1, transit: 1, online_retail: 1, streaming: 1, pharmacy: 5, entertainment: 1, utilities: 5, base: 1 },
    notes: "5X on office supplies/internet/phone (up to $25k/yr); 2X on dining & gas"
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
    rewards: { dining: 1, groceries: 1, gas_ev: 1, travel: 3, transit: 3, online_retail: 3, streaming: 3, pharmacy: 1, entertainment: 1, utilities: 3, base: 1 },
    notes: "3X on first $150k combined spend in travel, shipping, ads, internet/phone; No foreign fees"
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
    rewards: { dining: 3, groceries: 3, gas_ev: 1, travel: 5, transit: 1, online_retail: 1, streaming: 3, pharmacy: 1, entertainment: 1, utilities: 1, base: 1 },
    notes: "25% point boost on Chase portal; $50 annual hotel credit; 10% anniversary point bonus"
  },
  {
    id: 23,
    name: "Chase Sapphire Reserve",
    issuer: "Chase",
    network: "Visa",
    annualFee: 795,
    rewardType: "points",
    rewardLabel: "Ultimate Rewards Points",
    color: "#1a6faf",
    rewards: { dining: 3, groceries: 1, gas_ev: 1, travel: 10, transit: 3, online_retail: 1, streaming: 1, pharmacy: 1, entertainment: 1, utilities: 1, base: 1 },
    notes: "$300 Travel + $300 Dining + $300 StubHub credits; Free Apple TV+/Music; 50% point boost"
  },
  {
    id: 24,
    name: "Citi Custom Cash",
    issuer: "Citi",
    network: "Mastercard",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "ThankYou Points",
    color: "#003b6f",
    rewards: { dining: 5, groceries: 5, gas_ev: 5, travel: 5, transit: 1, online_retail: 1, streaming: 1, pharmacy: 1, entertainment: 1, utilities: 1, base: 1 },
    notes: "5% on top spend category (up to $500/mo); 5% on Citi Travel; Eligible: Gas, Groceries, Dining"
  },
  {
    id: 25,
    name: "Citi Double Cash",
    issuer: "Citi",
    network: "Mastercard",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "ThankYou Points",
    color: "#003b6f",
    rewards: { dining: 2, groceries: 2, gas_ev: 2, travel: 2, transit: 2, online_retail: 2, streaming: 2, pharmacy: 2, entertainment: 2, utilities: 2, base: 2 },
    notes: "Unlimited 2% on everything (1% buy + 1% pay); 5% on hotels/cars/attractions via Citi Travel"
  },
  {
    id: 26,
    name: "Citi Strata Premier",
    issuer: "Citi",
    network: "Mastercard",
    annualFee: 95,
    rewardType: "points",
    rewardLabel: "ThankYou Points",
    color: "#003b6f",
    rewards: { dining: 3, groceries: 3, gas_ev: 3, travel: 3, transit: 1, online_retail: 1, streaming: 1, pharmacy: 1, entertainment: 1, utilities: 1, base: 1 },
    notes: "3X on Gas/EV, Dining, Groceries, and Airfare; $100 annual hotel credit (on $500+ stays)"
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
    rewards: { dining: 3, groceries: 2, gas_ev: 4, travel: 3, transit: 1, online_retail: 1, streaming: 1, pharmacy: 1, entertainment: 1, utilities: 1, base: 1 },
    notes: "4% on Gas/EV ($7k/yr cap); 3% Dining/Travel; Requires Costco Membership"
  },
  {
    id: 28,
    name: "Delta SkyMiles Blue",
    issuer: "American Express",
    network: "Amex",
    annualFee: 0,
    rewardType: "miles",
    rewardLabel: "SkyMiles",
    color: "#003087",
    rewards: { dining: 2, groceries: 1, gas_ev: 1, travel: 2, transit: 1, online_retail: 1, streaming: 1, pharmacy: 1, entertainment: 1, utilities: 1, base: 1 },
    notes: "No annual fee; 20% in-flight savings; TakeOff 15 (15% off award flights)"
  },
  {
    id: 29,
    name: "Delta SkyMiles Gold",
    issuer: "American Express",
    network: "Amex",
    annualFee: 150,
    rewardType: "miles",
    rewardLabel: "SkyMiles",
    color: "#003087",
    rewards: { dining: 2, groceries: 2, gas_ev: 1, travel: 2, transit: 1, online_retail: 1, streaming: 1, pharmacy: 1, entertainment: 1, utilities: 1, base: 1 },
    notes: "$100 Delta Stays credit; Free first checked bag; TakeOff 15 discount"
  },
  {
    id: 30,
    name: "Delta SkyMiles Platinum",
    issuer: "American Express",
    network: "Amex",
    annualFee: 350,
    rewardType: "miles",
    rewardLabel: "SkyMiles",
    color: "#003087",
    rewards: { dining: 2, groceries: 2, gas_ev: 1, travel: 3, transit: 1, online_retail: 1, streaming: 1, pharmacy: 1, entertainment: 1, utilities: 1, base: 1 },
    notes: "Annual Companion Certificate; $120 Resy + $120 Rideshare + $150 Delta Stays credits"
  },
  {
    id: 31,
    name: "Discover it Cash Back",
    issuer: "Discover",
    network: "Discover",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#ff6000",
    referralUrl: "https://refer.discover.com/dclixg!b8912bfebe!a",
    rewards: { dining: 5, groceries: 1, gas_ev: 1, travel: 1, transit: 1, online_retail: 1, streaming: 1, pharmacy: 1, entertainment: 1, utilities: 5, base: 1 },
    notes: "Q2 2026: 5% at Restaurants & Home Improvement Stores. First year: All cash back is doubled!"
  },
  {
    id: 32,
    name: "Discover it Student Cash Back",
    issuer: "Discover",
    network: "Discover",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#ff6000",
    rewards: { dining: 5, groceries: 1, gas_ev: 5, travel: 1, transit: 1, online_retail: 1, streaming: 1, pharmacy: 1, entertainment: 1, utilities: 1, base: 1 },
    notes: "5% rotating categories; Cashback Match for year 1; $0 annual fee for students"
  },
  {
    id: 33,
    name: "Fidelity Rewards Visa Signature",
    issuer: "Fidelity",
    network: "Visa",
    annualFee: 0,
    rewardType: "cash",
    rewardLabel: "Cash Back",
    color: "#21882d",
    rewards: { dining: 2, groceries: 2, gas_ev: 2, travel: 2, transit: 2, online_retail: 2, streaming: 2, pharmacy: 2, entertainment: 2, utilities: 2, base: 2 },
    notes: "Flat 2% on all; No foreign fees; $120 Global Entry/TSA PreCheck credit every 4 years"
  },
  {
    id: 34,
    name: "Marriott Bonvoy Boundless",
    issuer: "Chase",
    network: "Visa",
    annualFee: 95,
    rewardType: "points",
    rewardLabel: "Bonvoy Points",
    color: "#b8860b",
    rewards: { dining: 3, groceries: 3, gas_ev: 3, travel: 6, transit: 1, online_retail: 1, streaming: 1, pharmacy: 1, entertainment: 1, utilities: 1, base: 2 },
    notes: "3X on first $6k/yr in Grocery/Gas/Dining; Annual Free Night Award (35k pts)"
  },
  {
    id: 35,
    name: "Marriott Bonvoy Brilliant",
    issuer: "American Express",
    network: "Amex",
    annualFee: 650,
    rewardType: "points",
    rewardLabel: "Bonvoy Points",
    color: "#b8860b",
    rewards: { dining: 3, groceries: 1, gas_ev: 1, travel: 6, transit: 1, online_retail: 1, streaming: 1, pharmacy: 1, entertainment: 1, utilities: 1, base: 2 },
    notes: "Complimentary Platinum Elite status; $300 Dining Credit ($25/mo); 85k pt Free Night Award"
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
    rewards: { dining: 1, groceries: 2, gas_ev: 2, travel: 2, transit: 1, online_retail: 1, streaming: 1, pharmacy: 1, entertainment: 1, utilities: 1, base: 1 },
    notes: "2X on Gas/Groceries (first $5k/yr); 3k anniversary points; Partner with Southwest for Companion Pass"
  },
  {
    id: 37,
    name: "US Bank Altitude Reserve",
    issuer: "US Bank",
    network: "Visa",
    annualFee: 400,
    rewardType: "points",
    rewardLabel: "Altitude Points",
    color: "#00205b",
    rewards: { dining: 1, groceries: 1, gas_ev: 1, travel: 5, transit: 3, online_retail: 1, streaming: 1, pharmacy: 1, entertainment: 1, utilities: 1, base: 1 },
    notes: "$325 Travel/Dining credit; $120 Global Entry credit; Points worth 1.5cpp on travel; 8 Priority Pass visits"
  },
  {
    id: 38,
    name: "United Explorer Card",
    issuer: "Chase",
    network: "Visa",
    annualFee: 150,
    rewardType: "miles",
    rewardLabel: "MileagePlus Miles",
    color: "#003087",
    rewards: { dining: 2, groceries: 1, gas_ev: 1, travel: 3, transit: 1, online_retail: 1, streaming: 1, pharmacy: 1, entertainment: 1, utilities: 1, base: 1 },
    notes: "$100 United Hotel credit; $60 Rideshare credit; Free checked bag; 2 United Club passes"
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
    rewards: { dining: 2, groceries: 2, gas_ev: 2, travel: 2, transit: 2, online_retail: 2, streaming: 2, pharmacy: 2, entertainment: 2, utilities: 2, base: 2 },
    notes: "Unlimited flat 2%; Cell Phone Protection (up to $600); $200 sign-up bonus"
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
    rewards: { dining: 2, groceries: 1, gas_ev: 1, travel: 4, transit: 2, online_retail: 1, streaming: 1, pharmacy: 1, entertainment: 1, utilities: 1, base: 1 },
    notes: "Annual Cat 1-4 Free Night; Discoverist Status; 5 Elite Night credits annually"
  }
];

export const LIMITED_OFFERS = [
  { card: "Chase Sapphire Preferred", offer: "5X points on Lyft rides", category: "Transit", bonus: 5, expiry: "2027-09-30", source: "chase.com" },
  { card: "Amex Gold Card", offer: "4X Dining (up to $50k/yr) & 4X Supermarkets (up to $25k/yr)", category: "Dining & Groceries", bonus: 4, expiry: "Ongoing", source: "americanexpress.com" },
  { card: "Discover it Cash Back", offer: "Q2 2026: 5% at Restaurants & Home Improvement", category: "Rotating", bonus: 5, expiry: "2026-06-30", source: "discover.com" },
  { card: "Capital One Savor", offer: "8% back on Capital One Entertainment (tickets)", category: "Entertainment", bonus: 8, expiry: "2026-12-31", source: "capitalone.com" },
  { card: "Amazon Prime Visa", offer: "10% back on rotating Prime Card Bonus items", category: "Online Shopping", bonus: 10, expiry: "Ongoing", source: "amazon.com" },
  { card: "Blue Cash Preferred", offer: "$84 Disney Bundle Credit ($7/mo statement credit)", category: "Streaming", bonus: 6, expiry: "Ongoing", source: "americanexpress.com" },
  { card: "Costco Anywhere Visa", offer: "5% on Costco Gas / 4% on other Gas & EV Charging", category: "Gas & EV", bonus: 5, expiry: "Ongoing", source: "citi.com" }
];

export const PORTALS = [
  { portal: "Rakuten", merchant: "Amazon", bonus: 1, bestCard: "Chase Freedom Flex (5%)", tip: "1% Rakuten + 5% card = 6% total. Check for Prime Bonus items up to 15%.", url: "rakuten.com" },
  { portal: "Rakuten", merchant: "Restaurants", bonus: 5, bestCard: "Amex Gold (4X)", tip: "Link your card for 5% Rakuten + 4X card = 9% total value on dining.", url: "rakuten.com" },
  { portal: "Rakuten", merchant: "Nike / Adidas", bonus: 12, bestCard: "Capital One Savor (3%)", tip: "Rakuten often hits 12-15% for apparel. Stack with 3% Savor for 15%+.", url: "rakuten.com" },
  { portal: "Chase Travel", merchant: "Hotels & Cars", bonus: 10, bestCard: "Chase Sapphire Reserve", tip: "10X pts on portal bookings; Stack with 'The Edit' for $500 in stay credits.", url: "chase.com/travel" },
  { portal: "Amex Travel", merchant: "Flights", bonus: 5, bestCard: "Amex Platinum (5X)", tip: "5X points on up to $500k/yr. Use for International Airline Program discounts.", url: "amextravel.com" },
  { portal: "Capital One Travel", merchant: "Hotels & Cars", bonus: 10, bestCard: "Capital One Venture X", tip: "10X miles + $300 annual credit. Includes free Price Drop Protection.", url: "capitalone.com/travel" },
  { portal: "TopCashback", merchant: "Walmart", bonus: 4, bestCard: "Wells Fargo Active Cash (2%)", tip: "TopCashback often doubles Rakuten's rate. 4% portal + 2% card = 6% total.", url: "topcashback.com" }
];

// Helper: format reward value based on card type
export const fmt = (value, rewardType) =>
  rewardType === "cash" ? `${value}%` : `${value}X`;
