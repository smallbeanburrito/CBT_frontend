import React from "react";
import {
  Container,
  Row,
  Col,
  Table,
  ButtonGroup,
  Card,
} from "react-bootstrap";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { sample_data } from "@/pages/data/sample_data";
import Navigation from "./Navigation";

function Monthly() {
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#A4DE6C",
    "#D0ED57",
    "#8884D8",
  ];
  const categorySummary = sample_data.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + item.amount;
    return acc;
  }, {});

  const dataForPie = Object.keys(categorySummary).map((key) => ({
    name: key,
    value: categorySummary[key],
  }));

  const monthlyAverage = sample_data.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount;
  }, 0);

  const containerStyle = {
    padding: "20px",
    backgroundColor: "#e0f7e9", // Light green background
    minHeight: "100vh",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
  };

  const headingStyle = {
    color: "#333",
    marginBottom: "20px",
    textAlign: "center",
  };

  return (
    <>
      <Navigation />
      <Container style={containerStyle}>
        <Row>
          <Col lg={12}>
            <h2 style={headingStyle}>Monthly Summary</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataForPie}
                  dataKey="value"
                  outerRadius={100}
                  fill="#8884d8"
                >
                  {dataForPie.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Col>
          <Col lg={3}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataForPie}
                  dataKey="value"
                  outerRadius={100}
                  fill="#8884d8"
                >
                  {dataForPie.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Col>
          <Col lg={3}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataForPie}
                  dataKey="value"
                  outerRadius={100}
                  fill="#8884d8"
                >
                  {dataForPie.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Col>
          <Col lg={3}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataForPie}
                  dataKey="value"
                  outerRadius={100}
                  fill="#8884d8"
                >
                  {dataForPie.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataForPie}
                  dataKey="value"
                  outerRadius={100}
                  fill="#8884d8"
                >
                  {dataForPie.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Col>
          <Col
            lg={6}
            className="d-flex align-items-center justify-content-center"
          >
            <h2 style={headingStyle}>Average Monthly Spending</h2>
          </Col>
          <Col lg={3}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataForPie}
                  dataKey="value"
                  outerRadius={100}
                  fill="#8884d8"
                >
                  {dataForPie.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataForPie}
                  dataKey="value"
                  outerRadius={100}
                  fill="#8884d8"
                >
                  {dataForPie.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Col>
          <Col lg={6}>
            <Card style={cardStyle}>
              <Card.Body>$ {monthlyAverage.toFixed(2)}</Card.Body>
            </Card>
          </Col>
          <Col lg={3}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataForPie}
                  dataKey="value"
                  outerRadius={100}
                  fill="#8884d8"
                >
                  {dataForPie.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataForPie}
                  dataKey="value"
                  outerRadius={100}
                  fill="#8884d8"
                >
                  {dataForPie.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Col>
          <Col lg={3}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataForPie}
                  dataKey="value"
                  outerRadius={100}
                  fill="#8884d8"
                >
                  {dataForPie.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Col>
          <Col lg={3}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataForPie}
                  dataKey="value"
                  outerRadius={100}
                  fill="#8884d8"
                >
                  {dataForPie.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Col>
          <Col lg={3}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataForPie}
                  dataKey="value"
                  outerRadius={100}
                  fill="#8884d8"
                >
                  {dataForPie.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Monthly;
