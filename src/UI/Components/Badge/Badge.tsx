import * as React from "react";
import { cfx } from "classifyx"; // Import your custom utility for class merging

// Define the possible variants for the Badge component
type BadgeVariants = "default" | "secondary" | "destructive" | "outline";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariants; // Variant prop for different styles
}

// Badge Component
const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "default",
  ...props
}) => {
  // Base styles
  const baseStyles =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  // Variant styles
  const variantStyles: Record<BadgeVariants, string> = {
    default:
      "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary:
      "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive:
      "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
    outline: "text-foreground",
  };

  // Construct the final class name
  const badgeClass = cfx(baseStyles, variantStyles[variant], className); // Merge classes

  return <div className={badgeClass} {...props} />;
};

Badge.displayName = "Badge";

export { Badge };
