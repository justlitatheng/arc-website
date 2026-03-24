type DragonFlyProps = {
  width?: number;
};

export default function DragonFly({ width = 140 }: DragonFlyProps) {
  const scale = width / 140;
  const height = Math.round(110 * scale);

  return (
    <svg
      viewBox="0 0 140 110"
      width={width}
      height={height}
      style={{ animation: "hover 2.4s ease-in-out infinite" }}
      aria-hidden="true"
    >
      {/* Upper left wing */}
      <ellipse
        cx="32" cy="38" rx="30" ry="11"
        fill="#E8E0F0" opacity="0.88"
        style={{ animation: "flapTop 0.6s ease-in-out infinite" }}
      />
      {/* Upper right wing */}
      <ellipse
        cx="108" cy="38" rx="30" ry="11"
        fill="#E8E0F0" opacity="0.88"
        style={{ animation: "flapTopR 0.6s ease-in-out infinite" }}
      />
      {/* Lower left wing */}
      <ellipse
        cx="28" cy="56" rx="24" ry="8"
        fill="#C9B8E8" opacity="0.6"
        style={{ animation: "flapBot 0.6s ease-in-out infinite" }}
      />
      {/* Lower right wing */}
      <ellipse
        cx="112" cy="56" rx="24" ry="8"
        fill="#C9B8E8" opacity="0.6"
        style={{ animation: "flapBotR 0.6s ease-in-out infinite" }}
      />
      {/* Body */}
      <ellipse cx="70" cy="72" rx="4" ry="22" fill="#C9B8E8" />
      {/* Thorax */}
      <ellipse cx="70" cy="50" rx="5" ry="10" fill="#7B6FA0" />
      {/* Neck */}
      <ellipse cx="70" cy="37" rx="4" ry="6" fill="#9B8EC4" />
      {/* Head */}
      <circle cx="70" cy="29" r="4" fill="#E8E0F0" />
      {/* Left antenna */}
      <line x1="67" y1="26" x2="62" y2="18" stroke="#C9B8E8" strokeWidth="1.5" />
      {/* Right antenna */}
      <line x1="73" y1="26" x2="78" y2="18" stroke="#C9B8E8" strokeWidth="1.5" />
    </svg>
  );
}
