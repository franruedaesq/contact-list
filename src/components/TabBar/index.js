import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab';

export default function TabBar({ children }) {
  const [activeTab, setActiveTab] = useState('');

  const onClickTabItem = (tab) => {
    console.log(tab);
    setActiveTab(tab);
  };

  return (
    <div className='tabs'>
      <ol className='tab-list'>
        {children.map((child, index) => {
          const { label } = child.props;

          return (
            <Tab
              activeTab={activeTab}
              key={index}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </ol>
      <div className='tab-content'>
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
}
