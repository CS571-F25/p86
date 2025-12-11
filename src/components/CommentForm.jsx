import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function CommentForm({ onAddComment }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onAddComment(comment);
      setComment("");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="comment-form">
      <Form.Group className="mb-2">
        <Form.Label htmlFor="comment-input" className="visually-hidden">
          Add a comment
        </Form.Label>
        <Form.Control
          id="comment-input"
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          aria-label="Comment text"
        />
      </Form.Group>
      <Button type="submit" variant="outline-primary" size="sm">
        Post Comment
      </Button>
    </Form>
  );
}

