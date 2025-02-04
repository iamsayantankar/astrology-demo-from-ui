import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Input,
  Form,
  FormGroup,
  CardSubtitle,
  CardTitle,
  CardText,
} from "reactstrap";
import "../assets/css/Blog/Blog.css";
import {
  FaCalendarAlt,
  FaClock,
  FaTimes,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BlogSection = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      image: "./Images/image-33.png",
      category: "Productivity",
      title: "How to Use TSConfig Path Aliases to Improve Your Code",
      date: "Aug 14, 2023",
      author: "Darrow Lykes",
      description:
        "Enable cleaner, more readable import statements with TSConfig path aliases.",
    },
    {
      id: 2,
      image: "./Images/image-33.png",
      category: "Blogging",
      title: "Make Awesome Blog Posts People Will Love",
      date: "Aug 2, 2023",
      author: "Chad Thunder",
      description: "Make your blog posts stand out with these simple tips.",
    },
  ];
  return (
    <div className="single-blog-page">
      <section className="blog-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg="8">
              <p className="blog-badge my-5 mx-auto">Blogging</p>
              <h1 className="blog-title">
                Make Awesome Blog Posts People Will Love
              </h1>
              <div className="blog-meta text-white d-flex">
                <div className="me-2 d-flex align-items-center">
                  <img
                    src="/Images/avatar_3.png"
                    alt="author1"
                    className="rounded-circle"
                  />{" "}
                  <p>Chad Thunder</p>
                </div>

                <div className="me-2 d-flex align-items-center">
                  <img
                    src="/Images/avatar_4.png"
                    alt="author2"
                    className="rounded-circle"
                  />{" "}
                  <p>Darrow Lykos</p>
                </div>

                <div className="me-2 d-flex icon align-items-center">
                  <FaCalendarAlt />
                  <p>Aug 7, 2023</p>{" "}
                </div>

                <div className="me-2 d-flex icon align-items-center">
                  <FaClock />
                  <p>2 min read</p>
                </div>
              </div>
            </Col>
          </Row>
          <div className="blog-card ">
            <img src="./public/Images/image-4.svg" alt="Image" />
          </div>
        </Container>
      </section>
      <section className="tips-section">
        <Container>
          <div className="d-flex tips-div flex-column flex-md-row">
            {/* left section for icons */}
            <div className="d-flex flex-md-column">
              <div className="social-icon-box">
                <FaTimes className="tip-icon" />
              </div>
              <div className="social-icon-box">
                <FaFacebook className="tip-icon" />
              </div>
              <div className="social-icon-box">
                <FaLinkedin className="tip-icon" />
              </div>
              <div className="social-icon-box">
                <FaEnvelope className="tip-icon" />
              </div>
            </div>

            {/* Middle section */}
            <div className="tips">
              <p>
                Writing a blog post can be a great way to share your ideas and
                expertise with the world. Here are some tips for writing an
                effective blog post:
              </p>
              <div className="tips-list">
                <div className="tip-item">
                  <h4>Choose a Topic</h4>
                  <p>
                    Choose a topic that you are passionate about and that your
                    audience will find interesting.
                  </p>
                </div>
                <div className="tip-item">
                  <h4>Research</h4>
                  <p>
                    Do your research and gather information on your topic to
                    create an accurate and informed post.
                  </p>
                </div>
                <div className="tip-item">
                  <h4>Create an Outline</h4>
                  <p>
                    Create an outline for your post to organize your thoughts
                    and ensure the content flows smoothly.
                  </p>
                </div>
                <div className="tip-item">
                  <h4>Write a Catchy Headline</h4>
                  <p>
                    Write a headline that grabs attention and encourages readers
                    to dive into your content.
                  </p>
                </div>
                <div className="tip-item">
                  <h4>Write an Introduction</h4>
                  <p>
                    Write an introduction that hooks your readers and gives them
                    a reason to keep reading.
                  </p>
                </div>

                <div className="tip-item">
                  <h4>Use Subheadings</h4>
                  <p>
                    Use subheadings to break up your post into sections. This
                    will make it easier for readers to scan and find the
                    information they are looking for.
                  </p>
                </div>

                <div className="tip-item">
                  <h4>Use Images</h4>
                  <p>
                    Use images to break up your text and make your post more
                    visually appealing.
                  </p>
                </div>

                <div className="tip-item">
                  <h4>Write in a Conversational Tone</h4>
                  <p>
                    Write in a conversational tone that is easy to read and
                    understand.
                  </p>
                </div>

                <div className="tip-item">
                  <h4>Edit and Proofread</h4>
                  <p>
                    Edit and proofread your post to ensure that it is free of
                    errors and flows well.
                  </p>
                </div>
              </div>

              <div className="subscription-section">
                <div className="subscription-card">
                  <h2>In the know</h2>
                  <p>Get the best web design tips twice a week.</p>
                  <Form>
                    <FormGroup className="form-group d-flex flex-column flex-md-row">
                      <Input
                        type="email"
                        placeholder="Email"
                        className="email-input mb-0"
                      />
                      <Button color="primary" className="subscribe-btn">
                        Subscribe
                      </Button>
                    </FormGroup>
                  </Form>
                  <small>I won't send you spam. Unsubscribe at any time.</small>
                </div>

                <div className="conclusion-section">
                  <h3>Conclusion</h3>
                  <p>
                    By following these tips, you can write an effective blog
                    post that engages your readers and helps you to share your
                    ideas and expertise with the world.
                  </p>
                  <hr />
                  <div className="tags">
                    <span>#ai writings</span> <span>#chat gpt</span>{" "}
                    <span>#typescript</span>
                  </div>
                  <Button
                    outline
                    color="secondary"
                    className="back-btn"
                    onClick={() => navigate("/post")}
                  >
                    &lt; Back to all posts
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - Table of Contents */}
            <div className="d-none d-md-block">
              <Card className="toc-card">
                <CardBody>
                  <h5>Table of Contents</h5>
                  <ul className="toc-list">
                    <li>Choose a Topic</li>
                    <li>Research</li>
                    <li>Create an Outline</li>
                    <li>Write a Catchy Headline</li>
                    <li>Write an Introduction</li>
                    <li>Use Subheadings</li>
                    <li>Use Images</li>
                    <li>Write in a Converstaional Tone</li>
                    <li>Edite and Proofread</li>
                    <li style={{ color: "grey" }}>Conclusion</li>
                  </ul>
                </CardBody>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <div className="related-posts">
          <h4 className="text-white">Related Posts</h4>
          <div className="posts-grid">
            {blogs.map((post) => (
              <div className="post-card mx-auto">
                <div
                  alt={post.title}
                  className="post-image"
                  style={{ background: `url(${post.image})` }}
                >
                  <CardSubtitle className="post-category text-white mb-2">
                    {post.category}
                  </CardSubtitle>
                </div>

                <div className="p-4">
                  <CardText className="post-meta text-start text-white">
                    {post.date}; by {post.author}
                  </CardText>
                  <CardTitle
                    tag="h5"
                    className="post-title text-start"
                    style={{ maxWidth: "fit-content" }}
                  >
                    {post.title}
                  </CardTitle>
                  <CardText className="post-description text-start">
                    {post.description}
                  </CardText>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogSection;
