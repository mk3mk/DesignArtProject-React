import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const CasePage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    const goBack = () => navigate(-1);
    const goHome = () => navigate('/', {replace: true});


  useEffect(() => {
    fetch(`https://api.designartproject.ru/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);


    return (
        <div>
            <button onClick={goBack}>Go back</button>
            {/* Bad approach */}
            <button onClick={goHome}>Go home</button>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <p>{post.owner}</p>
                    <p>{post.comments}</p>
                    <p>{post.categories}</p>
                    <img src={post.poster100x100} alt="Логотип"/>
                    <img src={post.poster200x250} alt="Логотип"/>
                    <img src={post.poster400x200} alt="Логотип"/>

                    <Link to={`/posts/${id}/edit`}>Edit this post</Link>
                </>
            )}
        </div>
    )
}

export {CasePage}
