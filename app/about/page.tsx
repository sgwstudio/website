import Navigation from '@/components/navigation';

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navigation />
      
      <main className="pt-16">
        <div className="w-full px-5">
          <div className="grid-8">
            <div className="col-span-8 p-4">
              <p className="text-sm text-gray-900 dark:text-gray-100 leading-tight">
                SGW Studio is the creative practice of Samuel Guillope-Weissler ; focusing on design and innovation
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
