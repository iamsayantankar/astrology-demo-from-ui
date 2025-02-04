import React from "react";
import {
  Container,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import "../../assets/css/Home/Recent_Post.css";
import img1 from "/Images/image-30.png"

const RecentPosts = ({posts}) => {
  
  const internal_post = [
    {
      id: 1,
      image: img1,
      category: "Productivity",
      title: "How to Use TSConfig Path Aliases to Improve Your Code",
      date: "Aug 14, 2023",
      author: "Darrow Lykes",
      description: "Enable cleaner, more readable import statements with TSConfig path aliases.",
    },
    {
      id: 2,
      image: img1,
      category: "Blogging",
      title: "Make Awesome Blog Posts People Will Love",
      date: "Aug 2, 2023",
      author: "Chad Thunder",
      description: "Make your blog posts stand out with these simple tips.",
    },
    {
      id: 3,
      image: img1,
      category: "Productivity",
      title: "15 Best VSCode Extensions for Front-End Developers in 2023",
      date: "Aug 5, 2023",
      author: "Darrow Lykes",
      description: "The top VSCode extensions for frontend developers to improve productivity and code quality.",
    },
    {
      id: 4,
      image: img1,
      category: "Blogging",
      title: "How to Write SEO Friendly Blog Posts",
      date: "Jul 21, 2023",
      author: "Chad Thunder",
      description: "Help your website show up on Google searches by following some of our SEO tips.",
    },
  ];
  return (
    <section className="recent-posts-section">
      <Container>
        <h2 className="section-title text-start">Recent Posts</h2>
        <div className="g-4 posts-collection">
          {(posts ? posts: internal_post).map((post,index) => (
            
             <div key={index} className="" md="6">
              <div className="post-card my-4 flex-column flex-sm-row">
                <div alt={post.title} className="post-image" style={{background:`url(${post.image})`,}} />
                <div className="text-start">
                  <CardSubtitle className="post-category mb-2">
                    {post.category}
                  </CardSubtitle>
                  <CardTitle tag="h5" className="post-title text-start">
                    {post.title}
                  </CardTitle>
                  <CardText className="post-description">
                    {post.description}
                  </CardText>
                  <CardText className="post-meta text-white">
                    {post.date} &bull; by {post.author}
                  </CardText>
                </div>
              </div>
              {index!=(posts?posts:internal_post)?.length-1 && <div className="posts-divider"></div>}
              </div>
        
          ))}
        </div>
      </Container>
    </section>
  );
};

export  default RecentPosts;