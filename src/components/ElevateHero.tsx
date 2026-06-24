




// // import React from "react";
// // import { Flame } from "lucide-react";

// // // Array of logo SVG components
// // const logos = [
// //   {
// //     name: "Microsoft",
// //     className: "animate-float1 left-1/4 top-1/4 sm:left-12 sm:top-14",
// //     svg: (
// //       <svg width="50" height="50" viewBox="0 0 48 48">
// //         <g>
// //           <rect fill="#F25022" x="1" y="1" width="22" height="22" />
// //           <rect fill="#7FBA00" x="25" y="1" width="22" height="22" />
// //           <rect fill="#00A4EF" x="1" y="25" width="22" height="22" />
// //           <rect fill="#FFB900" x="25" y="25" width="22" height="22" />
// //         </g>
// //       </svg>
// //     ),
// //   },
// //   {
// //     name: "Excel",
// //     className: "animate-float2 right-1/4 top-1/2 sm:right-16 sm:top-24",
// //     svg: (
// //       <svg width="54" height="54" viewBox="0 0 48 48">
// //         <rect width="48" height="48" rx="8" fill="#217346" />
// //         <text x="24" y="32" textAnchor="middle" fontFamily="Arial" fontWeight="bold" fontSize="22" fill="#fff">X</text>
// //       </svg>
// //     ),
// //   },
// //   {
// //     name: "Power BI",
// //     className: "animate-float3 left-1/4 bottom-1/4 sm:left-24 sm:bottom-20",
// //     svg: (
// //       <svg width="54" height="54" viewBox="0 0 48 48">
// //         <rect x="9" y="20" width="6" height="17" rx="3" fill="#F3C205"/>
// //         <rect x="20" y="11" width="6" height="26" rx="3" fill="#F3C205"/>
// //         <rect x="31" y="16" width="6" height="21" rx="3" fill="#F3C205"/>
// //       </svg>
// //     ),
// //   },
// //   {
// //     name: "Copilot",
// //     className: "animate-float4 right-1/4 bottom-1/4 sm:right-24 sm:bottom-24",
// //     svg: (
// //       <svg width="52" height="52" viewBox="0 0 48 48">
// //         <g>
// //           <ellipse cx="16" cy="24" rx="10" ry="12" fill="#A3B3F7"/>
// //           <ellipse cx="32" cy="24" rx="10" ry="12" fill="#75C4F9"/>
// //         </g>
// //       </svg>
// //     ),
// //   },
// // //   {
// // //     name: "Outlook",
// // //     className: "animate-float5 left-1/2 top-1/3 sm:left-1/2 sm:top-1/3",
// // //     svg: (
// // //       <svg width="46" height="46" viewBox="0 0 48 48">
// // //         <rect x="10" y="10" width="28" height="28" rx="3" fill="#0072C6" />
// // //         <rect x="10" y="14" width="28" height="9" rx="1.5" fill="#fff" />
// // //         <rect x="10" y="29" width="28" height="9" rx="1.5" fill="#00569C" />
// // //       </svg>
// // //     ),
// // //   },
// //   {
// //     name: "Teams",
// //     className: "animate-float4 left-1/3 top-2/3 sm:left-1/3 sm:top-2/3",
// //     svg: (
// //       <svg width="54" height="54" viewBox="0 0 48 48">
// //         <rect x="8" y="12" width="32" height="24" rx="4" fill="#6264A7" />
// //         <circle cx="14" cy="18" r="4" fill="#D2D2FF" />
// //         <rect x="20" y="18" width="16" height="12" rx="1.5" fill="#fff" />
// //       </svg>
// //     ),
// //   },
// //   {
// //     name: "PowerPoint",
// //     className: "animate-float3 right-1/4 top-1/2 sm:right-4 sm:top-1/2",
// //     svg: (
// //       <svg width="46" height="46" viewBox="0 0 48 48">
// //         <circle cx="24" cy="24" r="20" fill="#D24726" />
// //         <rect x="13" y="19" width="22" height="9" rx="2" fill="#fff" />
// //         <rect x="13" y="19" width="8" height="9" rx="2" fill="#D24726" opacity="0.6"/>
// //       </svg>
// //     ),
// //   },
// // ];

