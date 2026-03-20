const TEXT = "Механики · ИНН 751601068341";
const REPEAT = 18;

export default function Watermark() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9980,
        pointerEvents: "none",
        userSelect: "none",
        overflow: "hidden",
      }}
    >
      {Array.from({ length: REPEAT }).map((_, row) => (
        <div
          key={row}
          style={{
            display: "flex",
            gap: "120px",
            whiteSpace: "nowrap",
            transform: `rotate(-32deg) translateX(${row % 2 === 0 ? 0 : -200}px)`,
            marginTop: row === 0 ? "-60px" : "0",
            marginBottom: "60px",
            opacity: 0.045,
          }}
        >
          {Array.from({ length: 8 }).map((_, col) => (
            <span
              key={col}
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#fff",
                display: "inline-block",
              }}
            >
              {TEXT}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
