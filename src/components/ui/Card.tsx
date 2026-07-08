import type { HTMLAttributes, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-[8px] border border-[#ded0f2] bg-white/74 shadow-[0_24px_70px_rgba(75,45,96,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#b895e8] hover:shadow-[0_28px_80px_rgba(75,45,96,0.14)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
