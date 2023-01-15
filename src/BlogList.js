

const BlogList = (props) => {

   const blogs =props.blogs;
    const title =props.title;
    const handelDelete =props.handelDelete;

    


    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h1>{blog.title}</h1>
                    <h2> Written by {blog.author}</h2>
                    <button onClick={()=>handelDelete(blog.id)}>Delete blog</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;