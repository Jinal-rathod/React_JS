import { useState } from "react";

const CommentReview = () => {
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment.trim() === "") return;

    setReviews([
      ...reviews,
      {
        id: Date.now(),
        text: comment,
      },
    ]);

    setComment("");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
        Comments / Reviews
      </h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="Write your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button
          type="submit"
          className="mt-3 px-6 py-2 text-white rounded-lg transition"
        >
          Submit
        </button>
      </form>

      <div className="space-y-3">
        {reviews.length === 0 ? (
          <p className="text-gray-500">No comments yet....... :( !!</p>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="p-3 bg-gray-100 rounded-lg border">
              <p className="text-gray-800">{review.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentReview;
