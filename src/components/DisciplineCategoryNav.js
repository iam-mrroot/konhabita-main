import Link from "next/link";
import { disciplineCategories } from "./disciplineCategories.data";

// Sticky sidebar list of disciplines, shared by every project showcase page.
// `activeCategory` is the current page's discipline name, used to highlight its entry.
export default function DisciplineCategoryNav({ activeCategory }) {
  return (
    <aside className="w-full lg:col-span-4 xl:col-span-3">
      <div className="lg:sticky lg:top-32 self-start space-y-6">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#d97736] hidden lg:block">
          Select Discipline
        </p>

        <div className="-mx-5 overflow-x-auto px-5 scrollbar-hide sm:-mx-8 sm:px-8 lg:mx-0 lg:overflow-visible lg:px-0">
          <div className="flex w-max gap-3 lg:block lg:w-full">
            {disciplineCategories.map((item) => {
              const active = item.name === activeCategory;

              return (
                <Link
                  key={item.name}
                  href={item.link}
                  className="group block shrink-0 rounded-full border border-gray-200 px-5 py-2.5 transition-all duration-300 lg:rounded-none lg:border-x-0 lg:border-t-0 lg:px-0 lg:py-4"
                >
                  <span
                    className={`flex items-center justify-between gap-3 whitespace-nowrap text-base font-light transition-all duration-300 sm:text-lg lg:text-2xl ${
                      active
                        ? "text-[#0d4969] lg:font-medium pl-1"
                        : "text-gray-500 group-hover:text-[#0d4969] group-hover:pl-1"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {active && <span className="h-2 w-2 shrink-0 rounded-full bg-[#d97736]" />}
                      {item.name}
                    </span>
                    <span className="hidden lg:inline text-sm opacity-0 group-hover:opacity-100 transition-opacity text-[#d97736]">
                      →
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
