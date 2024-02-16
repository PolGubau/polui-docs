const code = `
import { DropdownItem, Dropdown, theme } from "pol-ui";
import React from "react";

const DropdownComponent = () => {
  return (
    <Dropdown disabled label={"I'm disabled 🥲"}>
      <DropdownItem
        label="Undo"
        onClick={() => console.log("Undo")}
        shortcut="Ctrl+Z"
      />
      <DropdownItem label="Redo" disabled />
      <DropdownItem label="Cut" />
      <Dropdown label="Copy as">
        <DropdownItem label="Text" />
        <DropdownItem label="Video" />
        <Dropdown label="Image" nestingIcon="🎞️">
          <DropdownItem label=".png" />
          <DropdownItem label=".jpg" />
          <DropdownItem label=".svg" />
          <DropdownItem label=".gif" />
        </Dropdown>
        <DropdownItem label="Audio" />
      </Dropdown>
      <Dropdown label="Share">
        <DropdownItem label="Mail" />
        <DropdownItem label="Instagram" />
      </Dropdown>
    </Dropdown>
  );
};
export default DropdownComponent;
`;
export default code;
