import React from "react";
export default function Blur() {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-black bg-[radial-gradient(100%_90%_at_50%_0%,rgba(0,163,255,0.25)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
      <div class="relative h-full w-full "><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div></div>
    </div>
  );
}
