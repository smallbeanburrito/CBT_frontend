import dynamic from "next/dynamic";

const Monthly = dynamic(() => import("@/components/Monthly"), { ssr: false });

export default function MonthlyPage() {
  return <Monthly />;
}
