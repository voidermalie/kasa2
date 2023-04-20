import logements from './logements.json';

export const fetchLogements = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(logements);
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
};