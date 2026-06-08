import { User } from "lucide-react";
import { useState } from "react";
const Orders = () => {
  const [images, setImages] = useState({});
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteStage, setQuoteStage] = useState("draft");
  const [currentStep, setCurrentStep] = useState(0);
  const [stitchingCharge, setStitchingCharge] = useState("");
  const [fabricCharge, setFabricCharge] = useState("");
  const [timeline, setTimeline] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const totalQuote =
    (Number(stitchingCharge) || 0) + (Number(fabricCharge) || 0);
  const isQuoteReady =
    stitchingCharge &&
    fabricCharge &&
    recommendation?.trim() &&
    timeline?.trim();
  const steps = ["In Process", "Packed", "Out for Shipping", "Delivered"];
  return (
    <>
      <div className="min-h-screen bg-[#F7F5F2] p-6">
        <div className="relative mb-8">
         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* LEFT SIDE */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 max-sm:flex-col max-sm:items-start">
           <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2c241c] break-all">
  #ORD-1485
</h1>

<div className="w-full flex gap-2 sm:w-auto">
  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium">
    Express
  </span>

  {quoteStage !== "sent" && (
    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
      Awaiting Quote
    </span>
  )}
</div>
            </div>

            {/* RIGHT SIDE */}
           <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button className="border border-gray-300 px-4 py-2 rounded-xl font-medium w-full sm:w-auto">
                Message Customer
              </button>

              {quoteStage === "sent" && (
                <button
                  onClick={() => {
                    if (currentStep === 0) setCurrentStep(1);
                    else if (currentStep === 1) setCurrentStep(2);
                    else if (currentStep === 2) setCurrentStep(3);
                  }}
                  className="bg-[#b88d3b] text-white px-4 py-2 rounded-xl font-medium w-full sm:w-auto"
                >
                  {currentStep === 0
                    ? "→ Mark as Packed"
                    : currentStep === 1
                      ? "→ Shipped Order"
                      : currentStep === 2
                        ? "→ Deliver Order"
                        : "✓ Completed"}
                </button>
              )}

              {quoteStage === "draft" && (
                <button
                  onClick={() => setShowQuoteModal(true)}
                  className="bg-[#b88d3b] text-white px-4 py-2 rounded-xl font-medium"
                >
                  Build Quote
                </button>
              )}
            </div>
          </div>
          <p className="text-gray-500 text-sm md:text-base mt-3">
            Custom Request • 1 garment Received on 1 May 2026, 07:25 PM
          </p>
        </div>

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white border border-[#f1d8d1] rounded-3xl p-5 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 text-[13px] uppercase tracking-wider text-gray-400 font-semibold">
              👤 Customer
            </h3>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#b88d3b] text-white flex items-center justify-center font-bold">
                RT
              </div>

              <div>
                <h4 className="font-bold text-[#2c241c]">Ritik Thakran</h4>

                <p className="text-gray-500 text-sm">+91 9811122333</p>
              </div>
            </div>

            <p className="text-sm text-gray-600">
              Penthouse, Oberoi Springs
              <br />
              Andheri West, Mumbai - 301702
            </p>
          </div>

          {/* NEEDS CONFIRMATION */}
          <div className="bg-white border border-[#f1d8d1] rounded-3xl p-5 shadow-sm">
            <p className="text-[13px] uppercase tracking-wider text-gray-400 font-semibold mb-3">
              Delivery Constraint
            </p>

            <h3 className="text-[#c85f4c] text-3xl font-serif font-semibold mb-4">
              Needs confirmation
            </h3>

            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-[#fde8e2] text-[#d65f45] text-xs font-medium">
                ⚡ Express requested
              </span>

              <span className="px-3 py-1 rounded-full bg-[#f5f1ee] text-gray-500 text-xs font-medium">
                Express requested
              </span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Order Received</span>
                <span className="font-medium text-[#2c241c]">1 May, 2026</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Measurement</span>
                <span className="font-medium text-[#2c241c]">
                  Home visit requested
                </span>
              </div>
            </div>
          </div>

          {/* PROCESS STATUS */}
          <div className="bg-white border border-[#f1d8d1] rounded-3xl p-5 shadow-sm">
            <p className="text-[13px] uppercase tracking-wider text-gray-400 font-semibold mb-3">
              Process & Status
            </p>

            {quoteStage === "draft" ? (
              <>
                <div className="bg-[#fde8e2] border border-[#f1d8d1] rounded-xl p-4 mb-5">
                  <h4 className="text-[#d65f45] font-semibold mb-1">
                    Quote Pending
                  </h4>

                  <p className="text-sm text-gray-500">
                    Send a cost estimate & timeline to start production.
                  </p>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Payment</span>
                    <span>—</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Payment Status</span>

                    <span className="px-3 py-1 rounded-full bg-[#fde8e2] text-[#d65f45] text-xs font-medium">
                      Quote Pending
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="relative w-full mb-5">
                  {/* STEPS ROW */}
                  <div className="flex justify-between items-center relative z-10">
                    {/* STEP 1 */}
                    <div className="text-center">
                      <div
                        className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-white ${
                          currentStep >= 0 ? "bg-[#b88d3b]" : "bg-gray-300"
                        }`}
                      >
                        ✓
                      </div>
                      <p className="text-xs mt-2">In Process</p>
                    </div>

                    {/* STEP 2 */}
                    <div className="text-center">
                      <div
                        className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-white ${
                          currentStep >= 1 ? "bg-[#7a6ea8]" : "bg-gray-300"
                        }`}
                      >
                        📦
                      </div>
                      <p className="text-xs mt-2">Packed</p>
                    </div>

                    {/* STEP 3 */}
                    <div className="text-center">
                      <div
                        className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-white ${
                          currentStep >= 2 ? "bg-[#4b7b89]" : "bg-gray-300"
                        }`}
                      >
                        🚚
                      </div>
                      <p className="text-xs mt-2">Shipping</p>
                    </div>

                    {/* STEP 4 */}
                    <div className="text-center">
                      <div
                        className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-white ${
                          currentStep >= 3 ? "bg-[#6b8f67]" : "bg-gray-300"
                        }`}
                      >
                        ✓
                      </div>
                      <p className="text-xs mt-2">Delivered</p>
                    </div>
                  </div>

                  {/* LINE*/}
                  <div className="absolute top-5 left-0 right-0 flex justify-between px-5 z-0">
                    <div
                      className={`flex-1 h-[2px] mx-2 ${
                        currentStep >= 1 ? "bg-[#b88d3b]" : "bg-gray-300"
                      }`}
                    />

                    <div
                      className={`flex-1 h-[2px] mx-2 ${
                        currentStep >= 2 ? "bg-[#7a6ea8]" : "bg-gray-300"
                      }`}
                    />

                    <div
                      className={`flex-1 h-[2px] mx-2 ${
                        currentStep >= 3 ? "bg-[#4b7b89]" : "bg-gray-300"
                      }`}
                    />
                  </div>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Payment</span>
                    <span>—</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Payment Status</span>

                    <span className="px-3 py-1 rounded-full bg-[#fde8e2] text-[#d65f45] text-xs font-medium">
                      {quoteStage === "draft" ? "Quote Pending" : "Quote Sent"}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Order Total</span>

                    {quoteStage === "draft" ? (
                      <span>—</span>
                    ) : (
                      <span className="font-bold text-[#b88d3b]">
                        ₹{totalQuote}
                      </span>
                    )}
                  </div>
                  {quoteStage === "sent" && currentStep === 3 && (
                    <div className="bg-green-100 text-green-700 p-3 rounded-xl text-center font-semibold mt-4">
                      🎉 Order Completed
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
        {/* MEASUREMENTS */}
        <div className="bg-white rounded-3xl p-5 mb-8">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <User size={18} />
            Customer Measurements Home Visit Requested
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Measure title="Chest" value='40"' />
            <Measure title="Waist" value='38"' />
            <Measure title="Shoulder" value='18.5"' />
            <Measure title="Sleeve" value='24"' />
            <Measure title="Length" value='33"' />
            <Measure title="Neck" value='15"' />
          </div>
        </div>

        {/* GARMENT WORKSHEET */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-5">
          <span className="bg-[#f5efe4] px-3 py-1 rounded-full text-xs w-fit">
            STITCHING
          </span>

          <h3 className="font-bold text-lg sm:text-xl break-words">Velvet Bandhgala</h3>

          <span className="text-[#6b7d5b] font-medium text-sm break-words">
            Bottle-green velvet proposed
          </span>
        </div>

        {/* Upload Areas */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          {[
            "Front / Fabric",
            "Back / Details",
            "Reference 1",
            "Reference 2",
          ].map((title, index) => (
            <label
              key={index}
              className="h-32 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center cursor-pointer text-gray-400 hover:bg-gray-50 transition"
            >
              <span className="text-sm font-semibold text-gray-400 mb-2">
                {title}
              </span>

              {images[index] ? (
                <img
                  src={images[index]}
                  alt="preview"
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <span>Upload Image</span>
              )}

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) =>
                  setImages({
                    ...images,
                    [index]: URL.createObjectURL(e.target.files[0]),
                  })
                }
              />
            </label>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Customer Description</h4>

            <div className="bg-[#f5efe4] p-4 rounded-xl text-sm">
              Reception on the 14th. Bandhgala with satin lining and brooch
              loop.
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Stitching Method</h4>

            <p className="text-gray-500">
              To be finalised after measurements & fabric confirmation.
            </p>
          </div>
        </div>
        {showQuoteModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6 overflow-y-auto">
            <div className="bg-[#f7f5f2] w-[620px] max-h-[85vh] rounded-[24px] shadow-2xl overflow-y-auto">
              {/* HEADER */}
              <div className="sticky top-0 bg-[#f7f5f2] px-6 py-5 border-b border-[#e4ddd5] flex justify-between items-start z-10">
                <div>
                  <h2 className="text-[32px] leading-none font-serif text-[#3a2c21]">
                    Build a Quote
                  </h2>

                  <p className="text-sm text-[#a29487] mt-2">
                    Custom request from Ritik Thakran · Custom Request
                  </p>
                </div>

                <button
                  onClick={() => setShowQuoteModal(false)}
                  className="w-9 h-9 rounded-full border border-[#ddd] bg-white flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              {/* BODY */}
              <div className="p-5 space-y-4">
                {/* CUSTOMER NOTE */}
                <div className="bg-[#f4ebdc] border border-[#eadcc4] rounded-2xl p-5 mb-5">
                  <p className="text-[#7f6f5f] italic leading-7">
                    Reception on the 14th. Need a bandhgala with a contrast
                    satin lining and a brooch loop. Please share price +
                    timeline and book a measurement visit this week.
                  </p>

                  <p className="text-[#8f8376] text-sm mt-3">— Ritik Thakran</p>
                </div>

                {/* PRICE INPUTS */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <label className="text-sm font-medium text-[#5f5850] block mb-2">
                      Stitching charge (₹)
                    </label>

                    <input
                      type="number"
                      value={stitchingCharge}
                      onChange={(e) => setStitchingCharge(e.target.value)}
                      placeholder="e.g. 9500"
                      className="w-full h-12 rounded-xl border border-[#ddd] px-4 bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#5f5850] block mb-2">
                      Fabric / material (₹)
                    </label>

                    <input
                      type="number"
                      value={fabricCharge}
                      onChange={(e) => setFabricCharge(e.target.value)}
                      placeholder="e.g. 6000"
                      className="w-full h-12 rounded-xl border border-[#ddd] px-4 bg-white"
                    />
                  </div>
                </div>

                {/* TIMELINE */}
                <div className="mb-5">
                  <label className="text-sm font-medium text-[#5f5850] block mb-2">
                    Estimated timeline
                  </label>

                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full h-12 rounded-xl border border-[#ddd] px-4 bg-white"
                  >
                    <option value="">Select Timeline</option>
                    <option value="7 days">7 days — Standard</option>
                    <option value="5 days">5 days — Express</option>
                    <option value="10 days">10 days — Premium Finish</option>
                  </select>
                </div>

                {/* RECOMMENDATION */}
                <div className="mb-5">
                  <label className="text-sm font-medium text-[#5f5850] block mb-2">
                    Recommendations to customer
                  </label>

                  <textarea
                    rows={4}
                    value={recommendation}
                    onChange={(e) => setRecommendation(e.target.value)}
                    placeholder="Suggest fabric, fit notes, add-ons..."
                    className="w-full rounded-xl border border-[#ddd] p-4 resize-none"
                  />
                </div>

                {/* SUMMARY */}
                <div className="bg-white border border-[#ddd] rounded-2xl p-4 mb-6">
                  <div className="flex justify-between py-2 text-[#555]">
                    <span>Stitching</span>
                    <span>₹{stitchingCharge || 0}</span>
                  </div>

                  <div className="border-t my-2"></div>

                  <div className="flex justify-between py-2 text-[#555]">
                    <span>Fabric / material</span>
                    <span>₹{fabricCharge || 0}</span>
                  </div>

                  <div className="border-t my-2"></div>

                  <div className="flex justify-between py-2 font-bold text-[#2c241c]">
                    <span>Quote Total</span>

                    <span className="text-[#b88d3b] text-xl font-bold">
                      ₹{totalQuote}
                    </span>
                  </div>
                </div>

                {/* BUTTONS */}
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setShowQuoteModal(false)}
                    className="px-6 py-3 rounded-xl bg-white border border-[#ddd] font-medium"
                  >
                    Cancel
                  </button>

                  <button
                    disabled={!isQuoteReady}
                    onClick={() => {
                      setShowQuoteModal(false);
                      setQuoteStage("sent");
                      setCurrentStep(0);
                    }}
                    className={`px-8 py-3 rounded-xl text-white font-medium transition-all ${
                      isQuoteReady
                        ? "bg-[#b88d3b] hover:bg-[#a57d31]"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                  >
                    ✈ Send Quote to Customer
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
function Measure({ title, value }) {
  return (
    <div className="bg-[#F6F4F0] rounded-xl p-3">
      <p className="text-xs text-gray-500">{title}</p>
      <h4 className="font-bold text-lg">{value}</h4>
    </div>
  );
}

export default Orders;
