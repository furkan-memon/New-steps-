import React, { useState } from "react";
import {
  LayoutGrid,
  List,
  Search,
  Calendar,
  MessageSquare,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import img from '../../assets/images/hot-sauce-bg.jpg'
import { Link } from "react-router-dom";

/* ---------------- Sidebar Widget ---------------- */

const SidebarWidget = ({ title, children, extra }) => (
  <div className="bg-[#f8f9fb] rounded-[20px] border border-gray-100 mb-6 overflow-hidden shadow-sm">
    <div className="px-6 py-5 flex justify-between items-center">
      <h3 className="text-[#1a1a1a] font-bold text-[17px] tracking-tight">{title}</h3>
      {extra}
    </div>
    <div className="px-6 pb-6">{children}</div>
  </div>
);

/* ---------------- Blog Card ---------------- */

const BlogCard = ({ view }) => {
  // SIDEBAR MINI VIEW (Recent Posts)
  if (view === "sidebar") {
    return (
      <div className="flex gap-4 p-4 bg-white rounded-[18px] border border-gray-100 mb-3 last:mb-0 shadow-sm">
        <div className="w-[70px] h-[70px] shrink-0 overflow-hidden rounded-[12px]">
          <img
            src={img}
            alt="post"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="text-[13px] font-bold text-[#1a1a1a] leading-[1.3] mb-1.5">
            The Future of Industrial Design
          </h4>
          <span className="text-[10px] font-semibold bg-[#eaf7ed] text-[#5cb85c] px-2.5 py-1 rounded-full w-fit mb-2">
            Category Name
          </span>
          <div className="flex items-center gap-2 text-[10px] text-gray-400 font-medium">
            <span className="flex items-center gap-1"><Calendar size={12} className="opacity-70" /> 09 Feb 2027</span>
            <span className="text-gray-200">|</span>
            <span className="flex items-center gap-1"><MessageSquare size={12} className="opacity-70" /> (10)</span>
          </div>
        </div>
      </div>
    );
  }

  // LIST VIEW
  if (view === "list") {
    return (
      <div className="flex flex-col md:flex-row gap-8 p-6 bg-white rounded-[32px] border border-gray-100 mb-6 shadow-sm group">
         <div className="md:w-[260px] min-w-[260px] h-[200px] overflow-hidden rounded-[24px]">
    <img
      src={img}
      alt="post"
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
  </div>

        <div className="flex flex-col justify-center py-2">
          <span className="text-[11px] font-bold bg-[#fff9e6] text-[#ffb800] px-3.5 py-1.5 rounded-lg w-fit mb-5">
            Category Name
          </span>

          <div className="flex items-center gap-4 text-[13px] text-gray-400 mb-4 font-medium">
            <span className="flex items-center gap-1.5">
              <Calendar size={15} className="text-gray-300" /> 12:40 PM, 09 Feb 2027
            </span>
            <span className="text-gray-200">|</span>
            <span className="flex items-center gap-1.5">
              <MessageSquare size={15} className="text-gray-300" /> Comment (10)
            </span>
          </div>

          <h2 className="text-[24px] font-extrabold text-[#1a1a1a] mb-4 leading-tight">
            The Future of Industrial Design
          </h2>

          <p className="text-[14px] leading-relaxed text-gray-500 mb-8 line-clamp-3">
            It is important that you buy links because the links are what get you the results that you want. 
            The popularity of the links that are listed in the MTA directory is in fact one of the most important factors.
          </p>

          <button className="flex items-center gap-2.5 bg-[#008080] text-white px-7 py-3 rounded-full w-fit text-sm font-bold shadow-lg shadow-[#008080]/20 hover:bg-[#006b6b] transition-all">
            Read More <ArrowUpRight size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    );
  }

  /* GRID VIEW */
  return (
    <div className="bg-white rounded-[28px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="aspect-[4/3] overflow-hidden m-4 rounded-[20px]">
        <img
          src={img}
          alt="post"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="px-6 pb-7">
        <span className="text-[10px] font-bold bg-[#fff9e6] text-[#ffb800] px-3 py-1 rounded-md">
          Category Name
        </span>

        <div className="flex items-center gap-3 text-[11px] text-gray-400 mt-4 font-medium">
          <span className="flex items-center gap-1">
            <Calendar size={13} className="opacity-70" /> 12:40 PM, 09 Feb 2027
          </span>
          <span className="text-gray-200">|</span>
          <span className="flex items-center gap-1">
            <MessageSquare size={13} className="opacity-70" /> (10)
          </span>
        </div>

        <h3 className="font-extrabold mt-4 text-[17px] text-[#1a1a1a] leading-[1.4] line-clamp-2">
          The Future of Industrial Design
        </h3>

        <p className="text-[12px] text-gray-500 mt-3 line-clamp-2 leading-relaxed">
          It is important that you buy links because the links are what get you the results you need.
        </p>

        <button className="mt-6 flex items-center gap-2 bg-[#008080] text-white px-5 py-2.5 rounded-full text-[11px] font-bold shadow-md shadow-[#008080]/10">
          Read More <ArrowUpRight size={14} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

/* ---------------- Main Blog Page ---------------- */

const BlogPage = () => {
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);

  const blogs = Array.from({ length: 12 });
  const perPage = view === "grid" ? 6 : 3;
  const totalPages = Math.ceil(blogs.length / perPage);
  const currentBlogs = blogs.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="max-w-7xl mx-auto p-5 md:p-12   font-sans selection:bg-[#008080]/20">
      
      <div className="flex items-center gap-2 text-[13px] text-gray-400 mb-10">
        <Link to='/' className="flex items-center gap-1.5 opacity-80"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 11.9896V14.5C3 17.7998 3 19.4497 4.02513 20.4749C5.05025 21.5 6.70017 21.5 10 21.5H14C17.2998 21.5 18.9497 21.5 19.9749 20.4749C21 19.4497 21 17.7998 21 14.5V11.9896C21 10.3083 21 9.46773 20.6441 8.74005C20.2882 8.01237 19.6247 7.49628 18.2976 6.46411L16.2976 4.90855C14.2331 3.30285 13.2009 2.5 12 2.5C10.7991 2.5 9.76689 3.30285 7.70242 4.90855L5.70241 6.46411C4.37533 7.49628 3.71179 8.01237 3.3559 8.74005C3 9.46773 3 10.3083 3 11.9896Z" />
    <path d="M15.0002 17C14.2007 17.6224 13.1504 18 12.0002 18C10.8499 18 9.79971 17.6224 9.00018 17" />
</svg> Home</Link>
        <span className="text-gray-300">•</span>
        <span className="text-gray-600 font-bold">Blog page</span>
      </div>

      <div className="flex justify-between items-center mb-10 flex-wrap gap-5">
        <div className="flex gap-3">
          <button
            onClick={() => setView("list")}
            className={`p-3 rounded-[12px] transition-all border ${
              view === "list"
                ? "bg-[#008080] text-white border-[#008080] shadow-lg shadow-[#008080]/20"
                : "bg-white border-gray-100 text-gray-400 hover:bg-gray-50"
            }`}
          >
            <List size={22} />
          </button>

          <button
            onClick={() => setView("grid")}
            className={`p-3 rounded-[12px] transition-all border ${
              view === "grid"
                ? "bg-[#008080] text-white border-[#008080] shadow-lg shadow-[#008080]/20"
                : "bg-white border-gray-100 text-gray-400 hover:bg-gray-50"
            }`}
          >
            <LayoutGrid size={22} />
          </button>
        </div>

        <div className="flex items-center gap-5">
          <select className="bg-white border border-gray-100 rounded-full px-6 py-3 text-sm text-gray-500 outline-none font-medium shadow-sm appearance-none cursor-pointer">
            <option>Sorting</option>
          </select>

          <div className="relative group">
            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#008080] transition-colors"
              size={18}
            />
            <input
              placeholder="Search..."
              className="pl-12 pr-6 py-3 rounded-full border border-gray-100 outline-none w-72 text-sm focus:ring-4 ring-[#008080]/5 transition-all bg-white shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <div className={view === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" : ""}>
            {currentBlogs.map((_, i) => (
              <BlogCard key={i} view={view} />
            ))}
          </div>

          <div className="flex justify-center items-center gap-3 mt-16">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-30 transition-all"
            >
              <ChevronLeft size={22} />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-11 h-11 rounded-full text-sm font-extrabold transition-all ${
                  page === i + 1
                    ? "bg-[#008080] text-white shadow-xl shadow-[#008080]/25 translate-y-[-2px]"
                    : "bg-white border border-gray-100 text-gray-400 hover:border-[#008080] hover:text-[#008080]"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-30 transition-all"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <aside className="w-full lg:w-[320px] shrink-0">
          <SidebarWidget
            title="Category"
            extra={<button className="text-[#008080] text-[13px] font-extrabold hover:underline">Clear All</button>}
          >
            <div className="relative flex">
              <div className="space-y-4 flex-1">
                {["Thermometers (29)", "Oximeters (5)", "BP Monitors (1)", "Personal Care (1)"].map((cat) => (
                  <label key={cat} className="flex items-center gap-4 text-sm text-[#555] cursor-pointer group font-semibold">
                    <input type="checkbox" className="w-[18px] h-[18px] rounded-[5px] border-gray-300 accent-[#008080]" />
                    <span className="group-hover:text-[#008080] transition-colors">{cat}</span>
                  </label>
                ))}
              </div>

              <div className="flex flex-col items-center justify-between ml-6 h-[100px] my-auto">
                <ChevronUp size={14} className="text-gray-300 cursor-pointer hover:text-gray-500" />
                <div className="w-1.5 h-16 bg-[#b0b0b0] rounded-full shadow-inner" />
                <ChevronDown size={14} className="text-gray-300 cursor-pointer hover:text-gray-500" />
              </div>
            </div>
          </SidebarWidget>

          <SidebarWidget title="Popular Tags">
            <div className="flex flex-wrap gap-2.5">
              {["Best Sellers", "Trends", "TrendingNow", "NewArrivals"].map((tag) => (
                <span
                  key={tag}
                  className="px-5 py-2 border border-gray-100 bg-white rounded-full text-[12px] font-bold text-gray-500 hover:border-[#008080] hover:text-[#008080] cursor-pointer transition-all shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </SidebarWidget>

          <SidebarWidget title="Recent Posts">
            <div className="flex flex-col gap-2">
              <BlogCard view="sidebar" />
              <BlogCard view="sidebar" />
              <BlogCard view="sidebar" />
            </div>
          </SidebarWidget>
        </aside>
      </div>
    </div>
  );
};

export default BlogPage;