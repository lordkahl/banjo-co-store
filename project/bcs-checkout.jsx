// bcs-checkout.jsx — Reservation Form
// All reservations are free ($0 due at reservation) for STRIPE / PAYPAL / CRYPTO
//   — the admin confirms shipping cost + invoices on release.
// $BANJO token route is the discount path: pay in $BANJO to lock in
//   25% OFF on every sale (applies to all SKUs, no expiry).
// 50% BURN + 50% LOCK of all $BANJO received.

function CheckoutPage() {
  const { go, toast, clearCart } = useApp();
  const plush = PRODUCTS[0]; // banjo plush — the only priced item

  const [step, setStep] = React.useState(0); // 0 form · 1 confirm
  const [orderId, setOrderId] = React.useState('');

  const [form, setForm] = React.useState({
    xHandle: '',
    email: '',
    fullName: '',
    country: '',
    payment: '', // 'stripe' | 'paypal' | 'crypto' | 'banjo'
    qty: 1,
    notes: '',
  });

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const discountEligible = form.payment === 'banjo';
  const unit = plush.price; // 49
  const subtotal = unit * form.qty;
  const DISCOUNT_RATE = 0.25; // 25% off whenever $BANJO is the payment method
  const discount = discountEligible ? +(subtotal * DISCOUNT_RATE).toFixed(2) : 0;
  const itemTotal = +(subtotal - discount).toFixed(2);
  const dueNow = discountEligible ? itemTotal : 0;

  const canSubmit =
    form.xHandle.trim() &&
    form.email.trim() &&
    form.fullName.trim() &&
    form.country.trim() &&
    form.payment;

  function submit(e) {
    e && e.preventDefault();
    if (!canSubmit) return;
    setOrderId('BNJ-' + (Math.floor(Math.random() * 9000) + 1000));
    setStep(1);
    toast({ title: 'Pre-order received ♪', sub: 'We\'ll be in touch shortly', image: 'assets/pfp.png' });
  }

  return (
    <div className="page">
      <Marquee tone="ink" items={[
        '✦ PRE-ORDER · BANJO PLUSH 001',
        'GENESIS DROP · 2026',
        '✦ SHIPS WORLDWIDE · ADMIN CONFIRMS SHIPPING',
        'PAYS IN STRIPE · PAYPAL · CRYPTO · $BANJO',
      ]} />

      {step === 0 && (
        <PreOrderForm
          form={form} set={set}
          plush={plush}
          unit={unit} subtotal={subtotal} discount={discount} itemTotal={itemTotal} dueNow={dueNow}
          discountEligible={discountEligible}
          canSubmit={canSubmit}
          onSubmit={submit}
          onCancel={() => go('home')}
        />
      )}

      {step === 1 && (
        <ConfirmStep
          orderId={orderId}
          form={form}
          itemTotal={itemTotal}
          discount={discount}
          onShop={() => { clearCart(); go('shop'); }}
          onHome={() => { clearCart(); go('home'); }}
        />
      )}

      <Marquee tone="olive" items={[
        '✦ THANK YOU', '✦ ENJOY THE FROG', '✦ BANJO LOVES YOU',
      ]} />
    </div>
  );
}

