import React, { Component } from "react";
import "./App.css";
import { Container, Button, Navbar, Nav, Card } from "react-bootstrap";
class App extends Component {
  state = {
    person: {
      fullName: "Abdallah Fall",
      bio: "A passionate developer",
      imgSrc: "web.png",
      profession: "Student",
    },
    show: true, mountTime: new Date(),
    elapsedTime: 0,
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      const currentTime = new Date();
      const elapsedTime = Math.floor(
        (currentTime - this.state.mountTime) / 1000
      );
      this.setState({ elapsedTime });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { fullName, bio, imgSrc, profession} = this.state.person;
    const { show } = this.state;

    return (
      <div className="App">
        <Navbar bg="light" data-bs-theme="blue">
          <Container>
            <Navbar.Brand href="#home">FamiLink</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Product</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "20em",
            marginLeft: "40px",
            marginTop: "20px",
          }}
        >
          <Button onClick={this.toggleShow} style={{ width: '100%' }}>Toggle Profile</Button>
          {show && (
            <div style={{ textAlign: "center" }}>
              <img src={imgSrc} alt="Profile" />
              <h1>{fullName}</h1>
              <p>{bio}</p>
              <p>{profession}</p>
              <p>Time since mount: {this.state.elapsedTime} seconds</p>
            </div>
          )}
        </Card>
      </div>
    );
  }
}
export default App;
