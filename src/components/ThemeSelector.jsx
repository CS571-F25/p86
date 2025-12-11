import { Form } from "react-bootstrap";

export default function ThemeSelector({ currentTheme, onThemeChange }) {
  const themes = [
    { value: "default", label: "Default" },
    { value: "dark-forest", label: "Dark Forest" },
    { value: "ocean-blue", label: "Ocean Blue" }
  ];

  return (
    <Form.Group>
      <Form.Label htmlFor="theme-select">Select Theme</Form.Label>
      <Form.Select
        id="theme-select"
        value={currentTheme}
        onChange={(e) => onThemeChange(e.target.value)}
        aria-label="Theme selection"
      >
        {themes.map(theme => (
          <option key={theme.value} value={theme.value}>
            {theme.label}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}

