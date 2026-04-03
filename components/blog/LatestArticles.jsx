import Image from "next/image";

const articles = [
  {
    category: "Income Tax",
    title: "TDS Rate Changes for FY 2026-27: Complete Guide",
    description:
      "New TDS rates effective April 2026 impact salary, rent, and professional fee deductions.",
    date: "Apr 2, 2026",
    read: "5 min read",
  },
  {
    category: "Sales Tax",
    title: "Understanding Sales Tax Adjustments for 2026",
    description:
      "Revised sales tax rates for FY 2026 will affect goods and services pricing.",
    date: "Apr 5, 2026",
    read: "4 min read",
  },
  {
    category: "Property Tax",
    title: "Overview of Property Tax Changes for 2026",
    description:
      "New property tax regulations introduced in April 2026 focus on urban developments.",
    date: "Apr 7, 2026",
    read: "6 min read",
  },
  {
    category: "Income Tax",
    title: "Income Tax Filing Guide 2026",
    description:
      "Complete guide to income tax filing with new government updates.",
    date: "Apr 10, 2026",
    read: "7 min read",
  },
  {
    category: "GST",
    title: "GST Rules Updated 2026",
    description:
      "GST filing rules updated for small and medium businesses.",
    date: "Apr 11, 2026",
    read: "3 min read",
  },
  {
    category: "Compliance",
    title: "Business Compliance Guide 2026",
    description:
      "Essential compliance checklist for businesses in 2026.",
    date: "Apr 12, 2026",
    read: "6 min read",
  },
];

export default function LatestArticles() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Latest Articles
        </h2>

        <p className="text-gray-500 mt-2">
          Stay updated with expert insights from our team.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-[#F8FAFC] rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              
              {/* Image */}
              <div className="h-48 bg-gray-200" />

              {/* Content */}
              <div className="p-6 bg-[#F8F9FB]">
                
                {/* Category */}
                <span className="text-xs bg-[#8355001A] text-[#835500]  px-3 py-1 rounded-full font-medium">
                  {article.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold mt-4 text-gray-900 leading-snug">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 mt-2 text-sm">
                  {article.description}
                </p>

                {/* Divider */}
                <div className="border-t border-[#E6E8EA] my-4"></div>

                {/* Footer */}
                <p className="text-sm text-[#41484B] font-semibold">
                  {article.date} • {article.read}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}