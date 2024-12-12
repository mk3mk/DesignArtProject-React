import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faHeart, faList } from '@fortawesome/free-solid-svg-icons';
import { faHouseChimney, faSailboat, faClipboardList, faBox, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

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
            {post && (
                <>
   <div className="container">
    <div className="row">
      <div className="col-lg-8 col-12">
            <div className="card">
              <img className="card-img-top" src={post.poster400x200} alt="Card image cap"/>
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p className="card-text">{post.body}</p>
                <button className="btn btn-primary mr-1" onClick={goBack}>Go back</button>
                <button className="btn btn-primary" onClick={goHome}>Go home</button>


                <div className="mt-4 mb-3 text-body-secondary">

                <FontAwesomeIcon icon={faMessage} className="mr-2" />
                <span className="mr-2">{post.owner}</span>

                <FontAwesomeIcon icon={faHeart} className="mr-2"/>
                <span className="mr-2">{post.comments}</span>

                <FontAwesomeIcon icon={faList} className="mr-2"/>
                <span className="mr-2">{post.categories}</span>

                </div>


                <Link to={`/posts/${id}/edit`}>Edit this post</Link>



              </div>
            </div>
      </div>

      <div className="col-lg-4 col-12">
        <div className="row mx-0">
          <div className="col-12 card bg-light mx-auto">
            <h3 className="text-center card-header">Send a request</h3>
            <form className="card-body">
              <div className="form-group row">
                <label for="location1" className="col-form-label">Your Name</label>
                <select className="form-control" name="location" id="location1">
                  <option value="">Any</option>
                  <option value="">1</option>
                  <option value="">2</option>
                </select>
              </div>
              <div className="form-group row">
                <label for="pricefrom" className="col-form-label">Price From</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text" id="basic-addon1">$</div>
                  </div>
                  <input type="text" className="form-control" id="pricefrom" aria-describedby="basic-addon1"/>
                </div>
              </div>
              <div className="form-group row">
                <label for="priceto" className="col-form-label">Price To</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text" id="basic-addon2">$</div>
                  </div>
                  <input type="text" className="form-control" id="priceto" aria-describedby="basic-addon2"/>
                </div>
              </div>
              <p className="text-center"><a href="#" className="btn btn-danger" role="button">Search </a></p>
            </form>
          </div>
          <div className="col-12">
            <h3 className="text-center">Agents</h3>
            <hr/>
            <div className="media">
              <img className="mr-3" src="https://api.designartproject.ru/images/64X64.gif" alt="Generic placeholder image"/>
              <div className="media-body">
                <h5 className="mt-0">John Doe</h5>
                <abbr title="Phone">P:</abbr> (123) 456-7890 <a href="mailto:#">first.last@example.com</a>
              </div>
            </div>
            <div className="media mt-2">
              <img className="mr-3" src="https://api.designartproject.ru/images/64X64.gif" alt="Generic placeholder image"/>
              <div className="media-body">
                <h5 className="mt-0">Linda Smith</h5>
                <abbr title="Phone">P:</abbr> (123) 456-7890 <a href="mailto:#">first.last@example.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>









                </>
            )}
        </div>
    )
}

export {CasePage}
