
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";

import {
  Code2,
  Globe,
  Monitor,
  Server,
  Layers,
  Smartphone,
  Database,
  Brain,
  ShieldCheck,
  Cloud,
  GitBranch,
  Palette,
  Network,
  Cpu,
} from "lucide-react";

// Computer Science Job Categories
const Category = [
  { name: "Software Development", icon: Code2 },
  { name: "Web Development", icon: Globe },
  { name: "Frontend Development", icon: Monitor },
  { name: "Backend Development", icon: Server },
  { name: "Full Stack Development", icon: Layers },
  { name: "Mobile App Development", icon: Smartphone },
  { name: "Data Science", icon: Database },
  { name: "Artificial Intelligence", icon: Brain },
  { name: "Machine Learning", icon: Cpu },
  { name: "Cybersecurity", icon: ShieldCheck },
  { name: "Cloud Computing", icon: Cloud },
  { name: "DevOps", icon: GitBranch },
  { name: "Database Administration", icon: Database },
  { name: "Network Engineering", icon: Network },
  { name: "UI/UX Design", icon: Palette },
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    console.log("Selected Category:", category);
  };

  return (
    <section className="w-full bg-[#F8EFE3] py-10 px-4 sm:px-6">

      {/* Section Heading */}
      <div className="max-w-6xl mx-auto mb-7 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8B4756] mb-2">
          Find Your Path
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-[#3B0D18]">
          Explore Job Categories
        </h2>

        <p className="mt-2 text-xs sm:text-sm text-[#76545A] max-w-xl mx-auto">
          Discover opportunities in your favorite field and take
          the next step in your tech career.
        </p>

        <div className="w-14 h-1 bg-[#8B4756] rounded-full mx-auto mt-4" />
      </div>

      {/* Compact Categories Carousel */}
      <div className="max-w-5xl mx-auto px-2 sm:px-7">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3 py-2">

            {Category.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.name;

              return (
                <CarouselItem
                  key={category.name}
                  className="pl-3 basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <button
                    type="button"
                    onClick={() => handleCategoryClick(category.name)}
                    aria-pressed={isSelected}
                    className={`group relative w-full min-h-[118px]
                    rounded-xl border p-3 text-left
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-md
                    focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-[#8B4756]
                    ${
                      isSelected
                        ? "bg-[#3B0D18] border-[#3B0D18] shadow-md"
                        : "bg-[#FFF9F3] border-[#E3C4C4] hover:border-[#8B4756]"
                    }`}
                  >
                    {/* Small Icon and Arrow */}
                    <div className="flex items-center justify-between gap-2">
                      <div
                        className={`p-2 rounded-lg transition-colors duration-300 ${
                          isSelected
                            ? "bg-[#F8EFE3] text-[#3B0D18]"
                            : "bg-[#F8EFE3] text-[#8B4756] group-hover:bg-[#3B0D18] group-hover:text-[#F8EFE3]"
                        }`}
                      >
                        <Icon size={19} strokeWidth={1.8} />
                      </div>

                      <span
                        className={`text-base transition-transform duration-300 group-hover:translate-x-0.5 ${
                          isSelected
                            ? "text-[#F8EFE3]"
                            : "text-[#8B4756]"
                        }`}
                      >
                        →
                      </span>
                    </div>

                    {/* Category Name */}
                    <h3
                      className={`mt-3 text-sm font-semibold leading-snug ${
                        isSelected
                          ? "text-[#F8EFE3]"
                          : "text-[#3B0D18]"
                      }`}
                    >
                      {category.name}
                    </h3>

                    <p
                      className={`mt-1 text-[10px] ${
                        isSelected
                          ? "text-[#E3C4C4]"
                          : "text-[#987780]"
                      }`}
                    >
                      Explore opportunities
                    </p>
                  </button>
                </CarouselItem>
              );
            })}

          </CarouselContent>

          {/* Small Carousel Navigation */}
          <div className="flex justify-center items-center gap-8 mt-4">
            <CarouselPrevious className="static translate-y-0 h-8 w-8 bg-[#FFF9F3] border-[#E3C4C4] text-[#3B0D18] hover:bg-[#3B0D18] hover:text-[#F8EFE3]" />

            <CarouselNext className="static translate-y-0 h-8 w-8 bg-[#FFF9F3] border-[#E3C4C4] text-[#3B0D18] hover:bg-[#3B0D18] hover:text-[#F8EFE3]" />
          </div>
        </Carousel>

        {/* Selected Category */}
        {selectedCategory && (
          <p className="text-center text-xs text-[#76545A] mt-5">
            Selected category:{" "}
            <span className="font-semibold text-[#3B0D18]">
              {selectedCategory}
            </span>
          </p>
        )}
      </div>
    </section>
  );
};

export default Categories;
