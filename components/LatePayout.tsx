"use client";
import { useState } from "react";

export default function LatePayout() {
  const [min, setMin] = useState(15);
  const pay = Math.min(min, 60);
  return (
    <div className="b-payout">
      <label htmlFor="late" className="b-payout-label">If your tech is <output>{min}</output> minutes late</label>
      <input id="late" type="range" min={0} max={90} step={1} value={min} onChange={(e) => setMin(Number(e.target.value))} />
      <div className="b-payout-scale" aria-hidden="true"><span>On time</span><span>30</span><span>60</span><span>90 min</span></div>
      <p className="b-payout-result" aria-live="polite">
        You get <strong>${pay}</strong> off{min > 60 ? " — the $60 max" : min === 0 ? " — because we showed up on time" : ""}.
      </p>
    </div>
  );
}
