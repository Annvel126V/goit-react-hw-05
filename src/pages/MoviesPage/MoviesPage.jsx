const MoviesPage = () => {
  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };
  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
    </div>
  );
};

export default MoviesPage;
