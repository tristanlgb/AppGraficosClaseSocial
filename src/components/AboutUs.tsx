import { Card } from "react-bootstrap";

function AboutUs() {
  return (
    <section id="about" className="mb-4">
      <Card className="shadow">
        <Card.Body>
          <Card.Title>About Us</Card.Title>
          <Card.Text>
            Somos una aplicación creada con React, Vite, TypeScript, Bootstrap y Chart.js.
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
}

export default AboutUs;