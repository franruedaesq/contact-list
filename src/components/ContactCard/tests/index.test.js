import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import ContactCard from '../index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { hideActiveId, props, showActiveId } from './helper';

describe('test', () => {
  const initialState = {
    contactList: {},
    contactSelected: '',
  };
  const mockStore = configureStore();
  let store;
  store = mockStore(initialState);

  it('should match snapshot', () => {
    const { data, index } = props;
    const activeId = showActiveId;

    const component = render(
      <Provider store={store}>
        <ContactCard data={data} activeId={activeId} key={index} />
      </Provider>
    );
    const { asFragment } = component;
    expect(asFragment(component)).toMatchSnapshot();
  });
  it('should render a component, component should not be null', () => {
    const { data, index } = props;
    const activeId = showActiveId;

    const component = render(
      <Provider store={store}>
        <ContactCard data={data} activeId={activeId} key={index} />
      </Provider>
    );
    expect(component).not.toBeNull();
  });
  it('should be hide', () => {
    const { data, index } = props;
    const activeId = hideActiveId;
    const component = render(
      <Provider store={store}>
        <ContactCard data={data} activeId={activeId} key={index} />
      </Provider>
    );
    const card = component.getByTestId('contactCard_container');
    expect(card).toHaveClass('contactCard--hide');
  });
  it('should be show', () => {
    const { data, index } = props;
    const activeId = showActiveId;
    const component = render(
      <Provider store={store}>
        <ContactCard data={data} activeId={activeId} key={index} />
      </Provider>
    );
    const card = component.getByTestId('contactCard_container');
    expect(card).toHaveClass('contactCard--show');
  });
  it('should hide data when close button is clicked', () => {
    const { data, index } = props;
    const activeId = showActiveId;
    const component = render(
      <Provider store={store}>
        <ContactCard data={data} activeId={activeId} key={index} />
      </Provider>
    );
    const closeButton = component.getByTestId('contactCard_close');
    fireEvent.click(closeButton);
    const card = component.getByTestId('contactCard_container');
    expect(card).toHaveClass('contactCard--hide');
  });
  it('should show data when the card is clicked', () => {
    const { data, index } = props;
    const activeId = hideActiveId;
    const component = render(
      <Provider store={store}>
        <ContactCard data={data} activeId={activeId} key={index} />
      </Provider>
    );
    const card = component.getByTestId('contactCard_container');
    fireEvent.click(card);
    expect(card).toHaveClass('contactCard--show');
  });
});
