import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faHeart, faList } from '@fortawesome/free-solid-svg-icons';

import Button from 'react-bootstrap/Button';

const Homepage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://api.designartproject.ru/posts/")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="App">


{/* <img width="100%" src="https://api.designartproject.ru/images/designartproject-03.png" alt="" /> */}

      <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
        <button
          className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
          id="bd-theme"
          type="button"
          aria-expanded="false"
          data-bs-toggle="dropdown"
          aria-label="Toggle theme (auto)"
        >
          <svg className="bi my-1 theme-icon-active" width="1em" height="1em">
            <use href="#circle-half"></use>
          </svg>
          <span className="visually-hidden" id="bd-theme-text">
            Toggle theme
          </span>
        </button>
        <ul
          className="dropdown-menu dropdown-menu-end shadow"
          aria-labelledby="bd-theme-text"
        >
          <li>
            <button
              type="button"
              className="dropdown-item d-flex align-items-center"
              data-bs-theme-value="light"
              aria-pressed="false"
            >
              <svg
                className="bi me-2 opacity-50 theme-icon"
                width="1em"
                height="1em"
              >
                <use href="#sun-fill"></use>
              </svg>
              Light
              <svg className="bi ms-auto d-none" width="1em" height="1em">
                <use href="#check2"></use>
              </svg>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="dropdown-item d-flex align-items-center"
              data-bs-theme-value="dark"
              aria-pressed="false"
            >
              <svg
                className="bi me-2 opacity-50 theme-icon"
                width="1em"
                height="1em"
              >
                <use href="#moon-stars-fill"></use>
              </svg>
              Dark
              <svg className="bi ms-auto d-none" width="1em" height="1em">
                <use href="#check2"></use>
              </svg>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="dropdown-item d-flex align-items-center active"
              data-bs-theme-value="auto"
              aria-pressed="true"
            >
              <svg
                className="bi me-2 opacity-50 theme-icon"
                width="1em"
                height="1em"
              >
                <use href="#circle-half"></use>
              </svg>
              Auto
              <svg className="bi ms-auto d-none" width="1em" height="1em">
                <use href="#check2"></use>
              </svg>
            </button>
          </li>
        </ul>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol
          id="aperture"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
        </symbol>
        <symbol id="cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </symbol>
        <symbol id="chevron-right" viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </symbol>
      </svg>

      <div className="container">
        <div className="p-4 row p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
          <div className="col col-lg-6 px-0">
            <h1 className="display-4 fst-italic">
            Design Art Project
            </h1>
            <p className="lead my-3">
            Ensure your visuals are high-quality and well-organized. 
            Use mockups to showcase designs in realistic settings, 
            such as displaying a website design on a computer screen.
            </p>
            <p className="lead mb-0">
              <a href="/" className="text-body-emphasis fw-bold">
                Continue ...
              </a>
            </p>
          </div>
          <div className="col col-lg-6 px-0">

          </div>
        </div>












      <div className="row mb-2">
        {posts.slice(0,8).map((post) => (
          <div key={post.id} to={`/cases/${post.id}`} className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static mr-1">
                <strong className="d-inline-block mb-2 text-primary-emphasis">
                  {post.categories}
                </strong>
                <h3 className="mb-0">
                  {post.title}
                </h3>
                <div className="mb-1 text-body-secondary">
                <FontAwesomeIcon icon={faMessage} className="mr-2" />
                <span className="mr-2">{post.comments}</span>
                <FontAwesomeIcon icon={faHeart} className="mr-2"/>
                <span className="mr-2">34</span>
                </div>
                <p className="card-text mb-auto">
                  {post.body}
                </p>
                <hr/>


                <Link
                  key={post.id}
                  to={`/cases/${post.id}`}
                  className="icon-link gap-1 icon-link-hover stretched-link"
                >
                  More ... 
                </Link>

                
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src={post.poster200x250} />
              </div>
            </div>
          </div>
        ))}
      </div>




      <Button variant="primary">More...</Button>



        {/*



        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary-emphasis">
                  World
                </strong>
                <h3 className="mb-0">Featured post</h3>
                <div className="mb-1 text-body-secondary">Nov 12</div>
                <p className="card-text mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a
                  href="/"
                  className="icon-link gap-1 icon-link-hover stretched-link"
                >
                  Continue reading
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <svg
                  className="bd-placeholder-img"
                  width="200"
                  height="250"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success-emphasis">
                  Design
                </strong>
                <h3 className="mb-0">Post title</h3>
                <div className="mb-1 text-body-secondary">Nov 11</div>
                <p className="mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a
                  href="/"
                  className="icon-link gap-1 icon-link-hover stretched-link"
                >
                  Continue reading
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <svg
                  className="bd-placeholder-img"
                  width="200"
                  height="250"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div> 
        
        
        
    */}



