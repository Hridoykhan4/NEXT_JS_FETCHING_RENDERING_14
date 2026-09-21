export default function Loading() {
    return (
        <div className="max-w-3xl mx-auto p-6 animate-pulse">
            {/* Image skeleton */}
            <div className="w-full h-72 bg-gray-300 rounded-xl"></div>

            {/* Title */}
            <div className="h-6 bg-gray-300 rounded w-2/3 mt-5"></div>

            {/* Chips */}
            <div className="flex gap-3 mt-3">
                <div className="h-4 bg-gray-300 rounded w-20"></div>
                <div className="h-4 bg-gray-300 rounded w-16"></div>
            </div>

            {/* Price */}
            <div className="h-6 bg-gray-300 rounded w-24 mt-4"></div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
                <div className="flex-1 h-12 bg-gray-300 rounded-lg"></div>
                <div className="flex-1 h-12 bg-gray-300 rounded-lg"></div>
            </div>
        </div>
    );
}
