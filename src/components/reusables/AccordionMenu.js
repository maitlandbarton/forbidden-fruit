import { useState, useContext } from "react";
import { AccordionDataContext } from "../../context/AccordionDataContext";

function AccordionMenu() {
  const { menuItems } = useContext(AccordionDataContext);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {menuItems.map((item, index) => (
        <div key={index}>
          <button onClick={() => handleClick(index)}>
            {item.title}
          </button>
          {activeIndex === index && (
            <div>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default AccordionMenu;
