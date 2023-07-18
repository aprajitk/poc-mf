import React from "react";

const Nav = () => {
  return (
    <div className="bg-slate-200 sticky top-16 flex justify-between px-4">
      <p className="text-slate-700">Home</p>
      <p className="text-slate-700">Cart</p>
      <p className="text-slate-700">Wishlist</p>
      <p className="text-slate-700">History</p>
      <p className="text-slate-700">Track Order</p>
      <p className="text-slate-700">Profile</p>
    </div>
  );
};

export default Nav;
