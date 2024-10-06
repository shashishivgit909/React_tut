// Study UseREf from : "https://react.dev/reference/react/useRef"

//  Some points which are not clear from documentataion:

// Topic: 1. Manipulating the DOM with a ref .
/*
=>when a component that a ref is attached to is removed from the DOM (for example, when it is unmounted or conditionally rendered out),
 React automatically sets the current property of the ref to null. This behavior helps manage memory efficiently and prevents memory leaks
  by ensuring that references to DOM nodes are properly cleared when those nodes are no longer part of the document.

#Example Scenario
Consider a modal component that is conditionally rendered. If you use useRef to reference an element inside the modal, that reference will
 automatically be set to null when the modal is removed from the DOM.

 Code: 
 import React, { useRef, useState } from 'react';

function Modal() {
  const modalRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => setIsVisible(true);
  const closeModal = () => setIsVisible(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isVisible && (
        <div ref={modalRef}>
          <p>Modal Content</p>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      )}
    </div>
  );
}


*/