import {
  Scissors,
  MapPin,
  Phone,
  Clock,
  Star,
  CheckCircle,
} from "lucide-react";

export default function StoreFront() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f6f2] via-white to-[#f8f6f2]">

      {/* Top Bar */}
     <div className="bg-white/90 backdrop-blur sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-[#2c241c]">
            Public Profile
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">

        {/* Store Card */}
        <div className="
bg-white
rounded-3xl
border
border-gray-100
shadow-lg
hover:shadow-xl
transition-all
duration-300
p-5
sm:p-8
">

          <div className="flex flex-col lg:flex-row lg:justify-between gap-8 items-start">

            {/* Left */}
            <div className="flex gap-5">

              <div className="w-20 h-20
sm:w-20
sm:h-20
rounded-3xl
shadow-md rounded-2xl bg-[#b88d3b] flex items-center justify-center">
                <Scissors className="text-white" size={42} />
              </div>

              <div>
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight font-serif text-[#2c241c] lg:whitespace-nowrap">
  Raymond Premium Tailoring
</h2>

              <div className="flex flex-wrap items-center gap-2 mt-3">
                  <Star
                    className="fill-yellow-400 text-yellow-400"
                    size={18}
                  />
                  <span className="font-semibold">4.9</span>

                  <span className="text-gray-500">
                    (320 Ratings)
                  </span>
                </div>

                <div className="mt-5 space-y-4 mt-6 text-gray-600">

                  <div className="flex items-start gap-3 text-sm sm:text-base">
                    <MapPin size={18} />
                    Linking Road, Bandra West, Mumbai
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone size={18} />
                    +91 9811122333
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock size={18} />
                    Mon - Sat | 10:00 AM - 8:30 PM
                  </div>

                </div>

              </div>

            </div>

            {/* Right */}
        {/* Right */}
{/* Right */}
<div className="w-full flex justify-center lg:justify-end lg:mt-0">
  <button className="
    w-full sm:w-auto
    bg-[#b88d3b]
    hover:bg-[#9d762e]
    text-white
    font-semibold
    px-8
    py-3.5
    rounded-2xl
    shadow-lg
    transition
  ">
    Book Custom Order
  </button>
</div>

          </div>

        </div>

        {/* About */}

    <div className="bg-white rounded-3xl border border-gray-100 shadow-lg mt-6 p-7">

          <h3 className="text-xl font-bold mb-4">
            About Store
          </h3>

          <p className="text-gray-600 leading-8 text-[15px]">
            Raymond Premium Tailoring offers custom-made suits,
            sherwanis, bandhgalas, blazers and formal wear.
            Every garment is stitched according to customer
            measurements with premium finishing and timely delivery.
          </p>

        </div>

        {/* Services */}

        <div className="bg-white rounded-3xl border border-gray-100 shadow-lg mt-6 p-7">

          <h3 className="text-xl font-bold mb-5">
            Services
          </h3>

          <div className="grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-4">

            {[
              "Wedding Suit",
              "Bandhgala",
              "Sherwani",
              "Blazer",
              "Custom Shirt",
              "Kurta Pajama",
              "Alteration",
              "Home Measurement Visit",
            ].map((item) => (
              <div
                key={item}
                className="
flex
items-center
gap-4
rounded-2xl
border
border-gray-200
p-4
hover:border-[#b88d3b]
hover:bg-[#faf6ef]
transition
duration-300
cursor-pointer
"
              >
                <CheckCircle
                  className="text-green-600"
                  size={20}
                />

                <span>{item}</span>
              </div>
            ))}

          </div>

        </div>

        {/* Contact */}

        <div className="bg-white rounded-3xl border border-gray-100 shadow-lg mt-6 mb-10 p-7">

          <h3 className="text-xl font-bold mb-5">
            Contact Information
          </h3>

          <div className="space-y-5 text-gray-700">

            <div className="flex items-center gap-3">
              <Phone size={18} />
              +91 9811122333
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              Linking Road, Bandra West, Mumbai
            </div>

            <div className="flex items-center gap-3">
              <Clock size={18} />
              Open Today • 10:00 AM - 8:30 PM
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}