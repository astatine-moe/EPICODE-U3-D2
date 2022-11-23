import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import { Card, Col, Row } from "react-bootstrap";
import HorrorBooks from "./books/horror.json";

const page = {
    name: "Morgan's Bookstore",
};

function App() {
    return (
        <>
            <MyNav
                links={[
                    { href: "#", name: "Home" },
                    { href: "#", name: "About" },
                    { href: "#", name: "Browse" },
                ]}
                name={page.name}
            />
            <Welcome name={page.name} />
            <div className="container">
                <Row xs={2} md={6} className="g-4">
                    {HorrorBooks.map((book, i) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={book.img} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>${book.price}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <MyFooter name={page.name} />
        </>
    );
}

export default App;
