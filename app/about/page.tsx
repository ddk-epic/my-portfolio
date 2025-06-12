import Image from "next/image";
import placeholder from "@/images/placeholder.jpg";

export default function Home() {
  return (
    <section id="hero" className="wrapper top-div w-full">
      {/* <div className="grid grid-cols-1 md:grid-cols-2"> */}
      <div className="flex flex-col md:flex-row-reverse py-20">
        {/* Image */}
        <div className="indent md:w-1/2 pb-12">
          <Image
            src={placeholder}
            alt={`image of the author`}
            placeholder="blur"
          />
        </div>
        {/* Description */}
        <div className="indent md:w-1/2 h-full flex flex-col justify-center items-center">
          <h3>Title</h3>
          <p className="py-1.5">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <p className="py-1.5">
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.
          </p>
          <p className="py-1.5">
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim.
          </p>
        </div>
      </div>
    </section>
  );
}
