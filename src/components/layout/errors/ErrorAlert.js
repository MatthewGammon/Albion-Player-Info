export default function ErrorAlert({ error }) {
  return (
    error && (
      <div className="alert alert-danger m-2 text-center">
        Error: {error.message}
      </div>
    )
  );
}
