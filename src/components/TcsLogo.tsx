import Image from "next/image";
import Link from "next/link";

interface TcsLogoProps {
  className?: string;
  priority?: boolean;
}

/**
 * TCS News brand mark. Uses the source PNG exactly as provided.
 * Intrinsic dimensions prevent layout shift; click sends the user home.
 */
export default function TcsLogo({ className = "", priority = false }: TcsLogoProps) {
  return (
    <Link
      href="/"
      aria-label="TCS News home"
      className={`block leading-none ${className}`}
    >
      <Image
        src="/logo.png"
        alt="TCS News — Trading Card & Sports Card News"
        width={414}
        height={285}
        priority={priority}
        sizes="(min-width: 1024px) 320px, (min-width: 640px) 260px, 200px"
        className="h-auto w-full"
      />
    </Link>
  );
}
