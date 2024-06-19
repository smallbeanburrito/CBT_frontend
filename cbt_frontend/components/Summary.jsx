import { useState, useEffect } from 'react';
import { Container, Table, Row, Col, Card } from "react-bootstrap";
import Navigation from "@/components/Navigation";
import Details from "./Details";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '@/styles/Summary.module.css';

function Summary() {
  const sample_data = [
    { amount: 12.53, category: "Food", bank: "TD", date: "07/28/2023" },
    { amount: 50.62, category: "Transportation", bank: "CIBC", date: "07/25/2023" },
    { amount: 32.51, category: "Food", bank: "RBC", date: "07/24/2023" },
    { amount: 90.07, category: "Online", bank: "CIBC", date: "07/23/2023" },
    { amount: 3.4, category: "Misc.", bank: "BMO", date: "07/22/2023" },
    { amount: 60.33, category: "Grocery", bank: "ScotiaBank", date: "07/20/2023" },
    { amount: 17.85, category: "Retail", bank: "CIBC", date: "07/19/2023" },
    { amount: 108.79, category: "Grocery", bank: "TD", date: "07/18/2023" },
    { amount: 16.25, category: "Transportation", bank: "BMO", date: "07/17/2023" },
    { amount: 32.4, category: "Gas", bank: "BMO", date: "07/13/2023" },
  ];

  const [selectedRow, setSelectedRow] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <>
      <Navigation />
      <Container fluid className={styles.container}>
        <Row>
          <Col md={4}>
            <Table striped bordered hover responsive className={styles.table}>
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Bank</th>
                </tr>
              </thead>
              <tbody>
                {sample_data.map((data, index) => (
                  <tr
                    key={index}
                    onClick={() => handleRowClick(index)}
                    className={selectedRow === index ? "table-active" : ""}
                  >
                    <td>{`$${data.amount.toFixed(2)}`}</td>
                    <td>{data.category}</td>
                    <td>{data.date}</td>
                    <td>{data.bank}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col md={8}>
            <Details data={sample_data[selectedRow]} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Summary;
