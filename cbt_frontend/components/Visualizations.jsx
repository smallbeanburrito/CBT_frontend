import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, Table, ButtonGroup } from 'react-bootstrap';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navigation from '@/components/Navigation';

const sample_data = [
  { amount: 18.24, category: 'Food', bank: 'TD', date: '07/25/2023' },
  { amount: 68.84, category: 'Food', bank: 'RBC', date: '07/21/2023' },
  { amount: 10.21, category: 'Food', bank: 'TD', date: '07/15/2023' },
  { amount: 7.51, category: 'Food', bank: 'CIBC', date: '07/05/2023' },
  { amount: 35.21, category: 'Grocery', bank: 'RBC', date: '07/24/2023' },
  { amount: 80.40, category: 'Online', bank: 'CIBC', date: '07/23/2023' },
  { amount: 50.24, category: 'Transportation', bank: 'TD', date: '07/25/2023' },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A4DE6C', '#D0ED57', '#8884D8'];

const Visualizations = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBank, setSelectedBank] = useState('All');

  const filteredData = sample_data.filter((item) =>
    (selectedCategory === 'All' || item.category === selectedCategory) &&
    (selectedBank === 'All' || item.bank === selectedBank)
  );

  const categorySummary = sample_data.reduce((acc, item) => {
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

  return (
    <Container fluid>
      <Navigation />
      <Row>
        <Col>
          <h3>Visualizations</h3>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle variant="secondary">Date Range</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">07/01/2023 - 07/31/2023</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle variant="secondary">Bank</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSelectedBank('All')}>All</Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedBank('TD')}>TD</Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedBank('RBC')}>RBC</Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedBank('CIBC')}>CIBC</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={dataForPie} dataKey="value" outerRadius={100} fill="#8884d8">
                {dataForPie.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Col>
        <Col md={6}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataForBar}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
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
        </Col>
      </Row>
    </Container>
  );
};

export default Visualizations;

