import { useState, useEffect } from "react";
import {
  Container,
  Table,
  Row,
  Col,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import Navigation from "@/components/Navigation";
import Details from "./Details";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/Summary.module.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

function Summary() {
  const sample_data = [
    { amount: 12.53, category: "Food", bank: "TD", date: "07/28/2023" },
    {
      amount: 50.62,
      category: "Transportation",
      bank: "CIBC",
      date: "07/25/2023",
    },
    { amount: 32.51, category: "Food", bank: "RBC", date: "07/24/2023" },
    { amount: 90.07, category: "Online", bank: "CIBC", date: "07/23/2023" },
    { amount: 3.4, category: "Misc.", bank: "BMO", date: "07/22/2023" },
    {
      amount: 60.33,
      category: "Grocery",
      bank: "ScotiaBank",
      date: "07/20/2023",
    },
    { amount: 17.85, category: "Retail", bank: "CIBC", date: "07/19/2023" },
    { amount: 108.79, category: "Grocery", bank: "TD", date: "07/18/2023" },
    {
      amount: 16.25,
      category: "Transportation",
      bank: "BMO",
      date: "07/17/2023",
    },
    { amount: 32.4, category: "Gas", bank: "BMO", date: "07/13/2023" },
  ];

  const [selectedRow, setSelectedRow] = useState(null);
  const [isClient, setIsClient] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBank, setSelectedBank] = useState("All");

  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSelect = (range) => {
    setSelectionRange(range.selection);
    console.log(range.selection);
  };

  const filteredData = sample_data.filter(
    (item) =>
      (selectedCategory === "All" || item.category === selectedCategory) &&
      (selectedBank === "All" || item.bank === selectedBank)
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  if (!isClient) {
    return null; // or a loading spinner
  }

  const categoryIcons = {
    Food: "/hamburger.png",
    Transportation: "/transportation.png",
    Online: "/online.png",
    Misc: "/misc.png",
    Grocery: "/grocery.png",
    Retail: "/retail.png",
    Gas: "/gas.png",
  };

  return (
    <>
      <Navigation />
      <Container fluid className={styles.container}>
        <Row>
          <Col>
            <h3>Summary</h3>
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
              <Dropdown.Menu>
                <Dropdown.Item href="#">07/01/2023 - 07/31/2023</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle variant="secondary">
                Bank ({selectedBank})
              </Dropdown.Toggle>
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
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle variant="secondary">
                Category ({selectedCategory})
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setSelectedCategory("All")}>
                  All
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedCategory("Food")}>
                  Food
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSelectedCategory("Transportation")}
                >
                  Transportation
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedCategory("Online")}>
                  Online
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedCategory("Misc.")}>
                  Misc.
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedCategory("Grocery")}>
                  Grocery
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedCategory("Retail")}>
                  Retail
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedCategory("Gas")}>
                  Gas
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
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
                {filteredData.map((data, index) => (
                  <tr
                    key={index}
                    onClick={() => handleRowClick(index)}
                    className={selectedRow === index ? "table-active" : ""}
                  >
                    <td>{`$${data.amount.toFixed(2)}`}</td>
                    <td>
                      {data.category in categoryIcons ? (
                        <>
                          <img
                            src={categoryIcons[data.category]}
                            alt={data.category}
                            style={{
                              width: "20px",
                              height: "20px",
                              marginRight: "5px",
                            }}
                          />
                          {data.category}
                        </>
                      ) : (
                        data.category
                      )}
                    </td>
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
