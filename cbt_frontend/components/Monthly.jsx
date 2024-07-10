import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  Table,
  ButtonGroup,
} from "react-bootstrap";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { sample_data } from "@/pages/data/sample_data";

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

  return (
    <Container>
      <Row>
        <Col lg={3}>
          {" "}
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
          {" "}
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
          {" "}
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
          {" "}
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
          {" "}
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
        <Col lg={6}></Col>
        <Col lg={3}>
          {" "}
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
          {" "}
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
        <Col lg={6}></Col>
        <Col lg={3}>
          {" "}
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
          {" "}
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
          {" "}
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
          {" "}
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
          {" "}
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
  );
}

export default Monthly;
