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
    <div className="relative">
      {steps.map((step, index) => (
        <div key={step.id} className="relative flex items-center">
          {/* Connecting line */}
          {index < steps.length - 1 && (
            <div className="absolute left-4.5 top-8 w-0.5 h-16 bg-neutral-300 z-0"></div>
          )}

          <button
            onClick={() => onStepClick(step.id)}
            className="flex items-center w-full py-3 transition-all duration-200 rounded-lg relative z-10"
            disabled={!step.completed && step.id !== currentStep}
          >
            {/* Circle with icon or number */}
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full mr-4 transition-all duration-200 ${
                step.completed
                  ? "bg-green-500 text-white"
                  : step.id === currentStep
                  ? "bg-yellow-500 text-white"
                  : "bg-neutral-400 text-white"
              }`}
            >
              {step.completed ? (
                <Check className="w-4 h-4" />
              ) : (
                <span className="text-sm font-medium">{step.id}</span>
              )}
            </div>

            {/* Step name */}
            <span
              className={`text-base font-medium ${
                step.id === currentStep
                  ? "text-yellow-600"
                  : step.completed
                  ? "text-green-600"
                  : "text-neutral-400"
              }`}
            >
              {step.name}
            </span>
          </button>
        </div>
      ))}
    </div>
  );
}
