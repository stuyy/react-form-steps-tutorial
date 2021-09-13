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

export const MobileForm = () => {
  const { fields, setStep, updateFields } = useFormStateContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { mobile: fields.mobile } });

  const goBack = () => {
    setStep(STEPS.EMAIL);
  };

  const onSubmit = (data) => {
    console.log(data);
    updateFields(FIELDS.MOBILE, data.mobile);
    setStep(STEPS.REVIEW);
  };

  const onError = (errors, event) => {
    console.log(errors);
    console.log(event);
  };

  return (
    <div className="base-form">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <InputContainer style={{ margin: '10px 0' }} error={errors.mobile}>
          <Flex alignItems="center" justifyContent="space-between">
            <InputLabel htmlFor="mobile" children="Mobile" />
            {errors.mobile && <InputError children={errors.mobile.message} />}
          </Flex>
          <InputField
            id="mobile"
            maxLength={10}
            {...register('mobile', {
              required: 'Mobile is required',
              pattern: {
                message: 'Invalid mobile number',
                value: /^\d{10}$/,
              },
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
