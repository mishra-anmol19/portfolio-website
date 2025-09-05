import React, { useState } from "react";
import Image from "next/image";

const ProjectModal = ({ project, onClose }) => {
const [showAccessModal, setShowAccessModal] = useState(false);
  if (!project) return null;


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-[#181818] text-white rounded-xl p-6 w-11/12 md:w-4/5 lg:w-3/4 relative">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
        >
          ✕
        </button>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image */}
          <div className="w-full h-64 relative">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain rounded-lg"
            />
          </div>

          {/* Details */}
          <div>
            <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
            <p className="text-base text-gray-400 mb-1">{project.description}</p>
            <p className="text-1xl text-gray-400 mb-2">{project.period}</p>

            <div className="text-base text-white mb-2 space-y-1">
              {project.responsibility.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>

            <div className="text-1xl text-gray-300 mb-2">
              <ul className="list-disc list-inside text-[#ADB7BE] space-y-0.5">
                {project.content.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>

            {/* Action buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => setShowAccessModal(true)}
                className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                View Code
              </button>
              <button
                onClick={() => setShowAccessModal(true)}
                className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700"
              >
                Live Preview
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Access Restriction Popup */}
      {showAccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-[70]">
          <div className="bg-[#222] text-white p-6 rounded-xl shadow-lg w-80 relative">
            <button
              onClick={() => setShowAccessModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold mb-3 text-center">
              Access Restricted
            </h3>
            <p className="text-gray-300 mb-5 text-center">
              You don’t have access to this resource right now.
            </p>
            <button
              onClick={() => setShowAccessModal(false)}
              className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 w-full"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectModal;
