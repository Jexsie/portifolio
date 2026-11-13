const lanes = [
  { x: 60, label: "contracts" },
  { x: 160, label: "wallets" },
  { x: 260, label: "libraries" },
  { x: 360, label: "frontends" },
];

const idleEvents: [number, number][] = [
  [60, 410], [60, 310], [60, 80],
  [160, 390], [160, 340], [160, 60],
  [260, 170],
  [360, 390], [360, 210], [360, 120],
];

const pathEvents: [number, number][] = [
  [260, 410], [260, 360], [360, 300], [260, 280], [160, 250],
  [60, 200], [160, 140], [260, 100], [360, 50],
];

/** Hashgraph-style illustration: events gossiping across four lanes. */
export default function Hashgraph() {
  const accentPath = "M" + pathEvents.map(([x, y]) => `${x} ${y}`).join("L");

  return (
    <figure className="hashgraph">
      <svg
        viewBox="0 0 420 500"
        role="img"
        aria-label="A hashgraph: events gossiping between four lanes named contracts, wallets, libraries and frontends"
      >
        <path d={lanes.map((l) => `M${l.x} 40V440`).join("")} stroke="var(--line)" />
        <path
          d="M60 410L160 340M160 390L260 360M160 340L60 310M260 280L360 210M360 210L260 170M260 170L360 120M160 140L60 80M260 100L160 60"
          stroke="var(--line-strong)"
          fill="none"
        />
        <path
          d={accentPath}
          stroke="var(--accent)"
          strokeWidth="2"
          fill="none"
          strokeLinejoin="round"
        />
        {idleEvents.map(([cx, cy]) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="6"
            fill="var(--bg)"
            stroke="var(--node)"
            strokeWidth="1.5"
          />
        ))}
        {pathEvents.map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="7" fill="var(--accent)" />
        ))}
        {lanes.map((l) => (
          <text key={l.label} x={l.x} y="476">
            {l.label}
          </text>
        ))}
      </svg>
      <figcaption>Gossip about gossip, across the four layers I work in.</figcaption>
    </figure>
  );
}
