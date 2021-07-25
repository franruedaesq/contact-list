import React, { useRef } from "react";
import "./index.scss";
import Tab from "./Tab";
import ContactContainer from "components/ContactContainer";
import { arrow_left_svg, arrow_right_svg } from "assets/icons";

function TabBar({ children, onClickTab, selectedTab, tabItems, tabContent }) {
  const { itemTitle, itemSubtitle } = tabItems;
  const navTab = useRef(null);
  const scroll = (scrollOffset) => {
    navTab.current.scrollLeft += scrollOffset;
  };

  return (
    <nav className="tab-list__nav">
      <div className="tab-list__container">
        <button
          className="tab-list__arrow-button tab-list__arrow-button--left"
          onClick={() => scroll(-40)}
          aria-label="Scroll tab list to the left"
          type="button"
        >
          {arrow_left_svg}
        </button>
        <ol className="tab-list" ref={navTab}>
          {itemTitle.map((letter, index) => (
            <Tab
              activeTab={selectedTab}
              key={index}
              label={letter}
              onClick={onClickTab}
              quantity={itemSubtitle(letter)}
              activeTab={selectedTab}
            />
          ))}
        </ol>
        <button
          className="tab-list__arrow-button tab-list__arrow-button--right"
          onClick={() => scroll(40)}
          aria-label="Scroll tab list to the right"
          type="button"
        >
          {arrow_right_svg}
        </button>
      </div>
      <ContactContainer cards={tabContent} />
    </nav>
  );
}

export default TabBar;
