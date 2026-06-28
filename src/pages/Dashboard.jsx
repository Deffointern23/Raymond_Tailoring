import { useNavigate } from "react-router-dom";
import orders from "../data/orders";
import { useState } from "react";
import {
  Scissors,
  Eye,
  Wallet,
  Briefcase,
  Inbox,
  Image,
  Send,
  Settings,
  Zap,
  User,
  X,
} from "lucide-react";

function Dashboard() {
  
  const [showUpdateModal, setShowUpdateModal] = useState(false);

const [updatedNote, setUpdatedNote] = useState("");
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
const [quoteText, setQuoteText] = useState("");
const [orderList, setOrderList] = useState(orders);
const [selectedOrder, setSelectedOrder] = useState(null);
const [showEditModal, setShowEditModal] = useState(false);
const openEditModal = (order) => {
  setSelectedOrder({ ...order }); 
  setShowEditModal(true);
};

  return (
    <>
      <div className="min-h-screen bg-[#F7F5F2] p-5">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#2c241c]">
              Workplace Overview
            </h1>

            <p className="text-gray-500 text-sm mt-1">
              Good morning, Ritik — here's what needs your attention today.
            </p>
          </div>

      <button
  onClick={() => navigate("/posts", { state: { openModal: true } })}
  className="
    bg-[#b88d3b]
    text-white
    px-5 py-3
    rounded-xl
    font-medium
    w-full sm:w-auto

    md:whitespace-nowrap
    md:self-start
  "
>
  + New Post
</button>
        </div>

        {/* STORE BANNER */}
       <div className="bg-gradient-to-r from-[#1c1612] via-[#302319] to-[#6f5635] rounded-3xl p-4 md:p-6 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 mb-5">
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center">
  <div className="w-14 h-14 rounded-2xl bg-[#c9a24c] flex items-center justify-center">
    <Scissors size={24} />
  </div>

            <div>
              <p className="uppercase text-xs tracking-[4px] text-[#c9b58c]">
                Boutique Storefront
              </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-serif">
                Raymond Premium Tailoring
              </h2>

             <p className="text-gray-300 text-xs sm:text-sm mt-1">
                Linking Road, Bandra West, Mumbai • Mon–Sat 10:00 AM - 8:30 PM
              </p>
            </div>
          </div>

        <button
  onClick={() => navigate("/store")}
  className="border border-white/20 text-white px-4 py-2 rounded-xl w-full sm:w-auto"
>
  <Eye size={16} className="inline mr-2" />
  View Public Profile
</button>
        </div>

        {/* STATS */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
       <StatCard
  icon={<Wallet />}
  value="₹3,800"
  title="Total Revenue"
  subtitle="+22.4% this month"
  onClick={() => setActiveCard("revenue")}
/>

<StatCard
  icon={<Briefcase />}
  value="7"
  title="Active Jobs"
  subtitle="4 express"
  onClick={() => setActiveCard("jobs")}
/>

<StatCard
  icon={<Inbox />}
  value="1"
  title="New Inquiries"
  subtitle="awaiting quote"
  onClick={() => setActiveCard("inquiries")}
/>

<StatCard
  icon={<Image />}
  value="4"
  title="Showcase Posts"
  subtitle="published"
  onClick={() => setActiveCard("posts")}
/>
        </div>
{activeCard && (
<div className="bg-white rounded-3xl shadow-sm p-6 mb-6">

  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold text-[#2c241c]">
      {activeCard === "revenue" && "Revenue Details"}
      {activeCard === "jobs" && "Active Jobs"}
      {activeCard === "inquiries" && "New Enquiries"}
      {activeCard === "posts" && "Showcase Posts"}
    </h2>

    <button
      onClick={() => setActiveCard(null)}
      className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center"
    >
      <X size={20} />
    </button>
  </div>

  {activeCard === "revenue" && (
    <>
    

      <div className="space-y-3">
        <div className="flex justify-between border-b pb-3">
          <span>Today's Revenue</span>
          <span>₹1,250</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>This Week</span>
          <span>₹12,500</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>This Month</span>
          <span>₹38,000</span>
        </div>

        <div className="flex justify-between font-bold">
          <span>Total Revenue</span>
          <span>₹1,52,000</span>
        </div>
      </div>
    </>
  )}

  {activeCard === "jobs" && (
    <>
    

      {orders.map((order) => (
        <div
          key={order.id}
          className="flex justify-between border-b py-4"
        >
          <div>
            <h3 className="font-semibold">
              {order.customer}
            </h3>

            <p className="text-gray-500">
              {order.garment}
            </p>
          </div>

          <button
            onClick={() => navigate(`/orders/${order.id}`)}
            className="bg-[#b88d3b] text-white px-4 rounded-lg"
          >
            Open
          </button>
        </div>
      ))}
    </>
  )}

 {activeCard === "inquiries" && (
  <div className="border rounded-xl p-5 flex justify-between items-center">
    
    {/* LEFT CONTENT */}
    <div>
      <h3 className="font-semibold">
        Ritik Thakran
      </h3>

      <p className="text-gray-500 mt-2">
        Need a Bandhgala before reception.
      </p>
    </div>

    {/* RIGHT BUTTON */}
    <button
      onClick={() => navigate("/orders/1482")}
      className="bg-[#b88d3b] text-white px-5 py-2 rounded-xl whitespace-nowrap"
    >
      Open Inquiry
    </button>
    
  </div>
)}

  {activeCard === "posts" && (
    <>
      

      <div className="grid md:grid-cols-2 gap-5">

        <div className="border rounded-2xl p-5">
          <h3 className="font-semibold">
            Wedding Collection
          </h3>

          <p className="text-gray-500 mt-2">
            Published 2 days ago
          </p>
        </div>

        <div className="border rounded-2xl p-5">
          <h3 className="font-semibold">
            Premium Blazer
          </h3>

          <p className="text-gray-500 mt-2">
            Published 5 days ago
          </p>
        </div>

      </div>
    </>
  )}

</div>
)}
        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-5">
          {/* TASKS */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-semibold text-lg">Critical Tasks</h3>

              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs">
                5 need attention
              </span>
            </div>

            {/* Quote */}
            <div className="bg-[#f8ebe7] rounded-2xl p-4 flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center mb-4">
              <div>
                <h4 className="font-semibold">
                  Unquoted request · Ritik Thakran
                </h4>

                <p className="text-sm text-gray-500">
                  Bandhgala Jacket (custom request)
                </p>
              </div>

            <button
  onClick={() => navigate("/orders/1482")}
  className="bg-[#b88d3b] text-white px-4 py-2 rounded-xl w-full sm:w-auto"
>
  Quote now
</button>
            </div>

            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-[#FCFCFC] rounded-2xl p-4 flex justify-between items-center mb-3 shadow-sm"
              >
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
                    <Zap size={16} />
                  </div>

                  <div>
                    <h4 className="font-semibold">{order.customer}</h4>

                    <p className="text-sm text-gray-500">
                      Currently In Process
                    </p>
                  </div>
                </div>

                <button
    onClick={() => navigate(`/orders/${order.id}`)}
>
    Open
</button>
              </div>
            ))}
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white rounded-3xl p-5 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>

            <div className="grid grid-cols-2 gap-4">
             <ActionCard
  icon={<Image />}
  title="Add a Post"
  onClick={() => navigate("/posts", { state: { openModal: true } })}
/>
    <ActionCard
  icon={<Briefcase />}
  title="Update Orders"
  onClick={() => {
    setSelectedOrder({ ...orders[0] }); // clone safe
    setOrderList(orders);
    setShowEditModal(true);
  }}
/>
             <ActionCard
  icon={<Send />}
  title="Send Quotes"
  onClick={() => setShowQuoteModal(true)}
/>
             <ActionCard
  icon={<Settings />}
  title="Settings"
  onClick={() => navigate("/settings")}
/>
            </div>
            


            

{showEditModal && selectedOrder && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">

    <div className="bg-white w-[95%] max-w-2xl rounded-2xl shadow-2xl overflow-hidden">

      {/* HEADER */}
      <div className="px-5 py-4 border-b bg-[#f8f6f2] flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">Edit Order</h2>
          <p className="text-xs text-gray-500">
            {selectedOrder.orderNo}
          </p>
        </div>

        <button
          onClick={() => setShowEditModal(false)}
          className="w-9 h-9 rounded-full hover:bg-gray-200"
        >
          ✕
        </button>
      </div>

      {/* BODY */}
      <div className="p-5 grid grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto">

        {/* CUSTOMER */}
        <Input label="Customer Name"
          value={selectedOrder.customer}
          onChange={(e) =>
            setSelectedOrder({ ...selectedOrder, customer: e.target.value })
          }
        />

        <Input label="Phone"
          value={selectedOrder.phone}
          onChange={(e) =>
            setSelectedOrder({ ...selectedOrder, phone: e.target.value })
          }
        />

        <Input label="Address" className="col-span-2"
          value={selectedOrder.address}
          onChange={(e) =>
            setSelectedOrder({ ...selectedOrder, address: e.target.value })
          }
        />

        <Input label="Garment"
          value={selectedOrder.garment}
          onChange={(e) =>
            setSelectedOrder({ ...selectedOrder, garment: e.target.value })
          }
        />

        <Input label="Note"
          value={selectedOrder.note}
          onChange={(e) =>
            setSelectedOrder({ ...selectedOrder, note: e.target.value })
          }
        />

        {/* MEASUREMENTS */}
        <h3 className="col-span-2 font-semibold mt-2">
          Measurements
        </h3>

        {Object.keys(selectedOrder.measurements).map((key) => (
          <Input
            key={key}
            label={key}
            value={selectedOrder.measurements[key]}
            onChange={(e) =>
              setSelectedOrder({
                ...selectedOrder,
                measurements: {
                  ...selectedOrder.measurements,
                  [key]: e.target.value,
                },
              })
            }
          />
        ))}

      </div>

      {/* FOOTER */}
      <div className="px-5 py-4 border-t flex justify-end gap-3">

        <button
          onClick={() => setShowEditModal(false)}
          className="px-4 py-2 border rounded-xl"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            const updated = orderList.map((o) =>
              o.id === selectedOrder.id ? selectedOrder : o
            );

            setOrderList(updated);
            setShowEditModal(false);
          }}
          className="px-5 py-2 bg-[#b88d3b] text-white rounded-xl"
        >
          Save Changes
        </button>

      </div>

    </div>
  </div>
)}
            
            {showQuoteModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white w-[90%] max-w-md p-5 rounded-2xl">
      
      <h2 className="text-xl font-bold mb-3">Send Quote</h2>

      <textarea
        className="w-full border p-3 rounded-xl"
        rows={4}
        placeholder="Enter quote message..."
        value={quoteText}
        onChange={(e) => setQuoteText(e.target.value)}
      />

      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={() => setShowQuoteModal(false)}
          className="px-4 py-2 border rounded-xl"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            console.log("Quote sent:", quoteText);
            alert("Quote sent successfully!");
            setQuoteText("");
            setShowQuoteModal(false);
          }}
          className="px-4 py-2 bg-[#b88d3b] text-white rounded-xl"
        >
          Send
        </button>
      </div>

    </div>
  </div>
)}
          </div>
        </div>
      </div>
    </>
  );
}

