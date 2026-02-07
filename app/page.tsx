import { Suspense } from "react";
import { UnifiedLayout } from "@/components/UnifiedLayout";

export default function Home() {
  return (
    <>
      <Suspense fallback={
        <div className="flex h-screen w-full items-center justify-center">
          <div className="text-center text-muted-foreground">Loading...</div>
        </div>
      }>
        <UnifiedLayout />
      </Suspense>
    </>
  );
}

