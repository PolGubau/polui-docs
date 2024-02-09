const code = `
import { Avatar, RoundedSizes, RoundedSizesEnum } from "pol-ui";
import React from "react";
export const AllRoundedAvatars = (): JSX.Element => (
  <div className="flex flex-wrap gap-6">
    {Object.keys(RoundedSizesEnum).map(v => (
      <div key={v} className="flex flex-col items-center justify-center">
        <Avatar
          alt="Your avatar"
          img="https://avatars.githubusercontent.com/u/63197171?v=4"
          rounded={v as RoundedSizes}
          className="mb-2"
        />
        <span className="text-gray-500">{v}</span>
      </div>
    ))}
  </div>
)
export default AllRoundedAvatars;
`;
export default code;
