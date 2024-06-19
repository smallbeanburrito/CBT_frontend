import dynamic from 'next/dynamic';

const Visualizations = dynamic(() => import('@/components/Visualizations'), { ssr: false });

export default function VisualizationsPage() {
  return <Visualizations />;
}

