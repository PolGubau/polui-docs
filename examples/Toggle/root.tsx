const code = `
import { Toggle } from "pol-ui";
import { TbBold, TbItalic, TbUnderline } from "react-icons/tb";
export const ToggleComponent = () => {
  return (
    <div className="flex gap-2">
      <Toggle onClick={toggle} active={value}>
        <TbBold />
      </Toggle>
      <Toggle onClick={t2} active={v2}>
        <TbItalic />
      </Toggle>
      <Toggle onClick={t3} active={v3}>
        <TbUnderline />
      </Toggle>
    </div>
  );
};
`;
export default code;
