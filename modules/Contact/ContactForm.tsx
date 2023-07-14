import { FC } from 'react';
import { TextArea, TextInput, Button } from '@/components';

const ContactForm: FC = () => {
  return (
    <form className="w-full flex flex-col gap-4 p-4 xs:px-8 rounded-lg">
      <div className="grid md:grid-cols-2 gap-4 w-full">
        <TextInput label="Name" name="name" type="text" />
        <TextInput label="Email" name="email" type="email" />
      </div>
      <div className="grid md:grid-cols-2 gap-4 w-full">
        <TextInput label="Organization" name="organization" type="text" />
        <TextInput label="Subject" name="subject" />
      </div>
      <TextArea label="Message" name="message" type="text" />
      <Button
        className="w-fit m-auto px-20 shadow-md mt-4"
        variant="primary"
        type="submit"
      >
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
