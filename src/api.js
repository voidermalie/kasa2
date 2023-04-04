import logements from './logements.json';

export const fetchLogements = () => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(logements)
            }, 1000);
        } catch (error) {
            reject(error);
        }
    });
};

/* real API:
export const fetchLogements = () => {
  return new Promise((resolve, reject) => {
    fetch('https://example.com/api/logements')
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
};
*/