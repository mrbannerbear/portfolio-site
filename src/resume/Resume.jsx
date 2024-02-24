import { FaArrowLeft } from "react-icons/fa";

import { Worker } from "@react-pdf-viewer/core";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import { NavLink } from "react-router-dom/dist";

const Resume = () => {
  return (
    <div className="min-h-screen py-12 px-6">
        <div className="px-6">
            <button>
                <NavLink to={"/"}>
                        <FaArrowLeft></FaArrowLeft>
                </NavLink>
            </button>
        </div>
      <h1 className="text-center text-3xl font-semibold">Resume</h1>

      <div className="w-64 mx-auto flex justify-center">
        <button className="btn1 mx-auto mt-4">
          <a
            href="saqlain-react-developer.pdf.pdf"
            download={true}
          >
            Download
          </a>
        </button>
      </div>

      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div className="py-12 px-6">
          <Viewer fileUrl="saqlain-react-developer.pdf" />
        </div>
      </Worker>
    </div>
  );
};

export default Resume;
