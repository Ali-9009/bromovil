import { useState } from "react";
import PlanModal from "../components/popup/PlanModal";
import PlanCard from "../components/PlanCard";

export default function Plans() {
    const [open, setOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const plans = [
        {
            id: 3,
            gb: "1GB",
            type: "Basic",
            price: 15.00,
            gigas: 2,
            payment: 269,
            img: "/assets/plan-img.png",
            icons: [
                { icon: "ri-facebook-circle-fill", color: "text-blue-600" },
                { icon: "ri-messenger-fill", color: "text-blue-600" },
                { icon: "ri-whatsapp-fill", color: "text-green-500" },
                { icon: "ri-instagram-fill", color: "text-pink-500" },
                { icon: "ri-snapchat-fill", color: "text-yellow-400" },
                { icon: "ri-telegram-fill", color: "text-sky-500" },
                { icon: "ri-twitter-x-fill", color: "text-black" },
            ],
        },
        {
            id: 4,
            gb: "5GB",
            type: "Starter",
            price: 29.00,
            gigas: 12,
            payment: 269,
            img: "/assets/plan-img.png",
            icons: [
                { icon: "ri-facebook-circle-fill", color: "text-blue-600" },
                { icon: "ri-messenger-fill", color: "text-blue-600" },
                { icon: "ri-whatsapp-fill", color: "text-green-500" },
                { icon: "ri-instagram-fill", color: "text-pink-500" },
                { icon: "ri-snapchat-fill", color: "text-yellow-400" },
                { icon: "ri-telegram-fill", color: "text-sky-500" },
                { icon: "ri-twitter-x-fill", color: "text-black" },
            ],
        },
        {
            id: 1,
            gb: "15GB",
            type: "Premium",
            price: 39.00,
            gigas: 24,
            payment: 130,
            img: "/assets/plan-img.png",
            icons: [
                { icon: "ri-facebook-circle-fill", color: "text-blue-600" },
                { icon: "ri-whatsapp-fill", color: "text-green-500" },
                { icon: "ri-twitter-x-fill", color: "text-black" },
            ],
        },
        {
            id: 2,
            gb: "30GB",
            type: "Pro",
            price: 59.00,
            gigas: 35,
            payment: 329,
            img: "/assets/plan-img.png",
            icons: [
                { icon: "ri-facebook-circle-fill", color: "text-blue-600" },
                { icon: "ri-messenger-fill", color: "text-blue-600" },
                { icon: "ri-whatsapp-fill", color: "text-green-500" },
                { icon: "ri-instagram-fill", color: "text-pink-500" },
                { icon: "ri-snapchat-fill", color: "text-yellow-400" },
                { icon: "ri-telegram-fill", color: "text-sky-500" },
                { icon: "ri-twitter-x-fill", color: "text-black" },
            ],
        },

        
    ];

    const handleBuy = (plan) => {
        setSelectedPlan(plan);
        setOpen(true);
    };

    return (
        <section className="max-w-6xl mx-auto py-12 px-5">

            <h2 className="font-semibold text-3xl md:text-5xl text-center text-(--primary-color) mb-10">
                Plan Price Data Lifestyle Access
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
                {plans.map((plan) => (
                    <PlanCard key={plan.id} plan={plan} onBuy={handleBuy} />
                ))}
            </div>

            <PlanModal
                isOpen={open}
                onClose={() => setOpen(false)}
                plan={selectedPlan}
            />
        </section>
    );
}