import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-10 md:my-20 min-h-96 w-full px-4 md:px-10">
      <div className="relative rounded-lg bg-black py-16 md:py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 hidden md:block md:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center relative z-10">
          <div className="mb-10">
            <img src="/img/logo-green.png" alt="RHR Logo" className="w-20 h-20 md:w-24 md:h-24 mx-auto" />
          </div>

          <AnimatedTitle
            title="CORPORATE <br /> PLANNING <br /> 20<b>2</b>6"
            className="special-font w-full font-zentry !text-4xl md:!text-5xl lg:!text-[6.2rem] !font-black !leading-[.9] px-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
