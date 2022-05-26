import React from "react";
import "./_blog.scss";
import "../main.scss";
import blog1 from "../../Assets/images/blog1.png";
import blog2 from "../../Assets/images/blog2.png";
import blog3 from "../../Assets/images/blog3.png";
import blog4 from "../../Assets/images/blog4.png";
import blog5 from "../../Assets/images/blog5.png";
import blog6 from "../../Assets/images/blog6.png";
function BlogCard({ link, title, p }) {
  return (
    <div className="card">
      <img src={link} alt="" className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{p}</p>
    </div>
  );
}

function Blog() {
  return (
    <div className="blog-section">
      <h1 className="section-title">Blog</h1>
      <div className="blog-container">
        <div className="blog-content">
          <BlogCard
            link={blog1}
            title="Education with technologies"
            p="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiu mod tempor incididunt ut labore et"
          />
          <BlogCard
            link={blog2}
            title="How to use music in education"
            p="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiu mod tempor incididunt ut labore et"
          />
          <BlogCard
            link={blog3}
            title="Turning goals into 
reality"
            p="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiu mod tempor incididunt ut labore et"
          />
          <BlogCard
            link={blog4}
            title="Turning goals into 
reality"
            p="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiu mod tempor incididunt ut labore et"
          />
          <BlogCard
            link={blog5}
            title="The nation into 
education"
            p="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiu mod tempor incididunt ut labore et"
          />
          <BlogCard
            link={blog6}
            title="Gamification and 
learning"
            p="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiu mod tempor incididunt ut labore et"
          />
        </div>
      </div>
      <a href="#" className="btn-blog">
        Read more
      </a>
    </div>
  );
}

export default Blog;
