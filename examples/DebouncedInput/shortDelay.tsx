const code = `
import { DebouncedInput } from "pol-ui";

import React from "react";

const DebouncedInputComponent = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <DebouncedInput
        label="The returned value is debounced by 10ms"
        delay={10}
        onChange={(v) => setValue(e)} // <- The parameter is directly the value
        placeholder="Type something..."
        value=""
      />
      <p className="mt-4">Value: {value}</p>
    </>
  );
};
export default DebouncedInputComponent;
`;
export default code;
