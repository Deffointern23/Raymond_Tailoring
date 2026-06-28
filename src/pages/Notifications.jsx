import { useState } from "react";
import { Bell, ShoppingBag, Package, CreditCard, AlertCircle, CheckCircle2 } from "lucide-react";

function Notifications() {
  const [notifications] = useState([
    {
      id: 1,
      type: "order",
      title: "New Order Received",
      message: "Order #ORD1485 has been placed by customer.",
      time: "2 min ago",
      unread: true,
    },
    {
      id: 2,
      type: "stock",
      title: "Low Stock Alert",
      message: "Kurti stock is running low (only 2 left).",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 3,
      type: "payment",
      title: "Payment Received",
      message: "₹25,000 received for Order #ORD1481.",
      time: "Today, 10:30 AM",
      unread: false,
    },
    {
      id: 4,
      type: "system",
      title: "System Update",
      message: "Inventory system updated successfully.",
      time: "Yesterday",
      unread: false,
    },
  ]);

  const getIcon = (type) => {
    switch (type) {
      case "order":
        return <ShoppingBag className="text-amber-600" size={20} />;
      case "stock":
        return <Package className="text-red-500" size={20} />;
      case "payment":
        return <CreditCard className="text-green-600" size={20} />;
      default:
        return <AlertCircle className="text-gray-500" size={20} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F0FF] p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#eebf25]">
            Notifications
          </h1>
          <p className="text-gray-500 text-sm">
            Latest updates from your store
          </p>
        </div>

        <button className="px-4 py-2 bg-white border rounded-xl text-sm hover:shadow">
          Mark all as read
        </button>
      </div>

      {/* NOTIFICATIONS LIST */}
      <div className="space-y-3">
        {notifications.map((item) => (
          <div
            key={item.id}
            className={`flex gap-4 p-4 rounded-2xl border bg-white hover:shadow-md transition relative ${
              item.unread ? "border-l-4 border-l-amber-500" : ""
            }`}
          >
            {/* ICON */}
            <div className="w-10 h-10 rounded-xl bg-[#F5F0FF] flex items-center justify-center">
              {getIcon(item.type)}
            </div>

            {/* CONTENT */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-[#c77d28]">
                  {item.title}
                </h3>

                {item.unread && (
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                )}
              </div>

              <p className="text-sm text-gray-500 mt-1">
                {item.message}
              </p>

              <p className="text-xs text-gray-400 mt-2">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;