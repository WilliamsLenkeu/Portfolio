import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div id="top" className="min-h-dvh bg-paper font-display text-ink">
      {/* Duotone cobalt : appliqué au portrait via .duotone-cobalt */}
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <filter id="duotone-cobalt" colorInterpolationFilters="sRGB">
          <feComponentTransfer>
            <feFuncR type="table" tableValues="0.082 1" />
            <feFuncG type="table" tableValues="0.2 1" />
            <feFuncB type="table" tableValues="0.851 1" />
          </feComponentTransfer>
        </filter>
        <filter id="duotone-cobalt-dark" colorInterpolationFilters="sRGB">
          <feComponentTransfer>
            <feFuncR type="table" tableValues="0.059 0.431" />
            <feFuncG type="table" tableValues="0.082 0.525" />
            <feFuncB type="table" tableValues="0.18 1" />
          </feComponentTransfer>
        </filter>
      </svg>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
