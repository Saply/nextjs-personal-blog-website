"use client";
import React from "react";
import Script from "next/script";

const ThemeScript = () => {
  return (
    <Script strategy="beforeInteractive" id="dark-mode-script">
      {`
            document.documentElement.classList.toggle(
            'dark',
            localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
          )
            `}
    </Script>
  );
};

export default ThemeScript;
