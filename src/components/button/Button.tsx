// src/components/Button.tsx

interface CounterProps {
  clicks: number;
  onUpdate: () => void;
}

export default function Button({ clicks, onUpdate }: CounterProps) {
  return (
    <button className="button" onClick={onUpdate}>
      {clicks}
    </button>
  );
}
