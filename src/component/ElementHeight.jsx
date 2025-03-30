import React, { useRef, useState, useEffect } from 'react';

function ElementHeight() {
  // Create a reference to the element
  const elementRef = useRef(null);

  // State to store the height of the element
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // When the component mounts, set the height from the reference
    if (elementRef.current) {
      setHeight(elementRef.current.clientHeight);
    }

    // Optionally, you can listen for window resize events to update height if the element's height changes
    const handleResize = () => {
      if (elementRef.current) {
        setHeight(elementRef.current.clientHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div ref={elementRef} className="d-inline-flex p-2">
        This is the element
        asaas
      </div>
      <p>The height of the element is: {height}px</p>
    </div>
  );
}

export default ElementHeight;
