"use client";
import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import Image from "next/image";

const page = () => {
  // Function to handle PDF download
  const handleDownloadPDF = () => {
    // Update path to match your PDF file in the public folder
    const pdfUrl = "pdf_download.pdf"; // Note the forward slash at the start

    // Create an anchor element
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("target", "_blank"); // Opens in new tab
    link.download = "pdf_download.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to visit LinkedIn
  const visitLinkedIn = () => {
    // Replace this URL with your actual LinkedIn profile/company page URL
    window.open("https://www.linkedin.com/company/capecadvisory", "_blank");
  };
  return (
    <div className="relative">
      {/* Background Section */}
      <div
        className="bg-[url('https://s3-alpha-sig.figma.com/img/b187/d92c/3b7e4dc21dbe8aa3a95c2041b952805a?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lMnFNXkWU-qRTAB7QS7kSXIivTXoslDmDYaaAXxdyVivse3P9SeENEEshTwnBQOO2WvU0gmgfAMpNKDqPU5sNLIudkqOBUs6ycVAwoqkjfpNJfLgClUrgWHw0m1xaQKH2a7pbBEGOipTZKj8jR7HtqoRJcEHzez38WVMJUYc5-ZbNctfeOoxdBBGpkoP9rLSDj8svAm5Nji96IhTQZ9ZQz0F5dwF92YvnhBvg0985D3VMHwZPS76GY3DaTlT5DyC7lZcbZpNDGd1AfTS5iFuoIwwnviosiZIYn9LWHWfAqAWd9LgD~NrCA8HGn6wS5cXt-ECF9EbWlmNEY7Ygx5CsA__')]
           bg-cover bg-center min-h-screen w-full relative bg-no-repeat"
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative px-4 md:px-[15vw] lg:px-[25vw] py-[5vh] md:py-[7vh] 2xl:py-[20vh] z-10">
          <div className="py-8">
            <Image
              src="/icon.png"
              alt="Logo"
              width={80}
              height={80}
              className="my-2"
            />

            <p className="text-[22px] font-inter my-2">CapeC.</p>
            <p className="text-[14px] font-inter my-2">Connecting the Dots, Cultivating the Growth
            </p>
          </div>
          <p className="text-[#fff] font-inter text-sm md:text-base">
            SOS Children&apos;s Villages Bangladesh and BESTSELLER Foundation.
          </p>
          <p className="text-[32px] md:text-[42px] lg:text-[52px] leading-tight text-[#fff] font-bebas">
            Inspiring Journeys of Youth <br className="hidden md:block" />{" "}
            Entrepreneurs
          </p>
          <p className="text-[14px] md:text-[16px] lg:text-[18px] mt-2 md:mt-4 mb-4 md:mb-8 text-white font-inter">
            Entrepreneurship and Basic Skills Training of 200 Youths in Bogura
            and
            <br className="hidden md:block" /> Chattogram to Ensure Sustainable
            Sources of Income.
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            <button
              onClick={handleDownloadPDF}
              className="bg-none text-[#fff] border border-white px-4 md:px-6 py-2 md:py-3 font-inter text-sm md:text-base hover:bg-white hover:text-black transition-colors"
            >
              Download PDF
            </button>
            <button
              onClick={visitLinkedIn}
              className="flex items-center gap-2 text-white font-inter text-sm md:text-base hover:text-gray-300 transition-colors"
            >
              Visit LinkedIn
              <HiArrowRight className="text-lg md:text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
