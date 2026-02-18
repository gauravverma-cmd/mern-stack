const Alert = ({ message }) => {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 z-50">
      <span className="text-2xl">⚠️</span>
      <p className="text-lg font-bold">{message}</p>
    </div>
  );
};

export default Alert;