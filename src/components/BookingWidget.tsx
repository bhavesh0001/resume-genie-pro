"use client";
import { useState } from "react";

export default function BookingWidget({ consultant }: { consultant: any }) {
  const [minutes, setMinutes] = useState(30);
  const price = Math.max(consultant.pricePerMin * minutes, 1000); // min charge safeguard

  const checkout = async () => {
    const res = await fetch("/api/razorpay/create-payment-link", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ consultantId: consultant.id, minutes })
    });
    const json = await res.json();
    if (json.url) window.location.href = json.url;
    else alert(json.error || "Failed to create payment link");
  };

  return (
    <div>
      <div className="text-sm text-muted mb-1">Price per minute</div>
      <div className="text-2xl font-semibold mb-3">₹{(consultant.pricePerMin/100).toFixed(2)}</div>

      <label className="block text-sm mb-1 text-muted">Select minutes</label>
      <input
        type="number"
        min={15}
        step={5}
        value={minutes}
        onChange={e => setMinutes(Number(e.target.value || 0))}
        className="input mb-3"
      />
      <div className="mb-3 text-muted">Total: <b>₹{(price/100).toFixed(2)}</b></div>
      <button className="btn w-full" onClick={checkout}>Pay & Start Chat</button>
      <p className="text-xs text-muted mt-2">After payment, you'll be redirected to a chat room.</p>
    </div>
  )
}
