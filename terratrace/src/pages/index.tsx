import TerraTraceDashboard from '@/components/TerraTraceDashboard';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <TerraTraceDashboard />
      </main>
    </>
  );
}