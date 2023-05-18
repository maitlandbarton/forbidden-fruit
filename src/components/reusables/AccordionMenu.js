import { useState } from "react";

function AccordionMenu() {
  const [isHidden, setIsHidden] = useState(true);

  function toggleMenu() {
    if (isHidden) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  }

  return (
    <div>
        <h1>Accordion menu coming soon!</h1>
    </div>
  );
}

export default AccordionMenu;
