import React, { useEffect, useState } from 'react';
import 'App.scss';
import { useDispatch, useSelector } from 'react-redux';
import TabBar from 'components/TabBar';
import { configJson } from 'configuration';
import { fetchData } from 'services/users';
import { getContacts } from 'redux/contacts/contactsSlice';
import { createContactList } from 'utils/format-data';
import ContactCard from 'components/ContactCard';

function App() {
  const dispatch = useDispatch();
  const { contactList, contactSelected } = useSelector(
    (state) => state.contacts
  );
  const selectedTab = useSelector((state) => state.tab.selectedTab);
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

  const generateContent = (list) => {
    const card = list[selectedTab]?.map((item, id) => (
      <ContactCard data={item} activeId={contactSelected} key={id} />
    ));
    setContent(card);
  };
  return (
    <div className='App'>
      <h4 className='app_title'>{configJson.title}</h4>
      <TabBar>
        {configJson.tabs.map((letter) => (
          <div label={letter} quantity={contactList[letter]?.length}>
            {content ? content : '...'}
          </div>
        ))}
      </TabBar>
    </div>
  );
}

export default App;
