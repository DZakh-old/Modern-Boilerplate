const elementsAndTheirIdsFromTemplate = {
  page: 'page',
  app: 'app',
  // Add elements for js here
};

export const elements = Object.entries(elementsAndTheirIdsFromTemplate).reduce(
  (acc, [name, id]) => ({
    ...acc,
    [name]: document.getElementById(id),
  }),
  {}
);
