export default function ReactionBar({ reactions }) {
  return (
    <div className="reaction-bar">
      <span>🐽 {reactions.comments}</span>
      <span>💌 {reactions.likes}</span>
      <span>🧘‍♀️ {reactions.favorites}</span>
    </div>
  );
}
