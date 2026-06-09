"use client";

import { useEffect, useState } from "react";

const WORDS = ["frontend", "backend", "mobile", "full-stack"];

/** Hero "typing" effect cycling the role words, before the static " developer". */
export function TypedRole() {
  const [text, setText] = useState("full-stack");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let wi = 0;
    let ci = 0;
    let deleting = false;
    let timer: number;

    const tick = () => {
      const word = WORDS[wi];
      setText(word.slice(0, ci));

      let delay = 90;
      if (!deleting && ci < word.length) {
        ci++;
      } else if (!deleting && ci === word.length) {
        deleting = true;
        delay = 1400;
      } else if (deleting && ci > 0) {
        ci--;
        delay = 45;
      } else {
        deleting = false;
        wi = (wi + 1) % WORDS.length;
        delay = 280;
      }
      timer = window.setTimeout(tick, delay);
    };

    tick();
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <span className="typed">{text}</span>
      <span className="tcursor" aria-hidden="true" />
    </>
  );
}
