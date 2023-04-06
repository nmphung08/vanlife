import React from "react"
import { Link } from "react-router-dom"
import aboutHero from "../assets/images/about-hero.png"

export default function About() {
    return (
        <div className="my-8">
            <img className="w-full h-[350px]" src={aboutHero} alt="something"/>
            <div className="px-4 py-6">
                <p className="text-3xl font-bold">
                    Don't squeeze in a sedan when you could relax in a van.
                </p>
                <p className="mt-4">
                    Our mission is to enliven your road trip with the perfect
                    travel van rental. Our vans are recertified before each trip
                    to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                </p>
                <p className="mt-4">
                    Our team is full of vanlife enthusiasts who know firsthand
                    the magic of touring the world on 4 wheels.
                </p>
            </div>
            <div className=" mt-8 py-8 px-6 mx-8 block bg-orange-300/70 rounded-md">
                <div className="text-2xl leading-none font-bold">
                    Your destination is waiting.
                </div>
                <div className="text-2xl leading-none font-bold">
                    Your van is ready.
                </div>
                <Link
                    to="/vans"
                    className="inline-block mt-8 bg-black text-white font-bold rounded-lg px-4 py-2 hover:translate-x-[1px] hover:translate-y-[1px]"
                >
                    Explore our vans
                </Link>
            </div>
        </div>
    )
}
