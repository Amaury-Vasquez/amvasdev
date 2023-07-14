import { FC } from 'react';
import ContactForm from './ContactForm';

const Contact: FC = () => {
  return (
    <main className="flex flex-col min-h-content items-center justify-start w-full py-10 gap-8 text-center">
      <h1 className="font-bold text-3xl">Reach out to me</h1>
      <div className="flex flex-col max-w-screen xs:max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl gap-8 md:gap-6">
        <article className="flex flex-col gap-4 w-full h-full justify-center items-center text-left sm:px-16 px-4 xs:px-8">
          <p>
            I am currently open to new opportunities, if you are interested in
            working with me, please send me an email or contact me through my
            social networks.
          </p>
        </article>
        <ContactForm />
      </div>
    </main>
  );
};

export default Contact;
