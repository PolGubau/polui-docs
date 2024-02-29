const code = `
import { Toggle } from "pol-ui";
import { TbHome } from "react-icons/tb";
export const AllColors = () => {
  const { value: v1, toggle: t1 } = useBoolean(false);
  const { value: v2, toggle: t2 } = useBoolean(false);
  const { value: v3, toggle: t3 } = useBoolean(false);
  const { value: v4, toggle: t4 } = useBoolean(false);
  const { value: v5, toggle: t5 } = useBoolean(false);
  const { value: v6, toggle: t6 } = useBoolean(false);
  return (
    <div className="flex flex-col gap-2 flex-wrap">
      <div className="flex gap-2 flex-wrap p-2 bg-secondary-50">
        <Toggle onClick={t1} active={v1} color="primary">
          <TbHome />
        </Toggle>
        <Toggle onClick={t2} active={v2} color="secondary">
          <TbHome />
        </Toggle>
        <Toggle onClick={t3} active={v3} color="warning">
          <TbHome />
        </Toggle>
        <Toggle onClick={t4} active={v4} color="info">
          <TbHome />
        </Toggle>
        <Toggle onClick={t5} active={v5} color="success">
          <TbHome />
        </Toggle>
        <Toggle onClick={t6} active={v6} color="error">
          <TbHome />
        </Toggle>
        <Button>Click me</Button>
      </div>
      <div className="flex gap-2 flex-wrap dark bg-secondary-900 p-2">
        <Toggle onClick={t1} active={v1} color="primary">
          <TbHome />
        </Toggle>
        <Toggle onClick={t2} active={v2} color="secondary">
          <TbHome />
        </Toggle>
        <Toggle onClick={t3} active={v3} color="warning">
          <TbHome />
        </Toggle>
        <Toggle onClick={t4} active={v4} color="info">
          <TbHome />
        </Toggle>
        <Toggle onClick={t5} active={v5} color="success">
          <TbHome />
        </Toggle>
        <Toggle onClick={t6} active={v6} color="error">
          <TbHome />
        </Toggle>
      </div>
    </div>
  );
};
`;
export default code;
