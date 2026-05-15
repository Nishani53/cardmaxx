import React, { useState, useEffect } from 'react';
import { CARDS, CATEGORIES, LIMITED_OFFERS, PORTALS, fmt } from './data';

// ─── SMALL ICONS ──────────────────────────────────────────────────────────────
const IC = ({ d, size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
);
const HomeIc   = ({ s }) => <IC size={s} d={<><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>} />;
const SearchIc = ({ s }) => <IC size={s} d={<><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>} />;
const CardIc   = ({ s }) => <IC size={s} d={<><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></>} />;
const WalletIc = ({ s }) => <IC size={s} d={<><path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>} />;
const CalcIc   = ({ s }) => <IC size={s} d={<><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="18" x2="16" y2="18"/></>} />;
const BackIc   = ({ s }) => <IC size={s} d={<><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></>} />;
const InfoIc   = ({ s }) => <IC size={s} d={<><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></>} />;
const TrashIc  = ({ s }) => <IC size={s} d={<><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></>} />;
const PlusIc   = ({ s }) => <IC size={s} d={<><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>} />;

// ─── REWARD BADGE ─────────────────────────────────────────────────────────────
const Badge = ({ value, type, large }) => {
  const label = fmt(value, type);
  const isCash = type === 'cash';
  const hi = value >= 5, med = value >= 3 && value < 5;
  return (
    <span className={`badge ${isCash ? 'cash' : 'pts'} ${hi ? 'hi' : med ? 'med' : ''} ${large ? 'lg' : ''}`}>
      {label}
    </span>
  );
};

// ─── CARD ROW ─────────────────────────────────────────────────────────────────
const CardRow = ({ card, reward, rank, onClick }) => (
  <div className="card-row" onClick={onClick} style={{ '--cc': card.color }}>
    <div className="card-row-bar" />
    {rank && (
      <span className={`rank ${rank === 1 ? 'gold' : rank === 2 ? 'silver' : rank === 3 ? 'bronze' : ''}`}>
        #{rank}
      </span>
    )}
    <div className="card-row-mid">
      <div className="card-row-name">{card.name}</div>
      <div className="card-row-sub">{card.issuer} · {card.network}{card.annualFee > 0 ? ` · $${card.annualFee}/yr` : ''}</div>
    </div>
    {reward !== undefined && <Badge value={reward} type={card.rewardType} />}
  </div>
);

// ─── HOME ─────────────────────────────────────────────────────────────────────
const Home = ({ go, wallet, theme, toggleTheme }) => {
  const h = new Date().getHours();
  const greet = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
  return (
    <div className="screen">
      <div className="hero">
        <div className="hero-glow" />
        <button className="theme-btn" onClick={toggleTheme} title="Toggle theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <div className="hero-text">
          <div className="hero-greet">{greet} 👋</div>
          <h1 className="hero-title">CardMaxx</h1>
          <p className="hero-sub">Maximize every purchase. Never leave rewards on the table.</p>
        </div>
      </div>

      <div className="home-btns">
        <button className="home-btn primary" onClick={() => go('recommender')}>
          <span className="hb-icon">🔍</span>
          <div><div className="hb-title">Find Best Card</div><div className="hb-sub">Pick a category → see top cards</div></div>
          <span className="hb-arr">›</span>
        </button>
        <button className="home-btn secondary" onClick={() => go('calculator')}>
          <span className="hb-icon">🧮</span>
          <div><div className="hb-title">Savings Calculator</div><div className="hb-sub">See your yearly rewards</div></div>
          <span className="hb-arr">›</span>
        </button>
      </div>
  

     <div className="stats-row">
  {/* Total Cards -> Goes to All Cards */}
  <div className="stat" onClick={() => go('cards')} style={{ cursor: 'pointer' }}>
    <div className="stat-n">{CARDS.length}</div>
    <div className="stat-l">Total Cards</div>
  </div>

  {/* My Cards -> Goes to My Wallet */}
  <div className="stat" onClick={() => go('wallet')} style={{ cursor: 'pointer' }}>
    <div className="stat-n">{wallet.length}</div>
    <div className="stat-l">My Cards</div>
  </div>

  {/* Categories -> Goes to Recommender (since that's where categories live) */}
  <div className="stat" onClick={() => go('recommender')} style={{ cursor: 'pointer' }}>
    <div className="stat-n">{CATEGORIES.length}</div>
    <div className="stat-l">Categories</div>
  </div>
</div>
    

      <div className="sec-title">Quick Categories</div>
      <div className="quick-grid">
        {CATEGORIES.slice(0, 6).map(c => (
          <button key={c.id} className="quick-btn" onClick={() => go('recommender')}>
            <span className="quick-icon">{c.icon}</span>
            <span className="quick-lbl">{c.label}</span>
          </button>
        ))}
      </div>

      <div className="sec-title" style={{ marginTop: 20 }}>More Features</div>
      <div className="more-grid">
        {[
          { icon: '⚡', label: 'Deals & Offers', key: 'deals' },
          { icon: '🛒', label: 'Portal Stacking', key: 'portals' },
          { icon: '📖', label: 'Guide', key: 'guide' },
        ].map(m => (
          <button key={m.key} className="more-btn" onClick={() => go(m.key)}>
            <span>{m.icon}</span><span>{m.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// ─── RECOMMENDER ──────────────────────────────────────────────────────────────
const Recommender = ({ wallet }) => {
  const [cat, setCat] = useState(null);
  const [mineOnly, setMineOnly] = useState(false);

  const pool = mineOnly && wallet.length > 0 ? CARDS.filter(c => wallet.includes(c.id)) : CARDS;
  const results = cat
    ? [...pool].map(c => ({ ...c, r: c.rewards[cat.id] })).sort((a, b) => b.r - a.r)
    : [];
  const best = results[0];

  return (
    <div className="screen">
      <div className="pg-header"><h2>Find Best Card</h2><p>Pick your purchase category</p></div>

      <div className="cat-grid">
        {CATEGORIES.map(c => (
          <button key={c.id} className={`cat-btn ${cat?.id === c.id ? 'active' : ''}`} onClick={() => setCat(c)}>
            <span className="cat-ico">{c.icon}</span>
            <span className="cat-lbl">{c.label}</span>
          </button>
        ))}
      </div>

      {wallet.length > 0 && (
        <button className={`mine-toggle ${mineOnly ? 'on' : ''}`} onClick={() => setMineOnly(!mineOnly)}>
          {mineOnly ? '✓ ' : ''}My Cards Only ({wallet.length})
        </button>
      )}

      {cat && best && (
        <div className="best-banner">
          <div className="best-tag">🏆 Best for {cat.icon} {cat.label}</div>
          <div className="best-name">{best.name}</div>
          <div className="best-reward-row">
            <Badge value={best.r} type={best.rewardType} large />
            <span className="best-rl">{best.rewardLabel}</span>
          </div>
          <div className="best-note">{best.notes}</div>
        </div>
      )}

      {cat && (
        <>
          <div className="sec-title" style={{ marginTop: 14 }}>All Cards Ranked</div>
          {results.map((c, i) => <CardRow key={c.id} card={c} reward={c.r} rank={i + 1} />)}
        </>
      )}

      {!cat && (
        <div className="empty"><div className="empty-ico">☝️</div><p>Select a category above to see ranked cards</p></div>
      )}
    </div>
  );
};

// ─── ALL CARDS ────────────────────────────────────────────────────────────────
const AllCards = ({ wallet, toggleWallet }) => {
  const [q, setQ] = useState('');
  const [filter, setFilter] = useState('all');
  const [detail, setDetail] = useState(null);

  const filtered = CARDS.filter(c => {
    const ms = c.name.toLowerCase().includes(q.toLowerCase()) || c.issuer.toLowerCase().includes(q.toLowerCase());
    const mf = filter === 'all' ? true : filter === 'cash' ? c.rewardType === 'cash' : filter === 'pts' ? c.rewardType !== 'cash' : c.annualFee === 0;
    return ms && mf;
  });

  if (detail) {
    const c = detail;
    const inW = wallet.includes(c.id);
    return (
      <div className="screen">
        <button className="back-btn" onClick={() => setDetail(null)}><BackIc s={18} /> Back</button>
        <div className="detail-card" style={{ '--cc': c.color }}>
          <div className="detail-topbar" />
          <h2 className="detail-name">{c.name}</h2>
          <div className="detail-meta">{c.issuer} · {c.network}</div>
          <div className="detail-meta">Annual Fee: <strong>{c.annualFee === 0 ? 'None ✅' : `$${c.annualFee}/year`}</strong></div>
          <div className="detail-type">{c.rewardLabel}</div>

          <div className="sec-title" style={{ marginTop: 14 }}>Rewards by Category</div>
          {CATEGORIES.map(cat => (
            <div key={cat.id} className="reward-row">
              <span className="rr-ico">{cat.icon}</span>
              <span className="rr-lbl">{cat.full}</span>
              <Badge value={c.rewards[cat.id]} type={c.rewardType} />
            </div>
          ))}

          <div className="notes-box"><InfoIc s={15} /><span>{c.notes}</span></div>

          <button className={`wallet-btn ${inW ? 'in' : ''}`} onClick={() => toggleWallet(c.id)}>
            {inW ? '✓ In My Wallet — Tap to Remove' : '+ Add to My Wallet'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="screen">
      <div className="pg-header"><h2>All Cards</h2><p>{CARDS.length} cards in database</p></div>
      <input className="search-box" placeholder="🔍 Search cards or issuers..." value={q} onChange={e => setQ(e.target.value)} />
      <div className="pills">
        {[['all','All'],['cash','Cash Back'],['pts','Points/Miles'],['nofee','No Annual Fee']].map(([v,l]) => (
          <button key={v} className={`pill ${filter === v ? 'on' : ''}`} onClick={() => setFilter(v)}>{l}</button>
        ))}
      </div>
      {filtered.map(c => <CardRow key={c.id} card={c} onClick={() => setDetail(c)} />)}
    </div>
  );
};

// ─── MY WALLET ────────────────────────────────────────────────────────────────
const MyWallet = ({ wallet, removeCard, go }) => {
  const myCards = CARDS.filter(c => wallet.includes(c.id));

  return (
    <div className="screen">
      <div className="pg-header">
        <h2>My Wallet</h2>
        <p>Manage the cards you currently own</p>
      </div>

      {myCards.length > 0 ? (
        <>
          <div className="wallet-tip">
            <span>💡</span>
            <div>The Calculator uses these cards to find your best personal savings.</div>
          </div>
          
          {myCards.map(c => (
            <div key={c.id} className="wallet-row">
              <CardRow card={c} onClick={() => go('detail', { card: c })} />
              <button className="rm-btn" onClick={() => removeCard(c.id)}>✕</button>
            </div>
          ))}

          <button className="add-more-btn" onClick={() => go('cards')}>
            + Add Another Card
          </button>
        </>
      ) : (
        <div className="empty-wallet">
          <div className="empty-icon">💳</div>
          <div className="empty-title">Your Wallet is Empty</div>
          <div className="empty-sub">
            Add the credit cards you already own to see exactly how much you're earning.
          </div>
          <button className="pulse-btn" onClick={() => go('cards')}>
            Browse All Cards
          </button>
        </div>
      )}
    </div>
  );
};

// ─── CALCULATOR ───────────────────────────────────────────────────────────────
const Calculator = ({ wallet }) => {
  const [spend, setSpend] = useState({ dining:200, groceries:400, gas:150, travel:100, amazon:100, streaming:50, pharmacy:50, utilities:150, base:300 });

  // 1. Logic: Calculate results for EVERY card in the database first
  const allResults = CARDS.map(c => {
    let total = CATEGORIES.reduce((s, cat) => s + (c.rewards[cat.id] / 100) * (spend[cat.id] || 0) * 12, 0);
    return { 
      ...c, 
      net: total - c.annualFee,
      isOwned: wallet.includes(c.id) 
    };
  }).sort((a, b) => b.net - a.net);

  // 2. Logic: Create two specific lists
  const myOwnedResults = allResults.filter(r => r.isOwned);
  const globalTopResults = allResults.slice(0, 5); // Show top 5 overall

  const totalMonthly = Object.values(spend).reduce((s, v) => s + Number(v), 0);

  return (
    <div className="screen">
      <div className="pg-header">
        <h2>Savings Calculator</h2>
        <p>See how your cards compare to the market</p>
      </div>

      <div className="calc-inputs">
        {CATEGORIES.map(cat => (
          <div key={cat.id} className="calc-row">
            <label className="calc-lbl"><span>{cat.icon}</span><span>{cat.label}</span></label>
            <div className="calc-inp-wrap">
              <span className="dollar">$</span>
              <input type="number" min="0" className="calc-inp" value={spend[cat.id]}
                onChange={e => setSpend({ ...spend, [cat.id]: Number(e.target.value) })} />
              <span className="mo">/mo</span>
            </div>
          </div>
        ))}
      </div>

      <div className="calc-total">Monthly total: <strong>${totalMonthly.toLocaleString()}</strong></div>

      {/* SECTION A: YOUR CURRENT WALLET PERFORMANCE */}
      {wallet.length > 0 && (
        <div style={{ marginBottom: '24px' }}>
          <div className="sec-title">Your Current Best Setup</div>
          {myOwnedResults.slice(0, 3).map(c => (
            <div key={c.id} className="calc-result owned-highlight">
              <div className="cr-main-row">
                <div className="cr-left">
                  <span className="cr-rank" style={{ color: 'var(--acc2)' }}>✓</span>
                  <div className="cr-name">{c.name}</div>
                </div>
                <div className="cr-right">
                  <div className="cr-amt pos">${Math.round(c.net)}</div>
                  <div className="cr-yr">per year</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SECTION B: GLOBAL OPPORTUNITIES (ALL CARDS) */}
      <div className="sec-title">Top Cards Overall (Opportunity)</div>
      {globalTopResults.map((c, i) => {
        const topAmount = globalTopResults[0].net;
        const barWidth = topAmount > 0 ? (c.net / topAmount) * 100 : 0;

        return (
          <div key={c.id} className={`calc-result ${i === 0 ? 'top' : ''} ${c.isOwned ? 'owned-fade' : ''}`}>
            <div className="cr-main-row">
              <div className="cr-left">
                <span className="cr-rank">#{i + 1}</span>
                <div>
                  <div className="cr-name">
                    {c.name} {c.isOwned && <span style={{fontSize: '10px', opacity: 0.6}}>(In Wallet)</span>}
                  </div>
                  <div className="cr-type">{c.rewardLabel}</div>
                </div>
              </div>
              <div className="cr-right">
                <div className="cr-amt pos">${Math.round(c.net)}</div>
                <div className="cr-yr">per year</div>
              </div>
            </div>
            
            <div className="cr-bar-container">
              <div 
                className="cr-bar-fill" 
                style={{ width: `${Math.max(0, barWidth)}%`, background: c.isOwned ? 'var(--acc2)' : '' }}
              />
            </div>
          </div>
        );
      })}

      {wallet.length === 0 && (
        <div className="wallet-hint" style={{ marginTop: '12px' }}>
          💡 Add your current cards in "My Wallet" to see how much you're leaving on the table!
        </div>
      )}
    </div>
  );
};

// ─── DEALS ────────────────────────────────────────────────────────────────────
const Deals = () => (
  <div className="screen">
    <div className="pg-header"><h2>Deals & Offers</h2><p>Limited time promotions</p></div>
    {LIMITED_OFFERS.map((o, i) => (
      <div key={i} className="deal-card">
        <div className="deal-top">
          <span className="deal-card-name">{o.card}</span>
          <span className="deal-bonus">{o.bonus}%/{o.bonus}X</span>
        </div>
        <div className="deal-offer">{o.offer}</div>
        <div className="deal-bot"><span>Expires: {o.expiry}</span><span>{o.source}</span></div>
      </div>
    ))}
    <div className="update-note"><InfoIc s={14} /><span>Updated manually. Check credit card issuer for latest offers.</span></div>
  </div>
);

// ─── PORTALS ──────────────────────────────────────────────────────────────────
const Portals = () => (
  <div className="screen">
    <div className="pg-header"><h2>Portal Stacking</h2><p>Stack portals on top of your card for max rewards</p></div>
    <div className="portal-banner">⚡ Visit the portal FIRST, then shop. Portal % stacks ON TOP of your card rewards!</div>
    {PORTALS.map((p, i) => (
      <div key={i} className="portal-card">
        <div className="portal-top"><span className="portal-name">{p.portal}</span><span className="portal-merchant">{p.merchant}</span></div>
        <div className="portal-tip">💡 {p.tip}</div>
        <div className="portal-bot"><span>{p.bestCard}</span><span>{p.url}</span></div>
      </div>
    ))}
  </div>
);

// ─── GUIDE ────────────────────────────────────────────────────────────────────
const Guide = () => {
  const items = [
    { tag: 'STEP 1', icon: '💳', title: 'Add Your Cards', desc: 'Go to All Cards → tap any card → tap "Add to My Wallet". Add every card you own.' },
    { tag: 'STEP 2', icon: '🔍', title: 'Find Best Card', desc: 'Tap Find Best Card → select your purchase category → see all cards ranked best to worst instantly!' },
    { tag: 'STEP 3', icon: '🧮', title: 'Calculate Savings', desc: 'Enter your monthly spending to see which card saves you the most money per year.' },
    { tag: 'STEP 4', icon: '🛒', title: 'Stack Portals', desc: 'Check Portal Stacking before shopping online. Use portal + card together for maximum total rewards!' },
    { tag: 'STEP 5', icon: '⚡', title: 'Track Deals', desc: 'Check Deals & Offers for limited-time bonuses. Update monthly from different sources.' },
    { tag: 'TIP A', icon: '🏆', title: 'Best Grocery Card', desc: 'Blue Cash Preferred (Amex) gives 6% cash back at US supermarkets — best in class.' },
    { tag: 'TIP B', icon: '🎯', title: 'Best Flat-Rate Card', desc: 'Citi Double Cash or Wells Fargo Active Cash — both 2% on everything. Keep one as catch-all.' },
    { tag: 'TIP C', icon: '✈️', title: 'Best Travel Card', desc: 'Chase Sapphire Reserve or Amex Platinum. Annual fee is worth it at 3+ trips/year.' },
    { tag: 'TIP D', icon: '📦', title: 'Maximize Amazon', desc: 'Always use Amazon Prime Visa for Amazon.com — guaranteed 5% cash back every time.' },
  ];
  return (
    <div className="screen">
      <div className="pg-header"><h2>Guide</h2><p>How to maximize your rewards</p></div>
      {items.map((item, i) => (
        <div key={i} className={`guide-item ${item.tag.startsWith('TIP') ? 'tip' : ''}`}>
          <div className="g-tag">{item.tag}</div>
          <div className="g-ico">{item.icon}</div>
          <div><div className="g-title">{item.title}</div><div className="g-desc">{item.desc}</div></div>
        </div>
      ))}
    </div>
  );
};

// ─── BOTTOM NAV ───────────────────────────────────────────────────────────────
const Nav = ({ screen, go }) => {
  const tabs = [
    { id: 'home',        Ic: HomeIc,   lbl: 'Home' },
    { id: 'recommender', Ic: SearchIc, lbl: 'Find Card' },
    { id: 'wallet',      Ic: WalletIc, lbl: 'My Wallet' },
    { id: 'cards',       Ic: CardIc,   lbl: 'All Cards' },
    { id: 'calculator',  Ic: CalcIc,   lbl: 'Calculator' },
  ];
  return (
    <nav className="bot-nav">
      {tabs.map(({ id, Ic, lbl }) => (
        <button key={id} className={`nav-tab ${screen === id ? 'active' : ''}`} onClick={() => go(id)}>
          <Ic s={22} /><span>{lbl}</span>
        </button>
      ))}
    </nav>
  );
};

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState('home');

  // THEME — saved in localStorage so it persists
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('cm_theme') || 'dark'; }
    catch { return 'dark'; }
  });
  const toggleTheme = () => setTheme(t => {
    const next = t === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('cm_theme', next); } catch {}
    return next;
  });

  // WALLET — saved in localStorage so cards persist
  const [wallet, setWallet] = useState(() => {
    try { return JSON.parse(localStorage.getItem('cm_wallet') || '[]'); }
    catch { return []; }
  });
  const toggleWallet = id => setWallet(prev => {
    const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
    try { localStorage.setItem('cm_wallet', JSON.stringify(next)); } catch {}
    return next;
  });

  const go = s => setScreen(s);

  const pages = {
    home:        <Home go={go} wallet={wallet} theme={theme} toggleTheme={toggleTheme} />,
    recommender: <Recommender wallet={wallet} />,
    cards:       <AllCards wallet={wallet} toggleWallet={toggleWallet} />,
    wallet:      <MyWallet wallet={wallet} toggleWallet={toggleWallet} go={go} />,
    calculator:  <Calculator wallet={wallet} />,
    deals:       <Deals />,
    portals:     <Portals />,
    guide:       <Guide />,
  };

  return (
    <div className={`app ${theme}`}>
      <div className="content">{pages[screen] || pages.home}</div>
      <Nav screen={screen} go={go} />
    </div>
  );
}
