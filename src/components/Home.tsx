import { Card, Row, Col } from "react-bootstrap";
import { Bar, Pie } from "react-chartjs-2";

import personas2016 from "../data/personas.json";
import personas2024 from "../data/personas2.json";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

type ClaseSocial = "Alta" | "Media" | "Baja";
type Sexo = "Hombre" | "Mujer";

type Persona = {
  nombre: string;
  apellido: string;
  edad: number;
  sexo: Sexo;
  claseSocial: ClaseSocial;
  anio: number;
};

const clases: ClaseSocial[] = ["Alta", "Media", "Baja"];

const contarPorClaseSocial = (personas: Persona[]) => {
  return clases.map((clase) =>
    personas.filter((persona) => persona.claseSocial === clase).length
  );
};

const contarPorSexoYClase = (personas: Persona[], sexo: Sexo) => {
  return clases.map((clase) =>
    personas.filter(
      (persona) => persona.sexo === sexo && persona.claseSocial === clase
    ).length
  );
};

const promedioEdadPorClase = (personas: Persona[]) => {
  return clases.map((clase) => {
    const personasFiltradas = personas.filter(
      (persona) => persona.claseSocial === clase
    );

    const sumaEdades = personasFiltradas.reduce(
      (total, persona) => total + persona.edad,
      0
    );

    return Number((sumaEdades / personasFiltradas.length).toFixed(1));
  });
};

function Home() {
  const personasA = personas2016 as Persona[];
  const personasB = personas2024 as Persona[];

  const claseSocial2016 = contarPorClaseSocial(personasA);
  const claseSocial2024 = contarPorClaseSocial(personasB);

  const hombres2016 = contarPorSexoYClase(personasA, "Hombre");
  const mujeres2016 = contarPorSexoYClase(personasA, "Mujer");
  const hombres2024 = contarPorSexoYClase(personasB, "Hombre");
  const mujeres2024 = contarPorSexoYClase(personasB, "Mujer");

  const edadPromedio2016 = promedioEdadPorClase(personasA);
  const edadPromedio2024 = promedioEdadPorClase(personasB);

  const optionsCantidad = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const
      },
      title: {
        display: true,
        text: "Cantidad de personas"
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0
        }
      }
    }
  };

  const optionsEdad = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const
      },
      title: {
        display: true,
        text: "Edad promedio"
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  const optionsPie = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const
      }
    }
  };

  const dataBarClaseSocial = {
    labels: clases,
    datasets: [
      {
        label: "2016",
        data: claseSocial2016,
        backgroundColor: "#0d6efd"
      },
      {
        label: "2024",
        data: claseSocial2024,
        backgroundColor: "#dc3545"
      }
    ]
  };

  const dataPieClaseSocial2016 = {
    labels: clases,
    datasets: [
      {
        label: "Clase social 2016",
        data: claseSocial2016,
        backgroundColor: ["#198754", "#0d6efd", "#dc3545"]
      }
    ]
  };

  const dataPieClaseSocial2024 = {
    labels: clases,
    datasets: [
      {
        label: "Clase social 2024",
        data: claseSocial2024,
        backgroundColor: ["#198754", "#0d6efd", "#dc3545"]
      }
    ]
  };

  const dataBarSexoClaseSocial = {
    labels: clases,
    datasets: [
      {
        label: "Hombres 2016",
        data: hombres2016,
        backgroundColor: "#0d6efd"
      },
      {
        label: "Mujeres 2016",
        data: mujeres2016,
        backgroundColor: "#6610f2"
      },
      {
        label: "Hombres 2024",
        data: hombres2024,
        backgroundColor: "#198754"
      },
      {
        label: "Mujeres 2024",
        data: mujeres2024,
        backgroundColor: "#dc3545"
      }
    ]
  };

  const dataPieSexoClaseSocial2016 = {
    labels: [
      "Hombres Alta",
      "Hombres Media",
      "Hombres Baja",
      "Mujeres Alta",
      "Mujeres Media",
      "Mujeres Baja"
    ],
    datasets: [
      {
        label: "Sexo y clase social 2016",
        data: [...hombres2016, ...mujeres2016],
        backgroundColor: [
          "#0d6efd",
          "#6ea8fe",
          "#9ec5fe",
          "#dc3545",
          "#f1aeb5",
          "#f8d7da"
        ]
      }
    ]
  };

  const dataPieSexoClaseSocial2024 = {
    labels: [
      "Hombres Alta",
      "Hombres Media",
      "Hombres Baja",
      "Mujeres Alta",
      "Mujeres Media",
      "Mujeres Baja"
    ],
    datasets: [
      {
        label: "Sexo y clase social 2024",
        data: [...hombres2024, ...mujeres2024],
        backgroundColor: [
          "#0d6efd",
          "#6ea8fe",
          "#9ec5fe",
          "#dc3545",
          "#f1aeb5",
          "#f8d7da"
        ]
      }
    ]
  };

  const dataBarEdadClaseSocial = {
    labels: clases,
    datasets: [
      {
        label: "Edad promedio 2016",
        data: edadPromedio2016,
        backgroundColor: "#0d6efd"
      },
      {
        label: "Edad promedio 2024",
        data: edadPromedio2024,
        backgroundColor: "#dc3545"
      }
    ]
  };

  const dataPieEdad2016 = {
    labels: clases,
    datasets: [
      {
        label: "Edad promedio 2016",
        data: edadPromedio2016,
        backgroundColor: ["#198754", "#0d6efd", "#dc3545"]
      }
    ]
  };

  const dataPieEdad2024 = {
    labels: clases,
    datasets: [
      {
        label: "Edad promedio 2024",
        data: edadPromedio2024,
        backgroundColor: ["#198754", "#0d6efd", "#dc3545"]
      }
    ]
  };

  return (
    <section id="home" className="mb-4">
      <Card className="shadow">
        <Card.Body>
          <Card.Title>Home</Card.Title>

          <Card.Text>
            Dashboard comparativo entre los años 2016 y 2024 usando gráficos de
            barras y gráficos de torta.
          </Card.Text>

          <Row className="g-4">
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Clase social - Barras</Card.Title>
                  <Bar data={dataBarClaseSocial} options={optionsCantidad} />
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Clase social 2016 - Torta</Card.Title>
                  <Pie data={dataPieClaseSocial2016} options={optionsPie} />
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Clase social 2024 - Torta</Card.Title>
                  <Pie data={dataPieClaseSocial2024} options={optionsPie} />
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Sexo y clase social - Barras</Card.Title>
                  <Bar data={dataBarSexoClaseSocial} options={optionsCantidad} />
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Sexo y clase social 2016 - Torta</Card.Title>
                  <Pie data={dataPieSexoClaseSocial2016} options={optionsPie} />
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Sexo y clase social 2024 - Torta</Card.Title>
                  <Pie data={dataPieSexoClaseSocial2024} options={optionsPie} />
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Edad promedio y clase social - Barras</Card.Title>
                  <Bar data={dataBarEdadClaseSocial} options={optionsEdad} />
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Edad promedio 2016 - Torta</Card.Title>
                  <Pie data={dataPieEdad2016} options={optionsPie} />
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Edad promedio 2024 - Torta</Card.Title>
                  <Pie data={dataPieEdad2024} options={optionsPie} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </section>
  );
}

export default Home;