import { useForm } from 'react-hook-form';
import { FIELDS, STEPS } from '../utils/constants';
import { useFormStateContext } from '../utils/hooks';
import {
  InputField,
  InputError,
  InputContainer,
  InputLabel,
  Flex,
  Button,
} from '../utils/styles';

export const EmailForm = () => {
  const { fields, setStep, updateFields } = useFormStateContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: fields.email } });

  const goBack = () => {
    setStep(STEPS.CONTACT);
  };

  const onSubmit = (data) => {
    console.log(data);
    updateFields(FIELDS.EMAIL, data.email);
    setStep(STEPS.MOBILE);
  };

  const onError = (errors, event) => {
    console.log(errors);
    console.log(event);
  };

  return (
    <div className="base-form">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <InputContainer style={{ margin: '10px 0' }} error={errors.email}>
          <Flex alignItems="center" justifyContent="space-between">
            <InputLabel htmlFor="email" children="Email" />
            {errors.email && <InputError children={errors.email.message} />}
          </Flex>
          <InputField
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
            })}
          />
        </InputContainer>
        <Flex justifyContent="flex-end">
          <Button
            type="button"
            children="Back"
            secondary
            style={{ margin: '0 10px' }}
            onClick={goBack}
          />
          <Button children="Next" />
        </Flex>
      </form>
    </div>
  );
};