// // const ElevateHero: React.FC = () => {
// //   return (
// //     <section
// //       style={{
// //         background: "radial-gradient(circle at center, #ffffffff, #f8976334)",
// //       }}
// //       className="relative h-screen overflow-hidden p-6 sm:p-24"
// //     >
// //       {/* Animated Background Logos */}
// //       <div className="absolute inset-0 z-0 pointer-events-none">
// //         {logos.map((item, i) => (
// //           <span
// //             key={i}
// //             className={`absolute opacity-25 sm:opacity-40 blur-xs transition-transform duration-500 ${item.className}`}
// //             style={{ zIndex: 1 }}
// //             aria-hidden="true"
// //           >
// //             {item.svg}
// //           </span>
// //         ))}
// //       </div>
// //       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="text-center">
// //           <div className="flex justify-center mb-6">
// //             <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full flex items-center space-x-3 sm:space-x-5">
// //               <Flame className="w-8 h-8 sm:w-12 sm:h-12" />
// //               <span className="text-2xl sm:text-5xl font-bold">ELEVATE</span>
// //             </div>
// //           </div>

// //           <br/>

// //           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
// //           <span className="inline-block animate-slideInLeft text-[#f89763]">Master</span>{' '}
// //           <span className="inline-block animate-slideInRight text-[#f89763]">Microsoft</span>{' '}
// //           <span className="inline-block animate-slideInUp text-[#f89763]">Office,</span><br />
// //             
// //             <span className="inline-block animate-fadeInScale bg-gradient-to-r from-[#f89763] to-[#f89763] bg-clip-text text-transparent">
// //               AI & Power BI
// //             </span>
// //           </h1>
// //           <p className="text-lg md:text-2xl font-bold text-[#4a4a4a] mb-8 max-w-4xl mx-auto animate-typewriter">
// //             For the Future-Ready Workplace
// //           </p>
// //           <p className="text-md sm:text-lg text-[#4a4a4a] mb-10 animate-fadeInUp delay-1000">
// //             By <strong className="text-[#f89763] font-bold animate-pulse">Ritu Arora</strong> – <span className="text-[#4a4a4a]">Microsoft Specialist | AI Trainer | Corporate Productivity Coach</span>
// //           </p>
// //           <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //             <button className="bg-orange-500 border-2 border-orange-500 text-white hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition-all">
// //               Book Corporate Batch
// //             </button>
// //             <button className="bg-orange-500 border-2 border-orange-500 text-white hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition-all">
// //               Download Brochure
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //       {/* Custom animations */}
// //       <style>
// //         {`
// //           @keyframes float1 { 0% { transform: translateY(0);} 50% {transform: translateY(-30px);} 100%{ transform: translateY(0);} }
// //           @keyframes float2 { 0% { transform: translateX(0);} 50% {transform: translateX(-25px);} 100%{ transform: translateX(0);} }
// //           @keyframes float3 { 0% { transform: scale(1);} 50% {transform: scale(1.08);} 100%{ transform: scale(1);} }
// //           @keyframes float4 { 0% { transform: translateY(0);} 50% {transform: translateY(18px);} 100%{ transform: translateY(0);} }
// //           @keyframes float5 { 0% { opacity: 0.15;} 50% {opacity: 0.3;} 100%{ opacity: 0.15;} }
// //           .animate-float1 { animation: float1 6s ease-in-out infinite; }
// //           .animate-float2 { animation: float2 7s ease-in-out infinite; }
// //           .animate-float3 { animation: float3 5s ease-in-out infinite; }
// //           .animate-float4 { animation: float4 8s ease-in-out infinite; }
// //           .animate-float5 { animation: float5 4s ease-in-out infinite; }

