import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, Table, ButtonGroup } from 'react-bootstrap';
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

    const filteredData = sample_data
    return (
        <Container>
            <Navigation />
            <Row>
                <Col>
                    <h1>Trends</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data} >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis>
                                <Label value="Amount Spent ($)" position="insideBottomLeft" offset={5} angle={-90}/>
                            </YAxis>
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="amount" stroke="#8884d8" />
                        </LineChart>
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
