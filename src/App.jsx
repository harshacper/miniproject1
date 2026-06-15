import React from "react";
import "./App.css";

// ─────────────────────────────────────────────
// SVG Icons
// ─────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 13 13" fill="none">
      <path
        d="M3.5 6.5L5.5 8.5L9.5 4.5"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PencilIcon() {
  return (
    <svg className="goal-pencil-icon" viewBox="0 0 14 14" fill="none">
      <path
        d="M9.5 2.5l2 2-7 7H2.5v-2l7-7z"
        stroke="#9ca3af"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────

function GoalSubItem({ label, badge, badgeClass }) {
  return (
    <div className="goal-sub-item">
      <PencilIcon />
      <div className="goal-sub-text">{label}</div>
      <div className={`sub-badge ${badgeClass}`}>{badge}</div>
    </div>
  );
}

function DonutChart({ percent }) {
  const r = 32;
  const circ = 2 * Math.PI * r;
  const filled = (percent / 100) * circ;

  return (
    <div className="donut-wrap">
      <svg viewBox="0 0 84 84">
        {/* Track */}
        <circle
          cx="42" cy="42" r={r}
          fill="none"
          stroke="#1e6b4a"
          strokeWidth="11"
        />
        {/* Progress */}
        <circle
          cx="42" cy="42" r={r}
          fill="none"
          stroke="#4ade80"
          strokeWidth="11"
          strokeDasharray={circ}
          strokeDashoffset={circ - filled}
          strokeLinecap="round"
          transform="rotate(-90 42 42)"
        />
      </svg>
      <div className="donut-center-text">{percent}%</div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main App
// ─────────────────────────────────────────────

export default function App() {
  /* ── OKR sub-goals ── */
  const subGoals = [
    { label: "Increase Sales in DKJ by 12%",    badge: "AO",   badgeClass: "badge-ao" },
    { label: "Complete EMEA Sales Training",      badge: "DW/J", badgeClass: "badge-dw" },
    { label: "Complete Pricing Strategy Revamp",  badge: "MY",   badgeClass: "badge-my" },
    { label: "Complete Pricing Strategy Revamp",  badge: "SP",   badgeClass: "badge-sp" },
  ];

  /* ── Bar chart data ── */
  const bars = [
    { color: "#2dd4bf", height: 32 },
    { color: "#34d399", height: 24 },
    { color: "#60a5fa", height: 40 },
    { color: "#3b82f6", height: 28 },
    { color: "#a78bfa", height: 50 },
    { color: "#8b5cf6", height: 56 },
  ];

  const barLegend = [
    { color: "#2dd4bf", label: "100%" },
    { color: "#60a5fa", label: "75%"  },
    { color: "#a78bfa", label: "45%"  },
    { color: "#34d399", label: "60%"  },
    { color: "#3b82f6", label: "80%"  },
    { color: "#8b5cf6", label: "100%" },
  ];

  /* ── Career goals ── */
  const careerGoals = [
    "I want to grow into management and eventually lead my own team; in order to achieve this, I want to:",
    "Find a mentor",
    "Learn about different leadership styles",
    "Attend a leadership conference",
    "Become involved in the hiring process",
  ];

  return (
    <div className="page">
      {/* Green dot top */}
      <div className="top-dot" />

      {/* ── Header ── */}
      <div className="header">
        <div className="eyebrow">Improve Manager Productivity</div>
        <h1 className="headline">
          Empowered Managers,<br />Higher Performing Teams
        </h1>
        <p className="subtext">
          Make manager your highest point of leverage with productive
          meetings, clear expectations, and accountability.
        </p>
      </div>

      {/* ── 2-column grid ── */}
      <div className="grid">

        {/* ════════════════════════════════
            OKRs & Goals Card  (left, spans 2 rows)
        ════════════════════════════════ */}
        <div className="card-okrs">

          {/* Goals widget */}
          <div className="goals-widget">
            <div className="goals-heading">Goals</div>

            {/* Main goal */}
            <div className="goal-main-row">
              <div className="goal-check-icon">
                <CheckIcon />
              </div>
              <div className="goal-main-text">Increase International Revenue</div>
              <div className="goal-user-avatar">JH</div>
            </div>

            {/* Sub-goals */}
            <div className="goal-sub-list">
              {subGoals.map((g, i) => (
                <GoalSubItem
                  key={i}
                  label={g.label}
                  badge={g.badge}
                  badgeClass={g.badgeClass}
                />
              ))}
            </div>
          </div>

          {/* OKRs description */}
          <div className="okrs-bottom">
            <div className="okrs-title">OKRs &amp; Goals</div>
            <p className="okrs-desc">
              Focus individuals and teams on your company's top priorities,
              tracking progress and risks each step of the way.
            </p>
          </div>
        </div>

        {/* ════════════════════════════════
            Analytics Card  (top right)
        ════════════════════════════════ */}
        <div className="card-analytics">
          <div className="analytics-inner">

            {/* Left: text */}
            <div className="analytics-text">
              <div className="analytics-title">Analytics</div>
              <p className="analytics-desc">
                Seamlessly connect performance review cycle results into
                compensation decisions, creating fair and equitable pay outcomes.
              </p>
            </div>

            {/* Right: mini bar chart */}
            <div className="analytics-chart-box">
              <div className="chart-results-label">Results</div>

              <div className="chart-pill-row">
                <span className="chart-pill">Performance</span>
                <span className="chart-pill-grey">Archived</span>
              </div>

              <div className="chart-group-label">Group by: Department ↕</div>

              <div className="bar-group">
                {bars.map((b, i) => (
                  <div
                    key={i}
                    className="bar"
                    style={{ background: b.color, height: b.height }}
                  />
                ))}
              </div>

              <div className="bar-legend">
                {barLegend.map((l, i) => (
                  <div key={i} className="bar-legend-item">
                    <div className="bar-legend-dot" style={{ background: l.color }} />
                    {l.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════
            Grow + Turnover Row  (bottom right)
        ════════════════════════════════ */}
        <div className="card-grow-wrap">

          {/* Grow card */}
          <div className="grow-card">
            <div className="grow-title">Grow</div>
            <p className="grow-desc">
              Increase growth and engagement with HireSphere's dynamic employee
              development tools.
            </p>

            {/* Profile */}
            <div className="grow-profile-row">
              <div className="grow-avatar-img">BH</div>
              <div>
                <div className="grow-name">Bethany Hale</div>
                <div className="grow-role">People Operations</div>
              </div>
            </div>

            {/* Career goals */}
            <div className="grow-career-section">
              <div className="career-goals-label">Career Goals</div>
              <div className="career-goals-list">
                {careerGoals.map((goal, i) => (
                  <div key={i} className="career-goal-item">
                    <span className="career-bullet">•</span>
                    {goal}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Turnover card */}
          <div className="turnover-card">
            <div className="turnover-heading">Reduced<br />Turnover 27%</div>
            <DonutChart percent={27} />
            <div className="turnover-legend-row">
              <div className="legend-dot" />
              <span>Turnover</span>
            </div>
          </div>

        </div>
        {/* end grid */}
      </div>
    </div>
  );
}