// //           /* Text Animations */
// //           @keyframes slideInLeft {
// //             0% { transform: translateX(-100px); opacity: 0; }
// //             100% { transform: translateX(0); opacity: 1; }
// //           }
// //           @keyframes slideInRight {
// //             0% { transform: translateX(100px); opacity: 0; }
// //             100% { transform: translateX(0); opacity: 1; }
// //           }
// //           @keyframes slideInUp {
// //             0% { transform: translateY(50px); opacity: 0; }
// //             100% { transform: translateY(0); opacity: 1; }
// //           }
// //           @keyframes fadeInScale {
// //             0% { transform: scale(0.8); opacity: 0; }
// //             100% { transform: scale(1); opacity: 1; }
// //           }
// //           @keyframes typewriter { 
// //             from { width: 0; }
// //             to { width: 100%; }
// //           }
// //           .animate-typewriter {
// //             overflow: hidden;
// //             white-space: nowrap;
// //             margin: 0 auto;
// //             animation: typewriter 2s ease-out 1.2s forwards;
// //           }
// //           @keyframes fadeInUp {
// //             0% { transform: translateY(30px); opacity: 0; }
// //             100% { transform: translateY(0); opacity: 1; }
// //           }

// //           .animate-slideInLeft { animation: slideInLeft 1s ease-out forwards; }
// //           .animate-slideInRight { animation: slideInRight 1s ease-out 0.3s forwards; }
// //           .animate-slideInUp { animation: slideInUp 1s ease-out 0.6s forwards; }
// //           .animate-fadeInScale { animation: fadeInScale 1.2s ease-out 0.9s forwards; }
// //           .delay-1000 { animation-delay: 1.5s; }
// //         `}
// //       </style>
// //     </section>
// //   );
// // };

// // export default ElevateHero;




// import React from "react";
// import { Flame } from "lucide-react";

// // Array of logo SVG components (now leadership/soft skills inspired)
// const logos = [
//   {
//     name: "Growth",
//     className: "animate-float1 left-1/4 top-1/4 sm:left-12 sm:top-14",
//     svg: (
//       <svg width="50" height="50" viewBox="0 0 48 48">
//         <path d="M8 40L20 24l6 8 14-20" stroke="#f89763" strokeWidth="4" fill="none"/>
//         <circle cx="20" cy="24" r="4" fill="#4a90e2" />
//       </svg>
//     ),
//   },
//   {
//     name: "Teamwork",
//     className: "animate-float2 right-1/4 top-1/2 sm:right-16 sm:top-24",
//     svg: (
//       <svg width="54" height="54" viewBox="0 0 48 48">
//         <circle cx="16" cy="20" r="6" fill="#f9b233"/>
//         <circle cx="32" cy="20" r="6" fill="#f89763"/>
//         <rect x="10" y="28" width="28" height="10" rx="5" fill="#e57373"/>
//       </svg>
//     ),
//   },
//   {
//     name: "Strategy",
//     className: "animate-float3 left-1/4 bottom-1/4 sm:left-24 sm:bottom-20",
//     svg: (
//       <svg width="54" height="54" viewBox="0 0 48 48">
//         <polygon points="24,4 44,44 4,44" fill="#81c784"/>
//         <circle cx="24" cy="22" r="5" fill="#fff"/>
//       </svg>
//     ),
//   },
//   {
//     name: "Leadership",
//     className: "animate-float4 right-1/4 bottom-1/4 sm:right-24 sm:bottom-24",
//     svg: (
//       <svg width="52" height="52" viewBox="0 0 48 48">
//         <circle cx="24" cy="18" r="10" fill="#90caf9"/>
//         <rect x="14" y="28" width="20" height="12" rx="3" fill="#f48fb1"/>
//       </svg>
//     ),
//   },
//   {
//     name: "Communication",
//     className: "animate-float3 right-1/4 top-1/2 sm:right-4 sm:top-1/2",
//     svg: (
//       <svg width="46" height="46" viewBox="0 0 48 48">
//         <rect x="8" y="12" width="32" height="20" rx="4" fill="#ffcc80"/>
//         <polygon points="16,32 20,40 24,32" fill="#ff9800"/>
//       </svg>
//     ),
//   },
// ];

