"use client";

import { CheckCircle, Copy } from "@phosphor-icons/react";
import React, { useState } from "react";

const ButtonCopy = ({ data }: { data: string }) => {
  const [copy, setCopy] = useState(false);

  const handleCopy = (data: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(data).catch(() => {
        const textArea = document.createElement("textarea");
        textArea.value = data;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand("copy");
        } catch (err) {
          console.error("Fallback: Oops, unable to copy", err);
        }
        document.body.removeChild(textArea);
      });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = data;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
      } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
      }
      document.body.removeChild(textArea);
    }
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => handleCopy(data)}
        aria-label="copy to clipboard"
        title="copy to clipboard"
      >
        {copy ? (
          <span className="flex items-center gap-2 text-xs font-bold">
            <CheckCircle
              size={20}
              weight="fill"
              className="flex-shrink-0 text-succeses"
            />
            Copied!!
          </span>
        ) : (
          <Copy size={20} className="flex-shrink-0" />
        )}
      </button>
    </div>
  );
};

export default ButtonCopy;
