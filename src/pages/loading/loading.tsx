function Loading(): JSX.Element {
  return (
    <div className="loading">
      <div className="loading__spinner" style={{animation: 'spin 1s linear infinite'}}></div>
      <p className="loading__text">Loading...</p>
    </div>
  );
}

export default Loading;
