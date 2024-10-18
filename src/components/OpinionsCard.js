import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

export default function OpinionsCard({ title, description }) {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Card className="post-card">
      <Card.Body>
        <Card.Title className="post-card-title">
          <strong>{title}</strong>
        </Card.Title>
        <Card.Text className="post-card-description">{description}</Card.Text>
        {/* Comment Input Form */}
        <Form onSubmit={handleCommentSubmit}>
          <Form.Group className="d-flex" controlId="commentInput">
            <Form.Control
              type="text"
              placeholder="Say something"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
            <Button type="submit" variant="outline-dark" className="mt-2">
              Send
            </Button>
          </Form.Group>
        </Form>

        {/* Comments Section */}
        {commentsList.length > 0 && (
          <div className="comments-section mt-4">
            <h5 className="comments-header">Comments:</h5>
            <ul className="comments-list">
              {commentsList.map((comment, index) => (
                <li key={index} className="comment-item">
                  {comment}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
