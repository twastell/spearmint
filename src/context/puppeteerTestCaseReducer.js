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
  // typesFieldSelector: '',
  fieldSelector: '',
  // typesInput: '',
  input: '',
  // typesButtonSelector: '',
  buttonSelector: '',
  testSubject: '',
  matcher: '',
  expectedValue: '',
  formFields: [ {
    id: 0,
    formKey: '',
    formValue: '',   
  }],
  hasFormField: true,
  formFieldID: 1,
});


const createFormField = formFieldID => ({
  id: formFieldID++,
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

    case actionTypes.UPDATE_PUPPETEERFORM:
      console.log("inside update puppeteer form")
      puppeteerStatements = puppeteerStatements.map(statement => {
        console.log("statement = ", statement)
        console.log("action = ", action)
        if(statement.id === action.id) {
          statement[action.field] = action.value
        } 
        return statement; 
      })
      return {
        ...state,
        puppeteerStatements
      }

    case actionTypes.CREATE_NEW_PUPPETEER_TEST:
      return {
        puppeteerTestStatement: '',
        puppeteerStatements: [],
        hasPuppeteer: 0,
      };
    
    case actionTypes.ADD_FORM_FIELD:
      puppeteerStatements = puppeteerStatements.map(statement => {
        if(statement.id === action.id) {
          statement.formFields.push(createFormField(statement.formFieldID))
          statement.hasFormField = true;
        }
        statement.formFieldID++;
        return statement;
      });
      return {
        ...state,
        puppeteerStatements
      }

      case actionTypes.DELETE_FORM_FIELD:
        puppeteerStatements = puppeteerStatements.map(statement => {
          console.log('statement ID = ', statement.id)
          console.log('action ID = ', action.id)
          if (statement.id === action.id) {
            console.log("inside if statement.....")
            statement.formFields = statement.formFields.filter(option => option.id !== action.optionId);
            console.log(statement.formFields)
          }
  
          if(statement.formFields.length === 0) statement.hasFormField = false
          return statement;
        });
        return {
          ...state,
          puppeteerStatements,
        };


        case actionTypes.UPDATE_FORM_FIELD:
          console.log("inside update form field part of reducer")
          puppeteerStatements = puppeteerStatements.map(statement => {
            console.log("statement ID = ", statement.id)
            console.log("action ID = ", action.id)
            
            if (statement.id === action.id) {
              statement.formFields.map(option => {
                console.log("option before = ", option)
                console.log("action = ", action)
                if (option.id === action.optionId) {
                  option[action.field] = action.value
                }
                console.log("option after = ", option)
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
