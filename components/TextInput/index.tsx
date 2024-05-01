import clsx from 'clsx';
import { forwardRef, HTMLProps } from 'react';
import ErrorMessage from './ErrorMessage';
import Label from './Label';

interface TextInputProps extends HTMLProps<HTMLInputElement> {
  label: string;
  error?: string;
  valid?: boolean;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, valid, ...props }, ref) => (
    <div className="flex flex-col text-left">
      <Label text={label} />
      <input
        className={clsx(
          'input input-bordered',
          error && 'input-error',
          valid && 'input-success'
        )}
        ref={ref}
        {...props}
      />
      {error && <ErrorMessage text={error} />}
    </div>
  )
);

TextInput.displayName = 'TextInput';

export default TextInput;
export { default as TextArea } from './TextArea';
