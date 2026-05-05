import ImageWithLoader from "../components/ImageWithLoader";
import Plans from "../components/Plans";
import Button from "../components/PrimaryBtn";
import Testimonials from "../components/Testimonials";

export default function Home() {

    return (
        <>
            <section className="px-6 md:px-16 py-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

                    <div>
                        <h1 className="text-3xl font-semibold md:text-6xl text-(--primary-color) leading-tight mb-2">
                            Your Network. <br /> Your Way.
                        </h1>
                        <p className="text-md font-bold mb-2">
                            Reliable and affordable mobile plans with Bromovil.
                        </p>
                        <h3 className="md:text-3xl text-2xl text-(--secondary-color) font-bold mb-2">
                            Join the $45 Bromovil Plan
                        </h3>
                        <p className="text-lg mb-6">
                            Enjoy unlimited talk & text, high-speed data, and seamless connectivity to keep you connected anytime, anywhere with Bromovil.
                        </p>

                        <div className="flex gap-4">
                            <Button to="/plan" text="Join Now" />
                        </div>
                    </div>

                    <div>
                        <ImageWithLoader
                            src="/assets/home-1.png"
                            alt="Bromovil Home"
                            className="w-full max-w-md lg:max-w-full"
                        />
                    </div>

                </div>
            </section>

            <section className="px-6 md:px-16 py-6">
                <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

                    <div>
                        <ImageWithLoader
                            src="/assets/home-2.png"
                            alt="Bromovil App"
                            className="w-full max-w-md lg:max-w-full"
                        />
                    </div>

                    <div>
                        <h1 className="font-semibold text-3xl md:text-5xl text-(--primary-color) leading-tight mb-2">
                            Welcome to Bromovil
                        </h1>
                        <p className="text-md font-bold mb-2">
                            Need more data, minutes, or texts? With Bromovil, topping up is fast, simple, and flexible—so you stay connected without interruptions.
                        </p>
                        <h3 className="text-xl text-(--secondary-color) font-bold mb-2">
                            Manage everything in one easy app.
                        </h3>
                        <p className="text-lg mb-6">
                            Open the Bromovil app, choose add-ons, and instantly boost your data, minutes, or texts anytime, anywhere—giving you full control over your mobile experience.
                        </p>

                        <div className="flex gap-4">
                            <Button to="/plan" text="Get Started" />
                        </div>
                    </div>

                </div>
            </section>

            <Plans />

            <section className="px-6 md:px-16 py-6">
                <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

                    <div>
                        <h1 className="font-semibold text-3xl md:text-5xl text-(--primary-color) leading-tight mb-2">
                            Step Into the World of Bromovil
                        </h1>
                        <h3 className="text-xl text-(--secondary-color) font-bold mb-2">
                            Real connections. Unlimited possibilities.
                        </h3>
                        <p className="text-lg mb-6">
                            With Bromovil, enjoy reliable connectivity, exclusive offers, and seamless communication designed to keep you connected, informed, and in control wherever you go.
                        </p>

                        <div className="flex gap-4">
                            <Button to="/plan" text="Join Now" />
                        </div>
                    </div>

                    <div>
                        <ImageWithLoader
                            src="/assets/home-3.png"
                            alt="Bromovil Experience"
                            className="w-full max-w-md lg:max-w-full"
                        />
                    </div>

                </div>
            </section>

            <section className="px-6 md:px-16 py-6">
                <div className="grid lg:grid-cols-[40%_60%] gap-4 items-center max-w-6xl mx-auto">

                    <div>
                        <ImageWithLoader
                            src="/assets/home-4.png"
                            alt="Bromovil Connectivity"
                            className="w-full max-w-md lg:max-w-full"
                        />
                    </div>

                    <div>
                        <h1 className="font-semibold text-3xl md:text-5xl text-(--primary-color) leading-tight mb-2">
                            Always On. Always Connected.
                        </h1>
                        <h3 className="text-xl text-(--secondary-color) font-bold mb-2">
                            Stay powered with Bromovil.
                        </h3>
                        <p className="text-lg mb-6">
                            Bromovil keeps up with your lifestyle—fast, reliable, and always ready. Enjoy strong coverage, affordable plans, and seamless connectivity to stay connected with what matters most, every day.
                        </p>

                        <div className="flex gap-4">
                            <Button to="/plan" text="Join Now" />
                        </div>
                    </div>

                </div>
            </section>

            <Testimonials />
        </>

    );
}