// const ElevateHero: React.FC = () => {
//   return (
//     <section
//       style={{
//         background: "radial-gradient(circle at center, #ffffffff, #f8976334)",
//       }}
//       className="relative h-screen overflow-hidden p-6 sm:p-24"
//     >
//       {/* Animated Background Logos */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         {logos.map((item, i) => (
//           <span
//             key={i}
//             className={`absolute opacity-25 sm:opacity-40 blur-xs transition-transform duration-500 ${item.className}`}
//             style={{ zIndex: 1 }}
//             aria-hidden="true"
//           >
//             {item.svg}
//           </span>
//         ))}
//       </div>
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <div className="flex justify-center mb-6">
//             <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full flex items-center space-x-3 sm:space-x-5">
//               <Flame className="w-8 h-8 sm:w-12 sm:h-12" />
//               <span className="text-2xl sm:text-5xl font-bold">ELEVATE</span>
//             </div>
//           </div>

//           <br/>

//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
//             <span className="inline-block animate-slideInLeft text-[#f89763]">
//               Evolve
//             </span>{" "}
//             <span className="inline-block animate-slideInRight text-[#f89763]">
//               Mid-Level Talent
//             </span>{" "}
//             <span className="inline-block animate-slideInUp text-[#f89763]">
//               into Future Leaders
//             </span>
//           </h1>
//           <p className="text-lg md:text-2xl font-bold text-[#4a4a4a] mb-8 max-w-4xl mx-auto animate-typewriter">
//             Shape Mindsets. Sharpen Skills. Strengthen Leadership from Within.
//           </p>
//           <p className="text-md sm:text-lg text-[#4a4a4a] mb-10 animate-fadeInUp delay-1000">
//             By{" "}
//             <strong className="text-[#f89763] font-bold animate-pulse">
//               Dr. Garima Bansal
//             </strong>{" "}
//             – <span className="text-[#4a4a4a]">Leadership Coach | Corporate Facilitator | Soft Skills Expert</span>
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-orange-500 border-2 border-orange-500 text-white hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition-all">
//               Enquire Now
//             </button>
//             <button className="bg-orange-500 border-2 border-orange-500 text-white hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition-all">
//               Download Brochure
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Custom animations (same as before) */}
//       <style>
//         {`
//           @keyframes float1 { 0% { transform: translateY(0);} 50% {transform: translateY(-30px);} 100%{ transform: translateY(0);} }
//           @keyframes float2 { 0% { transform: translateX(0);} 50% {transform: translateX(-25px);} 100%{ transform: translateX(0);} }
//           @keyframes float3 { 0% { transform: scale(1);} 50% {transform: scale(1.08);} 100%{ transform: scale(1);} }
//           @keyframes float4 { 0% { transform: translateY(0);} 50% {transform: translateY(18px);} 100%{ transform: translateY(0);} }

//           .animate-float1 { animation: float1 6s ease-in-out infinite; }
//           .animate-float2 { animation: float2 7s ease-in-out infinite; }
//           .animate-float3 { animation: float3 5s ease-in-out infinite; }
//           .animate-float4 { animation: float4 8s ease-in-out infinite; }

