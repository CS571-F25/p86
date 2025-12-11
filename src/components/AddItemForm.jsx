import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

export default function AddItemForm({ onAddItem }) {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const tagArray = tags.split(",").map(t => t.trim()).filter(t => t);
    onAddItem({
      text,
      image: imageUrl,
      tags: tagArray,
      reactions: { likes: 0, comments: 0, favorites: 0 },
      comments: []
    });
    setText("");
    setImageUrl("");
    setTags("");
  };

  return (
    <Form onSubmit={handleSubmit} className="add-item-form">
      <Form.Group className="mb-3">
        <Form.Label htmlFor="item-text">Memory Description</Form.Label>
        <Form.Control
          id="item-text"
          type="text"
          placeholder="What happened this week?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          aria-label="Memory description"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="item-image">Image URL (optional)</Form.Label>
        <Form.Control
          id="item-image"
          type="url"
          placeholder="https://example.com/image.jpg"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          aria-label="Image URL"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="item-tags">Tags (comma-separated)</Form.Label>
        <Form.Control
          id="item-tags"
          type="text"
          placeholder="study, friends, gym"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          aria-label="Tags"
        />
      </Form.Group>

      <Button type="submit" variant="primary">
        Add Memory
      </Button>
    </Form>
  );
}

