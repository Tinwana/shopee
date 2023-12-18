"use client";
import { FC } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Image } from "@/components/ui";
import { Container } from "@/components/layouts";

const bannerSlideItems = [
  "https://cf.shopee.vn/file/vn-50009109-3b4844af326ff3b9c1e1793d0dbda9f3_xxhdpi",
  "https://cf.shopee.vn/file/vn-50009109-f769ccc8ceda8758604df5ec1dff2c46_xxhdpi",
  "https://cf.shopee.vn/file/vn-50009109-175016880cb0839eb2be80406f673ef7_xxhdpi",
  "https://cf.shopee.vn/file/vn-50009109-26a8b00baf0d842637dc41557162edd1_xxhdpi",
  "https://cf.shopee.vn/file/vn-50009109-253bde1cbf5533d7ca44fba0986149ce_xxhdpi",
  "https://cf.shopee.vn/file/vn-50009109-defabe83b107cf00d22149a131a083f9_xxhdpi",
  "https://cf.shopee.vn/file/vn-50009109-700549aace9ec2908ad6f0c87ad1603b_xxhdpi",
  "https://cf.shopee.vn/file/vn-50009109-330a1a97fbea8f77741a0f28249f42fb_xxhdpi",
  "https://cf.shopee.vn/file/vn-50009109-47b23e89aa4c7c27cae1a023da53d843_xxhdpi",
];
const bannerHozItems = [
  "https://cf.shopee.vn/file/vn-50009109-ed8aeb9d5ab3654ce0bf1aeb857bb5a3_xhdpi",
  "https://cf.shopee.vn/file/vn-50009109-e3720360c7f46aa735abac96b665d770_xhdpi",
];

const HomeBanner: FC = () => {
  return (
    <Container>
      <section className="grid grid-cols-3 grid-rows-2 w-full gap-1 ">
        <div className=" row-span-2 col-span-2">
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={3000}
            transitionTime={400}
            className="h-full"
            dynamicHeight
          >
            {bannerSlideItems.map((banner) => (
              <div className="h-full" key={banner}>
                <Image
                  src={banner}
                  alt="banner"
                  className="object-cover h-[254.15px]"
                />
              </div>
            ))}
          </Carousel>
        </div>
        {bannerHozItems.map((bannerHoz) => (
          <div key={bannerHoz} className="col-span-1 row-span-1">
            <Image
              src={bannerHoz}
              alt="banner"
              className="h-full object-cover"
            />
          </div>
        ))}
      </section>
    </Container>
  );
};

export default HomeBanner;