//           @keyframes slideInLeft {
//             0% { transform: translateX(-100px); opacity: 0; }
//             100% { transform: translateX(0); opacity: 1; }
//           }
//           @keyframes slideInRight {
//             0% { transform: translateX(100px); opacity: 0; }
//             100% { transform: translateX(0); opacity: 1; }
//           }
//           @keyframes slideInUp {
//             0% { transform: translateY(50px); opacity: 0; }
//             100% { transform: translateY(0); opacity: 1; }
//           }
//           @keyframes fadeInScale {
//             0% { transform: scale(0.8); opacity: 0; }
//             100% { transform: scale(1); opacity: 1; }
//           }
//           @keyframes typewriter { 
//             from { width: 0; }
//             to { width: 100%; }
//           }
//           .animate-typewriter {
//             overflow: hidden;
//             white-space: nowrap;
//             margin: 0 auto;
//             animation: typewriter 2s ease-out 1.2s forwards;
//           }
//           @keyframes fadeInUp {
//             0% { transform: translateY(30px); opacity: 0; }
//             100% { transform: translateY(0); opacity: 1; }
//           }

//           .animate-slideInLeft { animation: slideInLeft 1s ease-out forwards; }
//           .animate-slideInRight { animation: slideInRight 1s ease-out 0.3s forwards; }
//           .animate-slideInUp { animation: slideInUp 1s ease-out 0.6s forwards; }
//           .animate-fadeInScale { animation: fadeInScale 1.2s ease-out 0.9s forwards; }
//           .delay-1000 { animation-delay: 1.5s; }
//         `}
//       </style>
//     </section>
//   );
// };

// export default ElevateHero;


import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"
import { Flame } from "lucide-react"

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
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-orange-500 text-white hover:bg-orange-600",
        outline:
          "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white",
      },
      size: {
        default: "h-10 px-6 py-3",
        sm: "h-9 px-4 py-2",
        lg: "h-12 px-8 py-4",
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

// --- Text Utility ---
function TextStagger({
  text,
  className,
  as: Component = "span",
}: {
  text: string
  className?: string
  as?: keyof JSX.IntrinsicElements
}) {
  const words = text.split(" ")
  return (
    <Component className={cn("relative", className)}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <span className="inline-block whitespace-nowrap align-top">
            {word}
          </span>{" "}
        </React.Fragment>
      ))}
    </Component>
  )
}

// --- Static Wrapper ---
const AnimatedContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => <div className={cn("relative", className)}>{children}</div>



