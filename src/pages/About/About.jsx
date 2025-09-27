import HeroImg from "@/assets/images/profile-portfolio.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#121212]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Software Engineer | Web Developer
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I’m Joseph Dela Cruz Jr., a passionate Full-Stack Developer specializing in Laravel, PHP, and React with Typescript. I love building scalable 
                web applications that combine robust backends with seamless, user-friendly interfaces.{" "}
                <span className="font-bold text-white">
                  As a developer with 2+ years of experience
                </span>
                , I'm dedicated to provide seamless software solutions.
              </p>
              <p className="text-white">
                I focus on designing and maintaining RESTful APIs, crafting clean and maintainable code, 
                and ensuring high performance across every project. My experience spans from collaborating with
                 project managers and technical leads to gathering requirements, to debugging and troubleshooting 
                complex issues for reliable software delivery.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    Driven by curiosity and continuous learning, I’m expanding my expertise in modern development
                    tools, DevOps practices, and cloud technologies to strengthen my role as a full-stack engineer. 
                    My goal is to craft impactful digital solutions that not only work flawlessly but also create meaningful 
                    experiences for users.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Joseph Dela Cruz Jr.
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
