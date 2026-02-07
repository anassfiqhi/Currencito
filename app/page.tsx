import { Suspense } from "react";
import { UnifiedLayout } from "@/components/UnifiedLayout";
import { UnifiedLayoutSkeleton } from "@/components/UnifiedLayoutSkeleton";

export default function Home() {
  return (
    <>
      <Suspense fallback={<UnifiedLayoutSkeleton />}>
        <UnifiedLayout />
      </Suspense>
    </>
  );
}
