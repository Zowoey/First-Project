const BlogList = ({ blogs, title }) => {
  //const blogs = props.blogs;
  //const title = props.title;

  return (
    <div className="BlogList">
      <h2>{title}</h2>

      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2> {blog.title} </h2>
          <p>Lorem ipsum{blog.body}</p>

          <p>{blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
