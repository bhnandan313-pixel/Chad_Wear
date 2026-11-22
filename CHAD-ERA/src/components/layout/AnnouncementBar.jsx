import React from 'react';
import { CompassEmblem } from '../common/BrandLogo';

export const AnnouncementBar = () => {
  return (
    <aside aria-label="Announcement" className="bg-[#F7F7F5] border-b border-[#E5E5E5] text-[#707070] py-2 px-4 relative z-40 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-[10px] md:text-[11px] font-sans font-medium tracking-[0.22em] uppercase">
        
        {/* Left Coordinates & Status */}
        <div className="hidden lg:flex items-center gap-2 text-[#999999]">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
          <span>DROP 001 // SYSTEM ACTIVE</span>
        </div>

        {/* Center Main Announcement */}
        <div className="w-full lg:w-auto flex items-center justify-center gap-3 text-center">
          <CompassEmblem className="w-4 h-4 object-contain inline-block" />
          <span className="text-[#111111] font-semibold tracking-[0.25em]">
            THE FIRST DROP IS COMING.
          </span>
          <span className="hidden sm:inline text-[#E5E5E5]">&bull;</span>
          <span className="hidden sm:inline text-[#707070]">
            LIMITED GLOBAL RUN // 280-480 GSM
          </span>
        </div>

        {/* Right Shipping note */}
        <div className="hidden lg:flex items-center gap-2 text-[#999999]">
          <span>COMPLIMENTARY SHIPPING OVER ₹2,499</span>
        </div>
      </div>
    </aside>
  );
};

export default AnnouncementBar;
