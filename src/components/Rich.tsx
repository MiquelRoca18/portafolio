import { Fragment } from "react";

/**
 * Renders a limited, safe subset of inline markup from message strings:
 *   **bold**  -> <strong>
 *   `code`    -> <code class="code">
 * No raw HTML is interpreted, so it is injection-safe.
 */
export function Rich({ text }: { text: string }) {
  const tokens = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return (
    <>
      {tokens.map((tok, i) => {
        if (tok.startsWith("**") && tok.endsWith("**")) {
          return <strong key={i}>{tok.slice(2, -2)}</strong>;
        }
        if (tok.startsWith("`") && tok.endsWith("`")) {
          return (
            <code key={i} className="code">
              {tok.slice(1, -1)}
            </code>
          );
        }
        return <Fragment key={i}>{tok}</Fragment>;
      })}
    </>
  );
}
