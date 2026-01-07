import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TimelineItem = ({ start, end, duration, activity, index }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const element = itemRef.current;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [index]);

  return (
    <div ref={itemRef} className="timeline-item relative flex gap-6 pb-8">
      {/* Timeline dot and line */}
      <div className="flex flex-col items-center">
        <div className="timeline-dot w-4 h-4 rounded-full bg-violet-300 border-4 border-blue-50 z-10" />
        <div className="timeline-line w-0.5 h-full bg-blue-100 -mt-1" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-4">
        <div className="bg-blue-50 rounded-lg p-4 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="text-violet-300 font-bold text-lg">
              {start}
              {end && end !== "end" && ` - ${end}`}
            </span>
            {duration && (
              <span className="text-xs bg-yellow-300 text-blue-200 px-2 py-1 rounded-full">
                {duration}
              </span>
            )}
          </div>
          <p className="text-blue-200 font-medium">{activity}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
