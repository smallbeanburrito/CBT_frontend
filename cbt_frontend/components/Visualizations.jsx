import React, { useState } from "react";
import { DateRangePicker } from 'react-date-range';

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
import Navigation from "@/components/Navigation";
import { sample_data } from "@/pages/data/sample_year";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A4DE6C",
  "#D0ED57",
  "#8884D8",
];

const Visualizations = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBank, setSelectedBank] = useState("All");

  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date("01/01/2018"),
    endDate: new Date("12/31/2024"),
    key: "selection",
  });

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    console.log(selectionRange);
    setToggle(!toggle);
  };

  const handleSelect = (range) => {
    setSelectionRange(range.selection);
    console.log(range.selection);
  };

  const filteredData = sample_data.filter(
    (item) =>
      (selectedCategory === "All" || item.category === selectedCategory) &&
      (selectedBank === "All" || item.bank === selectedBank) &&
      selectionRange.startDate <= new Date(item.date) &&
      selectionRange.endDate > new Date(item.date)
  );

  const categorySummary = filteredData.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + item.amount;
    return acc;
  }, {});

  const dataForPie = Object.keys(categorySummary).map((key) => ({
    name: key,
    value: categorySummary[key],
  }));

  const dataForBar = Object.keys(categorySummary).map((key) => ({
    name: key,
    amount: categorySummary[key],
  }));

  const containerStyle = {
    padding: "20px",
    backgroundColor: "#f7f7f7", // Light grey background
    minHeight: "100vh",
  };

  const chartWrapperStyle = {
    backgroundColor: "#ffffff", // White background for contrast
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
    marginBottom: "20px",
  };

  const headingStyle = {
    color: "#333",
    marginBottom: "20px",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
  };

  return (
    <Container fluid style={containerStyle}>
      <Navigation />
      <Row>
        <Col>
          <h3 style={headingStyle}>Visualizations</h3>
          <div style={{ marginBottom: "20px" }}>
            <Dropdown as={ButtonGroup}>
              <Col>
                <Row>
                  <Dropdown.Toggle variant="secondary" onClick={handleToggle}>
                    Date Range
                  </Dropdown.Toggle>
                </Row>
                {toggle && (
                  <Row>
                    <DateRangePicker
                      onChange={handleSelect}
                      showSelectionPreview={true}
                      moveRangeOnFirstSelection={false}
                      ranges={[selectionRange]}
                    />
                  </Row>
                )}
              </Col>
            </Dropdown>
            <Dropdown as={ButtonGroup} style={{ marginLeft: "10px" }}>
              <Dropdown.Toggle variant="secondary">Bank</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setSelectedBank("All")}>
                  All
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedBank("TD")}>
                  TD
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedBank("RBC")}>
                  RBC
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedBank("CIBC")}>
                  CIBC
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <div style={chartWrapperStyle}>
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
          </div>
        </Col>
        <Col md={6}>
          <div style={chartWrapperStyle}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dataForBar}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={chartWrapperStyle}>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Bank</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index}>
                    <td>${item.amount.toFixed(2)}</td>
                    <td>{item.category}</td>
                    <td>{item.date}</td>
                    <td>{item.bank}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Visualizations;
