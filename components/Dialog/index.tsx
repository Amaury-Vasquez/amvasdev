import clsx, { ClassValue } from 'clsx';
import { forwardRef, HTMLProps, ReactNode } from 'react';

interface DialogProps extends Omit<HTMLProps<HTMLDialogElement>, 'className'> {
  children: ReactNode;
  className?: ClassValue;
  closeDialog?: () => void;
}

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ children, className, closeDialog = () => {}, ...props }, ref) => (
    <dialog className="modal animate-fade-in" ref={ref} {...props}>
      <form
        method="dialog"
        className={clsx('modal-box rounded-lg w-fit', className)}
      >
        {children}
      </form>
    </dialog>
  )
);

Dialog.displayName = 'Dialog';

export default Dialog;
