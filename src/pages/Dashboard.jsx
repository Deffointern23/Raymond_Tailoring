import { useNavigate } from "react-router-dom";
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
} from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();
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

         <button className="bg-[#b88d3b] text-white px-5 py-3 rounded-xl font-medium w-full sm:w-auto">
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

          <button className="border border-white/20 text-white px-4 py-2 rounded-xl w-full sm:w-auto">
            <Eye size={16} className="inline mr-2" />
            View Public Profile
          </button>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-4 mb-5">
          <StatCard
            icon={<Wallet />}
            value="₹3,42,800"
            title="Total Revenue"
            subtitle="+22.4% this month"
          />

          <StatCard
            icon={<Briefcase />}
            value="7"
            title="Active Jobs"
            subtitle="4 express"
          />

          <StatCard
            icon={<Inbox />}
            value="1"
            title="New Inquiries"
            subtitle="awaiting quote"
          />

          <StatCard
            icon={<Image />}
            value="4"
            title="Showcase Posts"
            subtitle="published"
          />
        </div>

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
                onClick={() => navigate("/orders")}
                className="bg-[#b88d3b] text-white px-4 py-2 rounded-xl w-full sm:w-auto"
              >
                Quote now
              </button>
            </div>

            {["ORD-1482", "ORD-1481", "ORD-1476"].map((order) => (
              <div
                key={order}
                className="bg-[#FCFCFC] rounded-2xl p-4 flex justify-between items-center mb-3 shadow-sm"
              >
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
                    <Zap size={16} />
                  </div>

                  <div>
                    <h4 className="font-semibold">{order}</h4>

                    <p className="text-sm text-gray-500">
                      Currently In Process
                    </p>
                  </div>
                </div>

                <button className="bg-white px-4 py-2 rounded-xl shadow-sm">
                  Open
                </button>
              </div>
            ))}
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white rounded-3xl p-5 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>

            <div className="grid grid-cols-2 gap-4">
              <ActionCard icon={<Image />} title="Add a Post" />
              <ActionCard icon={<Briefcase />} title="Update Orders" />
              <ActionCard icon={<Send />} title="Send Quotes" />
              <ActionCard icon={<Settings />} title="Settings" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function StatCard({ icon, value, title, subtitle }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm text-center">
      <div className="w-10 h-10 rounded-xl bg-[#f5efe4] flex items-center justify-center mb-3 text-[#b88d3b] mx-auto">
        {icon}
      </div>

      <h2 className="text-3xl font-bold text-[#2c241c]">{value}</h2>

      <p className="text-gray-500 text-sm mt-1">{title}</p>

      <p className="text-xs text-green-600 mt-2">{subtitle}</p>
    </div>
  );
}

function ActionCard({ icon, title }) {
  return (
    <div className="bg-[#FCFCFC] rounded-2xl p-5 hover:bg-[#faf8f4] shadow-sm cursor-pointer">
      <div className="w-10 h-10 rounded-xl bg-[#f6efe3] flex items-center justify-center text-[#b88d3b] mb-3">
        {icon}
      </div>

      <h4 className="font-medium">{title}</h4>
    </div>
  );
}

export default Dashboard;
