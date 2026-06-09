import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Next.js 16 renamed the "middleware" file convention to "proxy".
// next-intl's handler works unchanged here.
export default createMiddleware(routing);

export const config = {
  // Skip API, Next internals and any file with an extension.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
