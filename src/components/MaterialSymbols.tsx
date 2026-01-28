"use client";

import React from "react";

export function MaterialSymbols() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400&display=swap"
        rel="stylesheet"
        media="print"
        onLoad={(e) => {
          e.currentTarget.media = "all";
        }}
      />
      <noscript>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400&display=swap"
          rel="stylesheet"
        />
      </noscript>
    </>
  );
}
