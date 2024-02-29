const code = `
import { StickyScroll } from "pol-ui";
const content = [
  {
    title: "Revolutionizing UI Architecture in React Applications",
    description:
      "Embark on a journey to revolutionize the architecture of your React applications. Delve deep into advanced concepts, including state management, component composition, and efficient data flow. Learn how to build robust and scalable UIs that stand the test of time.",
  },
  {
    title: "Inclusive UI Design: A Comprehensive Guide for React Developers",
    description:
      "Explore the inclusive and accessible side of UI design in React. This comprehensive guide covers everything from understanding diverse user needs to implementing ARIA roles and creating a seamless experience for users with varying abilities. Elevate your React applications with thoughtful and accessible design practices. ",
  },
  {
    title: "Boosting React App Performance: Mastering Memoization Techniques",
    description:
      "Optimize the performance of your React applications with advanced memoization techniques. Dive into the world of memoization, caching, and avoiding unnecessary renders. Discover the art of crafting lightning-fast UIs that deliver a smooth and delightful experience for your users.",
  },

  {
    title: "Revolutionizing UI Architecture in React Applications",
    description:
      "Embark on a journey to revolutionize the architecture of your React applications. Delve deep into advanced concepts, including state management, component composition, and efficient data flow. Learn how to build robust and scalable UIs that stand the test of time. Unleash the transformative potential of React Hooks in UI design. This in-depth exploration covers the use of useState, useEffect, useContext, and custom hooks to build interactive and dynamic interfaces. Elevate your React components with the simplicity and power of Hooks for a more engaging user experience.",
  },
];
export const StickyScrollComponent = (): JSX.Element => {
  return (
    <StickyScroll colors={["#ffffff", "#b2b2b2", "#656565", "#181818"]}>
      <div className="  relative flex flex-col  ">
        {content.map((item, index) => (
          <div
            key={item.title + index}
            className="grid h-screen place-items-center"
          >
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    </StickyScroll>
  );
};
`;
export default code;
