export default function CommentList({ comments }) {
  return (
    <div className="comment-list">
      {comments.map((c, i) => (
        <div key={i} className="comment-bubble">
          <strong>{c.user}</strong>: {c.text}
        </div>
      ))}
    </div>
  );
}
