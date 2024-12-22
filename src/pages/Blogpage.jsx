import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BlogFilter } from '../components/BlogFilter';
import OrderForm from './OrderForm';

const Blogpage = () => {
    const [posts, setPosts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const postQuery = searchParams.get('post') || '';
    const latest = searchParams.has('latest');

    const startsFrom = latest ? 80 : 1;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    useEffect(() => {
        fetch("https://api.designartproject.ru/orders/")
          .then((res) => res.json())
          .then((data) => setOrders(data));
      }, []);

    return (
        <div>
            <h1>Our news</h1>
            <p>This is a demo website about React-router-dom library.</p>


    <div className="container">
      <div className="row">
      <div className="col-lg-2 col-sm-12">

      </div>
        <div className="col-lg-8 col-sm-12">
          <OrderForm /> 
        </div>
        <div className="col-lg-2 col-sm-12">

        </div>
      </div>
    </div>







            {
                orders.map(order => (
                    <Link key={order.id} to={`/orders/${order.id}`}>
                        <li>{order.name}</li>
                    </Link>
                ))
            }








<div className="container">
    <div className="row">
      <div className="col-lg-8 col-12">
        <div className="row">
          <div className="col-sm-6 col-12">
            <div className="card">
              <img className="card-img-top" src="https://api.designartproject.ru/images/400X200-01-shoes-01.jpg" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-12">
            <div className="card">
              <img className="card-img-top" src="https://api.designartproject.ru/images/400X200-02-verstka.jpg" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-12">
            <div className="card">
              <img className="card-img-top" src="https://api.designartproject.ru/images/400X200-03-hamster.jpg" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-12">
            <div className="card">
              <img className="card-img-top" src="https://api.designartproject.ru/images/400X200-04-SGF.jpg" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
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


            
            <BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams} />

            <Link to="/posts/new" style={{margin: '1rem 0', display: 'inline-block'}}>Add new post</Link>
            {
                posts.filter(
                    post => post.title.includes(postQuery) && post.id >= startsFrom
                ).map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                ))
            }
        </div>
    )
}

export {Blogpage}
