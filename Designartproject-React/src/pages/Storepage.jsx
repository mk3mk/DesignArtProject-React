
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faCoffee, faSquareUpRight } from '@fortawesome/free-solid-svg-icons';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useEffect } from 'react';
import WOW from 'wowjs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Storepage = () => {


  useEffect(() => {

    new WOW.WOW({
        live: false
    }).init();

}, []);

var settings1 = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2300,
  cssEase: 'linear',
  fade: false,
  lazyLoad: true,
};


var settings2 = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  fade: false,
  lazyLoad: true,
};


    return (
        <div>
            <h1>Storepage</h1>





    {/* <div className="container mt-3">
      <div className="row">
        <div className="col-12">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleControls" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleControls" data-slide-to="1"></li>
              <li data-target="#carouselExampleControls" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="https://api.designartproject.ru/images/1920x500-01-SynergyCRM-01.jpg" alt="First slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Item 1 Heading</h5>
                  <p>Item 1 Description</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://api.designartproject.ru/images/1920x500-02-Shoes-01.jpg" alt="First slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Item 2 Heading</h5>
                  <p>Item 2 Description</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://api.designartproject.ru/images/1920x500-03-Adlowcost-02.jpg" alt="First slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Item 3 Heading</h5>
                  <p>Item 3 Description</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <hr/>
    </div> */}







    <p>/// *** slick-slider-1 *** ///</p>
      <Slider {...settings1}>
        {' '}
        {/*  slick  */}
        <div>
          <img
            src="https://api.designartproject.ru/images/1920x500-01.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://api.designartproject.ru/images/1920x500-02.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://api.designartproject.ru/images/1920x500-03.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://api.designartproject.ru/images/1920x500-04.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://api.designartproject.ru/images/1920x500-05.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://api.designartproject.ru/images/1920x500-06.jpg"
            alt=""
          />
        </div>
      </Slider>




      <div className="container my-4">
      <div className="row">
        <div className="col-4">
          <div className="row">
            <div className="col-2">
              <FontAwesomeIcon icon={faCoffee} />
            </div>
            <div className="col-lg-6 col-10 ml-1">
              <h4>Free Shipping</h4>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-2">
              <FontAwesomeIcon icon={faSquareCheck} />
            </div>
            <div className="col-lg-6 col-10 ml-1">
              <h4>Free Returns</h4>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-2">
            <FontAwesomeIcon icon={faSquareUpRight} />
            </div>
            <div className="col-lg-6 col-10 ml-1">
              <h4>Low Prices</h4>
            </div>
          </div>
        </div>
      </div>
    </div>



      <p>/// *** slick-slider-2 *** ///</p>
      <Slider {...settings2}>
        {' '}
        {/*  slick  */}
        <div>
          <img
            src="https://api.designartproject.ru/images/400x200-01.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://api.designartproject.ru/images/400x200-02.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://api.designartproject.ru/images/400x200-03.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://api.designartproject.ru/images/400x200-04.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://api.designartproject.ru/images/400x200-05.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://api.designartproject.ru/images/400x200-06.jpg"
            alt=""
          />
        </div>
      </Slider>


    <hr />
    <h2 className="text-center">RECOMMENDED WORKS</h2>
    <hr />



    
    <div className="container">
      <div className="row text-center">
        <div className="col-md-4 pb-1 pb-md-0">
          <div className="card">
            <img className="card-img-top" src="https://api.designartproject.ru/images/400X200-01-shoes-01.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 pb-1 pb-md-0">
          <div className="card">
            <img className="card-img-top" src="https://api.designartproject.ru/images/400X200-02-verstka.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 pb-1 pb-md-0">
          <div className="card">
            <img className="card-img-top" src="https://api.designartproject.ru/images/400X200-03-hamster.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>












      <div className="row text-center mt-4">
        <div className="col-md-4 pb-1 pb-md-0">
          <div className="card">
            <img className="card-img-top" src="https://api.designartproject.ru/images/400X200-04-SGF.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 pb-1 pb-md-0">
          <div className="card">
            <img className="card-img-top" src="https://api.designartproject.ru/images/400X200-05-AdLowCost.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 pb-1 pb-md-0">
          <div className="card">
            <img className="card-img-top" src="https://api.designartproject.ru/images/400X200-06-appsdesign.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>









      <div className="row text-center mt-4">
        <div className="col-md-4 pb-1 pb-md-0">
          <div className="card">
            <img className="card-img-top" src="https://api.designartproject.ru/images/400X200-07-Evomining.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 pb-1 pb-md-0">
          <div className="card">
            <img className="card-img-top" src="https://api.designartproject.ru/images/400X200-08-Express.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 pb-1 pb-md-0">
          <div className="card">
            <img className="card-img-top" src="https://api.designartproject.ru/images/400X200-09-Foto-MSK.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>









      <div className="row text-center mt-4">
        <div className="col-md-4 pb-1 pb-md-0">
          <div className="card">
            <img className="card-img-top" src="https://api.designartproject.ru/images/400X200-10-MediaGadget.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 pb-1 pb-md-0">
          <div className="card">
            <img className="card-img-top" src="https://api.designartproject.ru/images/400X200-11-synergycrm-01.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 pb-1 pb-md-0">
          <div className="card">
            <img className="card-img-top" src="https://api.designartproject.ru/images/400X200-12-Portfolio-01.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>


    </div>





    

    <hr />
    <h2 className="text-center">FEATURED PRODUCTS</h2>
    <hr />


    <div className="container">
      <div className="row">
        <div className="col">
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
      </div>
    </div>
















    <hr />
    <h2 className="text-center">RECOMMENDED WORKS</h2>
    <hr />


    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-sm-12">

        </div>
        <div className="col-lg-4 col-sm-12">
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
        <div className="col-lg-4 col-sm-12">
     
        </div>
      </div>
    </div>


    

    <hr />
    <h2 className="text-center">FEATURED PRODUCTS</h2>
    <hr />





    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <ul className="list-unstyled">
            <li className="media">
              <img className="mr-3" src="https://api.designartproject.ru/images/100x125-01.jpg" alt="Generic placeholder image" />
              <div className="media-body">
                <h5 className="mt-0 mb-1">List-based media object</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </li>
            <li className="media my-4">
              <img className="mr-3" src="https://api.designartproject.ru/images/100x125-02.jpg" alt="Generic placeholder image" />
              <div className="media-body">
                <h5 className="mt-0 mb-1">List-based media object</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </li>
            <li className="media">
              <img className="mr-3" src="https://api.designartproject.ru/images/100x125-03.jpg" alt="Generic placeholder image" />
              <div className="media-body">
                <h5 className="mt-0 mb-1">List-based media object</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </li>
          </ul>
        </div>
        <div className="col-lg-4">
          <ul className="list-unstyled">
            <li className="media">
              <img className="mr-3" src="https://api.designartproject.ru/images/100x125-04.jpg" alt="Generic placeholder image" />
              <div className="media-body">
                <h5 className="mt-0 mb-1">List-based media object</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </li>
            <li className="media my-4">
              <img className="mr-3" src="https://api.designartproject.ru/images/100x125-05.jpg" alt="Generic placeholder image" />
              <div className="media-body">
                <h5 className="mt-0 mb-1">List-based media object</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </li>
            <li className="media">
              <img className="mr-3" src="https://api.designartproject.ru/images/100x125-06.jpg" alt="Generic placeholder image" />
              <div className="media-body">
                <h5 className="mt-0 mb-1">List-based media object</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </li>
          </ul>
        </div>
        <div className="col-lg-4">
          <ul className="list-unstyled">
            <li className="media">
              <img className="mr-3" src="https://api.designartproject.ru/images/100x125-07.jpg" alt="Generic placeholder image" />
              <div className="media-body">
                <h5 className="mt-0 mb-1">List-based media object</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </li>
            <li className="media my-4">
              <img className="mr-3" src="https://api.designartproject.ru/images/100x125-08.jpg" alt="Generic placeholder image" />
              <div className="media-body">
                <h5 className="mt-0 mb-1">List-based media object</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </li>
            <li className="media">
              <img className="mr-3" src="https://api.designartproject.ru/images/100x125-09.jpg" alt="Generic placeholder image" />
              <div className="media-body">
                <h5 className="mt-0 mb-1">List-based media object</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>


    <hr/>












        </div>

    )
}

export {Storepage}
