import { Icons } from "../../constants/icons";

function Footer() {
  return (
    <section className="w-full flex justify-center mt-5 ">
      <div className="w-[492px] h-[145px] flex flex-col gap-6">
        {/* footer icons */}
        <div className="flex gap-8 items-center justify-center">
          {Icons.faceBookIcon()}
          {Icons.instagramIcon()}
          {Icons.twitterIcon()}
          {Icons.youTubeIcon()}
        </div>
        <div className="flex gap-6 text-[10px] justify-center  font-[700] md:text-[17px] md:gap-10 ">
          <span>Conditions of Use</span>
          <span>Privacy & Policy</span>
          <span>Press Room</span>
        </div>
        <p className="flex justify-center text-[10px] md:text-[15px]">
          &#64; 2021 MovieBox by Adriana Eka Prayudha{" "}
        </p>
      </div>
    </section>
  );
}

export default Footer;
