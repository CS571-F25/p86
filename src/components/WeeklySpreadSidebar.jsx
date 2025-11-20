import { Button } from "react-bootstrap";

export default function WeeklySpreadSidebar() {
  return (
    <div className="sidebar">
      <h4>Filters</h4>
      <Button variant="outline-success" className="w-100 mb-2">#study</Button>
      <Button variant="outline-success" className="w-100 mb-2">#gym</Button>
      <Button variant="outline-success" className="w-100 mb-2">#friends</Button>

      <h4 className="mt-4">Theme</h4>
      <Button variant="outline-dark" className="w-100 mb-2">Dark Forest</Button>
      <Button variant="outline-primary" className="w-100">Ocean Blue</Button>
    </div>
  );
}
