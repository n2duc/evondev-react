import React from "react";

const CardTailwind = (props) => {
    const amountClasses = `text-lg font-bold text-transparent bg-clip-text ${props.primary ? 'bg-primary-gradient' : 'bg-secondary-gradient'}`

    return (
        <div className="relative">
            <div className="w-full rounded-lg h-[400px]">
                <img
                    src="https://cdn.dribbble.com/users/2400293/screenshots/19271835/media/68c947aa286ed6573929bc2655acff49.png?compress=1&resize=1000x750&vertical=top"
                    alt=""
                    className="block w-full h-full object-cover rounded-lg"
                />
            </div>
            <div className="absolute left-2/4 -translate-x-2/4 translate-y-2/4 bottom-0 bg-white z-10 rounded-[20px] p-5 w-[calc(100%-36px)]">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-x-3">
                        <img
                            src="https://cdn.dribbble.com/users/2400293/screenshots/19271835/media/68c947aa286ed6573929bc2655acff49.png?compress=1&resize=1000x750&vertical=top"
                            alt=""
                            className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                        />
                        <span className="font-light text-base text-[#333]">@zndrson</span>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <img src="./icon-heart.svg" alt="heart" />
                        <span>256</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <h3 className={`font-medium text-black ${props.fontSize || 'text-lg'}`}>Cosmic Perspective</h3>
                    <span className={amountClasses}>12,000 PSL</span>
                </div>
            </div>
        </div>
    );
};

export default CardTailwind;
