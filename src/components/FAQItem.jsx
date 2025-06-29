import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-[hsl(220,100%,94%)]  w-[85vw] rounded-xl p-5 cursor-pointer transition-all duration-300"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">{question}</div>
        <div>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 " />
          ) : (
            <ChevronDown className="w-5 h-5 " />
          )}
        </div>
      </div>
      {isOpen && <div className="mt-3 text-base ">{answer}</div>}
    </div>
  );
}
