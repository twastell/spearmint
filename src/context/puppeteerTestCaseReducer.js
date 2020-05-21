import { createContext } from 'react';
import { actionTypes } from './puppeteerTestCaseActions';

export const PuppeteerTestCaseContext = createContext(null);

export const puppeteerTestCaseState = {
  puppeteerTestStatement: '',
  puppeteerStatements: [],
  hasPuppeteer: 0,
};

let statementId = 0;

const createPuppeteerForm = () => ({
  id: statementId++,
  type: 'puppeteerForm',
  typesFieldSelector: '',
  typesInput: '',
  typesButtonSelector: '',
  formFields: [ {
    formKey: '',
    formValue: '',   
  }],
  hasFormField: false,
});


const createFormField = () => ({
// field selector ID
// input
  formKey: '',
  formValue: '',   
});

export const puppeteerTestCaseReducer = (state, action) => {
  Object.freeze(state);
  let puppeteerStatements = [...state.puppeteerStatements];

  switch (action.type) {
    case actionTypes.TOGGLE_PUPPETEER:
      return {
        ...state,
        hasPuppeteer: state.hasPuppeteer + 1,
      };

    case actionTypes.ADD_PUPPETEERFORM:
      puppeteerStatements.push(createPuppeteerForm());
      return {
        ...state,
        puppeteerStatements,
      };
    case actionTypes.DELETE_PUPPETEERFORM:
      puppeteerStatements = puppeteerStatements.filter(statement => statement.id !== action.id);
      return {
        ...state,
        puppeteerStatements,
      };

    case actionTypes.CREATE_NEW_PUPPETEER_TEST:
      return {
        puppeteerTestStatement: '',
        puppeteerStatements: [],
        hasPuppeteer: 0,
      };
    
    case actionTypes.ADD_FORM_FIELD:
      puppeteerStatements = puppeteerStatements.map(statement => {
        if(statement.id === action.id) {
          statement.formFields.push(createFormField())
          statement.hasFormField = true;
        }
        return statement
      });
      return {
        ...state,
        puppeteerStatements
      }

      case actionTypes.DELETE_FORM_FIELD:
        puppeteerStatements = puppeteerStatements.map(statement => {
          if (statement.id === action.id) {
            statement.formFields = statement.formFields.filter(option => option.id !== action.optionId);
          }
  
          if(statement.formFields.length === 0) statement.hasFormField = false
          return statement;
        });
        return {
          ...state,
          puppeteerStatements,
        };


        case actionTypes.UPDATE_FORM_FIELD:
          puppeteerStatements = puppeteerStatements.map(statement => {
            if (statement.id === action.id) {
              statement.formFields.map(option => {
                if (option.id === action.optionId) {
                  option[action.field] = action.value
                }
                return option
              })
            }
            return statement
          })
          return {
            ...state,
            puppeteerStatements
          }

    default:
      return state;
  }
};
