// // import * as React from "react"
// // import { motion, type Transition, type HTMLMotionProps } from "framer-motion"
// // import { cva, type VariantProps } from "class-variance-authority"
// // import { Slot } from "@radix-ui/react-slot"

// // // Utility to merge Tailwind CSS classes
// // function cn(...classes: any[]) {
// //   return classes.filter(Boolean).join(" ")
// // }

// // // Framer Motion variants for animations
// // type TransformDirectionType = "top" | "bottom" | "left" | "right" | "z"
// // const transformVariants = (direction?: TransformDirectionType) => ({
// //   hidden: {
// //     x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
// //     y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : 0,
// //     scale: direction === "z" ? 0 : 1,
// //     opacity: 0,
// //   },
// //   visible: { x: 0, y: 0, scale: 1, opacity: 1 },
// // })

// // import { easeInOut } from "framer-motion"

// // const TRANSITION_CONFIG = { ease: easeInOut, duration: 0.5 }

// // // Variants for the main hero container
// // const heroVariants = cva("relative min-h-screen w-full overflow-hidden", {
// //   variants: {
// //     layout: {
// //       default: "flex flex-col items-center justify-center text-center",
// //       colLeft: "flex flex-col justify-center items-start",
// //     },
// //   },
// //   defaultVariants: {
// //     layout: "default",
// //   },
// // })

// // // --- Button Component ---
// // // This is a standard, reusable button component with variants.

// // export interface ButtonProps
// //   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
// //     VariantProps<typeof buttonVariants> {
// //   asChild?: boolean
// // }

// // const buttonVariants = cva(
// //   "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
// //   {
// //     variants: {
// //       variant: {
// //         default: "bg-primary text-primary-foreground hover:bg-primary/90",
// //         destructive:
// //           "bg-destructive text-destructive-foreground hover:bg-destructive/90",
// //         outline:
// //           "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
// //         secondary:
// //           "bg-secondary text-secondary-foreground hover:bg-secondary/80",
// //         ghost: "hover:bg-accent hover:text-accent-foreground",
// //         link: "text-primary underline-offset-4 hover:underline",
// //       },
// //       size: {
// //         default: "h-10 px-4 py-2",
// //         sm: "h-9 rounded-md px-3",
// //         lg: "h-11 rounded-md px-8",
// //         icon: "h-10 w-10",
// //       },
// //     },
// //     defaultVariants: {
// //       variant: "default",
// //       size: "default",
// //     },
// //   },
// // )

// // const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
// //   ({ className, variant, size, asChild = false, ...props }, ref) => {
// //     const Comp = asChild ? Slot : "button"
// //     return (
// //       <Comp
// //         className={cn(buttonVariants({ variant, size, className }))}
// //         ref={ref}
// //         {...props}
// //       />
// //     )
// //   },
// // )
// // Button.displayName = "Button"

// // // --- Animation Components ---

// // // Word component: Animates each character of a word
// // function Word({
// //   word,
// //   transition = TRANSITION_CONFIG,
// //   direction = "bottom",
// // }: {
// //   word: string
// //   transition?: Transition
// //   direction?: TransformDirectionType
// // }) {
// //   const characters = word.split("")
// //   return (
// //     <span className="inline-block whitespace-nowrap align-top">
// //       {characters.map((char, index) => (
// //         <span key={index} className="inline-block">
// //           <motion.span
// //             className="inline-block"
// //             variants={transformVariants(direction)}
// //             transition={transition}
// //           >
// //             {char}
// //           </motion.span>
// //         </span>
// //       ))}
// //     </span>
// //   )
// // }

// // // TextStagger component: Animates each word in a block of text
// // function TextStagger({
// //   text,
// //   stagger = 0.05,
// //   transition,
// //   direction,
// //   className,
// //   as: Component = "span",
// //   ...props
// // }: {
// //   text: string
// //   stagger?: number
// //   transition?: Transition
// //   direction?: TransformDirectionType
// //   className?: string
// //   as?: keyof JSX.IntrinsicElements
// // }) {
// //   const words = text.split(" ")
// //   const MotionComponent = motion(Component)

// //   return (
// //     <MotionComponent
// //       className={cn("relative", className)}
// //       initial="hidden"
// //       whileInView="visible"
// //       viewport={{ once: true }}
// //       transition={{ staggerChildren: stagger }}
// //       {...props}
// //     >
// //       {words.map((word, i) => (
// //         <React.Fragment key={i}>
// //           <Word word={word} transition={transition} direction={direction} />{" "}
// //         </React.Fragment>
// //       ))}
// //     </MotionComponent>
// //   )
// // }

