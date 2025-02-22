import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string; // Explicitly define className to avoid empty interface error
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    function cn(...classes: (string | undefined)[]): string {
      return classes.filter(Boolean).join(" ");
    }

    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
