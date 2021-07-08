import React, { useState, useRef } from 'react';
import './index.scss';
import Tab from './Tab';
import { useDispatch, useSelector } from 'react-redux';
import { selectTab } from 'redux/tab/tabSlice';
import ContactContainer from 'components/ContactContainer';
import { arrow_left_svg, arrow_right_svg } from 'assets/icons';

export default function TabBar({ children }) {
  const dispatch = useDispatch();
  const navTab = useRef(null);
  const selectedTab = useSelector((state) => state.tab.selectedTab);

  const [activeTab, setActiveTab] = useState(selectedTab);

  const onClickTabItem = (tab) => {
    dispatch(selectTab(tab));
    setActiveTab(tab);
  };

  const scroll = (scrollOffset) => {
    navTab.current.scrollLeft += scrollOffset;
  };

  return (
    <nav className='tab-list__nav'>
      <div className='tab-list__container'>
        <button
          className='tab-list__arrow-button tab-list__arrow-button--left'
          onClick={() => scroll(-40)}
        >
          {arrow_left_svg}
        </button>
        <ol className='tab-list' ref={navTab}>
          {children.map((child, index) => {
            const { label, quantity } = child.props;
            return (
              <Tab
                activeTab={activeTab}
                key={index}
                label={label}
                onClick={onClickTabItem}
                quantity={quantity}
              />
            );
          })}
        </ol>
        <button
          className='tab-list__arrow-button tab-list__arrow-button--right'
          onClick={() => scroll(40)}
        >
          {arrow_right_svg}
        </button>
      </div>
      <ContactContainer>
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </ContactContainer>
    </nav>
  );
}