// // // AnimatedContainer: A generic container with a slide-in animation
// // const AnimatedContainer = ({
// //   children,
// //   className,
// //   transformDirection = "bottom",
// //   ...props
// // }: {
// //   children: React.ReactNode
// //   className?: string
// //   transformDirection?: TransformDirectionType
// // } & HTMLMotionProps<"div">) => {
// //   return (
// //     <motion.div
// //       className={cn("relative", className)}
// //       variants={transformVariants(transformDirection)}
// //       initial="hidden"
// //       whileInView="visible"
// //       viewport={{ once: true, ...props.viewport }}
// //       transition={{
// //         duration: props.transition?.delay ?? 0.4,
// //         ease: "easeIn",
// //         delay: props.transition?.delay ?? 0.4,
// //         ...props.transition,
// //       }}
// //       {...props}
// //     >
// //       {children}
// //     </motion.div>
// //   )
// // }

// // // --- Final Exported Component ---
// // // This is the main hero section component, now fully responsive.
// // export default function HeroAnimated() {
// //   return (
// //     <section
// //       // Base styles: centered for mobile
// //       // lg styles: left-aligned for desktop
// //       className={cn(
// //         heroVariants({ layout: "default" }),
// //         "text-zinc-100 px-6 py-12 md:px-10 lg:py-24 lg:px-12 min-h-screen"
// //       )}
// //       style={{ backgroundColor: "rgba(248,151,99,255)" }}
// //     >
// //       {/* Wrapper for text content to control z-index and alignment */}
// //       <div className="relative z-20 flex flex-col items-center justify-center w-full">
// //         <TextStagger
// //           text="EMPOWERING YOUR TEAMS WITH REAL-WORLD,"
// //           // Responsive font sizes for the main heading
// //           className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
// //         />
        
// //         <div className="pt-4 md:pt-8  w-full flex items-center justify-center">
// //           <TextStagger
// //             text="INSTRUCTOR-LED TRAINING"
// //             // Responsive font sizes for the sub-heading
// //             className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
// //           />
// //         </div>
        
// //         <AnimatedContainer className="mt-8 md:mt-12 w-full flex items-center justify-center">
// //           <p className="whitespace-pre-line text-base md:text-lg font-medium leading-relaxed text-white text-center w-full">
// //             GROW CAPABILITIES. FUEL PERFORMANCE. DRIVE RESULTS.
// //           </p>
// //         </AnimatedContainer>
// //         <br/>
// //         <AnimatedContainer
// //           // Centered on mobile and desktop
// //           className="mt-6 md:mt-10 flex w-full items-center justify-center gap-4 pb-20"
// //           transition={{ delay: 0.6 }}
// //         >
// //             <Button
// //               variant="outline"
// //               size="sm"
// //               className="bg-white text-[#FF9900] hover:bg-white hover:text-[#FF9900] transition-colors duration-200 hover:scale-105"
// //             >
// //               <span className="text-base md:text-xl font-semibold">Reach Out</span>
// //             </Button>
// //         </AnimatedContainer>
// //       </div>

// //         <img
// //           // Using a placeholder for compatibility. Add an onError fallback.
// //           src="rithuarora.png"
// //           onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x800/CCCCCC/FFFFFF?text=Image+Not+Found'; e.currentTarget.onerror = null; }}
// //           alt="Smiling man"
// //           // Adjusted image positioning for better balance with centered text
// //           className="absolute bottom-0 right-0 w-2/3 max-h-[25vh]
// //                      md:right-0 md:w-1/2 md:max-h-[40vh] 
// //                      lg:right-0 lg:w-1/2 lg:max-h-[50vh] 
// //                      object-contain object-bottom z-10"
// //         />
// //     </section>
// //   )
// // }






// import * as React from "react"
// import { motion, type Transition, type HTMLMotionProps } from "framer-motion"
// import { cva, type VariantProps } from "class-variance-authority"
// import { Slot } from "@radix-ui/react-slot"

// // Utility to merge Tailwind CSS classes
// function cn(...classes) {
//   return classes.filter(Boolean).join(" ")
// }

// // Framer Motion variants for animations
// type TransformDirectionType = "top" | "bottom" | "left" | "right" | "z"
// const transformVariants = (direction?: TransformDirectionType) => ({
//   hidden: {
//     x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
//     y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : 0,
//     scale: direction === "z" ? 0 : 1,
//     opacity: 0,
//   },
//   visible: { x: 0, y: 0, scale: 1, opacity: 1 },
// })

// import { easeInOut } from "framer-motion"

// const TRANSITION_CONFIG = { ease: easeInOut, duration: 0.5 }

