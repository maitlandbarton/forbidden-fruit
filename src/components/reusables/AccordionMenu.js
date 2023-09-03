import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AccordionDataContext } from "../../context/AccordionDataContext";

function AccordionMenu( {props} ) {
  const {id} = useParams();
  const { menuItems } = useContext(AccordionDataContext);
  const materialsTextArr = menuItems[0].content;
  const shippingTextArr = menuItems[1].content;

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
    console.log(props[0].category)
  };

  return (
    <div>
      <div>
        <button onClick={() => handleClick(0)}>{menuItems[0].title}</button>

        {activeIndex === 0 && 
        <div>
        {" "}
        {/* put if statements here */}
        {props[id - 1].category === "hoop art" &&  <p>{materialsTextArr[0].text}</p>}
        {props[id - 1].category === "sticker" &&  <p>{materialsTextArr[1].text}</p>}
        {props[id - 1].category === "guide" &&  <p>{materialsTextArr[2].text}</p>}
      </div>}
        
      </div>

      <div>
      <button onClick={() => handleClick(1)}>{menuItems[1].title}</button>

      {activeIndex === 1 && 
        <ul>
          {shippingTextArr.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
      }
      </div>
    </div>
  );
}

export default AccordionMenu;
