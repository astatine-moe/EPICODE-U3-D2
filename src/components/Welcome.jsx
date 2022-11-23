import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

class Welcome extends React.Component {
    render() {
        return (
            <Jumbotron>
                <div className="container">
                    <h1>{this.props.name}</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce vel scelerisque dolor, vel mollis risus.
                        Pellentesque nisl ex, faucibus in finibus et, commodo at
                        tortor. Aliquam varius velit mattis risus varius, sed
                        vehicula leo luctus.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </div>
            </Jumbotron>
        );
    }
}

export default Welcome;
