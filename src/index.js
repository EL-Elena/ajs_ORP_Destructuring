export default function attack({ special }) {
  const arr = special;

  arr.forEach((prop) => {
    if (prop.description === undefined) {
      // eslint-disable-next-line no-param-reassign
      prop.description = 'Описание недоступно';
    }
  });
  return arr;
}