// ─── Pre-Order Form ───────────────────────────────────────────────
function PreOrderForm({
  form, set, plush, unit, subtotal, discount, itemTotal, dueNow,
  discountEligible, canSubmit, onSubmit, onCancel,
}) {
  return (
    <div className="wrap po-grid" style={{
      padding: '40px 24px 80px',
      display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40,
    }}>
      {/* LEFT — the form */}
      <form onSubmit={onSubmit}>
        <div className="eyebrow eyebrow-bright">Step 01 · Pre-Order Form</div>
        <h1 className="f-display" style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', marginTop: 8, lineHeight: 0.95 }}>
          RESERVE YOUR<br/>
          <span style={{ color: 'var(--accent)' }}>BANJO.</span>
        </h1>
        <p style={{ maxWidth: 520, marginTop: 14, fontSize: 16, color: 'var(--ink-soft)' }}>
          Drop a few details and your preferred mode of payment. The studio
          will confirm your shipping cost based on your country, then send
          payment instructions to your inbox.
        </p>

        {/* Section: Identity */}
        <FieldGroup label="01 · Who's hopping over?">
          <Field label="X Handle" required
            value={form.xHandle}
            onChange={(v) => set('xHandle', v)}
            placeholder="@banjofan" />
          <Field label="Email" required type="email"
            value={form.email}
            onChange={(v) => set('email', v)}
            placeholder="frog@yourpad.xyz" />
          <Field label="Full Name" required
            value={form.fullName}
            onChange={(v) => set('fullName', v)}
            placeholder="Bartholomew J. Frogsworth" full />
        </FieldGroup>

        {/* Section: Shipping */}
        <FieldGroup label="02 · Where's he hopping to?">
          <Select label="Country of Shipment" required
            value={form.country}
            onChange={(v) => set('country', v)}
            options={COUNTRY_OPTIONS}
            full />
          <div style={{
            gridColumn: '1 / -1',
            background: 'var(--cream-soft)', border: '1.5px dashed var(--ink)',
            borderRadius: 6, padding: '12px 14px',
            display: 'flex', gap: 10, alignItems: 'flex-start',
          }}>
            <span style={{
              flex: '0 0 auto', width: 22, height: 22, borderRadius: '50%',
              background: 'var(--ink)', color: 'var(--cream)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--f-mono)', fontSize: 11, marginTop: 1,
            }}>i</span>
            <div className="f-mono" style={{ fontSize: 11, letterSpacing: '0.06em', lineHeight: 1.6, color: 'var(--ink-soft)' }}>
              <strong style={{ color: 'var(--ink)' }}>SHIPPING IS QUOTED BY THE STUDIO.</strong><br/>
              Once you submit, the admin reviews your country and replies
              with the exact shipping cost + delivery window before any
              payment is taken.
            </div>
          </div>
        </FieldGroup>

        {/* Section: Payment */}
        <FieldGroup label="03 · How are you paying?">
          <div style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="pay-grid">
            <PayCard
              id="stripe"
              title="Stripe"
              sub="Card · account deposit"
              glyph="S"
              glyphBg="#635bff"
              active={form.payment === 'stripe'}
              onClick={() => set('payment', 'stripe')} />
            <PayCard
              id="paypal"
              title="PayPal"
              sub="Balance · account deposit"
              glyph="P"
              glyphBg="#003087"
              active={form.payment === 'paypal'}
              onClick={() => set('payment', 'paypal')} />
            <PayCard
              id="crypto"
              title="Crypto · ETH / SOL"
              sub="MetaMask · Phantom · Coinbase"
              glyph="◎"
              glyphBg="var(--ink)"
              active={form.payment === 'crypto'}
              onClick={() => set('payment', 'crypto')} />
            <PayCard
              id="banjo"
              title="$BANJO Tokens"
              chip="25% OFF · PAY IN $BANJO"
              chipTone="olive"
              sub="Send to treasury · 25% off any sale"
              glyph="$"
              glyphBg="#169500"
              active={form.payment === 'banjo'}
              onClick={() => set('payment', 'banjo')} />
          </div>

          {/* Contextual payment info */}
          {form.payment === 'banjo' && <BanjoWalletInfo />}
          {(form.payment === 'stripe' || form.payment === 'paypal') && (
            <div style={{
              gridColumn: '1 / -1', marginTop: 4,
              background: 'var(--cream-soft)',
              border: '1.5px solid var(--ink)', borderRadius: 6,
              padding: '14px 16px',
            }}>
              <div className="eyebrow eyebrow-bright">
                ✦ {form.payment === 'stripe' ? 'Stripe' : 'PayPal'} · Account Deposit
              </div>
              <div className="f-mono" style={{ fontSize: 11, color: 'var(--ink-soft)', marginTop: 6, lineHeight: 1.6, letterSpacing: '0.04em' }}>
                <strong>$0 due at reservation.</strong> The studio confirms
                shipping cost per country, then sends a
                {form.payment === 'stripe' ? ' Stripe ' : ' PayPal '}
                invoice for <strong>${plush.price}</strong> + shipping on
                release. No charge until you approve.
              </div>
            </div>
          )}
          {form.payment === 'crypto' && (
            <div style={{
              gridColumn: '1 / -1', marginTop: 4,
              background: 'var(--cream-soft)', border: '1.5px solid var(--ink)',
              borderRadius: 6, padding: '14px 16px',
            }}>
              <div className="eyebrow">◎ Crypto · ETH / SOL / USDC</div>
              <div className="f-mono" style={{ fontSize: 11, color: 'var(--ink-soft)', marginTop: 6, lineHeight: 1.6, letterSpacing: '0.04em' }}>
                <strong>$0 due at reservation.</strong> After the studio
                confirms shipping, you'll get a payable address + amount
                in your chosen currency. No gas markup — base network fees only.
              </div>
            </div>
          )}
        </FieldGroup>

        {/* Notes */}
        <FieldGroup label="04 · Anything else?">
          <div style={{ gridColumn: '1 / -1' }}>
            <label className="eyebrow eyebrow-bright" style={{ display: 'block', marginBottom: 8 }}>
              Notes <span style={{ color: 'var(--mute)', textTransform: 'none', letterSpacing: 0 }}>(optional)</span>
            </label>
            <textarea
              value={form.notes}
              onChange={(e) => set('notes', e.target.value)}
              placeholder="Gift note, signing requests, anything Banjo should know…"
              rows={3}
              style={{ ...inputStyle, resize: 'vertical', minHeight: 80, fontFamily: 'var(--f-sans)' }} />
          </div>
        </FieldGroup>

        {/* Submit row */}
        <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button type="submit" disabled={!canSubmit}
            className="btn btn-accent btn-lg"
            style={{
              flex: 1, minWidth: 240,
              opacity: canSubmit ? 1 : 0.5,
              cursor: canSubmit ? 'pointer' : 'not-allowed',
            }}>
            Place pre-order →
          </button>
          <button type="button" onClick={onCancel} className="btn btn-lg">
            Cancel
          </button>
        </div>
        <div className="f-mono" style={{
          marginTop: 14, fontSize: 10, color: 'var(--mute)',
          letterSpacing: '0.16em', textTransform: 'uppercase',
        }}>
          ✦ No payment taken yet · the studio confirms first.
        </div>
      </form>

      {/* RIGHT — order summary */}
      <aside className="po-summary" style={{
        position: 'sticky', top: 88, alignSelf: 'flex-start',
      }}>
        <div style={{
          background: 'var(--cream-soft)', border: '1.5px solid var(--ink)',
          borderRadius: 8, overflow: 'hidden',
        }}>
          <div style={{
            padding: '18px 20px',
            background: 'var(--ink)', color: 'var(--cream)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div className="f-display" style={{ fontSize: 18 }}>YOUR PRE-ORDER</div>
            <span className="pill" style={{
              background: 'var(--accent)', color: '#fff', borderColor: 'var(--cream)',
              fontSize: 9,
            }}>● DRAFT</span>
          </div>

          {/* Plush card */}
          <div style={{ padding: 20 }}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
              <div style={{
                width: 72, height: 72, flex: '0 0 auto',
                background: '#f4f0e2', border: '1.5px solid var(--ink)',
                borderRadius: 6, overflow: 'hidden',
              }}>
                <img src="assets/frontview-sm.png" alt="" style={{
                  width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 65%',
                }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="eyebrow">Drop A · Genesis</div>
                <div className="f-display" style={{ fontSize: 18, marginTop: 2 }}>Banjo, the Plush</div>
                <div className="f-mono" style={{ fontSize: 10, color: 'var(--mute)', marginTop: 4, letterSpacing: '0.08em' }}>
                  8" · hand-stitched · no.001
                </div>
              </div>
            </div>

            {/* Qty stepper */}
            <div style={{
              marginTop: 16, display: 'flex',
              justifyContent: 'space-between', alignItems: 'center',
            }}>
              <div className="eyebrow">Quantity</div>
              <div style={{
                display: 'inline-flex', alignItems: 'center',
                border: '1.5px solid var(--ink)', borderRadius: 6, overflow: 'hidden',
              }}>
                <button type="button" onClick={() => set('qty', Math.max(1, form.qty - 1))} style={poQty}>–</button>
                <span style={{ padding: '0 14px', font: '600 14px/1 var(--f-mono)' }}>{form.qty}</span>
                <button type="button" onClick={() => set('qty', form.qty + 1)} style={poQty}>+</button>
              </div>
            </div>

            <hr className="hair-dash" style={{ margin: '18px 0' }} />

            <div className="f-mono" style={{ fontSize: 12, lineHeight: 1.9, color: 'var(--ink-soft)' }}>
              <Row k="Unit price" v={`$${unit}`} />
              <Row k={`Subtotal (×${form.qty})`} v={`$${subtotal.toFixed(2)}`} />
              {discount > 0 && (
                <Row k="$BANJO discount (–25%)" v={`–$${discount.toFixed(2)}`} good />
              )}
              <Row k="Shipping" v="quoted by admin" muted />
            </div>

            <hr className="hair" style={{ margin: '14px 0' }} />

            <div className="f-display" style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              fontSize: 28,
            }}>
              <span>FROG TOTAL</span>
              <span style={{ color: 'var(--accent)' }}>${itemTotal.toFixed(2)}</span>
            </div>
            <div className="f-mono" style={{ fontSize: 10, color: 'var(--mute)', marginTop: 6, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              + shipping (set per country by admin)
            </div>

            {/* Due-now band */}
            <div style={{
              marginTop: 16, padding: '12px 14px',
              background: discountEligible ? '#169500' : 'var(--cream)',
              color: discountEligible ? '#fff' : 'var(--ink)',
              border: '1.5px solid var(--ink)', borderRadius: 6,
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              gap: 8, flexWrap: 'wrap'
            }}>
              <span className="f-mono" style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                {discountEligible ? '→ Pay now to lock 25% off' : '✦ Due at reservation'}
              </span>
              <span className="f-display" style={{ fontSize: 22, lineHeight: 1 }}>
                {discountEligible ? `$${dueNow.toFixed(2)}` : '$0.00'}
              </span>
            </div>
            {!discountEligible &&
              <div className="f-mono" style={{
                fontSize: 9, color: 'var(--mute)', marginTop: 8,
                letterSpacing: '0.14em', textTransform: 'uppercase', lineHeight: 1.6
              }}>
                ↷ Frog total + shipping invoiced on release · no charge until you approve
              </div>
            }
          </div>
        </div>

        <div className="f-mono" style={{
          fontSize: 10, color: 'var(--mute)', marginTop: 16,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          display: 'flex', justifyContent: 'space-between', gap: 8,
        }}>
          <span>⚿ reservation · $0 unless $BANJO</span>
          <span>limited · 200 · 50 win NFT</span>
        </div>
      </aside>

      <style>{`
        @media (max-width: 940px) {
          .po-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .po-summary { position: static !important; }
        }
        @media (max-width: 520px) {
          .pay-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

// ─── $BANJO Wallet Info Card ──────────────────────────────────────
function BanjoWalletInfo() {
  const [copied, setCopied] = React.useState(false);

  function copy() {
    try {
      navigator.clipboard.writeText(BANJO_WALLET);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  }

  return (
    <div style={{
      gridColumn: '1 / -1', marginTop: 4,
      background: 'var(--ink)', color: 'var(--cream)',
      border: '1.5px solid var(--ink)', borderRadius: 6,
      padding: 20, overflow: 'hidden', position: 'relative',
    }}>
      <div style={{
        position: 'absolute', top: -40, right: -20,
        fontFamily: 'var(--f-display)', fontSize: 140,
        opacity: 0.06, lineHeight: 0.9, pointerEvents: 'none',
      }}>$BANJO</div>

      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span className="pill" style={{ background: '#169500', color: '#fff', borderColor: 'var(--cream)' }}>
            $BANJO Token
          </span>
          <span className="pill" style={{ background: 'var(--accent)', color: '#fff', borderColor: 'var(--cream)' }}>
            25% OFF
          </span>
          <span className="pill" style={{ background: 'var(--cream)', color: 'var(--ink)', borderColor: 'var(--cream)' }}>
            50% BURN · 50% LOCK
          </span>
        </div>

        <div className="f-display" style={{ fontSize: 22, marginTop: 14, lineHeight: 1.1 }}>
          PAY IN $BANJO,<br/>GET <span style={{ color: 'var(--accent)' }}>25% OFF</span> THE FROG.
        </div>

        <div className="f-mono" style={{
          fontSize: 10, marginTop: 10, opacity: 0.7,
          letterSpacing: '0.14em', textTransform: 'uppercase', lineHeight: 1.7
        }}>
          ↷ 25% applies to every $BANJO sale · all SKUs, no expiry
        </div>

        <div className="eyebrow" style={{ color: 'var(--terracotta-soft)', marginTop: 18 }}>
          Receive address · Solana
        </div>
        <div style={{
          marginTop: 8,
          background: 'rgba(235,229,211,0.08)',
          border: '1.5px dashed rgba(235,229,211,0.4)',
          borderRadius: 6,
          padding: '12px 14px',
          display: 'flex', gap: 12, alignItems: 'center',
        }}>
          <code className="f-mono" style={{
            flex: 1, minWidth: 0,
            fontSize: 12, letterSpacing: '0.04em',
            color: 'var(--cream)',
            wordBreak: 'break-all', lineHeight: 1.4,
          }}>{BANJO_WALLET}</code>
          <button type="button" onClick={copy} className="btn btn-sm"
            style={{
              flex: '0 0 auto',
              background: copied ? '#169500' : 'var(--cream)',
              color: copied ? '#fff' : 'var(--ink)',
              borderColor: 'var(--cream)',
            }}>
            {copied ? '✓ Copied' : 'Copy'}
          </button>
        </div>

        <div className="f-mono" style={{
          fontSize: 10, opacity: 0.7, marginTop: 12,
          letterSpacing: '0.12em', textTransform: 'uppercase', lineHeight: 1.7,
        }}>
          ↘ Submit this form, then send your $BANJO to the address above.<br/>
          ↘ Reply to the studio email with your transaction signature.<br/>
          ↘ 50% of all $BANJO received is <strong>burned</strong>, 50% <strong>locked</strong>.
        </div>
      </div>
    </div>
  );
}

// ─── Confirmation ─────────────────────────────────────────────────
function ConfirmStep({ orderId, form, itemTotal, discount, onShop, onHome }) {
  const payLabels = {
    stripe: 'Stripe',
    paypal: 'PayPal',
    crypto: 'Crypto (ETH / SOL / USDC)',
    banjo:  '$BANJO Tokens',
  };

  return (
    <div className="wrap" style={{ padding: '60px 24px 60px', textAlign: 'center' }}>
      <div className="eyebrow eyebrow-bright">Step 02 · Pre-Order Received</div>

      <div style={{
        width: 140, height: 140, margin: '24px auto 0',
        borderRadius: '50%', background: '#000',
        border: '1.5px solid var(--ink)',
        boxShadow: '6px 6px 0 var(--ink)',
        overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        animation: 'pageIn .6s var(--e-spring)',
      }}>
        <img src="assets/pfp.png" alt="Banjo"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <h1 className="f-display" style={{ fontSize: 'clamp(40px, 5vw, 64px)', marginTop: 24, lineHeight: 0.95 }}>
        BANJO HAS YOUR<br/>
        <span style={{ color: 'var(--accent)' }}>PRE-ORDER.</span>
      </h1>
      <p style={{ maxWidth: 540, margin: '14px auto 0', fontSize: 16, color: 'var(--ink-soft)' }}>
        Pre-order <strong>#{orderId}</strong> is logged. The studio will
        review and reply within 24–48 hours with your country-specific
        shipping cost + payment instructions for <strong>{payLabels[form.payment]}</strong>.
      </p>

      {/* Summary card */}
      <div style={{
        maxWidth: 560, margin: '32px auto 0',
        background: 'var(--cream-soft)', border: '1.5px solid var(--ink)',
        borderRadius: 8, overflow: 'hidden', textAlign: 'left',
      }}>
        <div style={{ padding: '14px 20px', borderBottom: '1.5px solid var(--ink)', background: 'var(--cream)' }}>
          <div className="eyebrow">Summary · #{orderId}</div>
        </div>
        <div style={{ padding: 20 }}>
          <SumRow k="Name"     v={form.fullName} />
          <SumRow k="Email"    v={form.email} />
          <SumRow k="X Handle" v={form.xHandle} />
          <SumRow k="Country"  v={form.country} />
          <SumRow k="Payment"  v={payLabels[form.payment]} />
          <SumRow k="Quantity" v={`${form.qty} × Banjo Plush 001`} />
          {discount > 0 && (
            <SumRow k="Discount" v={`–$${discount.toFixed(2)} (25% off)`} />
          )}
          <SumRow k="Frog total"  v={`$${itemTotal.toFixed(2)}`} bold />
          <SumRow k="Shipping" v="quoted by admin" muted />
        </div>
      </div>

      {form.payment === 'banjo' && (
        <div style={{
          maxWidth: 560, margin: '20px auto 0',
          background: 'var(--ink)', color: 'var(--cream)',
          border: '1.5px solid var(--ink)', borderRadius: 8,
          padding: '18px 20px', textAlign: 'left',
        }}>
          <div className="eyebrow" style={{ color: 'var(--terracotta-soft)' }}>
            ↘ Send your $BANJO now
          </div>
          <code className="f-mono" style={{
            display: 'block', marginTop: 8,
            fontSize: 12, letterSpacing: '0.04em',
            wordBreak: 'break-all', lineHeight: 1.5,
          }}>{BANJO_WALLET}</code>
          <div className="f-mono" style={{
            fontSize: 10, opacity: 0.7, marginTop: 8,
            letterSpacing: '0.14em', textTransform: 'uppercase',
          }}>
            50% BURN · 50% LOCK
          </div>
        </div>
      )}

      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
        <button className="btn btn-accent btn-lg" onClick={onHome}>← Back home</button>
        <button className="btn btn-lg" onClick={onShop}>See the catalog</button>
      </div>

      <div className="f-mono" style={{
        marginTop: 32, fontSize: 10, color: 'var(--mute)',
        letterSpacing: '0.2em', textTransform: 'uppercase',
      }}>✦ thank you · enjoy the frog ✦</div>
    </div>
  );
}

// ─── Form atoms ───────────────────────────────────────────────────
function FieldGroup({ label, children }) {
  return (
    <fieldset style={{
      border: 0, padding: 0, margin: '28px 0 0',
    }}>
      <legend className="eyebrow eyebrow-bright" style={{ padding: 0, marginBottom: 14 }}>
        {label}
      </legend>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12,
      }}>
        {children}
      </div>
    </fieldset>
  );
}

function Field({ label, value, onChange, placeholder, type = 'text', required, full }) {
  return (
    <label style={{ gridColumn: full ? '1 / -1' : 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span className="f-mono" style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
        {label} {required && <span style={{ color: 'var(--accent)' }}>*</span>}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={inputStyle} />
    </label>
  );
}

function Select({ label, value, onChange, options, required, full }) {
  return (
    <label style={{ gridColumn: full ? '1 / -1' : 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span className="f-mono" style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
        {label} {required && <span style={{ color: 'var(--accent)' }}>*</span>}
      </span>
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ ...inputStyle, appearance: 'auto', cursor: 'pointer' }}>
        <option value="">Select your country…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}

function PayCard({ id, title, sub, glyph, glyphBg, chip, chipTone, active, onClick }) {
  return (
    <button type="button" onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 14,
        padding: '16px 18px',
        background: active ? 'var(--ink)' : 'var(--cream-soft)',
        color: active ? 'var(--cream)' : 'var(--ink)',
        border: '1.5px solid var(--ink)', borderRadius: 8,
        cursor: 'pointer', textAlign: 'left',
        transition: 'background .15s, color .15s, transform .15s, box-shadow .15s',
        boxShadow: active ? '3px 3px 0 var(--accent)' : 'none',
        transform: active ? 'translate(-2px,-2px)' : 'none',
        position: 'relative',
      }}>
      <div style={{
        width: 40, height: 40, borderRadius: 8,
        background: glyphBg, color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        font: '700 18px/1 var(--f-display)',
        border: '1.5px solid var(--ink)',
        flex: '0 0 auto',
      }}>{glyph}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="f-display" style={{ fontSize: 16 }}>{title}</div>
        <div className="f-mono" style={{ fontSize: 10, opacity: 0.75, marginTop: 3, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          {sub}
        </div>
      </div>
      {chip && (
        <span className="f-mono" style={{
          position: 'absolute', top: -8, right: 10,
          background: chipTone === 'olive' ? 'var(--olive)' : 'var(--accent)',
          color: '#fff', borderRadius: 999,
          padding: '4px 8px',
          fontSize: 9, letterSpacing: '0.12em',
          border: '1.5px solid var(--ink)',
        }}>{chip}</span>
      )}
    </button>
  );
}

function Row({ k, v, muted, good }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between',
      color: muted ? 'var(--mute)' : good ? '#169500' : 'inherit',
    }}>
      <span>{k}</span><span>{v}</span>
    </div>
  );
}

function SumRow({ k, v, bold, muted }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', gap: 16,
      padding: '6px 0',
      borderBottom: '1px dashed rgba(31,26,19,0.15)',
      font: bold ? '700 18px/1.3 var(--f-display)' : '500 13px/1.4 var(--f-mono)',
      color: muted ? 'var(--mute)' : 'var(--ink)',
      letterSpacing: bold ? 0 : '0.04em',
    }}>
      <span style={{ textTransform: bold ? 'none' : 'uppercase', opacity: bold ? 1 : 0.7 }}>{k}</span>
      <span style={{ textAlign: 'right' }}>{v}</span>
    </div>
  );
}

const inputStyle = {
  padding: '12px 14px',
  background: 'var(--cream)', border: '1.5px solid var(--ink)',
  borderRadius: 6, font: '500 13px/1.3 var(--f-mono)',
  outline: 'none', width: '100%',
  color: 'var(--ink)',
};

const poQty = {
  width: 32, height: 36, border: 0, background: 'transparent',
  cursor: 'pointer', fontFamily: 'var(--f-mono)', fontSize: 14,
};

// ─── Country options ──────────────────────────────────────────────
const COUNTRY_OPTIONS = [
  'United States', 'Canada', 'Mexico',
  'United Kingdom', 'Ireland', 'France', 'Germany', 'Italy', 'Spain',
  'Netherlands', 'Belgium', 'Sweden', 'Norway', 'Denmark', 'Finland',
  'Poland', 'Portugal', 'Switzerland', 'Austria', 'Czechia',
  'Australia', 'New Zealand',
  'Japan', 'South Korea', 'Singapore', 'Hong Kong', 'Taiwan',
  'Philippines', 'Indonesia', 'Malaysia', 'Thailand', 'Vietnam', 'India',
  'Brazil', 'Argentina', 'Chile', 'Colombia',
  'United Arab Emirates', 'Saudi Arabia', 'Israel', 'Turkey',
  'South Africa', 'Nigeria', 'Kenya',
  'Other (specify in notes)',
];

Object.assign(window, { CheckoutPage });
