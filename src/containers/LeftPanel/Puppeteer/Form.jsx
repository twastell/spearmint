import React, { useContext } from 'react';
import styles from '../ActionCreator/ActionCreator.module.scss';
// import styles from 
import { GlobalContext } from '../../../context/globalReducer';
import {
  createNewPuppeteerTest,
  addPuppeteerForm,
  deletePuppeteerForm,
  updatePuppeteerForm,
  addFormField,
  deleteFormField,
  updateFormField,
} from '../../../context/puppeteerTestCaseActions';
import { Draggable } from 'react-beautiful-dnd';
import SearchInput from '../SearchInput/SearchInput';
import FormField from './FormField.jsx';
const closeIcon = require('../../../assets/images/close.png');
const dragIcon = require('../../../assets/images/drag-vertical.png');
const minusIcon = require('../../../assets/images/minus-box-outline.png');


const Form = ({ form, index, dispatchToPuppeteerTestCase }) => {
  const [{ filePathMap }, _] = useContext(GlobalContext);
  const handleChangeFormFields = (e, field) => {
    console.log("e.target.value = ", e.target.value)
    console.log("form.id = ", form.id)
    console.log("field = ", field)
    // need to pass action (update)
    dispatchToPuppeteerTestCase(updatePuppeteerForm(form.id, field, e.target.value));
    // let updatedForm = { ...form };
    // updatedForm[field] = e.target.value;
    // console.log("made it here")
    // dispatchToPuppeteerTestCase(updatePuppeteerForm(updatedForm));
  };


  const handleClickDeleteForm = e => {
    dispatchToPuppeteerTestCase(deletePuppeteerForm(form.id));
  }

  const handleAddPuppeteerForm = e => {
    dispatchToPuppeteerTestCase(addPuppeteerForm());
  };

  const handleClickAddFormField = e => {
    dispatchToPuppeteerTestCase(addFormField(Number(e.target.id)))
  }


  const formFieldJSX = form.formFields.map(option => {
    const handleClickDeleteField = e => {
        console.log(form)
        dispatchToPuppeteerTestCase(deleteFormField(form.id, Number(e.target.id)));
      }

      const handleChangeUpdateFormField = (e, field, optionId) => {
        console.log("before update form field")
        dispatchToPuppeteerTestCase(updateFormField(form.id, field, e.target.value, optionId ))
      };
    return(
        <div id={styles.actionFlexBox}>
            <div id={styles.actions} key={option.id}>
                <label htmlFor='fieldSelector'>Field Selector</label>
                <input
                    type='text'
                    // key={`key${option.id}`} 
                    // id={`key${option.id}`} 
                    // id='fieldSelector'
                    // onChange={e => handleChangeFormFields(e, 'fieldSelector')}
                    onChange={e => handleChangeUpdateFormField(e, 'formKey', option.id)} 
                    placeholder='field ID'
                />
            </div>
            <div id={styles.actions}>

                <label htmlFor='input'>Input</label>
                <input
                    type='text'
                    key={`key${option.id}`} 
                    id={`key${option.id}`} 
                    onChange={e => handleChangeUpdateFormField(e, 'formValue', option.id)} 

                    // id='input'
                    // onChange={e => handleChangeFormFields(e,'input')}
                    placeholder='test input'
                />
            </div>
            <div id={styles.actions}>

                {/* <button id={formField.id} onClick={handleClickDeleteField}>Delete</button> */}
                <img src={minusIcon} alt='delete' id={option.id} onClick={handleClickDeleteField} />
            </div>
        </div>
    );
  });




  // const formFieldsArray = [];

  // form.formFields.forEach(field => {
  //   formFieldsArray.push(
  //     <FormField
  //       // styles={styles}
  //       handleChangeFormFields={handleChangeFormFields}
  //       form={form}
  //       dispatchToPuppeteerTestCase={dispatchToPuppeteerTestCase}
  //     />
  //   )
  // })



  return (
    <div>
      <img
        src={closeIcon}
        id={styles.close}
        alt='close'
        onClick={handleClickDeleteForm}
      />
      {/* <FormField
        styles={styles}
        handleChangeFormFields={handleChangeFormFields}
      /> */}
      {/* <div>{formFieldsArray}</div> */}
      <div>{formFieldJSX}</div>
      <div>
        <button id={form.id} onClick={handleClickAddFormField}>+ Add Field</button>
      </div>
      <div id={styles.actions}>
        <label htmlFor='buttonSelector'>Button Selector</label>
        <input
          type='text'
          // id='buttonSelector'
          name='buttonSelector'
          onChange={e => handleChangeFormFields(e, 'buttonSelector')}
          placeholder='button ID'
        />
      </div>
      <div id={styles.actionFlexBox}>
        <div id={styles.actions}>
          <label htmlFor="testSubject">Test Subject</label>
          <input
            type='text'
            id="testSubject"
            onChange={e => handleChangeFormFields(e, 'testSubject')}
            placeholder=''
          />
        </div>
        <div id={styles.actions}>
          <label htmlFor='matcher'>Matcher</label>
          <select
            id='matcher'
            onChange={e => handleChangeFormFields(e, 'matcher')}
          >
            <option value='' />
            <option value="toHaveTextContent">toHaveTextContent</option>
            <option value="toBeInTheDocument">toBeInTheDocument</option>
            <option value="toContainHTML">toContainHTML</option>
            <option value="toContainElement">toContainElement</option>
            <option value="toHaveAttribute">toHaveAttribute</option>
            <option value="toHaveClass">toHaveClass</option>
          </select>
        </div>
        <div id={styles.actions}>
          <label htmlFor="expectedValue">Expected Value</label>
          <input
            type='text'
            id="expectedValue"
            onChange={e => handleChangeFormFields(e, 'expectedValue')}
            placeholder='e.g. 200'
          />
        </div>
      </div>


    </div>

  );
  // return (
  //    <Draggable draggableId={Form.id.toString()} index={index}>
  //       {provided => (
  //         <div
  //           ref={provided.innerRef}
  //           {...provided.draggableProps}
  //           {...provided.dragHandleProps}
  //           id={styles.form}
  //         >
  //           <img
  //             src={closeIcon}
  //             id={styles.close}
  //             alt='close'
  //             onClick={handleClickDeleteForm}
  //           />
  //           <div id={styles.actionCreatorHeader}>
  //             <img src={dragIcon} alt='drag' />
  //             <h3>Form</h3>
  //           </div>

  //         </div>
  //       )}
  //     </Draggable>
  // );





};

export default Form; 