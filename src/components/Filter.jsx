const Filter = () => {
    return(
            <aside className="filters sticky right-0 top-16 z-10 p-2 h-96">
                <header className="flex justify-between">
                    <h2 className="text-xl font-semibold">Filters</h2>
                    <button className="text-xs text-blue-500"
                        >
                        CLEAR ALL
                    </button>
                </header>
                <div className="text-center px-4 mt-2 flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg">Sort by</h3>
                        <label className="cursor-pointer flex gap-2 items-center">
                            <input type="radio" name="sort-by-price"
                            />
                            High-to-Low
                        </label>
                        <label className="cursor-pointer flex gap-2 items-center">
                            <input type="radio" name="sort-by-price"
                            />
                            Low-to-High
                        </label>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg">Sizes</h3>
                        <label className="cursor-pointer flex gap-2 items-center">
                            <input type="checkbox"
                            />
                            S
                        </label>
                        <label className="cursor-pointer flex gap-2 items-center">
                            <input type="checkbox"
                            />
                            M
                        </label>
                        <label className="cursor-pointer flex gap-2 items-center">
                            <input type="checkbox"
                            />
                            L
                        </label>
                        <label className="cursor-pointer flex gap-2 items-center">
                            <input type="checkbox"
                            />
                            XL
                        </label>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg">Brands</h3>
                        <label className="cursor-pointer flex gap-2 items-center">
                            <input type="checkbox"
                            />
                            FTX
                        </label>
                        <label className="cursor-pointer flex gap-2 items-center">
                            <input type="checkbox" 
                            />
                            ALLEN sOLLY
                        </label>
                        <label className="cursor-pointer flex gap-2 items-center">
                            <input type="checkbox" 
                            />
                            LEVI'S
                        </label>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg">Ideal For</h3>
                        <label className="cursor-pointer flex gap-2 items-center">
                            <input type="checkbox"
                            />
                            Men
                        </label>
                        <label className="cursor-pointer flex gap-2 items-center">
                            <input type="checkbox" 
                            />
                            Women
                        </label>
                    </div>
                </div>
            </aside>
    );
}

export {
    Filter
};