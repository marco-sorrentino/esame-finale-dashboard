import { Badge, ListGroup } from "react-bootstrap";

export const SingleItemBudget = (props) => {
  return (
    <ListGroup
      key={props.index}
      className="border-none py-1 px-3 px-md-2 hoverListGroup"
    >
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start border-0 p-0 "
      >
        <p>{props.text}</p>

        {props.cost > 0 ? (
          <Badge bg="success" pill>
            {props.cost}
          </Badge>
        ) : (
          <Badge bg="danger" pill>
            {props.cost}
          </Badge>
        )}
      </ListGroup.Item>
    </ListGroup>
  );
};
