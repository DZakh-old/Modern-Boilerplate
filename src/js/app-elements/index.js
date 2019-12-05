const elementsAndThereIdsFromTemplate = {
  app: 'app'
};

export default Object.fromEntries(
  Object.entries(elementsAndThereIdsFromTemplate).map(([name, id]) => [
    name,
    document.getElementById(id)
  ])
);
