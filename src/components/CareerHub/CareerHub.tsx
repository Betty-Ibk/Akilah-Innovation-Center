import React, { useState, useCallback } from 'react';
import CareerCard from './CareerCard';
import SearchBar from './SearchBar';
import { useCareerPaths } from '../../hooks/useCareerPaths';
import { Loader } from 'lucide-react';

export default function CareerHub() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  const {
    careerPaths,
    loading,
    error,
    hasMore,
    totalPages,
    fetchCareerPaths
  } = useCareerPaths({
    page: currentPage,
    limit: 12,
    search: searchTerm
  });

  const handleSearch = useCallback((value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
    fetchCareerPaths({
      page: 1,
      limit: 12,
      search: value
    });
  }, [fetchCareerPaths]);

  const loadMore = useCallback(() => {
    if (hasMore && !loading) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      fetchCareerPaths({
        page: nextPage,
        limit: 12,
        search: searchTerm
      });
    }
  }, [currentPage, hasMore, loading, searchTerm, fetchCareerPaths]);

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-red-600">Error loading career paths. Please try again later.</p>
      </div>
    );
  }

  return (
    <section id="careers" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Development Hub</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore diverse career paths in technology and innovation. Our comprehensive programs are designed to equip you with the skills needed for success in these high-demand fields.
          </p>
        </div>

        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearch} />

        {loading && careerPaths.length === 0 ? (
          <div className="flex justify-center items-center py-12">
            <Loader className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerPaths.map((career, index) => (
                <CareerCard
                  key={`${career.id}-${index}`}
                  id={career.id}
                  title={career.title}
                  icon={career.icon}
                  skills={career.skills}
                  category={career.category}
                />
              ))}
            </div>

            {hasMore && (
              <div className="mt-8 text-center">
                <button
                  onClick={loadMore}
                  disabled={loading}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader className="w-5 h-5 mr-2 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    'Load More'
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}