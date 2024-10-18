import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

// COMPONENTS
import OpinionsCard from "../components/OpinionsCard";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/blogs")
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
