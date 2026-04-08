interface DropdownIconProps {
  className?: string;
}

export default function DropdownIcon({ className }: DropdownIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="m12 15-5-5h10z" />
    </svg>
  );
}
