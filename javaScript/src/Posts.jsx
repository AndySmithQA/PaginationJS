export default function Posts({ posts, loading }) {
    if (loading) {
        return <h2>Loading...</h2>
    }
    
    return (
    <div className="posts">
        {posts.map(post => (
            <div key={post.id} className="post">
                <h2 className="posttitle">{post.title.slice(0, 10)}...</h2>
                <p className="postbody">{post.body.slice(0, 50)}...</p>
            </div>
        ))}
    </div>
)
}