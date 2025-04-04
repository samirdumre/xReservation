export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-500 mr-2"></div>
      <p>Loading data...</p>
    </div>
  );
}