import { useState } from 'react';
import { Progress } from './components/Progress';
import { defaultFields, STEPS } from './utils/constants';
import { FormFieldsContext } from './utils/contexts/FormFieldsContext';
import { FormStepContext } from './utils/contexts/FormStepContext';
import { getCurrentForm } from './utils/helpers';
import { ApplicationRootStyles } from './utils/styles';

function App() {
  const [step, setStep] = useState(STEPS.CONTACT);
  const [fields, setFields] = useState(defaultFields);

  const updateFields = (field, value) => {
    const newFields = { ...fields };
    newFields[field] = value;
    setFields(newFields);
  };

  return (
    <FormStepContext.Provider value={{ step, setStep }}>
      <FormFieldsContext.Provider value={{ fields, updateFields }}>
        <ApplicationRootStyles>
          <div>{getCurrentForm(step)}</div>
        </ApplicationRootStyles>
      </FormFieldsContext.Provider>
    </FormStepContext.Provider>
  );
}

export default App;
