import { Outlet } from 'react-router-dom';
import { Header } from './Header'

const Layout = () => {
    return (
        <>

        <Header />

        <main className="container">
            <Outlet />
        </main>

        <footer className="container">
            
            
            
            
        <div className="container text-white bg-dark p-4">
      <div className="row">
        <div className="col-6 col-md-8 col-lg-7">
          <div className="row text-center">
            <div className="col-sm-6 col-md-4 col-lg-4 col-12">
              <ul className="list-unstyled">
                <li className="btn-link"> <a>Link anchor</a> </li>
                <li className="btn-link"> <a>Link anchor</a> </li>
                <li className="btn-link"> <a>Link anchor</a> </li>
                <li className="btn-link"> <a>Link anchor</a> </li>
                <li className="btn-link"> <a>Link anchor</a> </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 col-12">
              <ul className="list-unstyled">
                <li className="btn-link"> <a>Link anchor</a> </li>
                <li className="btn-link"> <a>Link anchor</a> </li>
                <li className="btn-link"> <a>Link anchor</a> </li>
                <li className="btn-link"> <a>Link anchor</a> </li>
                <li className="btn-link"> <a>Link anchor</a> </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 col-12">
              <ul className="list-unstyled">
                <li className="btn-link"> <a>Link anchor</a> </li>
                <li className="btn-link"> <a>Link anchor</a> </li>
                <li className="btn-link"> <a>Link anchor</a> </li>
                <li className="btn-link"> <a>Link anchor</a> </li>
                <li className="btn-link"> <a>Link anchor</a> </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-5 col-6">
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
            
            
            
            
    <div className="row">
            <div className="col-12">
                <p>&copy; ReactRouter Tutorials 2022</p>
            </div>
    </div>
            
            
            
            
            
            </footer>
        </>
    )
}

export {Layout}
