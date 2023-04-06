import React from "react"
import reviewsImg from "../../assets/images/reviews-graph.png"
import { BsStarFill } from "react-icons/bs"

export default function Reviews() {
    function reviewsElement(reviews) {
        function renderStars(n) {
            let starsElement = []
            for (let i = 0; i < n; i++) {
                starsElement.push(
                    <BsStarFill className="text-md text-orange-400" />
                )
            }
            return starsElement
        }
        return reviews.map((review) => {
            return (
                <div className="border-b-2 border-stone-400">
                    <div className="flex flex-row gap-1">
                        {renderStars(review.star)}
                    </div>
                    <div className="mt-3">
                        <span className="text-md font-bold">{review.name}</span>
                        <span className="text-gray-500 ml-4">
                            {review.date}
                        </span>
                    </div>
                    <p className="font-extralight my-6">{review.review}</p>
                </div>
            )
        })
    }
    const reviews = [
        {
            star: 5,
            name: "Elliot",
            date: "January 3, 2023",
            review: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
        },
        {
            star: 5,
            name: "Sandy",
            date: "December 12, 2022",
            review: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
        },
    ]
    return (
        <div className="px-6 pb-20">
            <div className="mt-6 ml-6">
                <span className="text-3xl font-semibold">Your reviews</span>
                <span className="ml-6 text-gray-700 font-thin">
                    Last{" "}
                    <span className="font-semibold underline">30 days</span>
                </span>
            </div>
            <img className="mt-6 w-[30rem]" src={reviewsImg} />
            <div className="font-bold text-lg mt-8">
                Reviews &#40;{reviews.length}&#41;
            </div>
            <div className="grid grid-cols-1 gap-6 mt-6">
                {reviewsElement(reviews)}
            </div>
        </div>
    )
}
