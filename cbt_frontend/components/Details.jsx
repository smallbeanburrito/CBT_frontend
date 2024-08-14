import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import styles from "@/styles/Summary.module.css";

const Details = ({ data }) => {
  if (!data) {
    return (
      <Card className={`text-center ${styles.detailsCard}`}>
        <Card.Body>No data available</Card.Body>
      </Card>
    );
  }

  return (
    <Card className={styles.detailsCard}>
      <Card.Body>
        <Card.Title>{`$${data.amount.toFixed(2)}`}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{data.date}</Card.Subtitle>
        <Card.Text>{data.category[0]}</Card.Text>
        <Card.Text>{data.bank}</Card.Text>
        {data.personal_finance_category ? (
          <Card.Text>{data.personal_finance_category.detailed}</Card.Text>
        ) : (
          ""
        )}

        {data.website ? <Card.Text>{data.website}</Card.Text> : ""}
      </Card.Body>
    </Card>
  );
};

Details.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    bank: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

export default Details;
