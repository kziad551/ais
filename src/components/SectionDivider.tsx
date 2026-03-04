const SectionDivider = ({ inverted = false }: { inverted?: boolean }) => (
  <div className={`w-full h-px ${inverted ? "bg-primary-foreground/10" : ""}`}>
    <div className="gradient-line max-w-xs mx-auto opacity-40" />
  </div>
);

export default SectionDivider;
