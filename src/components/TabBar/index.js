import React, { useState } from 'react';
import './index.scss';
import Tab from './Tab';
import { useDispatch, useSelector } from 'react-redux';
import { selectTab } from 'redux/tab/tabSlice';
import ContactContainer from 'components/ContactContainer';

export default function TabBar({ children }) {
  const dispatch = useDispatch();
  const selectedTab = useSelector((state) => state.tab.selectedTab);

  const [activeTab, setActiveTab] = useState(selectedTab);

  const onClickTabItem = (tab) => {
    dispatch(selectTab(tab));
    setActiveTab(tab);
  };
  return (
    <nav className='tabs'>
      <div className='tab-list__container'>
        <ol className='tab-list'>
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
