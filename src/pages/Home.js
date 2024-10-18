import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

// COMPONENTS
import OpinionsCard from "../components/OpinionsCard";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/blogs`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  });
  return (
    <Container className="my-5 px-5">
      <Row className="px-5">
        <Col>
          {posts.map((post) => {
            return (
              <OpinionsCard title={post.title} description={post.content} />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
