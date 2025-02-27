"use client";
import * as React from "react";

function CTASection() {
  return (
    <section className="hidden md:block mt-16 w-full h-[200px] bg-blue-600 rounded-xl border border-blue-600 border-solid">
      <div className="relative flex items-center justify-between h-full px-6">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/24838ac76d3d4774a066e6ad743be552/80cfb1fea979709bebafa788610f0e559b0878d1f27dda14720ae4c7878ad262?placeholderIfAbsent=true"
          className="absolute inset-0 object-cover w-full h-full rounded-xl"
          alt="Background pattern"
        />

        <div className="flex items-center space-x-4 z-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/24838ac76d3d4774a066e6ad743be552/bc7c54accee91885b69033148c574f220ee6a9077cf3e4604e3d5cc0ba8e53f8?placeholderIfAbsent=true"
            className="object-contain w-12 h-12 rounded-xl"
            alt="Icon"
          />
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-white">
              Want to delve deeper into the program?
            </h2>
            <p className="text-sm font-medium text-neutral-100">
              Share your details to receive expert insights from our program
              team!
            </p>
          </div>
        </div>

        <button className="mt-4 flex items-center gap-2 z-10 px-4 py-2 text-sm font-semibold text-blue-500 bg-white rounded-lg">
          <span>Get in touch</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/24838ac76d3d4774a066e6ad743be552/de7bf620e7ff65db612f5689daf8cbec6abb006af8f3469b43f04c470ef6af7f?placeholderIfAbsent=true"
            className="object-contain w-4 h-4"
            alt="Arrow icon"
          />
        </button>
      </div>
    </section>
  );
}

export default CTASection;
