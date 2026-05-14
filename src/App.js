import React, { useState, useEffect } from 'react';
import { CARDS, CATEGORIES, LIMITED_OFFERS, PORTALS, formatReward } from './data';
import './App.css';

// ─── ICONS ───────────────────────────────────────────────────────────────────
const Icon = ({ name, size = 20 }) => {
  const icons = {
    home: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    search: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    cards: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
    wallet: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    calc: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="18" x2="16" y2="18"/></svg>,
    star: <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    plus: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
    trash: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>,
    back: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>,
    check: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
    info: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
    lightning: <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    portal: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    guide: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  };
  return icons[name] || null;
};

// ─── REWARD BADGE ─────────────────────────────────────────────────────────────
const RewardBadge = ({ value, rewardType, size = 'md' }) => {
  const label = formatReward(value, rewardType);
  const isPoints = rewardType !== 'cash';
  const isHigh = value >= 5;
  const isMed = value >= 3 && value < 5;
  return (
    <span className={`reward-badge ${isPoints ? 'points' : 'cash'} ${isHigh ? 'high' : isMed ? 'med' : ''} size-${size}`}>
      {label}
    </span>
  );
};

// ─── CARD CHIP ────────────────────────────────────────────────────────────────
const CardChip = ({ card, reward, onClick, rank }) => (
  <div className="card-chip" onClick={onClick} style={{ '--card-color': card.color }}>
    {rank && <div className={`rank-badge ${rank === 1 ? 'gold' : rank === 2 ? 'silver' : rank === 3 ? 'bronze' : ''}`}>#{rank}</div>}
    <div className="card-chip-left">
      <div className="card-issuer-dot" style={{ background: card.color }} />
      <div>
        <div className="card-chip-name">{card.name}</div>
        <div className="card-chip-issuer">{card.issuer} · {card.network}</div>
      </div>
    </div>
    <div className="card-chip-right">
      {reward !== undefined && <RewardBadge value={reward} rewardType={card.rewardType} />}
      {card.annualFee > 0 && <div className="annual-fee-tag">${card.annualFee}/yr</div>}
    </div>
  </div>
);

// ─── HOME SCREEN ──────────────────────────────────────────────────────────────
const HomeScreen = ({ setScreen, myWallet }) => {
  const [time, setTime] = useState(new Date());
  useEffect(() => { const t = setInterval(() => setTime(new Date()), 60000); return () => clearInterval(t); }, []);
  const hour = time.getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  return (
    <div className="screen home-screen">
      <div className="home-hero">
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="hero-greeting">{greeting} 👋</div>
          <h1 className="hero-title">CardMaxx</h1>
          <p className="hero-sub">Maximize every purchase. Never leave rewards on the table.</p>
        </div>
      </div>

      <div className="home-actions">
        <button className="action-btn primary" onClick={() => setScreen('recommender')}>
          <span className="action-icon">🔍</span>
          <div>
            <div className="action-title">Find Best Card</div>
            <div className="action-desc">Pick a category, see top cards</div>
          </div>
          <span className="action-arrow">›</span>
        </button>

        <button className="action-btn secondary" onClick={() => setScreen('calculator')}>
          <span className="action-icon">🧮</span>
          <div>
            <div className="action-title">Savings Calculator</div>
            <div className="action-desc">See your yearly rewards</div>
          </div>
          <span className="action-arrow">›</span>
        </button>
      </div>

      <div className="home-stats">
        <div className="stat-card">
          <div className="stat-num">{CARDS.length}</div>
          <div className="stat-label">Cards in DB</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">{myWallet.length}</div>
          <div className="stat-label">My Cards</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">{CATEGORIES.length}</div>
          <div className="stat-label">Categories</div>
        </div>
      </div>

      <div className="section-title">Quick Categories</div>
      <div className="quick-cats">
        {CATEGORIES.slice(0, 6).map(cat => (
          <button key={cat.id} className="quick-cat-btn" onClick={() => setScreen('recommender')}>
            <span>{cat.icon}</span>
            <span>{cat.label.split('/')[0].trim()}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// ─── RECOMMENDER SCREEN ───────────────────────────────────────────────────────
const RecommenderScreen = ({ myWallet }) => {
  const [selectedCat, setSelectedCat] = useState(null);
  const [filterMine, setFilterMine] = useState(false);

  const getResults = () => {
    if (!selectedCat) return [];
    let cards = filterMine && myWallet.length > 0
      ? CARDS.filter(c => myWallet.includes(c.id))
      : CARDS;
    return cards
      .map(c => ({ ...c, reward: c.rewards[selectedCat.id] }))
      .sort((a, b) => b.reward - a.reward);
  };

  const results = getResults();
  const best = results[0];

  return (
    <div className="screen">
      <div className="screen-header">
        <h2>Find Best Card</h2>
        <p>Pick your purchase category</p>
      </div>

      <div className="cat-grid">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`cat-btn ${selectedCat?.id === cat.id ? 'active' : ''}`}
            onClick={() => setSelectedCat(cat)}
          >
            <span className="cat-icon">{cat.icon}</span>
            <span className="cat-label">{cat.label.split('/')[0].trim()}</span>
          </button>
        ))}
      </div>

      {myWallet.length > 0 && (
        <div className="filter-toggle">
          <button
            className={`toggle-btn ${filterMine ? 'active' : ''}`}
            onClick={() => setFilterMine(!filterMine)}
          >
            {filterMine ? <Icon name="check" size={14} /> : null}
            My Cards Only ({myWallet.length})
          </button>
        </div>
      )}

      {selectedCat && (
        <>
          {best && (
            <div className="best-card-banner">
              <div className="best-label">🏆 Best for {selectedCat.icon} {selectedCat.label.split('/')[0]}</div>
              <div className="best-card-name">{best.name}</div>
              <div className="best-reward">
                <RewardBadge value={best.reward} rewardType={best.rewardType} size="lg" />
                <span className="best-reward-type">{best.rewardLabel}</span>
              </div>
              <div className="best-note">{best.notes}</div>
            </div>
          )}

          <div className="section-title" style={{ marginTop: 16 }}>All Cards Ranked</div>
          <div className="results-list">
            {results.map((card, i) => (
              <CardChip key={card.id} card={card} reward={card.reward} rank={i + 1} />
            ))}
          </div>
        </>
      )}

      {!selectedCat && (
        <div className="empty-state">
          <div className="empty-icon">☝️</div>
          <div>Select a category above to see ranked cards</div>
        </div>
      )}
    </div>
  );
};

// ─── ALL CARDS SCREEN ─────────────────────────────────────────────────────────
const AllCardsScreen = ({ myWallet, toggleWallet }) => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [detail, setDetail] = useState(null);

  const filtered = CARDS.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.issuer.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' ? true :
      filter === 'cash' ? c.rewardType === 'cash' :
      filter === 'points' ? c.rewardType !== 'cash' :
      filter === 'nofee' ? c.annualFee === 0 : true;
    return matchSearch && matchFilter;
  });

  if (detail) {
    const card = detail;
    return (
      <div className="screen">
        <button className="back-btn" onClick={() => setDetail(null)}>
          <Icon name="back" size={18} /> Back
        </button>
        <div className="card-detail" style={{ '--card-color': card.color }}>
          <div className="card-detail-header">
            <div className="card-detail-color-bar" style={{ background: card.color }} />
            <h2>{card.name}</h2>
            <div className="card-detail-meta">{card.issuer} · {card.network}</div>
            <div className="card-detail-meta">Annual Fee: {card.annualFee === 0 ? 'No annual fee ✅' : `$${card.annualFee}/year`}</div>
            <div className="card-detail-meta reward-type-label">{card.rewardLabel}</div>
          </div>

          <div className="section-title">Rewards by Category</div>
          <div className="rewards-grid">
            {CATEGORIES.map(cat => (
              <div key={cat.id} className="reward-row">
                <span className="reward-cat-icon">{cat.icon}</span>
                <span className="reward-cat-name">{cat.label.split('/')[0].trim()}</span>
                <RewardBadge value={card.rewards[cat.id]} rewardType={card.rewardType} />
              </div>
            ))}
          </div>

          <div className="card-notes-box">
            <Icon name="info" size={16} />
            <span>{card.notes}</span>
          </div>

          <button
            className={`wallet-btn ${myWallet.includes(card.id) ? 'in-wallet' : ''}`}
            onClick={() => toggleWallet(card.id)}
          >
            {myWallet.includes(card.id) ? '✓ In My Wallet' : '+ Add to My Wallet'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="screen">
      <div className="screen-header">
        <h2>All Cards</h2>
        <p>{CARDS.length} cards in database</p>
      </div>

      <input
        className="search-input"
        placeholder="🔍 Search cards or issuers..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="filter-pills">
        {['all', 'cash', 'points', 'nofee'].map(f => (
          <button key={f} className={`pill ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
            {f === 'all' ? 'All' : f === 'cash' ? 'Cash Back' : f === 'points' ? 'Points/Miles' : 'No Annual Fee'}
          </button>
        ))}
      </div>

      <div className="cards-list">
        {filtered.map(card => (
          <CardChip
            key={card.id}
            card={card}
            onClick={() => setDetail(card)}
          />
        ))}
      </div>
    </div>
  );
};

// ─── MY WALLET SCREEN ─────────────────────────────────────────────────────────
const WalletScreen = ({ myWallet, toggleWallet, setScreen }) => {
  const myCards = CARDS.filter(c => myWallet.includes(c.id));

  if (myCards.length === 0) {
    return (
      <div className="screen">
        <div className="screen-header"><h2>My Wallet</h2></div>
        <div className="empty-state" style={{ marginTop: 60 }}>
          <div className="empty-icon">💳</div>
          <div className="empty-title">Your wallet is empty</div>
          <div className="empty-sub">Add cards you own to get personalized recommendations</div>
          <button className="primary-btn" onClick={() => setScreen('cards')}>Browse Cards</button>
        </div>
      </div>
    );
  }

  return (
    <div className="screen">
      <div className="screen-header">
        <h2>My Wallet</h2>
        <p>{myCards.length} card{myCards.length !== 1 ? 's' : ''} saved</p>
      </div>
      <div className="wallet-tip">
        <Icon name="info" size={14} />
        <span>Tap a card to remove it. Use "Find Best Card" with My Cards Only filter for personalized results.</span>
      </div>
      <div className="cards-list">
        {myCards.map(card => (
          <div key={card.id} className="wallet-card-row">
            <CardChip card={card} />
            <button className="remove-btn" onClick={() => toggleWallet(card.id)}>
              <Icon name="trash" size={16} />
            </button>
          </div>
        ))}
      </div>
      <button className="add-more-btn" onClick={() => setScreen('cards')}>
        <Icon name="plus" size={16} /> Add More Cards
      </button>
    </div>
  );
};

// ─── CALCULATOR SCREEN ────────────────────────────────────────────────────────
const CalculatorScreen = ({ myWallet }) => {
  const [spending, setSpending] = useState({
    dining: 200, groceries: 400, gas: 150, travel: 100,
    amazon: 100, streaming: 50, pharmacy: 50, utilities: 150, base: 300
  });

  const calcCards = myWallet.length > 0
    ? CARDS.filter(c => myWallet.includes(c.id))
    : CARDS;

  const calcAnnualRewards = (card) => {
    let total = 0;
    CATEGORIES.forEach(cat => {
      const rate = card.rewards[cat.id] / 100;
      const monthly = spending[cat.id] || 0;
      total += monthly * 12 * rate;
    });
    return total - card.annualFee;
  };

  const results = calcCards
    .map(c => ({ ...c, annual: calcAnnualRewards(c) }))
    .sort((a, b) => b.annual - a.annual);

  const totalSpend = Object.values(spending).reduce((a, b) => a + Number(b), 0);

  return (
    <div className="screen">
      <div className="screen-header">
        <h2>Savings Calculator</h2>
        <p>Enter your monthly spend per category</p>
      </div>

      <div className="calc-inputs">
        {CATEGORIES.map(cat => (
          <div key={cat.id} className="calc-row">
            <label className="calc-label">
              <span>{cat.icon}</span>
              <span>{cat.label.split('/')[0].trim()}</span>
            </label>
            <div className="calc-input-wrap">
              <span className="dollar-sign">$</span>
              <input
                type="number"
                className="calc-input"
                value={spending[cat.id]}
                onChange={e => setSpending({ ...spending, [cat.id]: Number(e.target.value) })}
                min="0"
              />
              <span className="per-mo">/mo</span>
            </div>
          </div>
        ))}
      </div>

      <div className="calc-total">
        Total monthly spend: <strong>${totalSpend.toLocaleString()}</strong>
      </div>

      <div className="section-title">Best Cards for Your Spending</div>
      {myWallet.length === 0 && (
        <div className="wallet-hint">💡 Add cards to My Wallet to see personalized results</div>
      )}

      <div className="calc-results">
        {results.slice(0, 10).map((card, i) => (
          <div key={card.id} className={`calc-result-row ${i === 0 ? 'top' : ''}`}>
            <div className="calc-result-left">
              <span className="calc-rank">#{i + 1}</span>
              <div>
                <div className="calc-card-name">{card.name}</div>
                <div className="calc-card-type">{card.rewardLabel}</div>
              </div>
            </div>
            <div className="calc-result-right">
              <div className={`calc-amount ${card.annual > 0 ? 'positive' : 'negative'}`}>
                {card.annual >= 0 ? '+' : ''}{card.rewardType === 'cash' ? `$${card.annual.toFixed(0)}` : `~$${card.annual.toFixed(0)}`}
              </div>
              <div className="calc-per-year">per year</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── DEALS SCREEN ─────────────────────────────────────────────────────────────
const DealsScreen = () => (
  <div className="screen">
    <div className="screen-header">
      <h2>Deals & Offers</h2>
      <p>Limited time promotions</p>
    </div>
    <div className="deals-list">
      {LIMITED_OFFERS.map((offer, i) => (
        <div key={i} className="deal-card">
          <div className="deal-header">
            <div className="deal-card-name">{offer.card}</div>
            <div className="deal-bonus">{offer.bonus}X / {offer.bonus}%</div>
          </div>
          <div className="deal-offer">{offer.offer}</div>
          <div className="deal-footer">
            <span className="deal-expiry">Expires: {offer.expiry}</span>
            <span className="deal-source">{offer.source}</span>
          </div>
        </div>
      ))}
    </div>
    <div className="update-note">
      <Icon name="info" size={14} />
      <span>Last updated manually. Check issuer apps & thepointsguy.com for latest offers.</span>
    </div>
  </div>
);

// ─── PORTALS SCREEN ───────────────────────────────────────────────────────────
const PortalsScreen = () => (
  <div className="screen">
    <div className="screen-header">
      <h2>Portal Stacking</h2>
      <p>Stack portals on top of your card for max rewards</p>
    </div>
    <div className="portal-tip-banner">
      <Icon name="lightning" size={16} />
      <span>Visit the portal FIRST, then shop. Portal % stacks ON TOP of your card's rewards!</span>
    </div>
    <div className="portals-list">
      {PORTALS.map((p, i) => (
        <div key={i} className="portal-card">
          <div className="portal-header">
            <div className="portal-name">{p.portal}</div>
            <div className="portal-merchant">{p.merchant}</div>
          </div>
          <div className="portal-tip">💡 {p.tip}</div>
          <div className="portal-footer">
            <span className="portal-card-rec">{p.bestCard}</span>
            <span className="portal-url">{p.url}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── GUIDE SCREEN ─────────────────────────────────────────────────────────────
const GuideScreen = () => {
  const steps = [
    { step: "STEP 1", icon: "💳", title: "Add Your Cards", desc: "Go to All Cards → tap any card → tap 'Add to My Wallet'. Add every card you own." },
    { step: "STEP 2", icon: "🔍", title: "Find Best Card", desc: "Tap 'Find Best Card' → select your purchase category → see all cards ranked best to worst instantly!" },
    { step: "STEP 3", icon: "🧮", title: "Calculate Savings", desc: "Enter your monthly spending to see which card saves you the most money per year." },
    { step: "STEP 4", icon: "🛒", title: "Stack Portals", desc: "Check Portal Stacking before shopping online. Use portal + card together for maximum total rewards!" },
    { step: "STEP 5", icon: "⚡", title: "Track Deals", desc: "Check Deals & Offers for limited-time bonuses. Update monthly from thepointsguy.com." },
    { step: "TIP A", icon: "🏆", title: "Best Grocery Card", desc: "Blue Cash Preferred (Amex) gives 6% cash back at US supermarkets — best in class for groceries." },
    { step: "TIP B", icon: "🎯", title: "Best Flat-Rate Card", desc: "Citi Double Cash or Wells Fargo Active Cash — both give 2% on EVERYTHING. Keep one as your catch-all." },
    { step: "TIP C", icon: "✈️", title: "Best Travel Card", desc: "Chase Sapphire Reserve or Amex Platinum for frequent travelers. Annual fee is worth it at 3+ trips/year." },
    { step: "TIP D", icon: "📦", title: "Maximize Amazon", desc: "Always use Amazon Prime Visa for Amazon.com — guaranteed 5% cash back every time." },
  ];

  return (
    <div className="screen">
      <div className="screen-header">
        <h2>Guide</h2>
        <p>How to maximize your rewards</p>
      </div>
      <div className="guide-list">
        {steps.map((s, i) => (
          <div key={i} className={`guide-item ${s.step.startsWith('TIP') ? 'tip' : ''}`}>
            <div className="guide-step-label">{s.step}</div>
            <div className="guide-icon">{s.icon}</div>
            <div>
              <div className="guide-title">{s.title}</div>
              <div className="guide-desc">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── BOTTOM NAV ───────────────────────────────────────────────────────────────
const BottomNav = ({ screen, setScreen }) => {
  const tabs = [
    { id: 'home', icon: 'home', label: 'Home' },
    { id: 'recommender', icon: 'search', label: 'Find Card' },
    { id: 'wallet', icon: 'wallet', label: 'My Wallet' },
    { id: 'cards', icon: 'cards', label: 'All Cards' },
    { id: 'calculator', icon: 'calc', label: 'Calculator' },
  ];
  return (
    <nav className="bottom-nav">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`nav-tab ${screen === tab.id ? 'active' : ''}`}
          onClick={() => setScreen(tab.id)}
        >
          <Icon name={tab.icon} size={22} />
          <span>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState('home');
  const [myWallet, setMyWallet] = useState(() => {
    try { return JSON.parse(localStorage.getItem('cardmaxx_wallet') || '[]'); }
    catch { return []; }
  });

  useEffect(() => {
    try { localStorage.setItem('cardmaxx_wallet', JSON.stringify(myWallet)); }
    catch {}
  }, [myWallet]);

  const toggleWallet = (cardId) => {
    setMyWallet(prev =>
      prev.includes(cardId) ? prev.filter(id => id !== cardId) : [...prev, cardId]
    );
  };

  const screens = {
    home: <HomeScreen setScreen={setScreen} myWallet={myWallet} />,
    recommender: <RecommenderScreen myWallet={myWallet} />,
    cards: <AllCardsScreen myWallet={myWallet} toggleWallet={toggleWallet} />,
    wallet: <WalletScreen myWallet={myWallet} toggleWallet={toggleWallet} setScreen={setScreen} />,
    calculator: <CalculatorScreen myWallet={myWallet} />,
    deals: <DealsScreen />,
    portals: <PortalsScreen />,
    guide: <GuideScreen />,
  };

  return (
    <div className="app">
      <div className="app-content">
        {screens[screen] || screens.home}
      </div>
      <BottomNav screen={screen} setScreen={setScreen} />
    </div>
  );
}
