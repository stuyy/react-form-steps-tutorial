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

export const ContactForm = () => {
  const { fields, setStep, updateFields } = useFormStateContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...fields.contact,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    updateFields(FIELDS.CONTACT, data);
    setStep(STEPS.EMAIL);
  };

  const onError = (errors, event) => {
    console.log(errors);
    console.log(event);
  };

  return (
    <div className="base-form">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <InputContainer style={{ margin: '10px 0' }} error={errors.firstName}>
          <Flex alignItems="center" justifyContent="space-between">
            <InputLabel htmlFor="firstName" children="First Name" />
            {errors.firstName && (
              <InputError children={errors.firstName.message} />
            )}
          </Flex>
          <InputField
            id="firstName"
            {...register('firstName', {
              required: 'First name required',
            })}
          />
        </InputContainer>
        <InputContainer style={{ margin: '10px 0' }} error={errors.lastName}>
          <Flex alignItems="center" justifyContent="space-between">
            <InputLabel htmlFor="lastName" children="Last Name" />
            {errors.lastName && (
              <InputError children={errors.lastName.message} />
            )}
          </Flex>
          <InputField
            id="lastName"
            {...register('lastName', {
              required: 'Last name required',
            })}
          />
        </InputContainer>
        <Flex justifyContent="flex-end">
          <Button children="Next" />
        </Flex>
      </form>
    </div>
  );
};
