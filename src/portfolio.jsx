import React, { useEffect } from "react";
import { setSidebar } from "./redux/sideSlice";
import { useDispatch } from "react-redux";

const styles = {
  container: {
    width: '100vw',
    minHeight: '100vh',
    background: '#18181b',
    overflowX: 'hidden',
    paddingTop: '80px', // leave space for header
    paddingBottom: '2rem',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    padding: '2rem',
    alignItems: 'center',
    maxWidth: '1200px',  // reduced width
    margin: '0 auto',   // center in container
  },
  imageWrapper: {
    backgroundColor: '#27272a',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  image: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  }
};

// Array of image paths (update these with your actual image paths)
const images = [
  '/map1.jpg',
  '/map2.jpg',
  '/map3.jpg',
  '/map4.jpg',
  '/map5.jpg',
  // '/map6.jpg',
  // Add more image paths as needed
];

const Portfolio = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebar(false));
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <div style={styles.column}>
        {images.map((src, index) => (
          <div
            key={index}
            style={styles.imageWrapper}
            onClick={() => window.open(src, '_blank')}
          >
            <img
              src={src}
              alt={`Map ${index + 1}`}
              style={styles.image}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
