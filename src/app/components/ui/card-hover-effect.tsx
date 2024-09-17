import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
export const HoverEffect = ({
  items,
  className,
}: {
  items:{
    id: number,
    tital: string,
    description: string,
    price: string | number,
    instructor: string,
    isFeatured: boolean,
    isAvailible: boolean,
    moreInfo:string
}[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 py-5 px-3",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={""}
          className="relative group  block p-1 mx-auto h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-800 to-purple-950 bg-transparent bg-clip-border block rounded-3xl "
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.tital}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
       </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full sm:w-full w-auto py-2 mx-auto   overflow-hidden bg-gray-950 border border-white/[0.2] group-hover:border-slate-700 relative z-20 text-center",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}
        </div>
        
      
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-3xl font-bold mb-4 font-sans bg-gradient-to-b from-blue-400 to-blue-900 bg-clip-text text-transparent", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-white/[0.9] font-sans font-light",
        className
      )}
    >
      {children}
    </p>
  );
};
