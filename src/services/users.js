import { configJson } from 'configuration';

export const fetchData = async () => {
  try {
    const resp = await fetch(
      `${configJson.userUrl}?results=${configJson.numberCards}`
    );
    const data = await resp.json();
    return data;
  } catch (error) {
      console.log(error)
  }
};
