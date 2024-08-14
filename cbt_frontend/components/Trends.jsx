import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { Line, LineChart, Label, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import Navigation from '@/components/Navigation';
import { sample_data } from '@/pages/data/sample_year';

export default function Trends() {
    function reduceToAmountByMonth(data) {
        const result = {};
      
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        data.forEach(item => {
          const month = item.date.split('/')[0];
          const monthNum = parseInt(month, 10);
          const monthName = monthNames[monthNum - 1];

          if (result[monthName]) {
            result[monthName].amount += item.amount;
          } else {
            result[monthName] = {
              amount: item.amount,
              month: monthName,
            };
          }
        });
      
        const finalResult = Object.values(result);
        finalResult.forEach(item => {
            item.amount = item.amount.toFixed(2);
        });
      
        return finalResult;
    }
      
    const data = reduceToAmountByMonth(sample_data);

    const filteredData = sample_data;

    const containerStyle = {
        padding: '20px',
        backgroundColor: '#f7f7f7',  // Light grey background for the whole container
        minHeight: '100vh',
    };

    const headingStyle = {
        color: '#333',
        marginBottom: '20px',
        textAlign: 'center',
        fontSize: '28px',
        fontWeight: 'bold',
    };

    const chartWrapperStyle = {
        backgroundColor: "#ffffff", // White background for contrast
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
        marginBottom: "20px",
    };

    const tableStyle = {
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    return (
        <Container fluid style={containerStyle}>
            <Navigation />
            <Row>
                <Col>
                    <h1 style={headingStyle}>Trends</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div style={chartWrapperStyle}>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis>
                                    <Label value="Amount Spent ($)" position="insideLeft" angle={-90} style={{ textAnchor: 'middle', fill: '#666' }} />
                                </YAxis>
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="amount" stroke="#8884d8" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div style={chartWrapperStyle}>
                        <Table striped bordered hover responsive style={tableStyle}>
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
