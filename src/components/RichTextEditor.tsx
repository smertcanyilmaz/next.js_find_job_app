"use client";

import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";
import { Editor, EditorProps } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default forwardRef<Object, EditorProps>(
  function RichTextEditor(props, ref) {
    return (
      <Editor
        editorClassName={cn(
          "border rounded-md px-3 min-h-[150px] cursor-text ring-offset-backgorund focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within: ring-offset-2",
          props.editorClassName,
        )}
        toolbar={{
          options: ["inline", "list", "link", "history"],
          inline: { options: ["bold", "italic", "underline"] },
        }}
        {...props}
      />
    );
  },
);
