export default function CommentList({ comments }) {
  if (!comments || comments.length === 0) {
    return null;
  }

  return (
    <div className="comment-list" role="list" aria-label="Comments">
      {comments.map((c, i) => (
        <div key={i} className="comment-bubble" role="listitem">
          <strong>{c.user}</strong>: {c.text}
        </div>
      ))}
    </div>
  );
}
