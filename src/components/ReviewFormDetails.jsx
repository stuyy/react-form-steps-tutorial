import { STEPS } from '../utils/constants';
import { useFormStateContext } from '../utils/hooks';
import {
  Button,
  Flex,
  InputContainer,
  InputLabel,
  InputFieldDetails,
} from '../utils/styles';

export const ReviewFormDetails = () => {
  const { setStep, fields } = useFormStateContext();
  const goBack = () => {
    setStep(STEPS.MOBILE);
  };

  const onSubmit = () => {
    // Call some API...
    try {
      
    } catch (err) {

    }
  };

  return (
    <div className="base-form">
      <InputContainer style={{ margin: '10px 0' }}>
        <Flex alignItems="center" justifyContent="space-between">
          <InputLabel children="First Name" />
        </Flex>
        <InputFieldDetails>{fields.contact.firstName}</InputFieldDetails>
      </InputContainer>
      <InputContainer style={{ margin: '10px 0' }}>
        <Flex alignItems="center" justifyContent="space-between">
          <InputLabel children="Last Name" />
        </Flex>
        <InputFieldDetails>{fields.contact.lastName}</InputFieldDetails>
      </InputContainer>
      <InputContainer style={{ margin: '10px 0' }}>
        <Flex alignItems="center" justifyContent="space-between">
          <InputLabel children="Email Address" />
        </Flex>
        <InputFieldDetails>{fields.email}</InputFieldDetails>
      </InputContainer>
      <InputContainer style={{ margin: '10px 0' }}>
        <Flex alignItems="center" justifyContent="space-between">
          <InputLabel children="Mobile Number" />
        </Flex>
        <InputFieldDetails>{fields.mobile}</InputFieldDetails>
      </InputContainer>
      <Flex justifyContent="flex-end">
        <Button
          type="button"
          children="Back"
          secondary
          style={{ margin: '0 10px' }}
          onClick={goBack}
        />
        <Button children="Next" onClick={onSubmit} />
      </Flex>
    </div>
  );
};
