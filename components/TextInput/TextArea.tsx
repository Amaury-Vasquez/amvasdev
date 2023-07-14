import { forwardRef, HTMLProps } from 'react';
import Label from './Label';

interface TextAreaProps extends HTMLProps<HTMLTextAreaElement> {
  label: string;
  placeholder?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <Label text={label} />
        <textarea className="textarea textarea-bordered" ref={ref} {...props} />
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
