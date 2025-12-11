import { Container } from "react-bootstrap";
import HighlightCard from "./HighlightCard";

export default function Home() {
  const highlights = [
    {
      title: "Most Liked This Week",
      description: "Your study session at the library got 10 likes!",
      reactions: 10
    },
    {
      title: "Coffee Date",
      description: "Your coffee date with friends was a hit!",
      reactions: 5
    }
  ];

  return (
    <Container className="mt-5 mb-5">
      <div className="text-center mb-5">
        <h1>Welcome to Scrapbook</h1>
        <p className="scrapbook-subtitle">Your weekly memories, beautifully collected.</p>
      </div>
      
      <section aria-labelledby="highlights-heading">
        <h2 id="highlights-heading" className="text-center mb-4">Weekly Highlights</h2>
        <div className="highlights-container">
          {highlights.map((highlight, index) => (
            <HighlightCard key={index} highlight={highlight} />
          ))}
        </div>
      </section>
    </Container>
  );
}
