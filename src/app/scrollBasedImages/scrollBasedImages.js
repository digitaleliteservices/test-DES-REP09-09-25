import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

const CLOUD_BASE = "https://res.cloudinary.com/dxdgk4v3t/image/upload";

// Optimized Cloudinary URLs with q_auto,f_auto and fixed size
const IMAGES_ROW_A = [
  `${CLOUD_BASE}/w_640,h_426,c_fill,q_auto,f_auto/v1758951980/tech-industry2_dt82db.jpg`,
  `${CLOUD_BASE}/w_640,h_426,c_fill,q_auto,f_auto/v1758951597/real-estate2_tas2cj.jpg`,
  `${CLOUD_BASE}/w_640,h_426,c_fill,q_auto,f_auto/v1758951614/resort2_apjg3v.jpg`,
  `${CLOUD_BASE}/w_640,h_426,c_fill,q_auto,f_auto/v1758951572/e-commerce2_vqptq1.jpg`,
];

const IMAGES_ROW_B = [
  `${CLOUD_BASE}/w_640,h_426,c_fill,q_auto,f_auto/v1758951624/education2_vclva3.jpg`,
  `${CLOUD_BASE}/w_640,h_426,c_fill,q_auto,f_auto/v1758951640/food2_pddwmd.jpg`,
  `${CLOUD_BASE}/w_640,h_426,c_fill,q_auto,f_auto/v1758951655/charitable-trust2_glhdc0.jpg`,
];

export function ScrollBasedVelocityImagesDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
      <ScrollVelocityContainer className="w-full">
        <ScrollVelocityRow baseVelocity={6} direction={1} className="py-4">
          {IMAGES_ROW_A.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`sample ${idx}`}
              width={240}
              height={160}
              loading="lazy"
              decoding="async"
              className="mx-4 inline-block h-40 w-60 rounded-lg object-cover shadow-sm"
            />
          ))}
        </ScrollVelocityRow>

        <ScrollVelocityRow baseVelocity={6} direction={-1} className="py-4">
          {IMAGES_ROW_B.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`sample B${idx}`}
              width={240}
              height={160}
              loading="lazy"
              decoding="async"
              className="mx-4 inline-block h-40 w-60 rounded-lg object-cover shadow-sm"
            />
          ))}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  );
}
