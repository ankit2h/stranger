import React from "react";
import SidebarTree from "./structure";
import { setSidebar } from "./redux/sideSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


const projectData = [
  {
    name: "frontend",
    type: "folder",
    children: [
      {
        name: "public",
        type: "folder",
        children: [{ name: "index.html", type: "file" }],
      },
      {
        name: "src",
        type: "folder",
        children: [
          {
            name: "components",
            type: "folder",
            children: [
              { name: "Body.jsx", type: "file" },
              { name: "Browse.jsx", type: "file" },
              { name: "Header.jsx", type: "file" },
              { name: "Login.jsx", type: "file" },
              { name: "MainContainer.jsx", type: "file" },
              { name: "MovieCard.jsx", type: "file" },
              { name: "MovieContainer.jsx", type: "file" },
              { name: "MovieDialog.jsx", type: "file" },
              { name: "MovieList.jsx", type: "file" },
              { name: "SearchMovie.jsx", type: "file" },
              { name: "VideoBackground.jsx", type: "file" },
              { name: "VideoTitle.jsx", type: "file" },
            ],
          },
          {
            name: "hooks",
            type: "folder",
            children: [
              { name: "useMovieById.js", type: "file" },
              { name: "useNowPlayingMovies.js", type: "file" },
              { name: "usePopularMovies.js", type: "file" },
              { name: "useTopRatedMovies.js", type: "file" },
              { name: "useUpcomingMovies.js", type: "file" },
            ],
          },
          {
            name: "redux",
            type: "folder",
            children: [
              { name: "store.js", type: "file" },
              { name: "movieSlice.js", type: "file" },
              { name: "searchSlice.js", type: "file" },
              { name: "userSlice.js", type: "file" },
            ],
          },
          {
            name: "utils",
            type: "folder",
            children: [{ name: "constant.js", type: "file" }],
          },
          { name: "App.js", type: "file" },
          { name: "App.test.js", type: "file" },
          { name: "index.css", type: "file" },
          { name: "index.js", type: "file" },
          { name: "postcss.config.js", type: "file" },
          { name: "reportWebVitals.js", type: "file" },
          { name: "setupTests.js", type: "file" },
        ],
      },
      { name: "package.json", type: "file" },
      { name: "package-lock.json", type: "file" },
      { name: "tailwind.config.js", type: "file" },
    ],
  },
  {
    name: "backend",
    type: "folder",
    children: [
      {
        name: "controllers",
        type: "folder",
        children: [{ name: "user.js", type: "file" }],
      },
      {
        name: "models",
        type: "folder",
        children: [{ name: "user.js", type: "file" }],
      },
      {
        name: "routes",
        type: "folder",
        children: [{ name: "user.js", type: "file" }],
      },
      {
        name: "utils",
        type: "folder",
        children: [{ name: "database.js", type: "file" }],
      },
      { name: "index.js", type: "file" },
      { name: ".env", type: "file" },
      { name: "package.json", type: "file" },
      { name: "package-lock.json", type: "file" },
    ],
  },
];

export default function Data() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebar(false));
  }, [dispatch]);
  return (
    <div className="flex pt-24 justify-center items-center min-h-screen">
      <SidebarTree data={projectData} />
      {/* <div className="flex-1 p-4">Main content here</div> */}
    </div>
  );
}
