import { useState } from "react";
import { Check, Star, ThumbsUp, ThumbsDown } from "lucide-react";
import img from "../../assets/images/banner-2.jpg";

export default function ProductTabs() {
  const [tab, setTab] = useState("description");
  const [sort, setSort] = useState("newest");

  const points = [
    "Real-time shipping rates, tracking, and delivery management",
    "Real-time stock tracking and alerts for low inventory",
    "Support for multiple payment options like credit cards, PayPal, Stripe",
    "Seamless experience across smartphones, tablets, and desktops",
    "Track sales, traffic, conversion rates, and customer behavior",
    "Allow customers to track orders, reorder, and manage profiles",
  ];

  const specs = [
    ["Product Type", "Touchless Infrared Thermometer"],
    ["Brand", "Mediguard"],
    ["Model", "X200"],
    ["Measurement Time", "1 Second"],
    ["Contact Type", "Non-Contact"],
    ["Measurement Range", "32°C – 42.9°C / 89.6°F – 109.2°F"],
    ["Modes", "Body & Surface"],
    ["Accuracy", "±0.2°C / ±0.4°F"],
    ["Memory Capacity", "20 Readings"],
    ["Display Type", "Backlit LCD"],
    ["Battery Type", "2 × AAA (not included)"],
    ["Dimensions", "150mm × 40mm × 45mm"],
    ["Weight", "90g (without batteries)"],
    ["Warranty", "1 Year"],
    ["Usage", "Suitable for all age groups"],
    ["Certification", "CE, FDA Approved"],
  ];
  const [page, setPage] = useState(1);
  const perPage = 2;

  const reviews = [
    {
      name: "Robert Fox",
      img: "https://i.pravatar.cc/40?img=1",
      rating: 4.5,
      text: "Very nice! On the other hand, we denounce with righteous indignation and dislike men who are so beguiled.",
      thank: 234,
      dislike: 12,
    },
    {
      name: "Jenny Wilson",
      img: "https://i.pravatar.cc/40?img=2",
      rating: 4.5,
      text: "Very nice! On the other hand, we denounce with righteous indignation.",
      thank: 234,
      dislike: 12,
    },
    {
      name: "Brooklyn Simmons",
      img: "https://i.pravatar.cc/40?img=3",
      rating: 4.5,
      text: "Very nice product, highly recommended.",
      thank: 234,
      dislike: 12,
    },
  ];
  const totalPages = Math.ceil(reviews.length / perPage);

  const currentReviews = reviews.slice((page - 1) * perPage, page * perPage);
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="flex gap-6 border-b border-gray-200 mb-6 text-sm font-medium">
        {["description", "additional", "reviews"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`pb-3 capitalize ${
              tab === t
                ? "text-[#008080] border-b-2 border-[#008080]"
                : "text-gray-500"
            }`}
          >
            {t === "additional" ? "Additional Info" : t}
          </button>
        ))}
      </div>

      <div className="border border-gray-200 rounded-2xl bg-white overflow-hidden">
        {tab === "description" && (
          <>
            <div className="bg-gray-50 px-6 py-4 border-b font-semibold">
              Description
            </div>
            <div className="p-8">
              <p className="text-sm text-gray-500 mb-6">
                To begin, carefully unpack the product and ensure all necessary
                components are included.
              </p>

              <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 mb-10">
                {points.map((item, i) => (
                  <div key={i} className="flex gap-3 text-sm text-gray-600">
                    <div className="w-5 h-5 flex items-center justify-center bg-[#008080] text-white rounded-full">
                      <Check size={12} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Easy to Customization
                  </h3>

                  <div className="space-y-3">
                    {points.map((item, i) => (
                      <div key={i} className="flex gap-3 text-sm text-gray-600">
                        <div className="w-5 h-5 flex items-center justify-center bg-[#008080] text-white rounded-full">
                          <Check size={12} />
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <img
                  src={img}
                  alt="product"
                  className="rounded-xl w-full max-w-md object-cover"
                />
              </div>
            </div>
          </>
        )}

        {tab === "additional" && (
          <div>
            <div className="bg-gray-50 px-6 py-4 border-b font-semibold">
              Additional Info
            </div>

            {specs.map(([label, value], i) => (
              <div
                key={i}
                className="grid grid-cols-[220px_1fr] px-6 py-3 text-sm border-b"
              >
                <span className="font-medium text-gray-700">{label}</span>
                <span className="text-gray-500">{value}</span>
              </div>
            ))}
          </div>
        )}

        {tab === "reviews" && (
          <>
            <div className="bg-gray-50 px-6 py-4 border-b font-semibold">
              Reviews
            </div>
            <div>
              <div className="grid md:grid-cols-3 border-b">
                <div className="p-8 text-center border-r">
                  <p className="text-sm text-gray-500">Average Rating</p>
                  <h2 className="text-4xl font-bold text-red-500">4/5</h2>

                  <div className="flex justify-center text-yellow-400 my-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} />
                    ))}
                  </div>

                  <p className="text-sm text-gray-400">(8.24k reviews)</p>
                </div>

                <div className="p-8 border-r space-y-3">
                  {[
                    ["5 Star", "90%"],
                    ["4 Star", "75%"],
                    ["3 Star", "60%"],
                    ["2 Star", "40%"],
                    ["1 Star", "20%"],
                  ].map(([label, width], i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-16 text-sm">{label}</span>
                      <div className="flex-1 bg-gray-200 h-2 rounded">
                        <div
                          style={{ width }}
                          className="bg-[#008080] h-2 rounded"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <button className="border border-[#008080] text-[#008080] px-6 py-2 rounded-full">
                    Write a Review
                  </button>
                </div>
              </div>
              <div className="border border-gray-400 rounded-2xl m-3">
                <div className=" px-6 py-4 gap-3 flex flex-col font-semibold">
                  Add Review
                  <div className="flex text-[10px] text-gray-400">
                    <span className="text-black mr-2">
                      Your Review About The Product
                    </span>{" "}
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <div className="w-full p-6   ">
                  <div className="mb-4">
                    <textarea
                      className="w-full border border-gray-200 text-[12px] rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Comment"
                      name="Comment"
                      id=""
                    ></textarea>

                    <input
                      type="text"
                      placeholder="Name *"
                      className="w-full border border-gray-200 text-[12px] rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="email"
                      placeholder="Email *"
                      className="w-full border border-gray-200 text-[12px] rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div className="flex mt-3 justify-end gap-4 items-end ">
                    <button className=" bg-white py-2 px-5 text-black py-3 rounded-3xl border border-gray-300 font-medium  hover:bg-[#94c2be] ">
                      Cancle
                    </button>
                    <button className=" bg-[#0f766e]  py-2 px-5 text-white py-3 rounded-3xl font-medium  hover:bg-[#0b5e58] transition">
                      Product Review
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className=" flex justify-between py-4 border-b border-gray-200 font-semibold">
                  <span>Customer rating and review</span>
                  <div class="relative min-w-[100px]">
                    <select
                      value={sort}
                      onChange={(e) => setSort(e.target.value)}
                      className="appearance-none  border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 bg-white outline-none"
                    >
                      <option value="Sorting">Sorting</option>

                      <option value="newest">Newest</option>
                      <option value="oldest">Oldest</option>
                      <option value="popular">Popular</option>
                      <option value="rating">Rating</option>
                      <option value="relevance">Relevance</option>
                      <option value="comment-count">Comment Count</option>
                    </select>
                  </div>
                </div>
                {currentReviews.map((r, i) => (
                  <div
                    key={i}
                    className="flex gap-4   border-b border-gray-200 pb-6"
                  >
                    <img
                      src={r.img}
                      alt="user"
                      className="w-10 h-10 rounded-full object-cover"
                    />

                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-gray-800">
                        {r.name}
                      </h4>

                      <div className="flex items-center gap-3 mt-1">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill="currentColor" />
                          ))}
                        </div>

                        <span className="text-sm text-gray-600">
                          {r.rating}
                        </span>

                        <span className="flex items-center gap-1 text-xs text-[#008080] font-medium">
                          ✔ Verified purchase
                        </span>
                      </div>

                      <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                        {r.text}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
                        <span className="text-gray-400">
                          was this review helpful to you?
                        </span>

                        <button className="flex items-center gap-1 hover:text-[#008080]">
                          <ThumbsUp size={14} />
                          Thank ({r.thank})
                        </button>

                        <button className="flex items-center gap-1 hover:text-red-500">
                          <ThumbsDown size={14} />
                          Dislike ({r.dislike})
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center gap-2 pb-8">
                <button
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                  disabled={page === 1}
                  className="w-9 h-9 flex items-center justify-center rounded-full border text-gray-500 disabled:opacity-40"
                >
                  ←
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (n) => (
                    <button
                      key={n}
                      onClick={() => setPage(n)}
                      className={`w-9 h-9 rounded-full border text-sm ${
                        page === n
                          ? "bg-[#008080] text-white border-[#008080]"
                          : "text-gray-600"
                      }`}
                    >
                      {n}
                    </button>
                  ),
                )}

                <button
                  onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                  disabled={page === totalPages}
                  className="w-9 h-9 flex items-center justify-center rounded-full border text-gray-500 disabled:opacity-40"
                >
                  →
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
