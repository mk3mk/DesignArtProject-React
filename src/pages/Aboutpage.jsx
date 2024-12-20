import { Outlet, Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FeedbackForm from './FeedbackForm';

const About = () => {
    return (
        <div>

        <hr />
    <h2 className="text-center">LEAVE YOUR FEEDBACK</h2>
    <p className="text-center">tell us about your impressions</p>
    <hr />

    <div className="container">
      <div className="row">
        <div className="col">
          <FeedbackForm /> 
        </div>
      </div>
    </div>

    <hr />
    <h2 className="text-center">feedback from our customers</h2>
    <p className="text-center">we publish your reviews</p>
    <hr />


    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-sm-12">

        </div>
        <div className="col-lg-8 col-sm-12">
        <Table striped="columns">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
        </div>
        <div className="col-lg-2 col-sm-12">
     
        </div>
      </div>
    </div>


    
    <hr />
    <h2 className="text-center">RECOMMENDED WORKS</h2>
    <hr />







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



            <Outlet />
        </div>
    )
}

export {About}
