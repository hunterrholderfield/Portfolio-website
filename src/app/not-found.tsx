import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons";
import { btn } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col items-center justify-center px-5 text-center sm:px-8">
      <p className="text-gradient font-mono text-6xl font-semibold">404</p>
      <h1 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
        This page wandered off.
      </h1>
      <p className="mt-3 max-w-sm text-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className={`${btn} mt-8`}
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back home
      </Link>
    </div>
  );
}
