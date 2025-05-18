import React from 'react';
import { cn } from '@/lib/utils';

interface SyringeProps {
  units: number;
  maxUnits?: number;
  className?: string;
}

export const Syringe: React.FC<SyringeProps> = ({ units, maxUnits = 100, className }) => {
  // Ensure fillPercentage is between 0 and 100
  const fillPercentage = Math.min(Math.max((units / maxUnits) * 100, 0), 100);

  // Clamp displayed units label to be within 0 and maxUnits, rounded for display
  const displayUnitsRounded = Math.round(Math.min(Math.max(units, 0), maxUnits));

  // Determine the translateY percentage for the plunger elements
  // We need to map the fillPercentage (0-100) to the visual movement range
  // The visual range seems to be roughly 10rem (h-40 = 10rem).
  // Plunger top (h-2) is inside, handle base (h-6) and handle top (h-2) are outside.
  // Let's calculate the transform based on the fill percentage directly for simplicity.
  const plungerTransformPercentage = 100 - fillPercentage;


  return (
    <div className={cn("w-full max-w-[60px] mx-auto", className)}> {/* Narrower syringe */}
      {/* Top Plunger Handle */}
      <div className="h-2 w-6 bg-gray-500 mx-auto rounded-sm shadow-sm"
           style={{ transform: `translateY(${plungerTransformPercentage * 1.6}px)`, transition: 'transform 0.5s ease-out' }} /> {/* Adjusted multiplier */}
      {/* Plunger Rod */}
      <div className="h-6 w-1.5 bg-gray-500 mx-auto shadow-inner"
           style={{ transform: `translateY(${plungerTransformPercentage * 1.6}px)` , transition: 'transform 0.5s ease-out'}} /> {/* Adjusted multiplier */}

      {/* Syringe Barrel */}
      <div className="relative border-x-2 border-t-2 border-gray-400 rounded-t-md h-40 bg-gray-100/80 backdrop-blur-sm overflow-hidden flex flex-col justify-end shadow-inner">
        {/* Barrel Markings */}
        <div className="absolute inset-0 py-1 px-1 pointer-events-none z-0">
          {[...Array(11)].map((_, i) => (
             <React.Fragment key={i}>
               <div className="relative h-px bg-gray-400/70 mt-[calc(10%-1px)]">
                {/* Main Tick */}
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 text-[7px] font-mono text-gray-500">
                  {maxUnits - i * (maxUnits / 10)}
                </span>
              </div>
              {/* Optional: Add smaller ticks between main ones */}
               {i < 10 && [...Array(4)].map((_, j) => (
                  <div key={j} className="relative h-px bg-gray-300/50 w-1/3 left-1/3 mt-[calc(2%-0.2px)]"></div>
               ))}
             </React.Fragment>
          ))}
        </div>

        {/* Plunger Seal inside barrel */}
        <div
          className="relative h-1.5 bg-gray-700 border-b-2 border-black transition-transform duration-500 ease-out z-10"
          style={{ transform: `translateY(-${(plungerTransformPercentage / 100) * 158}px)` }} /* Adjusted multiplier */
        />

        {/* Fill Level */}
        <div
          className="relative bg-primary/80 transition-all duration-500 ease-out z-0"
          style={{ height: `${fillPercentage}%` }}
        >
         {/* Units Label inside the fill - show only if enough space */}
         {fillPercentage > 12 && (
            <span className="absolute top-1 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-primary-foreground mix-blend-overlay font-mono">
              {displayUnitsRounded}u
            </span>
          )}
        </div>

         {/* Syringe Tip (Needle Hub) */}
         <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-2 bg-gray-400 border-x border-gray-500 rounded-b-sm z-20" />
          {/* Optional: Tiny needle visual */}
         <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-px h-2 bg-gray-500 z-20" />
      </div>


       {/* Units Label below syringe if fill is small */}
       {(fillPercentage <= 12 && fillPercentage > 0) && (
         <div className="text-center text-xs font-semibold text-primary mt-2 font-mono">
           {displayUnitsRounded} Units
         </div>
       )}
       {fillPercentage === 0 && (
           <div className="text-center text-xs text-muted-foreground mt-2 font-mono">0 Units</div>
       )}
    </div>
  );
};
