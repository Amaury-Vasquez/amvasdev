import { useCallback, useRef } from 'react';

export function useDialog() {
  const ref = useRef<HTMLDialogElement>(null);

  const openDialog = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);

  const closeDialog = useCallback(() => {
    ref.current?.close();
  }, [ref]);

  return { ref, openDialog, closeDialog };
}
