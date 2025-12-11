import { Container, Card } from "react-bootstrap";

export default function AboutMe() {
  return (
    <Container className="mt-5 mb-5">
      <div className="mb-4">
        <h1>About Scrapbook for Friends</h1>
      </div>
      
      <Card className="mb-4 border-0 shadow-sm">
        <Card.Body className="p-4">
          <h2>What is Scrapbook?</h2>
          <p className="mb-0">
            Scrapbook for Friends is a social, personal "micro-journal" that lets you share 
            visual updates from your week with a small circle of friends. Each week generates 
            an auto-dated "spread" where you can upload photos, short videos, or notes.
          </p>
        </Card.Body>
      </Card>

      <Card className="mb-4 border-0 shadow-sm">
        <Card.Body className="p-4">
          <h2>Features</h2>
          <ul className="mb-0">
            <li>Create weekly spreads with photos and memories</li>
            <li>Add tags and captions to organize your content</li>
            <li>React with emoji and leave comments</li>
            <li>Customize themes and layouts</li>
            <li>View highlights from your week</li>
          </ul>
        </Card.Body>
      </Card>

      <Card className="mb-4 border-0 shadow-sm">
        <Card.Body className="p-4">
          <h2>Get Started</h2>
          <p className="mb-0">
            Head over to the Weekly Spread page to start adding your memories! 
            You can drag and drop items, add reactions, and share with friends.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}