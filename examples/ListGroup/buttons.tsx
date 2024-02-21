const code = `
import { ListGroup } from "pol-ui";
const ListGroupComponent = () => {
  return (
    <ListGroup>
    <ListItem active onClick={() => alert('Profile clicked!')}>
    Profile
  </ListItem>
  <ListItem onClick={() => alert('Settings clicked!')}>Settings</ListItem>
  <ListItem onClick={() => alert('Messages clicked!')}>Messages</ListItem>
  <ListItem onClick={() => alert('Download clicked!')}>Download</ListItem>
    </ListGroup>
  );
};
export default ListGroupComponent;
`;
export default code;
