import React from "react";
import { FaSpinner } from "react-icons/fa";

export const Spinner: React.FC<{ size?: number }> = ({ size = 56 }) => (
  <FaSpinner size={size} className="spinnerStyle" />
);
