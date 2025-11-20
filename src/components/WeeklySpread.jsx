import ScrapbookItem from "./ScrapbookItem";
import WeeklySpreadSidebar from "./WeeklySpreadSidebar";

export default function WeeklySpread() {
  const fakeData = [
    {
      id: 1,
      image: "https://source.unsplash.com/random/400x300?study",
      text: "Studying @ College Library",
      tags: ["study", "school"],
      reactions: { likes: 10, comments: 2, favorites: 1 }
    },
    {
      id: 2,
      image: "https://source.unsplash.com/random/400x300?coffee",
      text: "Coffee date ☕",
      tags: ["coffee", "friends"],
      reactions: { likes: 5, comments: 1, favorites: 0 }
    }
  ];

  return (
    <div className="weekly-page-layout">
      <WeeklySpreadSidebar />

      <div className="masonry-grid">
        {fakeData.map(item => (
          <ScrapbookItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}