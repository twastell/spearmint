export const actionTypes = {
  TOGGLE_PUPPETEER: 'TOGGLE_PUPPETEER',
  CREATE_NEW_PUPPETEER_TEST: 'CREATE_NEW_PUPPETEER_TEST',
  ADD_PUPPETEERFORM: 'ADD_PUPPETEERFORM',
  DELETE_PUPPETEERFORM: 'DELETE_PUPPETEERFORM',
  UPDATE_PUPPETEERFORM: 'UPDATE_PUPPETEERFORM',
  ADD_FORM_FIELD: 'ADD_FORM_FIELD',
  DELETE_FORM_FIELD: 'DELETE_FORM_FIELD',
  UPDATE_FORM_FIELD: 'UPDATE_FORM_FIELD',

};

export const togglePuppeteer = () => ({
  type: actionTypes.TOGGLE_PUPPETEER,
});

export const createNewPuppeteerTest = () => ({
  type: actionTypes.CREATE_NEW_PUPPETEER_TEST,
});

export const addPuppeteerForm = () => ({
  type: actionTypes.ADD_PUPPETEERFORM,
});

export const deletePuppeteerForm = id => ({
  type: actionTypes.DELETE_PUPPETEERFORM,
  id,
});

export const updatePuppeteerForm = (id, field, value) => ({
  type: actionTypes.UPDATE_PUPPETEERFORM,
  id,
  field,
  value,
  // fieldSelector,
  // buttonSelector,
});

export const addFormField = id => ({
  type: actionTypes.ADD_FORM_FIELD,
  id,
});

export const deleteFormField = (id, optionId) => ({
  type: actionTypes.DELETE_FORM_FIELD,
  id,
  optionId,
})

export const updateFormField = (id, field, value, optionId) => ({
  type: actionTypes.UPDATE_FORM_FIELD,
  id,
  field,
  value,
  optionId,
})


