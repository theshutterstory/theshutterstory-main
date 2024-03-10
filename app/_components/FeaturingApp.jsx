import React from "react";
import { Button } from "@/components/ui/button";

const FeaturingApp = () => {
  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Launching our app soon, Stay Tuned.
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            Stay tuned for the big reveal as we embark on this journey together.
            We can't wait to share our creation with you and witness the
            positive impact it's bound to have. Join us as we celebrate this
            milestone and mark your calendars for the launch of our app. The
            countdown has begun – are you ready to embark on this exciting
            adventure with us?
          </p>

          <div className="mt-4 md:mt-8">
            <Button>Get Started</Button>
          </div>
        </div>
      </div>

      <img
        alt=""
        src="/app mcp.png"
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </section>
  );
};

export default FeaturingApp;
