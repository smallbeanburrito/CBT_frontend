import Card from "react-bootstrap/Card";

function Details({ data }) {
  return (
    <Card style={{ height: "100%" }}>
      <Card.Title>{data.date}</Card.Title>
      <Card.Text>{data.amount}</Card.Text>
      <Card.Text>{data.category}</Card.Text>
      <Card.Text>{data.bank}</Card.Text>
    </Card>
  );
}

export default Details;
