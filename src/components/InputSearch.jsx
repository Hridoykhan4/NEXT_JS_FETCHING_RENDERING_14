'use client';

import { useRouter, useSearchParams, usePathname } from "next/navigation";

const InputSearch = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // URL-এ আগে থেকে থাকা সার্চ ট্রিম বের করা (যদি পেজ রিলোড হয়)
    const currentSearch = searchParams.get("search") || "";

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const value = form.search.value.trim();

        const params = new URLSearchParams(searchParams.toString());

        if (value) {
            params.set("search", value);
        } else {
            params.delete("search"); // খালি সাবমিট করলে প্যারাম মুছে ফেলা
        }

        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-3 max-w-xl">
            <div className="relative flex-1">
                <input
                    name="search"
                    type="text"
                    defaultValue={currentSearch}
                    placeholder="Search food by name..."
                    className="w-full px-4 py-3 bg-[var(--card)] border border-[var(--border)] rounded-2xl text-sm focus:outline-none focus:border-[var(--primary)] transition-all"
                />
            </div>

            <button type="submit" className="btn-primary py-3 px-6 text-sm">
                Search
            </button>
        </form>
    );
};

export default InputSearch;