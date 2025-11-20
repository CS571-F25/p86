import { Card, Badge } from "react-bootstrap";

export default function ScrapbookItem({ item }) {
  return (
    <Card className="scrapbook-item-card">
      {item.image && (
        <Card.Img variant="top" src={item.image} className="scrapbook-item-img" />
      )}

      <Card.Body>
        <Card.Text>{item.text}</Card.Text>

        {/* tags */}
        <div className="tag-row">
          {item.tags?.map(tag => (
            <Badge key={tag} bg="success" className="me-1">
              #{tag}
            </Badge>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}
