import React from "react";

const CourseFooter = () => {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-black text-white">
            up
            <span className="text-orange-500">
              wise
            </span>
          </span>
        </div>

        <p className="text-sm">
          Delivering top-tier corporate
          technology training globally.
        </p>
      </div>

      <div className="border-t border-slate-900 py-6 text-center text-xs">
        © {new Date().getFullYear()} Upwise
        Training. All rights reserved.
      </div>
    </footer>
  );
};

export default CourseFooter;