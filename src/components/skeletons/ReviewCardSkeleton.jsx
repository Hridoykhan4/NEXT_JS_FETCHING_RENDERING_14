export function ReviewCardSkeleton() {
    return (
        <div className="border rounded-xl p-5 shadow-md bg-white animate-pulse">
            {/* User Info */}
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-300 rounded-full"></div>

                <div className="space-y-2">
                    <div className="h-4 w-32 bg-gray-300 rounded"></div>
                    <div className="h-3 w-24 bg-gray-300 rounded"></div>
                </div>
            </div>

            {/* Rating */}
            <div className="flex gap-2 mt-3">
                <div className="h-4 w-20 bg-gray-300 rounded"></div>
            </div>

            {/* Review Text */}
            <div className="mt-3 space-y-2">
                <div className="h-3 bg-gray-300 rounded w-full"></div>
                <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                <div className="h-3 bg-gray-300 rounded w-4/6"></div>
            </div>

            {/* Date */}
            <div className="h-3 bg-gray-300 rounded w-24 mt-3"></div>

            {/* Like Button */}
            <div className="mt-4 flex items-center gap-3">
                <div className="h-9 w-24 bg-gray-300 rounded-lg"></div>
                <div className="h-4 w-14 bg-gray-300 rounded"></div>
            </div>
        </div>
    );
}