const logos = [
  {
    name: "Growth",
    className: "animate-float1 left-1/4 top-1/4 sm:left-12 sm:top-14",
    svg: (
      <svg width="50" height="50" viewBox="0 0 48 48">
        <path d="M8 40L20 24l6 8 14-20" stroke="#f89763" strokeWidth="4" fill="none"/>
        <circle cx="20" cy="24" r="4" fill="#4a90e2" />
      </svg>
    ),
  },
  {
    name: "Teamwork",
    className: "animate-float2 right-1/4 top-1/2 sm:right-16 sm:top-24",
    svg: (
      <svg width="54" height="54" viewBox="0 0 48 48">
        <circle cx="16" cy="20" r="6" fill="#f9b233"/>
        <circle cx="32" cy="20" r="6" fill="#f89763"/>
        <rect x="10" y="28" width="28" height="10" rx="5" fill="#e57373"/>
      </svg>
    ),
  },
  {
    name: "Strategy",
    className: "animate-float3 left-1/4 bottom-1/4 sm:left-24 sm:bottom-20",
    svg: (
      <svg width="54" height="54" viewBox="0 0 48 48">
        <polygon points="24,4 44,44 4,44" fill="#81c784"/>
        <circle cx="24" cy="22" r="5" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "Leadership",
    className: "animate-float4 right-1/4 bottom-1/4 sm:right-24 sm:bottom-24",
    svg: (
      <svg width="52" height="52" viewBox="0 0 48 48">
        <circle cx="24" cy="18" r="10" fill="#90caf9"/>
        <rect x="14" y="28" width="20" height="12" rx="3" fill="#f48fb1"/>
      </svg>
    ),
  },
  {
    name: "Communication",
    className: "animate-float3 right-1/4 top-1/2 sm:right-4 sm:top-1/2",
    svg: (
      <svg width="46" height="46" viewBox="0 0 48 48">
        <rect x="8" y="12" width="32" height="20" rx="4" fill="#ffcc80"/>
        <polygon points="16,32 20,40 24,32" fill="#ff9800"/>
      </svg>
    ),
  },
];

// --- Final Hero Section ---
export default function ElevateHero() {
  return (
    <section
      className={cn(
        heroVariants({ layout: "default" }),
        "text-zinc-900 px-4 py-10 sm:px-6 sm:py-12 md:px-10 lg:py-24 lg:px-12 min-h-screen"
      )}
      style={{
        background: "radial-gradient(circle at center, #ffffffff, #f8976334)",
      }}
    >
      {/* Floating logos */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {logos.map((item, i) => (
          <span
            key={i}
            className={`absolute opacity-20 sm:opacity-40 transition-transform duration-500 ${item.className}`}
            style={{ zIndex: 1 }}
            aria-hidden="true"
          >
            {item.svg}
          </span>
        ))}
      </div>

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full text-center px-2">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-full flex items-center space-x-4">
            <Flame className="w-10 h-10 sm:w-14 sm:h-14" />
            <span className="text-3xl sm:text-4xl font-bold">ELEVATE</span>
          </div>
        </div>

        <TextStagger
          text="Evolve Mid-Level"
          className="font-times-new-roman text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#f89763]"
        />

        <div className="pt-2 sm:pt-4">
          <TextStagger
            text=" Talent into Future Leaders"
            className="font-times-new-roman text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#f89763]"
          />
        </div>

        <AnimatedContainer className="mt-4 sm:mt-6">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#4a4a4a]">
            Shape Mindsets. Sharpen Skills. Strengthen Leadership.
          </p>
        </AnimatedContainer>

        <AnimatedContainer className="mt-2 sm:mt-3 lg:mr-10">
          <p className="text-sm sm:text-base md:text-lg text-[#4a4a4a] font-medium leading-snug">
            By{" "}
            <strong className="text-[#f89763] font-bold">Dr. Garima Bansal</strong> –{" "}
            <span>Leadership Coach | Corporate Facilitator | Soft Skills Expert</span>
          </p>
        </AnimatedContainer>

        <AnimatedContainer className="mt-6 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
          <a href="/#contact">
            <Button variant="default" size="lg" className="w-full sm:w-auto">
              Book corporate Batch
            </Button>
          </a>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Download Brochure
          </Button>
        </AnimatedContainer>
      </div>

      {/* Hero Image */}
      <img
        src="Flux_Dev_prompt_A_young_Indian_woman_appearing_below_26_years__1-removebg-preview.png"
        onError={(e) => {
          e.currentTarget.src =
            "https://placehold.co/600x800/CCCCCC/FFFFFF?text=Image+Not+Found"
          e.currentTarget.onerror = null
        }}
        alt="Ritu Arora"
        className="absolute bottom-0 right-0 w-[80%] max-h-[25vh] right-[-90px]
        sm:w-2/3 sm:max-h-[35vh]
        md:w-1/2 md:max-h-[45vh]
        lg:w-1/2 lg:max-h-[50vh]
        object-contain object-bottom z-10"
      />

      {/* Animations */}
      <style>{`
        @keyframes float1 { 0%,100% { transform: translateY(0);} 50% {transform: translateY(-30px);} }
        @keyframes float2 { 0%,100% { transform: translateX(0);} 50% {transform: translateX(-25px);} }
        @keyframes float3 { 0%,100% { transform: scale(1);} 50% {transform: scale(1.08);} }
        @keyframes float4 { 0%,100% { transform: translateY(0);} 50% {transform: translateY(18px);} }
        .animate-float1 { animation: float1 6s ease-in-out infinite; }
        .animate-float2 { animation: float2 7s ease-in-out infinite; }
        .animate-float3 { animation: float3 5s ease-in-out infinite; }
        .animate-float4 { animation: float4 8s ease-in-out infinite; }
      `}</style>
    </section>
  )
}