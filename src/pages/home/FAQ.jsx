import React from "react";

const FAQ = () => {
  return (
    <div
      className="md:max-w-6xl space-y-2  my-20
    mx-auto"
    >
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What is Web Development?
          </div>
          <div className="collapse-content">
            <p>
              Web development involves creating and maintaining websites. It
              encompasses everything from designing web pages to developing
              dynamic web applications.
            </p>
          </div>
        </div>
      </div>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What is Graphics Design?
          </div>
          <div className="collapse-content">
            <p>
              Graphics design is the art of visual communication. It includes
              creating visual content using elements like images, typography,
              and color to convey a message.
            </p>
          </div>
        </div>
      </div>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What does All in One SEO mean?
          </div>
          <div className="collapse-content">
            <p>
              All in One SEO refers to comprehensive search engine optimization
              strategies covering on-page, off-page, and technical aspects to
              improve a website's visibility.
            </p>
          </div>
        </div>
      </div>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What is Ethical Hacking?
          </div>
          <div className="collapse-content">
            <p>
              Ethical hacking involves authorized testing of computer systems to
              identify and fix security vulnerabilities, ensuring the security
              of digital systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
