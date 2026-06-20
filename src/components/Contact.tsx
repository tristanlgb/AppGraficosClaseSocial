import { Card, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <section id="contact" className="mb-4">
      <Card className="shadow">
        <Card.Body>
          <Card.Title>Contact</Card.Title>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingresá tu nombre" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresá tu email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </section>
  );
}

export default Contact;