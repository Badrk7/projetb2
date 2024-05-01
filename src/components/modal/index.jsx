import { useState } from "react";

const Modal = ({ isOpen, onClose, children, title }) => {
  const [isOpenModal, setIsOpenModal] = useState(isOpen);

  const closeModal = () => {
    setIsOpenModal(false);
    onClose();
  };

  return (
    <div
      className={`fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="rounded-md bg-white p-4 shadow-md">
        <div className="flex justify-between">
          <p>{title}</p>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={closeModal}
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
