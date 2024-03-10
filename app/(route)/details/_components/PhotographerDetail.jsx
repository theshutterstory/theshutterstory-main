import Image from "next/image";
import React from "react";
// import photographer from "../../../../app/_components/tempdata/photographerDetails.json";
import { GraduationCap, MapPin } from "lucide-react";
import BookAppointment from "./BookAppointment";

const PhotographerDetail = () => {
  const socialMediaList = [
    {
      id: 1,
      icon: "/theshutterstory-logo.svg",
      url: "",
    },
    {
      id: 2,
      icon: "/theshutterstory-logo.svg",
      url: "",
    },
    {
      id: 3,
      icon: "/theshutterstory-logo.svg",
      url: "",
    },
    {
      id: 4,
      icon: "/theshutterstory-logo.svg",
      url: "",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 border-[1px] p-2 mt-2 rounded-lg">
        <Image
          src="/dp.png"
          width={200}
          height={250}
          alt=""
          className="rounded-sm h-[270px] object-cover"
        />

        {/* Photographer Info */}
        <div className="col-span-2 mt-5 flex flex-col gap-2 items-baseline">
          <h2 className="font-bold text-2xl">John Doe</h2>
          <h2 className="flex gap-2 text-md text-gray-500">
            <GraduationCap />
            <span>2 Years</span>
          </h2>
          <h2 className="flex gap-2 text-md text-gray-500">
            <MapPin />
            <span>Wakad, Pune</span>
          </h2>
          <h2 className="text-[12px] bg-black text-white p-1 rounded-sm px-2 text-primary">
            Cinematographer
          </h2>
          <div className="flex gap-3">
            {socialMediaList.map((item, index) => (
              <Image src={item.icon} key={index} width={30} height={30} />
            ))}
          </div>
          <BookAppointment />
        </div>
      </div>
      {/* About Photographer  */}
      <div className="p-3 border-[1px] rounded-lg mt-3">
        <h2 className="font-bold text-[20px]">About Me</h2>
        <p className="text-gray-500 tracking-wide mt-2">
          {/* {doctor.attributes.About} */}
          Lorem ipsum some info Lorem ipsum some info Lorem ipsum some info
          Lorem ipsum some info
        </p>
      </div>
    </>
  );
};

export default PhotographerDetail;
