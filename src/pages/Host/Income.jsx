import React from "react"
import incomeImg from "../../assets/images/income-graph.png"

export default function Income() {
    const transactions = [
        {
            paid: "720",
            date: "Jan 3, '23",
        },
        {
            paid: "560",
            date: "Dec 1, '22",
        },
        {
            paid: "720",
            date: "Dec 3, '22",
        },
    ]
    const txsElement = transactions.map((tx) => {
        return (
            <div className="flex flex-row justify-between items-center py-8 px-4 bg-white rounded-sm">
                <div className="text-3xl font-semibold">
                    $<span>{tx.paid}</span>
                </div>
                <span className="text-lg text-stone-700 font-medium">{tx.date}</span>
            </div>
        )
    })
    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold">Income</h2>
            <div className="font-thin mt-6 text-gray-700">
                Last <span className="underline font-semibold">30 days</span>
            </div>
            <h1 className="mt-6 text-4xl font-black">$2,260</h1>
            <img className="mt-6 w-[35rem]" src={incomeImg} />
            <h2 className="mt-8 text-2xl font-bold">
                Your transactions &#40;{transactions.length}&#41;
            </h2>
            <div className="font-thin mt-6 text-neutral-800">Last <span className="font-bold underline">30 days</span></div>
            <div className="grid grid-cols-1 gap-8 mt-8">{txsElement}</div>
        </div>
    )
}
