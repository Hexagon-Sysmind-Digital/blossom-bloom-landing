"use client"

import React from "react"

type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline"
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "px-8 py-3.5 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer text-sm tracking-wide uppercase"

  const variants = {
    primary:
      "bg-[#b5565a] text-white hover:bg-[#9a3f43] hover:scale-105",
    secondary:
      "bg-white text-[#2d2a26] border border-[#e8ddd4] hover:border-[#b5565a] hover:text-[#b5565a] hover:scale-105",
    outline:
      "bg-transparent text-white border-2 border-white/60 hover:bg-white hover:text-[#b5565a] hover:scale-105",
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