<div className="separator">
  <img width="100%" src="https://api.designartproject.ru/images/designartproject-02.png" alt="" />
</div>


        <div className="row g-5">
          <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">
              From the Firehose
            </h3>

            <div className="blog-post">
              <h2 className="display-5 link-body-emphasis mb-1">
                Another blog post
              </h2>
              <p className="blog-post-meta">
                <FontAwesomeIcon icon={faList} className="mr-2"/>
                December 23, 2020 by <a href="/">Jacob</a>
              </p>

              <p>
                  An important aspect of web development is choosing the right tools and technologies. Among them are various frameworks and libraries that simplify and speed up the development process. In addition, it is necessary to keep up with the latest trends and innovations in the world of web technologies in order to be aware of all changes and improvements.
              </p>
              <blockquote>
                <p>
                  Longer quote goes here, maybe with some{" "}
                  <strong>emphasized text</strong> in the middle of it.
                </p>
              </blockquote>
              <p>
                This is some additional paragraph placeholder content. It has
                been written to fill the available space and show how a longer
                snippet of text affects the surrounding content. We'll repeat it
                often to keep the demonstration flowing, so be on the lookout
                for this exact same string of text.
              </p>
              <h3>Example table</h3>
              <p>And don't forget about tables in these posts:</p>
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Upvotes</th>
                    <th>Downvotes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alice</td>
                    <td>10</td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <td>Bob</td>
                    <td>4</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Charlie</td>
                    <td>7</td>
                    <td>9</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>Totals</td>
                    <td>21</td>
                    <td>23</td>
                  </tr>
                </tfoot>
              </table>

              <p>
                This is some additional paragraph placeholder content. It's a
                slightly shorter version of the other highly repetitive body
                text used throughout.
              </p>
            </div>

            <div className="blog-post">
              <h2 className="display-5 link-body-emphasis mb-1">New feature</h2>
              <p className="blog-post-meta">
                December 14, 2020 by <a href="/">Chris</a>
              </p>

              <p>
                This is some additional paragraph placeholder content. It has
                been written to fill the available space and show how a longer
                snippet of text affects the surrounding content. We'll repeat it
                often to keep the demonstration flowing, so be on the lookout
                for this exact same string of text.
              </p>
              <ul>
                <li>First list item</li>
                <li>Second list item with a longer description</li>
                <li>Third list item to close it out</li>
              </ul>
              <p>
                This is some additional paragraph placeholder content. It's a
                slightly shorter version of the other highly repetitive body
                text used throughout.
              </p>
            </div>

            <nav className="blog-pagination" aria-label="Pagination">
              <a className="btn btn-outline-primary rounded-pill" href="/">
                Older
              </a>
              <a
                className="btn btn-outline-secondary rounded-pill disabled"
                aria-disabled="true"
              >
                Newer
              </a>
            </nav>
          </div>

          <div className="col-md-4">
            <div className="position-sticky">
              <div className="p-4 mb-3 bg-body-tertiary rounded">
                <h4 className="fst-italic">About</h4>
                <p className="mb-0">
                  Customize this section to tell your visitors a little bit
                  about your publication, writers, content, or something else
                  entirely. Totally up to you.
                </p>
              </div>







              <div>
                <h4 className="fst-italic">Recent posts</h4>



