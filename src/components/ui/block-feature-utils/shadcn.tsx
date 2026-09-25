export default function Shadcn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="currentColor">
      <path d="M208 128l-80 80-80-80 80-80 80 80z" opacity="0.3"/>
      <path d="M192 40L40 192M216 112L112 216" stroke="currentColor" strokeWidth="24" strokeLinecap="round" />
    </svg>
  );
}
