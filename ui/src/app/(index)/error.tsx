"use client";

export default function ErrorBoundary({error}:{error : Error}) {
    return (
        <div className="text-center">
            <div className="font-bold text-2xl">No Data Available</div>
            <div>ERROR: {error.message}</div>
        </div>
    );
}