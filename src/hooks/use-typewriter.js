import { useEffect, useRef, useState } from "react";

const TYPE_SPEED_MS = 50;
const DELETE_SPEED_MS = 50;
const HOLD_BEFORE_DELETE_MS = 2500;
const INITIAL_HOLD_BEFORE_DELETE_MS = 1500;
const PAUSE_AFTER_DELETE_MS = 200;

// `textArray` is expected to be a stable reference (e.g. defined outside the
// component or memoized) — the animation loop starts once on mount and is
// not restarted if the array identity changes.
export function useTypewriter(textArray) {
  const [currentText, setCurrentText] = useState(textArray[0] ?? "");
  const timeoutRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    let textIdx = 0;

    function delay(ms) {
      return new Promise((resolve) => {
        timeoutRef.current = window.setTimeout(resolve, ms);
      });
    }

    async function typeText(text) {
      for (const char of text) {
        if (cancelled) return;
        setCurrentText((prevText) => prevText + char);
        await delay(TYPE_SPEED_MS);
      }
    }

    async function deleteText(text) {
      for (let i = 0; i < text.length; i++) {
        if (cancelled) return;
        setCurrentText((prevText) => prevText.slice(0, -1));
        await delay(DELETE_SPEED_MS);
      }
    }

    async function run() {
      // The first textArray item is already shown via initial state, so just hold
      // it on screen before deleting instead of retyping it.
      await delay(INITIAL_HOLD_BEFORE_DELETE_MS + HOLD_BEFORE_DELETE_MS);
      if (cancelled) return;
      await deleteText(textArray[textIdx]);
      if (cancelled) return;
      await delay(PAUSE_AFTER_DELETE_MS);

      while (!cancelled) {
        textIdx = (textIdx + 1) % textArray.length;
        await typeText(textArray[textIdx]);
        if (cancelled) return;
        await delay(HOLD_BEFORE_DELETE_MS);
        if (cancelled) return;
        await deleteText(textArray[textIdx]);
        if (cancelled) return;
        await delay(PAUSE_AFTER_DELETE_MS);
      }
    }

    run();

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutRef.current);
    };

    // Intentionally run once: `textArray` is assumed stable for the lifetime
    // of the component using this hook.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return currentText;
}
