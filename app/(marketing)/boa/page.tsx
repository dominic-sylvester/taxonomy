import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";

import { website } from "./phd-content.json";
import blueprintLogo from "./blueprint-logo.png";
import phdLogo from "./phd-logo.png";
import Image from "next/image";
export const metadata = {
  title: "Prospecting PhD",
};

export default function ProspectingPHDPage() {
  const data = website;
  const reasons = [
    "Learn a proven process to grow your book of business",
    "Learn how to get in front of more opportunities",
    "Learn how to stop competing on price and add more value to your clients",
    "Learn how to develop new sales talent",
  ];
  return (
    <div>
      <section className=" antialiased ">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
          <div className="flex flex-col items-center gap-8 lg:flex-row xl:gap-16">
            <div className="text-center md:max-w-3xl lg:text-left xl:shrink-0">
              <div>
                <h2 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                  Blue Ocean Advisor
                  <span className="text-3xl lg:block">
                    A Step-By-Step Guide To Growing A Massive Book Of Business
                  </span>
                </h2>
                <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl md:mx-auto md:max-w-3xl">
                  This book is a real-world guide for insurance advisors to grow
                  a huge book of business and, at its core, can be accomplished
                  by simply helping people.
                </p>
                <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl md:mx-auto md:max-w-3xl">
                  There is nothing theoretical contained within these pages.
                  This book is a battle tested playbook we have created working
                  side by side producers, spanning over 20 years & thousands of
                  hours coaching and riding on sales calls.
                </p>
                <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl md:mx-auto md:max-w-3xl">
                  Are you ready to learn how to change your business?
                </p>
              </div>

              <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
                <a
                  href="#"
                  title=""
                  className="hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 shrink-0 rounded-lg bg-blue-600 px-5 py-3 text-center text-base font-medium text-white focus:outline-none focus:ring-4"
                  role="button"
                >
                  Order Now
                </a>

                <a
                  href="#"
                  title=""
                  className="hover:text-primary-700 inline-flex shrink-0 items-center rounded-lg border border-gray-200  px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  role="button"
                >
                  Download Sample
                  <svg
                    aria-hidden="true"
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              <div className="mt-8 flex items-center justify-center gap-5 sm:gap-6 lg:justify-start">
                <div className="h-8 w-px bg-gray-200 dark:bg-gray-700"></div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-0.5">
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5 text-yellow-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5 text-yellow-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5 text-yellow-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5 text-yellow-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5 text-yellow-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                      5.0 on Amazon
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-md">
              <img
                className="w-auto rounded-[1rem] object-contain shadow-2xl"
                src="https://www.blueoceanadvisorbook.com/hosted/images/26/ce246942d8455496be6c8146a09a9f/Ebook-1-1-.png"
                alt="Book cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reasons to read Blue Ocean Advisor */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-screen-xl space-y-12 px-4 py-8 sm:py-16 lg:space-y-20 lg:px-6">
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Why Should You Read This Book?
              </h2>
              <p className="mb-4 font-light lg:text-xl">
                If you want to grow as a producer, you have to put in the work
                (or use the right tools). Some of the reasons you should read
                this book include:
              </p>

              <ul
                role="list"
                className="my-7 space-y-5 border-t border-gray-200 pt-8 dark:border-gray-700"
              >
                {reasons.map((reason) => {
                  return (
                    <li className="flex space-x-3">
                      {/* <!-- Icon --> */}
                      <svg
                        className="text-primary-600 dark:text-primary-500 h-5 w-5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                        {reason}
                      </span>
                    </li>
                  );
                })}
              </ul>
              {/* <p className="mb-8 font-light lg:text-xl">
                  Deliver great service experiences fast - without the complexity
                  of traditional ITSM solutions.
                </p> */}
            </div>
            <img
              className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-1.png"
              alt="office feature image"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary-foreground">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Testimonials
            </h2>
            <p className="mb-8 font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
              Don't take our word for it, here's what our customers have to
              say...
            </p>
          </div>

          <div className="mb-8 grid lg:mb-12 lg:grid-cols-3">
            <figure className="flex flex-col border-b border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-800 md:p-12 lg:border-r">
              <blockquote className="mx-auto mb-8 max-w-2xl text-center text-gray-500 dark:text-gray-400">
                <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
                  This just works
                </h3>
                <p className=" my-4 text-justify">
                  "I may be enjoying this business for the very first time. I
                  have become more strategic and the years of experience I have
                  developed, I am being rewarded for more than ever.
                </p>
                <p className=" my-4 text-justify">
                  Since I started using the Blue Ocean Advisor process, I have
                  written 5 high value cases for $1.2 Million in revenue."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center space-x-3">
                <img
                  className="h-9 w-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 text-left font-medium dark:text-white">
                  <div>Beverly Beattie</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Miami, FL
                  </div>
                </div>
              </figcaption>
            </figure>

            <figure className="flex flex-col border-b border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-800 md:p-12 lg:border-r">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
                  Game changer
                </h3>
                <p className=" my-4 text-justify">
                  "You have changed my world, I owe you. I am absolutely killing
                  it and more importantly really loving this process & helping
                  people."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center space-x-3">
                <img
                  className="h-9 w-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 text-left font-medium dark:text-white">
                  <div>Mike Barnum</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Richmond, VA
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col border-b border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-800 md:p-12 lg:border-r">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
                  Ted vs Goliath
                </h3>
                <p className=" my-4 text-justify">
                  "I started my own firm in 2018 with no competitive insurance
                  carriers or any expensive tools. All I had was the Blue Ocean
                  Advisor Playbook.
                </p>
                <p className=" my-4 text-justify">
                  I am consistently going up against large regional and national
                  brokers with a fraction of their resources and{" "}
                  <span className="font-extrabold">winning</span> because of my
                  process as the only differentiator ."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center space-x-3">
                <img
                  className="h-9 w-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 text-left font-medium dark:text-white">
                  <div>Ted Schlatter</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Tacoma, WA
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
              Are you ready to level up your game?
            </h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Let us show you how to grow your book of business and get in front
              of new customers.
            </p>
            <a
              href="#"
              className="focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mb-2 mr-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4"
            >
              I'm Ready... Let's Go!
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
