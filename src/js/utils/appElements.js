const elementsAndTheirIdsFromTemplate = {
  app: 'app'
  // Add elements for js here
};

export const elements = Object.fromEntries(
  Object.entries(elementsAndTheirIdsFromTemplate).map(([name, id]) => [
    name,
    document.getElementById(id)
  ])
);
