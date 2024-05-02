import { cva } from "class-variance-authority"
import { forwardRef } from "react"
import { cn } from "~/utils"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "white" | "contained"
}

const buttonVariants = cva("rounded-md transition-[background-color]", {
	variants: {
		variant: {
			white:
				"border-2 border-[hsl(240_4%_81%)] bg-[hsl(0_0%_97%)] px-4 py-2 text-[14px] font-medium text-surface hover:bg-[hsl(0_0%_97%/0.9)]",
			contained:
				"border border-[hsl(240_5%_34%)] bg-[hsl(240_5%_26%)] px-5 py-2.5 hover:bg-[hsl(240_5%_26%/.75)]",
		},
	},
	defaultVariants: {
		variant: "white",
	},
})

export const Button: React.FC<Props> = forwardRef<HTMLButtonElement, Props>(
	({ children, variant, className, ...props }, ref) => {
		return (
			<button ref={ref} className={cn(buttonVariants({ variant, className }))} {...props}>
				{children}
			</button>
		)
	}
)
Button.displayName = "Button"