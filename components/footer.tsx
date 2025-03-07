export function Footer() {
    return (
        <>
            <div className="text-sm border-t border-gray-800">
                <div className="flex flex-col items-center justify-between md:flex-row p-4">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} HighOn Fitness Studio.
                    </p>

                    <p className="text-red-700">
                        Design and Crafted by DefyXverse
                    </p>
                    <p className=" text-gray-500">All rights reserved.</p>
                </div>
            </div>
        </>
    );
}
