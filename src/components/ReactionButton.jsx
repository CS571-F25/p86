import { Button } from "react-bootstrap";

export default function ReactionButton({ emoji, count, label, onClick, isActive = false, disabled = false }) {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <Button
      variant={isActive ? "primary" : "outline-secondary"}
      size="sm"
      onClick={handleClick}
      aria-label={`${label}: ${count}`}
      className="reaction-button"
      disabled={disabled}
    >
      {emoji} {count}
    </Button>
  );
}

