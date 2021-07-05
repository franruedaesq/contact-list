import { configJson } from '../configuration';

export const createContactList = (array = []) => {
  const agenda = {};
  configJson.tabs.forEach((letter) => (agenda[letter] = []));

  const list = formatUserData(array);
  list.forEach((item) => {
    agenda[item.lastName[0].toLowerCase()]?.push(item);
  });
  return agenda;
};

export const formatUserData = (array = []) =>
  array.map((item) => ({
    email: item.email,
    phone: item.phone,
    street: item.location.street.name,
    streetNumber: item.location.street.number,
    city: item.location.city,
    state: item.location.state,
    postCode: item.location.postcode,
    name: item.name.first,
    lastName: item.name.last,
    id: item.login.uuid,
    letter: item.name.last[0].toLowerCase(),
    img: item.picture.large,
  }));
