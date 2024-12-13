import { Outlet } from 'react-router-dom';
import { Header } from './Header'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faSailboat, faClipboardList, faBox, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

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



            <Link className="nav-item nav-link link-body-emphasis text-white" to="/">
           <FontAwesomeIcon icon={faHouseChimney} className="mr-2" />
            Home
            </Link>
           <Link className="nav-item nav-link link-body-emphasis text-white" to="/posts">
           <FontAwesomeIcon icon={faSailboat} className="mr-2" />
            Blog
            </Link>
           <Link className="nav-item nav-link link-body-emphasis text-white" to="/about">
           <FontAwesomeIcon icon={faClipboardList} className="mr-2" />
            About
            </Link>
           <Link className="nav-item nav-link link-body-emphasis text-white" to="/storepage">
           <FontAwesomeIcon icon={faBox} className="mr-2" />
            Store
            </Link>
           <Link className="nav-item nav-link link-body-emphasis text-white" to="/contacts">
           <FontAwesomeIcon icon={faShieldHalved} className="mr-2" />
            Contacts
            </Link>



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
                <p>&copy; DesignArtProject 2024</p>
            </div>
    </div>
            
            
            
            
            
            </footer>
        </>
    )
}

export {Layout}
