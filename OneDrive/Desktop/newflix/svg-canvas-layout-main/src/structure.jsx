import React, { useState } from "react";
import { FiChevronRight, FiChevronDown, FiFolder, FiFile } from "react-icons/fi";

const TreeNode = ({ node }) => {
  const [expanded, setExpanded] = useState(false);

  if (node.type === "file") {
    return (
      <div className="flex items-center gap-2 pl-6 py-1 pt-2 hover:bg-gray-200 rounded cursor-pointer">
        <FiFile className="text-gray-400" />
        <span>{node.name}</span>
      </div>
    );
  }

  return (
    <div>
      <div
        className="flex items-center gap-2 pl-2 py-1 pt-2 hover:bg-gray-200 rounded cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? <FiChevronDown /> : <FiChevronRight />}
        <FiFolder className="text-yellow-500" />
        <span>{node.name}</span>
      </div>
      {expanded && node.children && (
        <div className="pl-4 border-l border-gray-300">
          {node.children.map((child, idx) => (
            <TreeNode key={idx} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const SidebarTree = ({ data }) => {
  return (
    <div
      className="w-80 overflow-y-auto border-r pt-5 rounded-2xl pl-2 pr-2 shadow-2xl"
      style={{
        background: "hsl(var(--sidebar-background))",
        color: "hsl(var(--sidebar-foreground))",
        borderColor: "hsl(var(--sidebar-border))"
      }}
    >

      <div className="flex justify-center items-center mb-6">
        <span className="font-bold text-2xl" style={{ color: "hsl(var(--sidebar-primary))" }}>Project Structure</span>
      </div>
      {data.map((node, idx) => (
        <div key={idx} className={idx === data.length - 1 ? "pb-8" : ""}>
          <TreeNode node={node} />
        </div>
      ))}
    </div>
  );
};

export default SidebarTree;
