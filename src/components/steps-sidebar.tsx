"use client";

import { Check } from "lucide-react";

interface Step {
  id: number;
  name: string;
  completed: boolean;
}

interface StepSidebarProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (stepId: number) => void;
}

export default function StepSidebar({
  steps,
  currentStep,
  onStepClick,
}: StepSidebarProps) {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <button
            onClick={() => onStepClick(step.id)}
            className={`flex items-center w-full p-3 rounded-lg transition-all duration-200 ${
              step.id === currentStep
                ? "bg-purple-100 border-l-4 border-purple-600"
                : step.completed
                ? "bg-green-50 hover:bg-green-100"
                : "bg-gray-50 hover:bg-gray-100"
            }`}
          >
            <div
              className={`flex items-center justify-center w-6 h-6 rounded-full mr-3 transition-all duration-200 ${
                step.completed
                  ? "bg-green-500 text-white animate-pulse"
                  : step.id === currentStep
                  ? "bg-purple-600 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {step.completed ? (
                <Check className="w-4 h-4 animate-checkmark" />
              ) : (
                <span className="text-xs font-medium">{step.id}</span>
              )}
            </div>
            <span
              className={`text-sm font-medium ${
                step.id === currentStep
                  ? "text-purple-600"
                  : step.completed
                  ? "text-green-600"
                  : "text-gray-600"
              }`}
            >
              {step.name}
            </span>
          </button>
          {index < steps.length - 1 && (
            <div className="w-px h-8 bg-gray-200 ml-6 mt-2"></div>
          )}
        </div>
      ))}
    </div>
  );
}
