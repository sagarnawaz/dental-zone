import type { ButtonHTMLAttributes, ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type LinkButtonProps = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children"> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variants = {
  primary:
    "bg-[linear-gradient(135deg,#0a2540,#0d5e6e)] text-white shadow-[0_18px_50px_rgba(10,37,64,0.18)] hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(10,37,64,0.22)]",
  secondary:
    "border border-[var(--border-strong)] bg-white/80 text-[var(--color-primary)] hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40 hover:bg-white",
  ghost:
    "border border-white/20 bg-white/10 text-white hover:-translate-y-0.5 hover:bg-white/16",
} as const;

const sharedClassName =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  if (href) {
    const linkProps = props as Omit<LinkButtonProps, keyof CommonProps | "href">;

    return (
      <Link href={href} className={cn(sharedClassName, variants[variant], className)} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      type={buttonProps.type ?? "button"}
      className={cn(sharedClassName, variants[variant], className)}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
