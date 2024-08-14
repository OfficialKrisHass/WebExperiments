import "./Blog.css"
import exampleImg from "./assets/Engine.png"

function Blog() {

    return (
        <div class="blog">
            <img src={exampleImg}/>
            <h3>Blog title</h3>
            <p>Blog description to catch the eye dont know what to put here since it should be long-ish.</p>
        </div>
    )

}

export default Blog;
