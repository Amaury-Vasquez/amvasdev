import { forwardRef, HTMLProps } from 'react';
import Label from './Label';

interface TextInputProps extends HTMLProps<HTMLInputElement> {
  label: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, ...props }, ref) => {
    return (
      <div className="flex flex-col text-left">
        <Label text={label} />
        <input className="input input-bordered" ref={ref} {...props} />
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;
export { default as TextArea } from './TextArea';
