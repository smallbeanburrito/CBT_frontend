import { Container, Table, Row, Col } from "react-bootstrap";
import Navigation from "@/components/Navigation";
import Details from "./Details";

function Summary() {
  const sample_data = [
    {
      amount: 12.53,
      category: "Food",
      bank: "TD",
      date: "07/28/2023",
    },
    {
      amount: 50.62,
      category: "Transportation",
      bank: "CIBC",
      date: "07/25/2023",
    },
    {
      amount: 32.51,
      category: "Food",
      bank: "RBC",
      date: "07/24/2023",
    },
    {
      amount: 90.07,
      category: "Online",
      bank: "CIBC",
      date: "07/23/2023",
    },
    {
      amount: 3.4,
      category: "Misc.",
      bank: "BMO",
      date: "07/22/2023",
    },
    {
      amount: 60.33,
      category: "Grocery",
      bank: "ScotiaBank",
      date: "07/20/2023",
    },
    {
      amount: 17.85,
      category: "Retail",
      bank: "CIBC",
      date: "07/19/2023",
    },
    {
      amount: 108.79,
      category: "Grocery",
      bank: "TD",
      date: "07/18/2023",
    },
    {
      amount: 16.25,
      category: "Transportation",
      bank: "BMO",
      date: "07/17/2023",
    },
    {
      amount: 32.4,
      category: "Gas",
      bank: "BMO",
      date: "07/13/2023",
    },
  ];

  const rows = [];

  sample_data.forEach((data, index) =>
    rows.push(
      <tr key={index}>
        <td>{data.amount}</td>
        <td>{data.category}</td>
        <td>{data.date}</td>
        <td>{data.bank}</td>
      </tr>
    )
  );
  return (
    <>
      <Navigation />

      {
        // TO DO MAKE INTO COMPONENT
      }
      <Container fluid>
        <Row>
          <Col md={9}>
            <Table>
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Bank</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </Col>
          <Col md={3}>
            <Details data={sample_data[0]} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Summary;
