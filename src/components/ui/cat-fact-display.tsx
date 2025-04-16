import React from "react";
export interface CatFactDisplayProps {
  fact: string;
  isLoading: boolean;
}

const CatFactDisplay: React.FC<CatFactDisplayProps> = ({ fact, isLoading }) => (
  <div className="text-indigo-500 italic">
    <p className="font-medium">Random cat fact:</p>
    {isLoading ? (
      <p className="mt-2 text-gray-500">Loading cat fact...</p>
    ) : (
      <p className="mt-2">{fact}</p>
    )}
  </div>
);

export default CatFactDisplay;
