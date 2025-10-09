import React, { useEffect, useRef } from "react";
import { setSidebar } from "./redux/sideSlice";
import { useDispatch } from "react-redux";

const styles = {
  pdfFrame: {
    width: "100vw",
    height: "calc(100vh - 80px)", // leave space for header
    border: 0,
    marginTop: "0px",
    display: "block",
  },
  fallback: {
    position: "absolute",
    left: 12,
    top: 12,
    zIndex: 9999,
    // background: "rgba(0, 0, 0, 0.6)",
    color: "#fff",
    padding: "8px 12px",
    borderRadius: 8,
    fontFamily: "system-ui, sans-serif",
    display: "none",
  },
};

const Portfolio = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebar(false));
  }, [dispatch]);
  const fallbackRef = useRef(null);

  useEffect(() => {
    // Show fallback if PDF fails to load
    const frame = document.getElementById("pdfFrame");
    const fallback = fallbackRef.current;
    if (frame) {
      frame.onerror = () => {
        if (fallback) fallback.style.display = "block";
      };
    }
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "#18181b",
        overflowX: "hidden",
      }}
    >
      {/* Fallback link in case browser blocks inline PDF rendering */}
      <div ref={fallbackRef} style={styles.fallback} className="fallback">
        If the PDF doesn't display,
        <a
          href="/presentation.pdf"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#fff", textDecoration: "underline" }}
        >
          open it here
        </a>
        .
      </div>
      <div style={{ paddingTop: "80px" }}>
        <iframe
          id="pdfFrame"
          style={styles.pdfFrame}
          src="/presentation.pdf#toolbar=0&navpanes=0&scrollbar=0"
          title="Presentation PDF"
        />
      </div>
    </div>
  );
};

export default Portfolio;
