import { Card, Badge } from "react-bootstrap";
import ReactionBar from "./ReactionBar";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { useState } from "react";

export default function ScrapbookItem({ item }) {
  const [comments, setComments] = useState(item.comments || []);
  const [reactions, setReactions] = useState(item.reactions || { likes: 0, comments: 0, favorites: 0 });
  const [userReactions, setUserReactions] = useState({
    like: false,
    favorite: false
  });

  const handleReaction = (type) => {
    if (type === "comment") {
      // Comments are handled separately, don't toggle
      return;
    }

    const reactionKey = type === "like" ? "likes" : "favorites";
    const userReactionKey = type === "like" ? "like" : "favorite";
    const isCurrentlyActive = userReactions[userReactionKey];

    setUserReactions(prev => ({
      ...prev,
      [userReactionKey]: !isCurrentlyActive
    }));

    setReactions(prev => ({
      ...prev,
      [reactionKey]: isCurrentlyActive 
        ? Math.max(0, (prev[reactionKey] || 0) - 1)
        : (prev[reactionKey] || 0) + 1
    }));
  };

  const handleAddComment = (text) => {
    setComments([...comments, { user: "You", text }]);
    setReactions(prev => ({ ...prev, comments: (prev.comments || 0) + 1 }));
  };

  return (
    <Card className={`scrapbook-item-card mb-4 ${item.isUserPost ? 'user-post' : ''}`}>
      {item.image && (
        <Card.Img variant="top" src={item.image} className="scrapbook-item-img" alt={item.text || "Scrapbook memory"} />
      )}

      <Card.Body>
        {item.isUserPost && (
          <div className="user-post-indicator">
            <span className="user-post-badge">Your post</span>
          </div>
        )}
        <Card.Text>{item.text}</Card.Text>

        {/* tags */}
        <div className="tag-row">
          {item.tags?.map(tag => (
            <Badge key={tag} bg="success" className="me-1">
              #{tag}
            </Badge>
          ))}
        </div>

        <ReactionBar 
          reactions={reactions} 
          onReaction={handleReaction}
          userReactions={userReactions}
        />
        {comments.length > 0 && <CommentList comments={comments} />}
        <CommentForm onAddComment={handleAddComment} />
      </Card.Body>
    </Card>
  );
}
