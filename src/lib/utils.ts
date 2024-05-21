import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Formatting Prices

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("ms-MY", {
    style: "currency",
    currency: "MYR",
  });

  return formatter.format(price);
};
