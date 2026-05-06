import Button from "./PrimaryBtn";

export default function PlanCard({ plan, onBuy }) {
    return (
        <div className="group w-full max-w-sm bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">

            {/* TOP BANNER */}
            <div className="bg-linear-to-r from-purple-500 to-indigo-500 text-white text-center py-1 px-4 font-semibold text-sm">
                By bringing your number <br />
                <span className="text-cyan-300 font-bold">DOUBLE DATA</span>
            </div>

            {/* IMAGE / MAIN */}
            <div className="relative rounded-2xl overflow-hidden flex items-center justify-center py-1">
                <img src={plan.img} />

                {/* CONTENT ON IMAGE */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                    {/* {plan.type}
                    <p className="text-sm opacity-90">
                        Power for the Everyday Hustle
                    </p> */}
                    <h1 className="text-5xl font-bold mt-2">
                        {plan.gb}
                    </h1>

                    {/* <p className="text-lg mt-2">
                        ${plan.price}
                        <span className="text-sm">/month</span>
                    </p> */}
                </div>
            </div>

            {/* MID BANNER */}
            <div className="bg-linear-to-r from-purple-500 to-indigo-500 text-white text-center py-1 px-4">
                {/* <p className="text-cyan-300 font-bold text-lg">{plan.gigas} GB</p> */}
                <p className="text-md font-bold">
                    WITHOUT PORTING YOUR NUMBER
                </p>
            </div>

            {/* CONTENT */}
            <div className="p-5 text-center">
                <p className="font-bold text-sm text-gray-700 mb-1">
                    Unlimited Social Networks:
                </p>

                <div className="flex justify-center gap-1 text-2xl mb-1">
                    {plan.icons?.map((item, index) => (
                        <i
                            key={index}
                            className={`${item.icon} ${item.color}`}
                        ></i>
                    ))}
                </div>

                <p className="text-sm text-gray-600">
                    <span className="font-semibold">45,450 min.</span> +{" "}
                    <span className="font-semibold">1,750 SMS</span>
                </p>

                <div className="flex justify-between mt-5 text-xs text-gray-600">
                    <div className="flex flex-col items-center gap-1">
                        <i className="ri-wifi-line font-semibold text-3xl text-purple-500"></i>
                        <span className="text-[10px] font-bold">MAXIMUM SPEED</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <i className="ri-database-2-line font-semibold text-3xl text-purple-500"></i>
                        <span className="text-[10px] font-bold">DATA ACCUMULATION</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <i className="ri-global-line font-semibold text-3xl text-purple-500"></i>
                        <span className="text-[10px] font-bold">COVERAGE USA & CANADA</span>
                    </div>
                </div>

                <h2 className="text-4xl font-bold text-purple-600 mt-6">
                    ${plan.price}
                    <span className="text-lg ml-1">USD</span>
                </h2>

                <Button onClick={() => onBuy(plan)} text="BUY" className="mt-4 w-full" />

                {/* <p className="text-xs text-gray-500 mt-3">
                    Price without auto-recharge or early payment: <strong>${plan.payment}/Month</strong>
                </p> */}
            </div>
        </div>
    );
}