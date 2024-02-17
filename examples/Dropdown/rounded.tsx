const code = `
import { DropdownItem, Dropdown } from "pol-ui";
import React from "react";

const DropdownComponent = () => {
  return (
    <div className="flex gap-3 flex-wrap items-center">
    {Object.keys(theme.dropdown.size).map(c => (
      <Dropdown label={c} size={c as keyof typeof theme.dropdown.size} key={c}>
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
    </Dropdown>      </Dropdown>
    ))}
  </div>
  );
};
export default DropdownComponent;
`;
export default code;