<div>
   {posts.map((post) => (
      <div key={post.id} to={`/posts/${post.id}`}>
        <a
          className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
          href="/"
        >
          <img src={post.poster100x100} />
          <div className="col-lg-8">
            <h6 className="mb-0">{post.title}</h6>
            <small className="text-body-secondary">
              {post.body}
            </small>
          </div>
        </a>
      </div>
      ))}
</div>





{/* 



                <ul className="list-unstyled">
                  <li>
                    <a
                      className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                      href="/"
                    >
                      <svg
                        className="bd-placeholder-img"
                        width="100%"
                        height="96"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                      >
                        <rect width="100%" height="100%" fill="#777" />
                      </svg>
                      <div className="col-lg-8">
                        <h6 className="mb-0">Example blog post title</h6>
                        <small className="text-body-secondary">
                          January 15, 2023
                        </small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                      href="/"
                    >
                      <svg
                        className="bd-placeholder-img"
                        width="100%"
                        height="96"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                      >
                        <rect width="100%" height="100%" fill="#777" />
                      </svg>
                      <div className="col-lg-8">
                        <h6 className="mb-0">
                          This is another blog post title
                        </h6>
                        <small className="text-body-secondary">
                          January 14, 2023
                        </small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                      href="/"
                    >
                      <svg
                        className="bd-placeholder-img"
                        width="100%"
                        height="96"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                      >
                        <rect width="100%" height="100%" fill="#777" />
                      </svg>
                      <div className="col-lg-8">
                        <h6 className="mb-0">
                          Longer blog post title: This one has multiple lines!
                        </h6>
                        <small className="text-body-secondary">
                          January 13, 2023
                        </small>
                      </div>
                    </a>
                  </li>
                </ul>




 */}


              </div>














              <div className="p-4">
                  <h4 className="fst-italic">Archives</h4>
                  {posts.map((post) => (
                      <div key={post.id} to={`/posts/${post.id}`} className="list-unstyled mb-0">
                        <li>
                          <a href="/">{post.title}</a>
                        </li>
                      </div>
                  ))} 
              </div>







{/* 

              <div className="p-4">
                <h4 className="fst-italic">Archives</h4>
                <ol className="list-unstyled mb-0">
                  <li>
                    <a href="/">March 2021</a>
                  </li>
                  <li>
                    <a href="/">February 2021</a>
                  </li>
                  <li>
                    <a href="/">January 2021</a>
                  </li>
                  <li>
                    <a href="/">December 2020</a>
                  </li>
                  <li>
                    <a href="/">November 2020</a>
                  </li>
                  <li>
                    <a href="/">October 2020</a>
                  </li>
                  <li>
                    <a href="/">September 2020</a>
                  </li>
                  <li>
                    <a href="/">August 2020</a>
                  </li>
                  <li>
                    <a href="/">July 2020</a>
                  </li>
                  <li>
                    <a href="/">June 2020</a>
                  </li>
                  <li>
                    <a href="/">May 2020</a>
                  </li>
                  <li>
                    <a href="/">April 2020</a>
                  </li>
                </ol>
              </div>



               */}

              <div className="p-4">
                <h4 className="fst-italic">Elsewhere</h4>
                <ol className="list-unstyled">
                  <li>
                    <a href="/">GitHub</a>
                  </li>
                  <li>
                    <a href="/">Twitter</a>
                  </li>
                  <li>
                    <a href="/">Facebook</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>


      <img width="100%" src="https://api.designartproject.ru/images/designartproject-01.png" alt="" />


      {/* 
      
      {posts.map((post) => (
        <ul key={post.id} to={`/posts/${post.id}`}>
          <li>000{post.title}</li>
          <li>000{post.body}</li>
          <li><img src={post.poster100x100} /></li>
          <li><img src={post.poster100x125} /></li>
        </ul>
      ))} 
      
      */}

      <hr />

      <div className="py-5 text-center text-body-secondary bg-body-tertiary">
        <p>
          Blog template built for{" "}
          <a href="https://getbootstrap.com/">Bootstrap</a> by{" "}
          <a href="https://twitter.com/mdo">@mdo</a>.
        </p>
        <p className="mb-0">
          <a href="/">Back to top</a>
        </p>
      </div>
    </div>
  );
};

export { Homepage };
