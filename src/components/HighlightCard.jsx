import { Card, Badge } from "react-bootstrap";

export default function HighlightCard({ highlight }) {
  return (
    <Card className="highlight-card">
      <Card.Body className="p-4">
        <Card.Title className="mb-3" style={{ fontSize: '1.25rem', color: '#0B3D2E' }}>
          {highlight.title}
        </Card.Title>
        <Card.Text className="mb-3" style={{ color: '#0A2342', fontSize: '0.95rem' }}>
          {highlight.description}
        </Card.Text>
        <Badge bg="success" style={{ backgroundColor: '#76D7C4', color: '#0B3D2E' }}>
          {highlight.reactions} reactions this week
        </Badge>
      </Card.Body>
    </Card>
  );
}
