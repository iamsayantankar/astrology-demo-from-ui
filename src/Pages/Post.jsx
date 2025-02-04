import RecentPosts from "../Components/Home/Recent_Post";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import "../assets/css/Post/CardsWithPagination.css";
import { useSearchParams } from "react-router-dom";
import img1 from "/Images/image-30.png";

const posts = [
  {
    id: 1,
    image: img1,
    category: "Productivity",
    title: "How to Use TSConfig Path Aliases to Improve Your Code",
    date: "Aug 14, 2023",
    author: "Darrow Lykes",
    description:
      "Enable cleaner, more readable import statements with TSConfig path aliases.",
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
    description:
      "The top VSCode extensions for frontend developers to improve productivity and code quality.",
  },
  {
    id: 4,
    image: img1,
    category: "Blogging",
    title: "How to Write SEO Friendly Blog Posts",
    date: "Jul 21, 2023",
    author: "Chad Thunder",
    description:
      "Help your website show up on Google searches by following some of our SEO tips.",
  },
  {
    id: 5,
    image: img1,
    category: "Design",
    title: "10 Tips to Create Stunning UI/UX Designs",
    date: "Jul 10, 2023",
    author: "Alex Brown",
    description:
      "Level up your UI/UX design skills with these actionable tips.",
  },
  {
    id: 6,
    image: img1,
    category: "Development",
    title: "How to Build Scalable Web Applications",
    date: "Jul 5, 2023",
    author: "Chris Doe",
    description:
      "Learn the key principles to create scalable and efficient apps.",
  },
  {
    id: 7,
    image: img1,
    category: "Technology",
    title: "AI in 2023: The Rise of Generative Models",
    date: "Jun 30, 2023",
    author: "Sarah Connor",
    description:
      "Explore how AI is transforming industries with cutting-edge generative models.",
  },
  {
    id: 8,
    image: img1,
    category: "Marketing",
    title: "How to Build a Strong Personal Brand Online",
    date: "Jun 25, 2023",
    author: "Jane Doe",
    description:
      "Create a compelling online presence and grow your personal brand effectively.",
  },
];

const Post = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10) - 1;
  const postsPerPage = 2;

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const currentPosts = posts.slice(
    currentPage * postsPerPage,
    (currentPage + 1) * postsPerPage
  );

  const handlePageChange = (page) => {
    setSearchParams({ page: page + 1 });
    window.scrollTo({top:0,behavior:"smooth"})
  };

  return (
    <div className="all-posts-page">
      <RecentPosts posts={currentPosts} />
      <div className="d-flex justify-content-center">
        <Pagination>
          <PaginationItem disabled={currentPage <= 0}>
            <PaginationLink
              previous
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem
              key={index}
              active={index === currentPage}
              onClick={() => handlePageChange(index)}
            >
              <PaginationLink>{index + 1}</PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem disabled={currentPage >= totalPages - 1}>
            <PaginationLink
              next
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </PaginationItem>
        </Pagination>
      </div>
    </div>
  );
};

export default Post;
