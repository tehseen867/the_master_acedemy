"use client";
import React from "react";
// import { SparklesCore } from "./ui/sparkles";

export function LongSpark() {
  return (
    <div className="hidden sm:flex flex-col h-[2px] w-full bg-black items-center justify-center overflow-hidden rounded-md">
     
      <div className="w-[60rem]  relative">
        {/* Gradients */}
        <div className="absolute inset-x-20  bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/3 blur-sm" />
        <div className="absolute inset-x-20  bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/3" />
        <div className="absolute inset-x-60  bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/2 blur-sm" />
        <div className="absolute inset-x-60  bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

      </div>
    </div>
  );
}