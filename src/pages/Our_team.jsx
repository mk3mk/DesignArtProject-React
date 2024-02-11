import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ".././styles.css";
import ".././style.scss";

const Our_team = () => {
    const [users, setUsers] = React.useState([]);
    const f = async () => {
      const res = await fetch("https://reqres.in/api/users/");
      const json = await res.json();
      setUsers(json.data);
    };
    React.useEffect(() => {
      f();
    }, []);
    return (
        <div className="App">
        <h1>Hello ReqRes users!</h1>
        <div className="flex">
          {users.length &&
            users.map((user) => {
              return (
                <div key={user.id}>
                  <p>
                    <strong>{user.first_name}</strong>
                  </p>
                  <p>{user.email}</p>
                  <img key={user.avatar} src={user.avatar} />
                </div>
              );
            })}
        </div>
        <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}

        <Row className="row">
          <Col className="col" xs={12} md={8}>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </Col>
          <Col className="col" xs={12} md={4}>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </Col>
        </Row>

        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row className="row color-third">
          <Col className="col" xs={12} md={4}>
            xs=6 md=4
          </Col>
          <Col className="col" xs={12} md={4}>
            <div>
              <h1>Our users</h1>

              {users.map((user) => (
                <div key={user.id} to={`/users/${user.id}`}>
                  <li>username: {user.first_name}</li>
                  more
                  <hr />
                </div>
              ))}
            </div>
          </Col>
          <Col className="col" xs={12} md={4}>
            xs=6 md=4
          </Col>
        </Row>

        {/* Columns are always 50% wide, on mobile and desktop */}
        <Row className="row">
          <Col className="col" xs={12} md={6}>
   ererererere
          </Col>
          <Col className="col" xs={12} md={6}>
      rerererer
          </Col>
        </Row>
      </Container>
      </div>
    )
}

export {Our_team}