// // Variants for the main hero container
// const heroVariants = cva("relative min-h-screen w-full overflow-hidden", {
//   variants: {
//     layout: {
//       default: "flex flex-col items-center justify-center text-center",
//       colLeft: "flex flex-col justify-center items-start",
//     },
//   },
//   defaultVariants: {
//     layout: "default",
//   },
// })

// // --- Button Component ---
// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
//   asChild?: boolean
// }

// const buttonVariants = cva(
//   "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
//   {
//     variants: {
//       variant: {
//         default: "bg-primary text-primary-foreground hover:bg-primary/90",
//         destructive:
//           "bg-destructive text-destructive-foreground hover:bg-destructive/90",
//         outline:
//           "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
//         secondary:
//           "bg-secondary text-secondary-foreground hover:bg-secondary/80",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         default: "h-10 px-4 py-2",
//         sm: "h-9 rounded-md px-3",
//         lg: "h-11 rounded-md px-8",
//         icon: "h-10 w-10",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// )

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant, size, asChild = false, ...props }, ref) => {
//     const Comp = asChild ? Slot : "button"
//     return (
//       <Comp
//         className={cn(buttonVariants({ variant, size, className }))}
//         ref={ref}
//         {...props}
//       />
//     )
//   }
// )
// Button.displayName = "Button"

// // --- Animation Components ---
// // Word component: Animates each character of a word
// function Word({
//   word,
//   transition = TRANSITION_CONFIG,
//   direction = "bottom",
// }: {
//   word: string
//   transition?: Transition
//   direction?: TransformDirectionType
// }) {
//   const characters = word.split("")
//   return (
//     <span className="inline-block whitespace-nowrap align-top">
//       {characters.map((char, index) => (
//         <span key={index} className="inline-block">
//           <motion.span
//             className="inline-block"
//             variants={transformVariants(direction)}
//             transition={transition}
//           >
//             {char}
//           </motion.span>
//         </span>
//       ))}
//     </span>
//   )
// }

// // TextStagger component: Animates each word in a block of text
// function TextStagger({
//   text,
//   stagger = 0.05,
//   transition,
//   direction,
//   className,
//   as: Component = "span",
//   ...props
// }: {
//   text: string
//   stagger?: number
//   transition?: Transition
//   direction?: TransformDirectionType
//   className?: string
//   as?: keyof JSX.IntrinsicElements
// }) {
//   const words = text.split(" ")
//   const MotionComponent = motion(Component)

//   return (
//     <MotionComponent
//       className={cn("relative", className)}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       transition={{ staggerChildren: stagger }}
//       {...props}
//     >
//       {words.map((word, i) => (
//         <React.Fragment key={i}>
//           <Word word={word} transition={transition} direction={direction} />{" "}
//         </React.Fragment>
//       ))}
//     </MotionComponent>
//   )
// }

// // AnimatedContainer: A generic container with a slide-in animation
// const AnimatedContainer = ({
//   children,
//   className,
//   transformDirection = "bottom",
//   ...props
// }: {
//   children: React.ReactNode
//   className?: string
//   transformDirection?: TransformDirectionType
// } & HTMLMotionProps<"div">) => {
//   return (
//     <motion.div
//       className={cn("relative", className)}
//       variants={transformVariants(transformDirection)}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, ...props.viewport }}
//       transition={{
//         duration: props.transition?.delay ?? 0.4,
//         ease: "easeIn",
//         delay: props.transition?.delay ?? 0.4,
//         ...props.transition,
//       }}
//       {...props}
//     >
//       {children}
//     </motion.div>
//   )
// }

// // --- Final Exported Component ---
// export default function HeroAnimated() {
//   return (
//     <section
//       className={cn(
//         heroVariants({ layout: "default" }),
//         "text-zinc-100 px-6 py-12 md:px-10 lg:py-24 lg:px-12 min-h-screen hero-padding-xs"
//       )}
//       style={{ backgroundColor: "rgba(248,151,99,255)" }}
//     >
//       {/* Wrapper for text content to control z-index and alignment */}
//       <div className="relative z-20 flex flex-col items-center justify-center w-full">
//         <TextStagger
//           text="EMPOWERING YOUR TEAMS WITH REAL-WORLD,"
//           className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
//         />

//         <div className="pt-4 md:pt-8 w-full flex items-center justify-center">
//           <TextStagger
//             text="INSTRUCTOR-LED TRAINING"
//             className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
//           />
//         </div>

//         <AnimatedContainer className="mt-8 md:mt-12 w-full flex items-center justify-center">
//           <p className="whitespace-pre-line text-base md:text-lg font-medium leading-relaxed text-white text-center w-full">
//             GROW CAPABILITIES. FUEL PERFORMANCE. DRIVE RESULTS.
//           </p>
//         </AnimatedContainer>
//         <br />
//         <AnimatedContainer
//           className="mt-6 md:mt-10 flex w-full items-center justify-center gap-4 pb-20"
//           transition={{ delay: 0.6 }}
//         >
//           <Button
//             variant="outline"
//             size="sm"
//             className="bg-white text-[#FF9900] hover:bg-white hover:text-[#FF9900] transition-colors duration-200 hover:scale-105"
//           >
//             <span className="text-base md:text-xl font-semibold">Reach Out</span>
//           </Button>
//         </AnimatedContainer>
//       </div>

//       <img
//         src="rithuarora.png"
//         onError={(e) => {
//           e.currentTarget.src = 'https://placehold.co/600x800/CCCCCC/FFFFFF?text=Image+Not+Found'
//           e.currentTarget.onerror = null
//         }}
//         alt="Smiling man"
//         className="absolute bottom-0 right-0 w-2/3 max-h-[25vh]
//         md:right-0 md:w-1/2 md:max-h-[40vh]
//         lg:right-0 lg:w-1/2 lg:max-h-[50vh]
//         object-contain object-bottom z-10"
//       />
//     </section>
//   )
// }


import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

// Utility to merge Tailwind CSS classes
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ")
}