function StatCard({
  icon,
  value,
  title,
  subtitle,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl p-5 shadow-sm text-center cursor-pointer hover:shadow-lg hover:-translate-y-1 transition"
    >
      <div className="w-10 h-10 rounded-xl bg-[#f5efe4] flex items-center justify-center mb-3 text-[#b88d3b] mx-auto">
        {icon}
      </div>

      <h2 className="text-3xl font-bold text-[#2c241c]">
        {value}
      </h2>

      <p className="text-gray-500 text-sm mt-1">
        {title}
      </p>

      <p className="text-xs text-green-600 mt-2">
        {subtitle}
      </p>
    </div>
  );
}

function ActionCard({ icon, title, onClick }) {
  return (
    <div
  onClick={onClick}
  className="bg-[#FCFCFC] rounded-2xl p-5 hover:bg-[#faf8f4] shadow-sm cursor-pointer"
>
      <div className="w-10 h-10 rounded-xl bg-[#f6efe3] flex items-center justify-center text-[#b88d3b] mb-3">
        {icon}
      </div>

      <h4 className="font-medium">{title}</h4>
    </div>
  );
}

function Input({ label, value, onChange, className = "" }) {
  return (
    <div className={className}>
      <label className="text-xs text-gray-500">{label}</label>
      <input
        className="w-full border p-2 rounded-lg mt-1"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Dashboard;
