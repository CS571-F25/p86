import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrapbookItem from "./ScrapbookItem";
import WeeklySpreadSidebar from "./WeeklySpreadSidebar";
import AddItemForm from "./AddItemForm";

export default function WeeklySpread() {
  const [items, setItems] = useState([
    {
      id: 1,
      image: "https://source.unsplash.com/random/400x500?study",
      text: "Studying @ College Library - finally finished that assignment! 📚",
      tags: ["study", "school"],
      reactions: { likes: 10, comments: 2, favorites: 1 },
      comments: [
        { user: "Friend1", text: "Good luck with your studies!" },
        { user: "Friend2", text: "You got this! 💪" }
      ]
    },
    {
      id: 2,
      image: "https://source.unsplash.com/random/400x300?coffee",
      text: "Coffee date ☕ with the best people",
      tags: ["coffee", "friends"],
      reactions: { likes: 5, comments: 1, favorites: 0 },
      comments: [
        { user: "Friend3", text: "Looks fun! ☕" }
      ]
    },
    {
      id: 3,
      image: "https://source.unsplash.com/random/400x600?gym",
      text: "Morning workout complete! Feeling energized 💪",
      tags: ["gym", "fitness"],
      reactions: { likes: 8, comments: 0, favorites: 2 },
      comments: []
    },
    {
      id: 4,
      image: "https://source.unsplash.com/random/400x400?sunset",
      text: "Beautiful sunset walk in the park 🌅",
      tags: ["nature", "walk"],
      reactions: { likes: 15, comments: 3, favorites: 5 },
      comments: [
        { user: "Friend4", text: "So beautiful!" },
        { user: "Friend5", text: "Wish I was there!" },
        { user: "Friend6", text: "Perfect timing for this photo" }
      ]
    },
    {
      id: 5,
      image: "https://source.unsplash.com/random/400x350?food",
      text: "Homemade pasta night 🍝",
      tags: ["food", "cooking"],
      reactions: { likes: 12, comments: 1, favorites: 3 },
      comments: [
        { user: "Friend7", text: "Recipe please!" }
      ]
    },
    {
      id: 6,
      image: "https://source.unsplash.com/random/400x450?game",
      text: "Game night with friends 🎮",
      tags: ["friends", "games"],
      reactions: { likes: 7, comments: 2, favorites: 1 },
      comments: [
        { user: "Friend8", text: "So much fun!" },
        { user: "Friend9", text: "Next time invite me!" }
      ]
    }
  ]);

  const [activeFilter, setActiveFilter] = useState(null);
  const [searchFilter, setSearchFilter] = useState("");
  const [theme, setTheme] = useState("default");
  const [nextId, setNextId] = useState(7); // Start from 7 since we have 6 initial items

  const handleAddItem = (newItem) => {
    // Add new item at the top with isUserPost flag
    const newItemWithId = { 
      ...newItem, 
      id: nextId,
      isUserPost: true,
      createdAt: new Date().toISOString()
    };
    setItems([newItemWithId, ...items]);
    setNextId(nextId + 1);
  };

  const handleFilterChange = (filterTag) => {
    setActiveFilter(activeFilter === filterTag ? null : filterTag);
  };

  const handleSearchChange = (searchText) => {
    setSearchFilter(searchText.toLowerCase());
  };

  // Filter items by tag filter and/or search text
  const filteredItems = items.filter(item => {
    const matchesTagFilter = !activeFilter || (item.tags && item.tags.includes(activeFilter));
    const matchesSearch = !searchFilter || 
      item.text.toLowerCase().includes(searchFilter) ||
      (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchFilter)));
    return matchesTagFilter && matchesSearch;
  });

  // Apply theme class to body
  useEffect(() => {
    document.body.className = `theme-${theme}`;
    return () => {
      document.body.className = "";
    };
  }, [theme]);

  return (
    <Container fluid className="px-4 mt-4 mb-5">
      <div className="mb-4">
        <h1>Weekly Spread</h1>
        {(activeFilter || searchFilter) && (
          <p className="text-muted">
            {activeFilter && <>Filtering by tag: <strong>#{activeFilter}</strong></>}
            {activeFilter && searchFilter && " • "}
            {searchFilter && <>Search: <strong>"{searchFilter}"</strong></>}
          </p>
        )}
      </div>
      <Row>
        <Col lg={3} className="mb-4">
          <div className="sticky-sidebar-container">
            <WeeklySpreadSidebar 
              activeFilter={activeFilter}
              onFilterChange={handleFilterChange}
              searchFilter={searchFilter}
              onSearchChange={handleSearchChange}
              theme={theme}
              onThemeChange={setTheme}
            />
            <div className="mt-4 add-memory-section">
              <h2>Add New Memory</h2>
              <AddItemForm onAddItem={handleAddItem} />
            </div>
          </div>
        </Col>
        <Col lg={9}>
          <div className="masonry-grid">
            {filteredItems.length > 0 ? (
              filteredItems.map(item => (
                <ScrapbookItem key={item.id} item={item} />
              ))
            ) : (
              <div className="text-center p-5">
                <p className="text-muted">No items found with this filter.</p>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}