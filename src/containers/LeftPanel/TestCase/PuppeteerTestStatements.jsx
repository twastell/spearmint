import React from 'react';
import Form from '../Puppeteer/Form';

const PuppeteerTestStatements = function puppeteerTestStatements({ puppeteerStatements, dispatchToPuppeteerTestCase }) { 
    return puppeteerStatements.map((statement, i) => {
        switch (statement.type) {
          case 'puppeteerForm':
            return <Form 
              key={statement.id}
              form={statement}
              index={i}
              dispatchToPuppeteerTestCase={dispatchToPuppeteerTestCase}
            />
        default:
          return <></>;
        }
     });

};

export default PuppeteerTestStatements;