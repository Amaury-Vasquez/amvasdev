import { useState } from 'react';

export default function useToggle(initialValue: boolean) {
  const [isActive, setValue] = useState(initialValue);

  function toggle() {
    setValue(!isActive);
  }

  function activate() {
    setValue(true);
  }

  function deactivate() {
    setValue(false);
  }

  return { isActive, toggle, activate, deactivate };
}
