import React from "react";
import SidebarTree from "./structure";

const projectData = [
  {
    name: "src",
    type: "folder",
    children: [
      { name: "index.tsx", type: "file" },
      { name: "App.tsx", type: "file" },
      {
        name: "components",
        type: "folder",
        children: [
          { name: "SidebarTree.tsx", type: "file" },
          { name: "Button.tsx", type: "file" },
        ],
      },
    ],
  },
  { name: "package.json", type: "file" },
  { name: "tsconfig.json", type: "file" },
];

export default function Data() {
  return (
    <div className="flex pt-24 justify-center items-center min-h-screen">
      <SidebarTree data={projectData} />
      {/* <div className="flex-1 p-4">Main content here</div> */}
    </div>
  );
}
