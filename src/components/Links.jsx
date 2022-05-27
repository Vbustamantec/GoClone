import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "🔎 All", id: 1 },
  { url: "/news", text: "📰 News", id: 2 },
  { url: "/image", text: "📸 Images", id: 3 },
  { url: "/video", text: "📺 Videos", id: 4 },
];

const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text, id }) => (
        <NavLink
          key={id}
          to={url}
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 m-4"
              : "m-4"
          }
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
