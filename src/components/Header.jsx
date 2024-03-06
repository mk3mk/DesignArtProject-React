import { CustomLink } from './CustomLink';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faSailboat, faClipboardList, faBox, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <>

    <div className="container">
       <div className="border-bottom lh-1 py-3">
         <div className="row flex-nowrap justify-content-between align-items-center">
           <div className="col-4 pt-1">
             <Link className="link-secondary" to="/">Subscribe</Link>
           </div>
           <div className="col-4 text-center">
             <Link className="blog-header-logo blog-div-logo text-body-emphasis text-decoration-none" to="/">
              DesignArtProject
             </Link>
           </div>
           <div className="col-4 d-flex justify-content-end align-items-center">
             <a className="link-secondary" href="/" aria-label="Search">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
             </a>
             <Link className="btn btn-sm btn-outline-secondary" to="/login">Sign up</Link>
           </div>
         </div>
       </div>



     
{/* 
       
       <div className="nav-scroller py-1 mb-3 border-bottom">
         <nav className="nav nav-underline justify-content-between">
           <Link className="nav-item nav-link link-body-emphasis active" to="/">Home</Link>
           <Link className="nav-item nav-link link-body-emphasis" to="/posts">Blog</Link>
           <Link className="nav-item nav-link link-body-emphasis" to="/about">About</Link>
           <Link className="nav-item nav-link link-body-emphasis" to="/storepage">Store</Link>
           <Link className="nav-item nav-link link-body-emphasis" to="/contacts">Contacts</Link>
         </nav>
       </div>
       
 */}





       <div className="nav-scroller py-1 mb-3 border-bottom">
       {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-between flex-grow-1 pe-3">

                  {/* <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/posts">Blog</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/storepage">Store</Nav.Link>
                  <Nav.Link href="/contacts">Contacts</Nav.Link> */}

           <Link className="nav-item nav-link link-body-emphasis" to="/">
           <FontAwesomeIcon icon={faHouseChimney} className="mr-2" />
            Home
            </Link>
           <Link className="nav-item nav-link link-body-emphasis" to="/posts">
           <FontAwesomeIcon icon={faSailboat} className="mr-2" />
            Blog
            </Link>
           <Link className="nav-item nav-link link-body-emphasis" to="/about">
           <FontAwesomeIcon icon={faClipboardList} className="mr-2" />
            About
            </Link>
           <Link className="nav-item nav-link link-body-emphasis" to="/storepage">
           <FontAwesomeIcon icon={faBox} className="mr-2" />
            Store
            </Link>
           <Link className="nav-item nav-link link-body-emphasis" to="/contacts">
           <FontAwesomeIcon icon={faShieldHalved} className="mr-2" />
            Contacts
            </Link>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
       </div>





    </div>

        </>
    )
}

export {Header}