

const BlogList = (props) => {
   const blogs =props.blogs;
    const title =props.title;

   console.log(props,blogs)

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h1>{blog.title}</h1>
                    <h2>{blog.author}</h2>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;