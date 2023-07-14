import clsx from 'clsx';
import { forwardRef, HTMLProps } from 'react';
import ErrorMessage from './ErrorMessage';
import Label from './Label';

interface TextAreaProps extends HTMLProps<HTMLTextAreaElement> {
  label: string;
  placeholder?: string;
  valid?: boolean;
  error?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, valid, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <Label text={label} />
        <textarea
          className={clsx(
            'textarea textarea-bordered',
            error && 'textarea-error',
            valid && 'textarea-success'
          )}
          ref={ref}
          {...props}
        />
        {error && <ErrorMessage text={error} />}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
