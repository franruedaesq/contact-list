import React, { useEffect, useState } from 'react';
import 'views/Home/index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectTab } from 'redux/tab/tabSlice';
import TabBar from 'components/TabBar';
import { configJson } from 'configuration';
import { fetchData } from 'services/users';
import { getContacts } from 'redux/contacts/contactsSlice';
import { createContactList } from 'utils/format-data';
import ContactCard from 'components/ContactCard';

const Home = () => {
  const dispatch = useDispatch();
  const { contactList, contactSelected } = useSelector(
    (state) => state.contacts
  );
  const selectedTab = useSelector((state) => state.tab.selectedTab);

  const [activeTab, setActiveTab] = useState(selectedTab);
  const [content, setContent] = useState([]);
  const getData = async () => {
    const { results } = await fetchData();
    dispatch(getContacts(createContactList(results)));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    generateContent(contactList);
  }, [contactList, selectedTab, contactSelected]);

  const onClickTabItem = (tab) => {
    dispatch(selectTab(tab));
    setActiveTab(tab);
  };

  const generateContent = (list) => {
    const card = list[selectedTab]?.map((item, id) => (
      <ContactCard data={item} activeId={contactSelected} key={id} />
    ));
    setContent(card);
  };

  const setItemSubtitle = (letter) => {
    const quantity = contactList[letter]?.length
    return quantity
  }
  setItemSubtitle()
  const tabItemConfig = {
    itemTitle: configJson.tabs,
    itemSubtitle: setItemSubtitle
  }

  return (
    <div className='App'>
      <h4 className='app_title'>{configJson.title}</h4>
      <TabBar onClickTab={onClickTabItem} selectedTab={activeTab} tabItems={tabItemConfig} tabContent={content} />
    </div>
  );
};

export default Home;
