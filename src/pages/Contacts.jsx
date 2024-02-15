import { Outlet, Link } from 'react-router-dom';

const Contacts = () => {


  return (
      <div className="App">


<h1>Contacts</h1>





<div className="container mt-3">
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
              <img className="d-block w-100" src="https://api.designartproject.ru/images/wallpaperflare-1920x500-01.jpg" alt="First slide"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Item 1 Heading</h5>
                <p>Item 1 Description</p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://api.designartproject.ru/images/wallpaperflare-1920x500-02.jpg" alt="Second slide"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Item 2 Heading</h5>
                <p>Item 2 Description</p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://api.designartproject.ru/images/wallpaperflare-1920x500-03.jpg" alt="Third slide"/>
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
  </div>





  <section>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
          <ul className="list-unstyled">
            <li className="media">
              <img className="mr-3 rounded-circle" src="https://api.designartproject.ru/images/100X100.gif" alt="Generic placeholder image" />
              <div className="media-body">
                <h5 className="mt-0 mb-1">Heading 1</h5>
                <p className="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <ul className="list-unstyled">
            <li className="media">
              <img className="mr-3 rounded-circle" src="https://api.designartproject.ru/images/100X100.gif" alt="Generic placeholder image"/>
              <div className="media-body ">
                <h5 className="mt-0 mb-1">Heading 2</h5>
                <p className="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 d-md-none d-lg-block">
          <ul className="list-unstyled">
            <li className="media">
              <img className="mr-3 rounded-circle" src="https://api.designartproject.ru/images/100X100.gif" alt="Generic placeholder image"/>
              <div className="media-body">
                <h5 className="mt-0 mb-1">Heading 3</h5>
                <p className="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>



  <hr/>





  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-12">
        <div className="row">
          <div className="col-sm-6 col-12">
            <div className="card">
              <img className="card-img-top" src="https://api.designartproject.ru/images/400X200.gif" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-12">
            <div className="card">
              <img className="card-img-top" src="https://api.designartproject.ru/images/400X200.gif" alt="Card image cap"/>
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
              <img className="card-img-top" src="https://api.designartproject.ru/images/400X200.gif" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-12">
            <div className="card">
              <img className="card-img-top" src="https://api.designartproject.ru/images/400X200.gif" alt="Card image cap"/>
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
            <h3 className="text-center card-header">Find Your Home</h3>
            <form className="card-body">
              <div className="form-group row">
                <label for="location1" className="col-form-label">Location</label>
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





  <hr/>





  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-12">
          <h3>New Properties</h3>
          <hr/>
          <div className="row">
            <div className="col-4">
              <div className="text-center"> <img src="https://api.designartproject.ru/images/72X72.gif" alt="Thumbnail Image 1"/> </div>
            </div>
            <div className="col-4">
              <div className="text-center"> <img src="https://api.designartproject.ru/images/72X72.gif" alt="Thumbnail Image 1"/></div>
            </div>
            <div className="col-4">
              <div className="text-center"> <img src="https://api.designartproject.ru/images/72X72.gif" alt="Thumbnail Image 1"/></div>
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-4">
              <div className="text-center"> <img src="https://api.designartproject.ru/images/72X72.gif" alt="Thumbnail Image 1"/></div>
            </div>
            <div className="col-4">
              <div className="text-center"> <img src="https://api.designartproject.ru/images/72X72.gif" alt="Thumbnail Image 1"/></div>
            </div>
            <div className="col-4">
              <div className="text-center"> <img src="https://api.designartproject.ru/images/72X72.gif" alt="Thumbnail Image 1"/></div>
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-4">
              <div className="text-center"> <img src="https://api.designartproject.ru/images/72X72.gif" alt="Thumbnail Image 1"/></div>
            </div>
            <div className="col-4">
              <div className="text-center"> <img src="https://api.designartproject.ru/images/72X72.gif" alt="Thumbnail Image 1"/></div>
            </div>
            <div className="col-4">
              <div className="text-center"> <img src="https://api.designartproject.ru/images/72X72.gif" alt="Thumbnail Image 1"/></div>
            </div>
          </div>
          <hr/>
        </div>
        <div className="col-md-6 col-12">


          <h3>Our Services</h3>







          <ul className='d-flex p-2'>
                <li className='m-3'><Link to="contacts/panel1">Panel1</Link></li>
                <li className='m-3'><Link to="contacts/panel2">Panel2</Link></li>
                <li className='m-3'><Link to="contacts/panel3">Panel3</Link></li>
          </ul>

          <Outlet />


        </div>
      </div>
    </div>
  </div>





  <hr/>







  <div className="container">
    <div className="row">
      <div className="col-md-8 col-12">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h3>About Us</h3>
            <hr/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, consequatur neque exercitationem distinctio esse! Cupiditate doloribus a consequatur iusto illum eos facere vel iste iure maxime. Velit, rem, sunt obcaecati eveniet id nemo molestiae. In.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, consequatur neque exercitationem distinctio esse! Cupiditate doloribus a consequatur iusto illum eos facere vel iste iure maxime. Velit, rem, sunt obcaecati eveniet id nemo molestiae. In.</p>
          </div>
          <div className="col-lg-6 col-12">
            <h3>Latest News</h3>
            <hr/>
            <div>
          <div className="media">
            <div className="media-body">
              <h4 className="mt-0 mb-1">Heading 1</h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, quod temporibus veniam deserunt deleniti accusamus voluptatibus at illo sunt quisquam. </div>
            <a href="#"><img className="ml-3" src="https://api.designartproject.ru/images/75X.gif" alt="placeholder image"/></a> </div>
          <div className="media">
            <div className="media-body">
              <h4 className="mt-0 mb-1">Heading 2</h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, iure nemo earum quae aliquid animi eligendi rerum rem porro facilis. </div>
            <a href="#"><img className="ml-3" src="https://api.designartproject.ru/images/75X.gif" alt="placeholder image"/></a> </div>
        </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-12 mt-md-0 mt-2">
        <h3>Contact Us</h3>
        <hr/>
        <div>
          <strong>MyStoreFront, Inc.</strong><br/>
          Indian Treasure Link<br/>
          Quitman, WA, 99110-0219<br/>
          <abbr title="Phone">P:</abbr> (123) 456-7890
        </div>
        <div>
          <strong>Full Name</strong><br/>
          <a href="mailto:#">first.last@example.com</a>
        </div>
      </div>
    </div>
  </div>
     
     
     
     
     
     
     
     
     
     
     
     
         </div>
  )
}

export {Contacts}
