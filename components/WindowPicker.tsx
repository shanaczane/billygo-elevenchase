"use client";
import { useEffect, useState } from "react";

const slots = ["7–8 AM", "8–9 AM", "9–10 AM", "10–11 AM", "12–1 PM", "1–2 PM", "3–4 PM", "5–6 PM"];

export default function WindowPicker({ scheduleUrl }: { scheduleUrl: string }) {
  const [days, setDays] = useState([
    { label: "Today", sub: "" }, { label: "Tomorrow", sub: "" }, { label: "Day 3", sub: "" }, { label: "Day 4", sub: "" },
  ]);
  useEffect(() => {
    // Standard hours are Mon–Sat, so skip Sundays.
    const out: { label: string; sub: string }[] = [];
    const now = new Date();
    for (let i = 0; out.length < 4; i++) {
      const x = new Date(now); x.setDate(now.getDate() + i);
      if (x.getDay() === 0) continue;
      out.push({
        label: i === 0 ? "Today" : i === 1 ? "Tomorrow" : x.toLocaleDateString("en-US", { weekday: "short" }),
        sub: x.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      });
    }
    setDays(out);
  }, []);
  const [day, setDay] = useState(0);
  const [slot, setSlot] = useState(2);
  const [svc, setSvc] = useState("AC & Heating");

  return (
    <div className="a-picker">
      <p className="a-picker-head">Pick your one-hour window</p>
      <div className="a-seg" role="group" aria-label="Service">
        {["AC & Heating", "Plumbing", "Drains"].map((s) => (
          <button key={s} type="button" aria-pressed={svc === s} onClick={() => setSvc(s)}>{s}</button>
        ))}
      </div>
      <div className="a-days" role="group" aria-label="Day">
        {days.map((d, i) => (
          <button key={i} type="button" aria-pressed={day === i} onClick={() => setDay(i)}>
            <strong>{d.label}</strong><span>{d.sub}</span>
          </button>
        ))}
      </div>
      <div className="a-slots" role="group" aria-label="Arrival window">
        {slots.map((s, i) => (
          <button key={s} type="button" aria-pressed={slot === i} onClick={() => setSlot(i)}>{s}</button>
        ))}
      </div>
      <a className="a-btn a-btn-primary a-btn-block" href={scheduleUrl}>
        Book {svc} · {days[day]?.label} {slots[slot]}
      </a>
      <p className="a-picker-note">Example windows. You'll see live availability on the next step. $0 trip fee, Mon–Sat 7am–7pm.</p>
    </div>
  );
}
