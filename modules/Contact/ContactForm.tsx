import clsx from 'clsx';
import { FC, useEffect, useState, useRef } from 'react';
import { MdCheckCircleOutline, MdErrorOutline } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { TextArea, TextInput, Button, Dialog } from '@/components';
import { ContactFormValues } from '@/interfaces';

const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    getFieldState,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>();
  const ref = useRef<HTMLDialogElement>(null);
  const [submitted, setSubmitted] = useState<boolean | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmit = async (data: ContactFormValues) => {
    ref.current?.showModal();
    setIsSubmitting(true);
    try {
      await fetch('/api/send-email', {
        method: 'POST',
        body: JSON.stringify(data),
      }).then((res) => {
        setSubmitted(res.status === 201);
        reset();
      });
    } catch (error) {
      console.error(error);
      setSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  function getValidationState(field: keyof ContactFormValues) {
    const state = getFieldState(field);
    return state.isDirty && !state.invalid && !state.error;
  }

  function getErrorMessage(type: string) {
    if (type === 'required') return 'This field cannot be empty';
    if (type === 'pattern') return 'Please enter a valid format';
  }

  useEffect(() => {
    if (submitted !== undefined) {
      const timeOut = setTimeout(() => {
        setSubmitted(undefined);
        ref.current?.close();
      }, 3000);

      return () => clearTimeout(timeOut);
    }
  }, [submitted]);

  return (
    <>
      <form className="w-full flex flex-col gap-4 p-4 xs:px-8 rounded-lg">
        <div className="grid md:grid-cols-2 gap-4 w-full">
          <TextInput
            label="Name"
            type="text"
            placeholder="John Snow"
            {...register('name', { required: true })}
            error={errors.name && getErrorMessage(errors.name.type)}
            valid={getValidationState('name')}
          />
          <TextInput
            label="Email"
            type="email"
            placeholder="johnsnow@mail.com"
            {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
            error={errors.email && getErrorMessage(errors.email.type)}
            valid={getValidationState('email')}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4 w-full">
          <TextInput
            label="Organization"
            placeholder="House Stark"
            {...register('organization', { required: true })}
            error={
              errors.organization && getErrorMessage(errors.organization.type)
            }
            valid={getValidationState('organization')}
          />
          <TextInput
            label="Subject"
            placeholder="Winter is coming"
            {...register('subject', { required: true })}
            error={errors.subject && getErrorMessage(errors.subject.type)}
            valid={getValidationState('subject')}
          />
        </div>
        <TextArea
          label="Message"
          type="text"
          placeholder="The king in the north!"
          {...register('message', { required: true })}
          error={errors.message && getErrorMessage(errors.message.type)}
          valid={getValidationState('message')}
        />
        <Button
          className="w-fit m-auto px-20 shadow-md mt-4"
          variant="primary"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Send
        </Button>
      </form>
      {isSubmitting || submitted !== undefined ? (
        <Dialog open={true} ref={ref}>
          {isSubmitting ? (
            <div
              key="submitting"
              className="flex flex-col gap-4 items-center animate-fadeIn"
            >
              <h3 className="text-primary text-lg">
                Your email is being sent...
              </h3>
              <span className="loading loading-dots text-primary loading-lg animate-pulse" />
            </div>
          ) : (
            submitted !== undefined && (
              <div
                key="submitted"
                className="flex flex-col gap-4 items-center animate-fadeIn"
              >
                <h3
                  className={clsx(
                    'text-lg',
                    submitted ? 'text-success' : 'text-error'
                  )}
                >
                  {submitted
                    ? 'Your email has been sent successfully!'
                    : 'There was an error sending your email.'}
                </h3>
                {submitted ? (
                  <MdCheckCircleOutline className="text-success text-6xl duration-300" />
                ) : (
                  <MdErrorOutline className="text-error text-6xl duration-300" />
                )}
              </div>
            )
          )}
        </Dialog>
      ) : null}
    </>
  );
};

export default ContactForm;
