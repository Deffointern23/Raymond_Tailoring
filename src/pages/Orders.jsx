import {
  Clock3,
  Package,
  Truck,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

import { useState } from "react";

function Orders() {
  const [activeTab, setActiveTab] = useState("active");

  return (
    <div className="min-h-screen bg-[#f8f6f2]">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3 mb-5">
        {/* LEFT */}
        <div>
          <h1 className="text-4xl font-serif text-[#2b241d]">Orders</h1>

          <p className="text-sm text-gray-500 mt-1">
            Manage & track every custom tailoring order — cut, stitch, pack &
            deliver
          </p>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-auto flex flex-col gap-3 lg:items-end lg:mr-2">
          {/* Export button */}
          <button className="h-8 px-3 lg:px-4 w-full md:w-auto lg:w-auto whitespace-nowrap bg-white border border-[#d7c29d] rounded-lg text-[11px] font-medium text-[#8d6d32] shadow-sm">
            Export Orders
          </button>

          {/* 4 buttons layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:flex gap-2 w-full lg:w-auto lg:justify-end">
            {/* Retail Category */}
            <div className="relative group">
              <button className="h-8 px-3 w-full lg:w-auto min-w-[140px] whitespace-nowrap bg-white border border-[#d7c29d] rounded-lg text-[11px] font-medium text-[#8d6d32] shadow-sm">
                Retail Category ▼
              </button>

              <div className="absolute left-0 top-10 w-52 bg-white rounded-xl border border-[#ece4d8] shadow-lg hidden group-hover:block z-50 overflow-hidden">
                <button className="w-full text-left px-4 py-2 text-[12px] hover:bg-[#faf8f5]">
                  All Garment Types
                </button>

                <button className="w-full text-left px-4 py-2 text-[12px] hover:bg-[#faf8f5] text-[#c49a42]">
                  ✓ Bridal Lehenga
                </button>

                <button className="w-full text-left px-4 py-2 text-[12px] hover:bg-[#faf8f5]">
                  Wedding Sherwani
                </button>

                <button className="w-full text-left px-4 py-2 text-[12px] hover:bg-[#faf8f5]">
                  Designer Suit
                </button>

                <button className="w-full text-left px-4 py-2 text-[12px] hover:bg-[#faf8f5]">
                  Blouse Stitching
                </button>

                <button className="w-full text-left px-4 py-2 text-[12px] hover:bg-[#faf8f5]">
                  Saree Fall/Pico
                </button>

                <button className="w-full text-left px-4 py-2 text-[12px] hover:bg-[#faf8f5]">
                  Custom Request
                </button>
              </div>
            </div>

            <div className="relative group">
              <button className="h-8 px-3 w-full lg:w-auto min-w-[140px] whitespace-nowrap bg-white border border-[#d7c29d] rounded-lg text-[11px] font-medium text-[#8d6d32] shadow-sm">
                Data Export ▼
              </button>

              <div className="absolute left-0 top-10 w-40 bg-white rounded-xl border border-[#ece4d8] shadow-lg hidden group-hover:block z-50 overflow-hidden">
                <button className="w-full text-left px-4 py-2 text-[12px] hover:bg-[#faf8f5] text-[#c49a42]">
                  ✓ Today
                </button>

                <button className="w-full text-left px-4 py-2 text-[12px] hover:bg-[#faf8f5]">
                  This Week
                </button>

                <button className="w-full text-left px-4 py-2 text-[12px] hover:bg-[#faf8f5]">
                  This Month
                </button>

                <button className="w-full text-left px-4 py-2 text-[12px] hover:bg-[#faf8f5]">
                  Last 30 Days
                </button>

                <button className="w-full text-left px-4 py-2 text-[12px] hover:bg-[#faf8f5]">
                  All Time
                </button>
              </div>
            </div>

            <div className="relative group">
              <button className="h-8 px-3 w-full lg:w-auto min-w-[110px] whitespace-nowrap bg-white border border-[#d7c29d] rounded-lg text-[11px] font-medium text-[#8d6d32] shadow-sm">
                Filters ▼
              </button>

              <div className="absolute right-0 top-10 w-44 bg-white rounded-xl border border-[#ece4d8] shadow-lg hidden group-hover:block z-50 overflow-hidden">
                <button className="w-full text-left px-4 py-2 text-[12px] hover:bg-[#faf8f5]">
                  Express only
                </button>

                <button className="w-full text-left px-4 py-2 text-[12px] hover:bg-[#faf8f5]">
                  Delivered only
                </button>

                <button className="w-full text-left px-4 py-2 text-[12px] hover:bg-[#faf8f5]">
                  Unquoted requests
                </button>

                <button className="w-full text-left px-4 py-2 text-[12px] text-[#c75b4f] hover:bg-[#faf8f5]">
                  Clear filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-8 border-b border-[#ece6dd] pb-3 mb-4">
        <button
          onClick={() => setActiveTab("active")}
          className={`font-medium pb-2 ${
            activeTab === "active"
              ? "text-[#2b241d] border-b-2 border-[#c49a42]"
              : "text-gray-400"
          }`}
        >
          Active Orders
        </button>

        <button
          onClick={() => setActiveTab("past")}
          className={`font-medium pb-2 ${
            activeTab === "past"
              ? "text-[#2b241d] border-b-2 border-[#c49a42]"
              : "text-gray-400"
          }`}
        >
          Past Orders <span className="ml-1">2</span>
        </button>
      </div>

      {/* TOP ACTIONS */}

      {activeTab === "active" ? (
        <>
          {/* Alert */}
          <div className="bg-[#fdecea] border border-[#f8d7d2] rounded-xl p-3 text-sm text-[#b4534a] mb-5">
            🔥 <span className="font-medium">1 requires a quote.</span> Just
            price it up & timeline — proceed to the next production stage.
          </div>

          {/* Top Layout */}
          <div className="grid lg:grid-cols-[1fr_280px] gap-5">
            {/* LEFT */}
            <div>
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
                <Card
                  icon={<Clock3 size={42} />}
                  number="3"
                  label="In Process"
                  color="text-[#d3a44f]"
                />

                <Card
                  icon={<Package size={42} />}
                  number="2"
                  label="Packed"
                  color="text-[#8b7cc7]"
                />

                <Card
                  icon={<Truck size={42} />}
                  number="2"
                  label="Out For Delivery"
                  color="text-[#77a7b8]"
                />

                <Card
                  icon={<CheckCircle2 size={42} />}
                  number="0"
                  label="Delivered"
                  color="text-[#85b58f]"
                />
              </div>

              {/* Table Header */}
              <div className="hidden lg:grid grid-cols-7 px-4 text-[11px] uppercase tracking-wider text-gray-400 mb-2">
                <div>Order</div>
                <div>Customer</div>
                <div>Type</div>
                <div>Garment</div>
                <div>Status</div>
                <div>Total</div>
                <div>ETA</div>
              </div>

              {/* Order Row */}
              <div className="bg-white rounded-2xl border border-[#f0e8de] overflow-hidden">
                <div className="flex">
                  <div className="w-1 bg-[#d55b4a]" />

                  <div className="flex-1 p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 items-start lg:items-center">
                      <div>
                        <h3 className="font-semibold text-[#2b241d]">
                          #ORD-1482
                        </h3>

                        <span className="text-[10px] bg-red-100 text-red-600 px-2 py-1 rounded-full">
                          EXPRESS
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#8f5b75] text-white flex items-center justify-center text-xs">
                          AM
                        </div>

                        <div>
                          <p className="text-sm font-medium">Arshad Merchant</p>

                          <p className="text-xs text-gray-400">Andheri West</p>
                        </div>
                      </div>

                      <div className="text-sm text-gray-600">
                        Bridal Lehenga
                      </div>

                      <div>
                        <p className="text-sm font-medium">
                          Maroon Silk Embroidered
                        </p>

                        <p className="text-xs text-gray-400">Lehenga Skirt</p>
                      </div>

                      <div>
                        <div className="flex gap-2 mb-1">
                          <div className="w-7 h-7 rounded-full bg-[#d3a44f]" />
                          <div className="w-7 h-7 rounded-full bg-[#ece7df]" />
                          <div className="w-7 h-7 rounded-full bg-[#ece7df]" />
                          <div className="w-7 h-7 rounded-full bg-[#ece7df]" />
                        </div>

                        <p className="text-xs text-[#d3a44f]">In Process</p>
                      </div>

                      <div>
                        <p className="font-semibold">₹53,850</p>

                        <p className="text-xs text-gray-400">Paid 50%</p>
                      </div>

                      <div className="flex items-center justify-between lg:justify-between">
                        <div>
                          <p className="text-sm">29 May 2026</p>

                          <p className="text-xs text-gray-400">12:30 PM</p>
                        </div>

                        <ChevronRight size={18} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-4 border border-[#eee6dc]">
                <h3 className="font-semibold mb-4">Order Summary</h3>

                <div className="space-y-3 text-sm">
                  <Row label="Total Orders" value="34" />
                  <Row label="Total Revenue" value="₹7,42,800" />
                  <Row label="Average Order Value" value="₹19,082" />
                  <Row label="Production" value="+20.4%" green />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-[#eee6dc]">
                <h3 className="font-semibold mb-4">Top Garment Categories</h3>

                <div className="space-y-3 text-sm">
                  <Row label="Bridal / Wedding Wear" value="33%" />
                  <Row label="Designer Suits" value="23%" />
                  <Row label="Ethnic Wear" value="18%" />
                  <Row label="Blouse & Stitching" value="14%" />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="grid lg:grid-cols-[1fr_280px] gap-5">
          {/* LEFT */}
          <div className="bg-white rounded-2xl border border-[#eee6dc] h-[170px] flex items-center justify-center shadow-sm">
            <div className="text-center">
              <div className="text-3xl mb-2">📦</div>

              <p className="text-sm text-gray-400">
                No orders match your filters.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-4 border border-[#eee6dc]">
              <h3 className="font-semibold mb-4">Order Summary</h3>

              <div className="space-y-3 text-sm">
                <Row label="Total Orders" value="36" />
                <Row label="Total Revenue" value="₹8,43,600" />
                <Row label="Average Order Value" value="₹10,082" />
                <Row label="This Month" value="+11.6%" green />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-[#eee6dc]">
              <h3 className="font-semibold mb-4">Top Garment Categories</h3>

              <div className="space-y-3 text-sm">
                <Row label="Bridal / Wedding Wear" value="33%" />
                <Row label="Designer Suits" value="23%" />
                <Row label="Ethnic Wear" value="18%" />
                <Row label="Blouse & Stitching" value="14%" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-[#eee6dc]">
              <h3 className="font-semibold mb-4">Recent Activity</h3>

              <div className="space-y-2 text-xs text-gray-500">
                <p>• New quote request from Ayesha Khan</p>
                <p>• Order #ORD-1458 moved to Packed</p>
                <p>• Order #ORD-1461 delivered</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Card({ icon, number, label, color }) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-[#eee6dc] flex flex-col items-center justify-center text-center min-h-[140px]">
      <div className={`mb-3 ${color}`}>{icon}</div>

      <h2 className="text-2xl font-bold mb-1">{number}</h2>

      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}

function Row({ label, value, green }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-500">{label}</span>

      <span className={green ? "text-green-600 font-medium" : "font-medium"}>
        {value}
      </span>
    </div>
  );
}

export default Orders;
