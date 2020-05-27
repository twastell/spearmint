import React from "react";
import {
    addFormField,
    deleteFormField,
    updateFormField,
  } from '../../../context/puppeteerTestCaseActions';
import styles from '../ActionCreator/ActionCreator.module.scss';
const minusIcon = require('../../../assets/images/minus-box-outline.png');

const FormField = ({props, form, dispatchToPuppeteerTestCase}) => {
    const handleClickDeleteField = e => {
        console.log(form)
        dispatchToPuppeteerTestCase(deleteFormField(form.id, Number(e.target.id)));
      }
    return(
        <div id={styles.actionFlexBox}>
            <div id={styles.actions}>
                <label htmlFor='fieldSelector'>Field Selector</label>
                <input
                    type='text'
                    id='fieldSelector'
                    onChange={e => props.handleChangeFormFields(e, 'fieldSelector')}
                    placeholder='field ID'
                />
            </div>
            <div id={styles.actions}>

                <label htmlFor='input'>Input</label>
                <input
                    type='text'
                    id='input'
                    onChange={e => props.handleChangeFormFields(e,'input')}
                    placeholder='test input'
                />
            </div>
            <div id={styles.actions}>

                {/* <button id={formField.id} onClick={handleClickDeleteField}>Delete</button> */}
                {/* <img src={minusIcon} alt='delete' id={} onClick={handleClickDeleteField} /> */}
            </div>
        </div>
    )
}

export default FormField; 