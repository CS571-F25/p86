import { Button, Form } from "react-bootstrap";
import ThemeSelector from "./ThemeSelector";

export default function WeeklySpreadSidebar({ activeFilter, onFilterChange, searchFilter, onSearchChange, theme, onThemeChange }) {
  const filterTags = ["study", "gym", "friends"];

  return (
    <div className="sidebar sticky-filters">
      <h2>Filters</h2>
      
      <Form.Group className="mb-3">
        <Form.Label htmlFor="search-filter" className="visually-hidden">Search memories</Form.Label>
        <Form.Control
          id="search-filter"
          type="text"
          placeholder="Search memories..."
          value={searchFilter}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Search memories"
        />
      </Form.Group>

      <div className="mb-3">
        <h3>Quick Filters</h3>
        {filterTags.map(tag => (
          <Button
            key={tag}
            variant={activeFilter === tag ? "primary" : "outline-primary"}
            className="w-100 mb-2"
            aria-label={`Filter by ${tag} tag`}
            onClick={() => onFilterChange(tag)}
          >
            #{tag}
          </Button>
        ))}
        {activeFilter && (
          <Button
            variant="outline-secondary"
            className="w-100 mb-2"
            onClick={() => onFilterChange(null)}
            aria-label="Clear filter"
          >
            Clear Filter
          </Button>
        )}
      </div>

      <div className="mt-4">
        <h3>Theme</h3>
        <ThemeSelector currentTheme={theme} onThemeChange={onThemeChange} />
      </div>
    </div>
  );
}
