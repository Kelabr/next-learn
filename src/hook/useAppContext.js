'use client'

import { useContext } from "react";
import AppContext from "@/context/AppContext";

export default function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within a AppContext.Provider");
  }

  return context;
}