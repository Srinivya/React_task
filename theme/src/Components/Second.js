import React, { useRef } from "react";

const Second = () => {
  const fileref = useRef();
  const getref = () => {
    fileref.current.showModal();
  };
  const closeref = () => {
    fileref.current.close();
  };
  return (
    <>
      <dialog ref={fileref}>
        <p>This is the dialog button using use ref</p>
        <button onClick={closeref}>Close</button>
      </dialog>
      <button onClick={getref}>Open</button>
    </>
  );
};

export default Second;
