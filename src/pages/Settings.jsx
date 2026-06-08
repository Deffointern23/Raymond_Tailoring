import { useState } from "react";
function Settings() {
  const [admin, setAdmin] = useState(() => {
  return JSON.parse(localStorage.getItem("admin")) || {
    name: "Admin",
    email: "admin@shop.com",
    phone: "",
    store: "",
    password: "1234",
  };
});
const [passwords, setPasswords] = useState({
  current: "",
  newPass: "",
});
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-[#dab307] mb-8">
        ⚙️ Profile Details
      </h1>

      {/* Profile Section */}
      <div
        className="bg-white
border border-[#E9DDFD]
                  p-6 rounded-2xl shadow-md mb-8
                  hover:shadow-lg transition"
      >
        <h2 className="text-xl font-semibold text-[#dda610] mb-5 border-b border-[#E9DDFD] pb-2">
          Profile Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
  type="text"
  placeholder="Vendor Name"
  value={admin.name}
  onChange={(e) =>
    setAdmin({ ...admin, name: e.target.value })
  }
 className="bg-white/80 border border border-[#d8a12b]
focus:border-[#A0522D]
focus:ring-[#6F4E37]/20 p-3 rounded-xl outline-none transition"
/>

          <input
            type="email"
            placeholder="Email"
            value={admin.email}
onChange={(e) =>
  setAdmin({ ...admin, email: e.target.value })
}
            className="bg-white/80 border border border-[#d8a12b]
focus:border-[#A0522D]
focus:ring-[#6F4E37]/20 p-3 rounded-xl outline-none transition"
          />

          <input
            type="text"
            placeholder="Phone"
            value={admin.phone}
onChange={(e) =>
  setAdmin({ ...admin, phone: e.target.value })
}
          className="bg-white/80 border border border-[#d8a12b]
focus:border-[#A0522D]
focus:ring-[#6F4E37]/20 p-3 rounded-xl outline-none transition"
          />

          <input
            type="text"
            placeholder="Store Name"
            value={admin.store}
onChange={(e) =>
  setAdmin({ ...admin, store: e.target.value })
}
            className="bg-white/80 border border border-[#d8a12b]
focus:border-[#A0522D]
focus:ring-[#6F4E37]/20 p-3 rounded-xl outline-none transition"
          />
        </div>

      <button
  onClick={() => {
    localStorage.setItem("admin", JSON.stringify(admin));
    alert("Profile Updated Successfully!");
  }}
  className="mt-6 bg-gradient-to-r from-[#f1e31c] to-[#b7c40b]
             text-white px-6 py-2 rounded-xl font-semibold
             shadow-md hover:scale-105 transition"
>
  Save Changes
</button>
      </div>

      {/* Password Section */}
      <div
        className="bg-gradient-to-br from-white via-[#FAF7FF] to-[#F3E8FF]
border border-[#E9DDFD]
                  p-6 rounded-2xl shadow-md hover:shadow-lg transition"
      >
        <h2 className="text-xl font-semibold text-[#dda610] mb-5 border-b border-[#E9DDFD] pb-2">
          Change Password
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
  type="password"
  placeholder="Current Password"
  value={passwords.current}
  onChange={(e) =>
    setPasswords({
      ...passwords,
      current: e.target.value,
    })
  }
  className="bg-white/80 border border border-[#d8a12b]
focus:border-[#A0522D]
focus:ring-[#6F4E37]/20 p-3 rounded-xl outline-none"
/>
         <input
  type="password"
  placeholder="New Password"
  value={passwords.newPass}
  onChange={(e) =>
    setPasswords({
      ...passwords,
      newPass: e.target.value,
    })
  }
  className="bg-white/80 border border border-[#d8a12b]
focus:border-[#A0522D]
focus:ring-[#6F4E37]/20 p-3 rounded-xl outline-none"
/>
        </div>

       <button
  onClick={() => {
    const savedAdmin = JSON.parse(localStorage.getItem("admin"));

    if (passwords.current !== savedAdmin.password) {
      alert("Current password is wrong!");
      return;
    }

    const updatedAdmin = {
      ...savedAdmin,
      password: passwords.newPass,
    };

    localStorage.setItem("admin", JSON.stringify(updatedAdmin));

    setPasswords({ current: "", newPass: "" });

    alert("Password updated successfully!");
  }}
  className="mt-6 bg-gradient-to-r from-[#ecde10] to-[#a8ce20]
             text-white px-6 py-2 rounded-xl font-semibold
             shadow-md hover:scale-105 hover:shadow-xl transition"
>
  Update Password
</button>
      </div>
    </div>
  );
}

export default Settings;
