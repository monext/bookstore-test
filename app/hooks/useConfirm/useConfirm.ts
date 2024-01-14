import { useCallback, useRef, useState } from 'react';

type ResolveFn = (_result: boolean) => void;

/**
 * Hook for more convenient usage confirm dialogs.
 * It's possible to use confirm dialogs as async function call:
 * if (await confirmAsync()) {...} else {...}
 * */
export default function useConfirm() {
  const [openConfirm, setOpenConfirm] = useState(false);
  const resolveRef = useRef<ResolveFn>();
  const confirmAsync = useCallback(
    () =>
      new Promise<boolean>((resolve) => {
        setOpenConfirm(true);
        resolveRef.current = resolve;
      }),
    []
  );
  const closeConfirm = useCallback((result: boolean) => {
    setOpenConfirm(false);
    resolveRef.current?.(result);
  }, []);

  return {
    openConfirm,
    confirmAsync,
    closeConfirm,
  };
}
