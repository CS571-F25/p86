import ReactionButton from "./ReactionButton";

export default function ReactionBar({ reactions, onReaction, userReactions = {} }) {
  return (
    <div className="reaction-bar" role="group" aria-label="Reactions">
      <ReactionButton
        emoji="💌"
        count={reactions.likes || 0}
        label="Like"
        onClick={() => onReaction && onReaction("like")}
        isActive={userReactions.like}
      />
      <ReactionButton
        emoji="🧘‍♀️"
        count={reactions.favorites || 0}
        label="Favorite"
        onClick={() => onReaction && onReaction("favorite")}
        isActive={userReactions.favorite}
      />
      <ReactionButton
        emoji="💬"
        count={reactions.comments || 0}
        label="Comment count"
        onClick={() => {}}
        isActive={false}
        disabled={true}
      />
    </div>
  );
}
