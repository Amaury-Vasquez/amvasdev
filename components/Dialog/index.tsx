import { forwardRef, HTMLProps, ReactNode } from 'react';

interface DialogProps extends HTMLProps<HTMLDialogElement> {
  children: ReactNode;
}

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ children, ...props }, ref) => (
    <dialog className="modal animate-fadeIn" ref={ref} {...props}>
      <form method="dialog" className="modal-box rounded-sm w-fit">
        {children}
      </form>
    </dialog>
  )
);

Dialog.displayName = 'Dialog';

export default Dialog;