// Variants for the main hero container
const heroVariants = cva("relative min-h-screen w-full overflow-hidden", {
  variants: {
    layout: {
      default: "flex flex-col items-center justify-center text-center",
      colLeft: "flex flex-col justify-center items-start",
    },
  },
  defaultVariants: {
    layout: "default",
  },
})

// --- Button Component ---
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

// --- Non-animated "Word" and "TextStagger" (replace with static rendering) ---
function TextStagger({
  text,
  className,
  as: Component = "span",
  ...props
}: {
  text: string
  className?: string
  as?: keyof JSX.IntrinsicElements
}) {
  const words = text.split(" ")
  return (
    <Component className={cn("relative", className)} {...props}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <span className="inline-block whitespace-nowrap align-top">{word}</span>{" "}
        </React.Fragment>
      ))}
    </Component>
  )
}

// Static container; drops all motion/animation
const AnimatedContainer = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
}) => (
  <div className={cn("relative", className)} {...props}>
    {children}
  </div>
)

// --- Final Exported Component ---
export default function HeroAnimated() {
  return (
    <section
      className={cn(
        heroVariants({ layout: "default" }),
        "text-zinc-100 px-6 py-12 md:px-10 lg:py-24 lg:px-12 min-h-screen hero-padding-xs"
      )}
      style={{ backgroundColor: "rgba(248,151,99,255)" }}
    >
      {/* Wrapper for text content to control z-index and alignment */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full">
        <TextStagger
          text="EMPOWERING YOUR TEAMS WITH REAL-WORLD,"
          className="font-times-new-roman text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        />

        <div className="pt-4 md:pt-8 w-full flex items-center justify-center">
          <TextStagger
            text="INSTRUCTOR-LED TRAINING"
            className="font-times-new-roman text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          />
        </div>

        <AnimatedContainer className="mt-8 md:mt-12 w-full flex items-center justify-center">
          <p className="whitespace-pre-line text-xl md:text-xl font-medium leading-relaxed text-white text-center w-full">
            GROW CAPABILITIES. FUEL PERFORMANCE. DRIVE RESULTS.
          </p>
        </AnimatedContainer>
        <br />
        <AnimatedContainer className="mt-6 md:mt-10 flex w-full items-center justify-center gap-4 pb-20">
          <a href="#contact">
          <Button
            variant="outline"
            size="sm"
            className="bg-white text-[#FF9900] hover:bg-white hover:text-[#FF9900] transition-colors duration-200 hover:scale-105"
          >
            <span className="text-base md:text-xl font-semibold">Reach Out</span>
          </Button>
          </a>
        </AnimatedContainer>
      </div>

      <img
        src="rithuarora.png"
        onError={(e) => {
          e.currentTarget.src =
            "https://placehold.co/600x800/CCCCCC/FFFFFF?text=Image+Not+Found"
          e.currentTarget.onerror = null
        }}
        alt="Smiling man"
        className="absolute bottom-0 right-0 w-2/3 max-h-[25vh]
        md:right-0 md:w-1/2 md:max-h-[40vh]
        lg:right-0 lg:w-1/2 lg:max-h-[50vh]
        object-contain object-bottom z-10"
      />
    </section>
  )
}
