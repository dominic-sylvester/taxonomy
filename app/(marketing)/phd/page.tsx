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
    <section className="">
      <div>
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
          {/* LOGO */}
          <div className="items-center">
            <Image
              src={phdLogo}
              alt="Prospecting PhD"
              height={70}
              width={390}
            />
          </div>

          <div className="mb-8 grid items-center gap-8 lg:mb-24 lg:grid-cols-12 lg:gap-12">
            <div className="col-span-6 text-center sm:mb-6 lg:mb-0 lg:text-left">
              {/* <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-4xl xl:text-5xl">
                {data.headline}
              </h1> */}
              <p className="mx-auto mb-6 max-w-xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mx-0 xl:mb-8 xl:text-xl">
                {data.subHeadline}
              </p>
              {/* whats included */}
              <div className="grid ">
                <ul className="text-align-top grid p-5 text-lg text-muted-foreground ">
                  {data.whatsIncluded.items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Icons.check className="mr-2 " /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <form action="#" className="">
                <div className="mx-auto mb-3 items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0 lg:justify-start">
                  <div className="relative">
                    <label className="mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300">
                      Email address
                    </label>
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                    <input
                      className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pl-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:w-80 xl:w-96"
                      placeholder="Enter your email"
                      type="email"
                      id="email"
                      required=""
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-center font-medium text-white focus:outline-none focus:ring-4 sm:w-auto"
                  >
                    Sign up
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            {/* Youtube Video Embed */}
            <div className="col-span-6">
              <iframe
                className="mx-auto h-64 w-full max-w-xl rounded-lg sm:h-96"
                src="https://www.youtube.com/embed/4bnJG2UDr9A"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          {/* LOGO Banner */}
          <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-8 text-gray-500 dark:text-gray-400 sm:gap-12 md:grid-cols-3 lg:grid-cols-6">
            {/* Logo */}
            <a href="#" className="flex justify-center">
              <svg
                className="h-8 hover:text-gray-900 dark:hover:text-white"
                viewBox="0 0 125 35"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M64.828 7.11521C64.828 8.52061 63.6775 9.65275 62.2492 9.65275C60.8209 9.65275 59.6704 8.52061 59.6704 7.11521C59.6704 5.70981 60.7813 4.57766 62.2492 4.57766C63.7171 4.6167 64.828 5.74883 64.828 7.11521ZM54.1953 12.2293C54.1953 12.4636 54.1953 12.854 54.1953 12.854C54.1953 12.854 52.9655 11.2923 50.3469 11.2923C46.0225 11.2923 42.6502 14.5327 42.6502 19.0221C42.6502 23.4726 45.9829 26.7518 50.3469 26.7518C53.0051 26.7518 54.1953 25.1513 54.1953 25.1513V25.815C54.1953 26.1272 54.4334 26.3615 54.7508 26.3615H57.9644V11.6828C57.9644 11.6828 55.0285 11.6828 54.7508 11.6828C54.4334 11.6828 54.1953 11.956 54.1953 12.2293ZM54.1953 21.6378C53.6002 22.4966 52.41 23.2383 50.9818 23.2383C48.4426 23.2383 46.4985 21.6768 46.4985 19.0221C46.4985 16.3675 48.4426 14.806 50.9818 14.806C52.3703 14.806 53.6399 15.5867 54.1953 16.4065V21.6378ZM60.3448 11.6828H64.1535V26.3615H60.3448V11.6828ZM117.237 11.2923C114.619 11.2923 113.389 12.854 113.389 12.854V4.6167H109.58V26.3615C109.58 26.3615 112.516 26.3615 112.794 26.3615C113.111 26.3615 113.349 26.0882 113.349 25.815V25.1513C113.349 25.1513 114.579 26.7518 117.198 26.7518C121.522 26.7518 124.895 23.4726 124.895 19.0221C124.895 14.5717 121.522 11.2923 117.237 11.2923ZM116.603 23.1993C115.135 23.1993 113.984 22.4575 113.389 21.5986V16.3675C113.984 15.5867 115.254 14.7668 116.603 14.7668C119.142 14.7668 121.086 16.3284 121.086 18.9831C121.086 21.6378 119.142 23.1993 116.603 23.1993ZM107.597 17.6557V26.4005H103.788V18.0852C103.788 15.6648 102.994 14.6888 100.852 14.6888C99.7015 14.6888 98.5113 15.2744 97.7574 16.1332V26.3615H93.9488V11.6828H96.964C97.2814 11.6828 97.5195 11.956 97.5195 12.2293V12.854C98.6302 11.7218 100.098 11.2923 101.566 11.2923C103.233 11.2923 104.621 11.7609 105.732 12.6977C107.081 13.7908 107.597 15.1962 107.597 17.6557ZM84.7048 11.2923C82.0862 11.2923 80.8564 12.854 80.8564 12.854V4.6167H77.0476V26.3615C77.0476 26.3615 79.9834 26.3615 80.2611 26.3615C80.5787 26.3615 80.8166 26.0882 80.8166 25.815V25.1513C80.8166 25.1513 82.0465 26.7518 84.665 26.7518C88.9895 26.7518 92.3617 23.4726 92.3617 19.0221C92.4015 14.5717 89.0292 11.2923 84.7048 11.2923ZM84.0699 23.1993C82.602 23.1993 81.4515 22.4575 80.8564 21.5986V16.3675C81.4515 15.5867 82.721 14.7668 84.0699 14.7668C86.6091 14.7668 88.5531 16.3284 88.5531 18.9831C88.5531 21.6378 86.6091 23.1993 84.0699 23.1993ZM73.7547 11.2923C74.9052 11.2923 75.5003 11.4876 75.5003 11.4876V14.9621C75.5003 14.9621 72.3264 13.908 70.3427 16.1332V26.4005H66.534V11.6828C66.534 11.6828 69.4699 11.6828 69.7476 11.6828C70.065 11.6828 70.3029 11.956 70.3029 12.2293V12.854C71.0171 12.0342 72.5644 11.2923 73.7547 11.2923ZM32.4423 24.4806C32.2699 24.0722 32.0976 23.6297 31.9252 23.2554C31.6493 22.6427 31.3736 22.0641 31.1322 21.5197L31.0978 21.4855C28.719 16.3804 26.1678 11.2073 23.4787 6.10219L23.3752 5.89799C23.0995 5.38748 22.8237 4.84294 22.5479 4.29839C22.2031 3.68577 21.8584 3.03913 21.3068 2.42652C20.2036 1.06516 18.6177 0.316406 16.9284 0.316406C15.2046 0.316406 13.6533 1.06516 12.5156 2.35845C11.9985 2.97107 11.6192 3.61771 11.2745 4.23032C10.9987 4.77486 10.7229 5.31941 10.4471 5.82992L10.3436 6.03413C7.68904 11.1392 5.10339 16.3124 2.7246 21.4175L2.69012 21.4855C2.44879 22.0301 2.17299 22.6087 1.89719 23.2214C1.72481 23.5957 1.55244 24.0041 1.38006 24.4466C0.93188 25.7058 0.793978 26.897 0.966355 28.1222C1.34558 30.6748 3.06935 32.8189 5.44815 33.7719C6.3445 34.1463 7.27534 34.3164 8.24065 34.3164C8.51645 34.3164 8.8612 34.2824 9.137 34.2483C10.2747 34.1122 11.4468 33.7378 12.5845 33.0912C13.9981 32.3083 15.3425 31.1852 16.8595 29.5517C18.3764 31.1852 19.7554 32.3083 21.1344 33.0912C22.2721 33.7378 23.4443 34.1122 24.5819 34.2483C24.8577 34.2824 25.2025 34.3164 25.4782 34.3164C26.4436 34.3164 27.4089 34.1463 28.2708 33.7719C30.6841 32.8189 32.3733 30.6408 32.7526 28.1222C33.0283 26.931 32.8904 25.7398 32.4423 24.4806ZM16.9259 25.893C15.1377 23.6468 13.9786 21.5327 13.5812 19.7488C13.4156 18.9891 13.3825 18.3284 13.4818 17.7338C13.5481 17.2053 13.7467 16.7429 14.0118 16.3465C14.6409 15.4546 15.7007 14.893 16.9259 14.893C18.1512 14.893 19.2441 15.4216 19.8402 16.3465C20.1051 16.7429 20.3037 17.2053 20.37 17.7338C20.4694 18.3284 20.4363 19.0221 20.2707 19.7488C19.8733 21.4995 18.7142 23.6136 16.9259 25.893ZM30.3665 27.6033C30.1305 29.3326 28.9509 30.8293 27.2993 31.4945C26.4903 31.8269 25.6139 31.9267 24.7376 31.8269C23.895 31.7273 23.0523 31.4611 22.176 30.9623C20.9624 30.2971 19.749 29.2662 18.3334 27.7363C20.558 25.0424 21.9062 22.5813 22.4118 20.3864C22.6477 19.3554 22.6815 18.4242 22.5804 17.5595C22.4456 16.7281 22.1422 15.9632 21.6703 15.298C20.6255 13.8014 18.8727 12.9367 16.9178 12.9367C14.9628 12.9367 13.21 13.8347 12.1652 15.298C11.6933 15.9632 11.39 16.7281 11.2551 17.5595C11.1203 18.4242 11.154 19.3887 11.4237 20.3864C11.9293 22.5813 13.3112 25.0757 15.5021 27.7695C14.1202 29.2994 12.873 30.3304 11.6596 30.9955C10.7832 31.4945 9.94059 31.7605 9.09795 31.8603C8.18787 31.9599 7.31152 31.8269 6.53628 31.5277C4.88468 30.8625 3.70497 29.366 3.46902 27.6365C3.36791 26.8051 3.43531 25.9737 3.77238 25.0424C3.8735 24.7098 4.04202 24.3774 4.21055 23.9782C4.4465 23.4461 4.71615 22.8807 4.9858 22.3153L5.0195 22.2489C7.34523 17.2935 9.83948 12.2383 12.4349 7.31623L12.536 7.11668C12.8056 6.61782 13.0753 6.0857 13.3449 5.58684C13.6146 5.05472 13.9179 4.55585 14.2886 4.12351C14.9965 3.32532 15.9403 2.89298 16.9852 2.89298C18.03 2.89298 18.9738 3.32532 19.6817 4.12351C20.0524 4.55585 20.3557 5.05472 20.6255 5.58684C20.8951 6.0857 21.1647 6.61782 21.4343 7.11668L21.5355 7.31623C24.0971 12.2716 26.5914 17.3267 28.9171 22.2821V22.3153C29.1867 22.8475 29.4227 23.4461 29.6924 23.9782C29.8609 24.3774 30.0294 24.7098 30.1305 25.0424C30.4003 25.9071 30.5013 26.7385 30.3665 27.6033Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            {/* Logo */}

            <a href="#" className="flex justify-center">
              <svg
                className="h-8 hover:text-gray-900 dark:hover:text-white"
                viewBox="0 0 86 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.6008 10.2627V13.2312L18.6907 13.2281C18.4733 14.8653 17.9215 16.0641 17.0826 16.9031C16.0487 17.9378 14.4351 19.0766 11.6008 19.0766C7.23238 19.0766 3.81427 15.5531 3.81427 11.1808C3.81427 6.80853 7.23238 3.28487 11.6008 3.28487C13.9585 3.28487 15.6794 4.21232 16.9503 5.40473L19.0432 3.31011C17.2721 1.6161 14.9144 0.316406 11.6036 0.316406C5.62156 0.316406 0.589844 5.19338 0.589844 11.1808C0.589844 17.1682 5.62156 22.0451 11.6036 22.0451C14.8322 22.0451 17.2694 20.9852 19.1756 18.9979C21.1362 17.0356 21.7451 14.2818 21.7451 12.0546C21.7451 11.3921 21.6949 10.7802 21.5974 10.2627H11.6008ZM71.4046 21.6192V1.11445H68.4101V21.6192H71.4046ZM29.9511 22.0482C33.8151 22.0482 36.9643 19.0797 36.9643 15.0513C36.9643 10.9945 33.8151 8.05451 29.9511 8.05451C26.0857 8.05451 22.9365 10.9945 22.9365 15.0513C22.9365 19.0797 26.0857 22.0482 29.9511 22.0482ZM29.9511 10.8116C32.0691 10.8116 33.8945 12.534 33.8945 15.0513C33.8945 17.5404 32.0691 19.2911 29.9511 19.2911C27.833 19.2911 26.0076 17.5435 26.0076 15.0513C26.0076 12.534 27.833 10.8116 29.9511 10.8116ZM45.0825 22.0482C48.9465 22.0482 52.0957 19.0797 52.0957 15.0513C52.0957 10.9945 48.9465 8.05451 45.0825 8.05451C41.2171 8.05451 38.0679 10.9977 38.0679 15.0513C38.0679 19.0797 41.2171 22.0482 45.0825 22.0482ZM45.0825 10.8116C47.2005 10.8116 49.0259 12.534 49.0259 15.0513C49.0259 17.5404 47.2005 19.2911 45.0825 19.2911C42.9644 19.2911 41.139 17.5435 41.139 15.0513C41.139 12.534 42.9644 10.8116 45.0825 10.8116ZM66.5972 8.48038V21.0387C66.5972 26.2059 63.5512 28.3164 59.9519 28.3164C56.563 28.3164 54.523 26.0482 53.7539 24.1934L56.4265 23.0798C56.903 24.2186 58.0694 25.5624 59.9477 25.5624C62.2525 25.5624 63.6807 24.1397 63.6807 21.4615V20.4552H63.5734C62.8865 21.3037 61.5627 22.0451 59.892 22.0451C56.3958 22.0451 53.1923 18.9977 53.1923 15.0766C53.1923 11.1271 56.3958 8.05451 59.892 8.05451C61.5585 8.05451 62.8837 8.79579 63.5734 9.6192H63.6807V8.48038H66.5972ZM63.8981 15.0766C63.8981 12.6129 62.2553 10.8116 60.1651 10.8116C58.0471 10.8116 56.2732 12.6129 56.2732 15.0766C56.2732 17.5152 58.0471 19.2911 60.1651 19.2911C62.2553 19.2911 63.8981 17.5152 63.8981 15.0766ZM83.0747 17.3542L85.4575 18.9442C84.6883 20.083 82.835 22.0451 79.6315 22.0451C75.6602 22.0451 72.6935 18.9726 72.6935 15.0483C72.6935 10.8874 75.6853 8.05143 79.2887 8.05143C82.9172 8.05143 84.6911 10.941 85.2721 12.5026L85.5898 13.2976L76.2426 17.1713C76.9589 18.5751 78.0708 19.2912 79.6315 19.2912C81.1949 19.2912 82.2804 18.5215 83.0747 17.3542ZM75.7382 14.8369L81.9864 12.2407C81.6436 11.3668 80.6097 10.758 79.3918 10.758C77.8326 10.758 75.6602 12.1366 75.7382 14.8369Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            {/* Logo */}

            <a href="#" className="flex justify-center">
              <svg
                className="h-7 hover:text-gray-900 dark:hover:text-white"
                viewBox="0 0 74 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.33785 27.8054C6.1633 27.7158 4.38323 27.098 2.99202 25.9508C2.7267 25.7317 2.09357 25.0746 1.88159 24.7975C1.31724 24.0611 0.932589 23.3445 0.677089 22.5494C-0.110465 20.1021 0.295245 16.8903 1.83666 13.3657C3.15627 10.3481 5.19184 7.35521 8.74496 3.21015C9.26719 2.60021 10.8255 0.816406 10.8367 0.816406C10.8395 0.816406 10.7553 0.969084 10.6486 1.155C9.72485 2.76062 8.93448 4.65188 8.5035 6.28919C7.81141 8.9164 7.89564 11.171 8.74777 12.9192C9.33598 14.1237 10.3439 15.1669 11.4782 15.7435C13.4633 16.7528 16.3692 16.8362 19.9167 15.9878C20.161 15.9291 32.2677 12.5938 46.8213 8.57585C61.375 4.55756 73.2838 1.27251 73.2852 1.27521C73.2894 1.27869 39.475 16.2951 21.92 24.0855C19.1404 25.3189 18.3978 25.6304 17.0908 26.1066C13.7497 27.3241 10.7567 27.9052 8.33785 27.8054Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            {/* Logo */}

            <a href="#" className="flex justify-center">
              <svg
                className="h-6 hover:text-gray-900 dark:hover:text-white"
                viewBox="0 0 97 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.0208 0.859681V11.8158C16.0208 15.4744 14.3957 16.9937 10.5803 16.9937C6.76642 16.9937 5.13991 15.4744 5.13991 11.8158V0.379761H1.46656C1.14464 0.379761 0.984375 0.539949 0.984375 0.859681V11.9956C0.984375 18.1138 4.89952 20.253 10.5803 20.253C16.2626 20.253 20.1763 18.1138 20.1763 11.9956V0.379761H16.503C16.1824 0.379761 16.0208 0.539949 16.0208 0.859681Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M69.2766 3.55875C69.5775 3.55875 69.7181 3.45892 69.8179 3.2387L70.8821 0.619553C70.9425 0.460023 70.8821 0.379761 70.7218 0.379761H55.9258C54.5411 0.379761 54.0195 0.799649 54.0195 1.73924V18.7532C54.0195 19.5532 54.4202 19.913 55.4844 19.913H69.2766C69.5775 19.913 69.7181 19.8129 69.8179 19.5934L70.8821 16.9738C70.9425 16.8139 70.8821 16.734 70.7218 16.734H58.0949V13.2752C58.0949 12.0755 58.7571 11.5355 60.5424 11.5355H66.0236C66.3259 11.5355 66.4651 11.4361 66.5663 11.2162L67.5897 8.69688C67.6501 8.53672 67.5897 8.45706 67.4294 8.45706H58.0949V3.55875H69.2766Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M39.3809 16.7742H32.1312V13.1952C32.1312 11.9956 32.7933 11.456 34.5815 11.456H39.3809C41.6892 11.456 42.3317 12.3355 42.3317 14.1352C42.3317 15.9345 41.6892 16.7742 39.3809 16.7742ZM32.1312 3.51862H38.6175C40.7867 3.51862 41.3884 4.33196 41.3884 6.0177C41.3884 7.70372 40.7867 8.51712 38.6175 8.51712H32.1312V3.51862ZM43.2356 9.61654C44.841 8.77682 45.5031 7.19748 45.5031 5.33814C45.5031 1.01953 41.9704 0.379761 38.3167 0.379761H29.9649C28.5801 0.379761 28.0586 0.799649 28.0586 1.73924V18.7532C28.0586 19.5532 28.4592 19.913 29.5234 19.913H39.8026C43.677 19.913 46.4478 18.4136 46.4478 14.5149C46.4478 12.1757 45.4441 10.1963 43.2356 9.61654Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M88.8654 9.4365H82.0402V3.51895H88.8654C91.4155 3.51895 91.9778 4.49835 91.9778 6.47774C91.9778 8.47694 91.4155 9.4365 88.8654 9.4365ZM96.534 19.5731L92.1381 12.0556C94.3269 11.496 96.0926 10.0567 96.0926 6.3978C96.0926 1.65964 93.1418 0.379761 88.2637 0.379761H79.8725C78.4864 0.379761 77.9648 0.799649 77.9648 1.73924V19.4332C77.9648 19.7528 78.1251 19.913 78.447 19.913H82.0402V14.2151C82.0402 13.0155 82.7024 12.4755 84.4891 12.4755H88.1035L92.0776 19.5934C92.1985 19.793 92.3194 19.913 92.6203 19.913H96.3541C96.6156 19.913 96.6156 19.6928 96.534 19.5731Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            {/* Logo */}

            <a href="#" className="flex justify-center">
              <svg
                className="h-8 hover:text-gray-900 dark:hover:text-white"
                viewBox="0 0 72 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.25736 12.9639C5.25736 12.1569 5.89775 11.8465 6.94187 11.8465C8.4454 11.8465 10.3248 12.3225 11.8283 13.171V8.3077C10.1995 7.62482 8.57069 7.35579 6.94187 7.35579C2.93246 7.35579 0.273438 9.54946 0.273438 13.2125C0.273438 18.9239 7.76324 18.0135 7.76324 20.4762C7.76324 21.4279 6.98363 21.7384 5.86991 21.7384C4.24108 21.7384 2.15285 21.0347 0.496183 20.0829V25.0081C2.31991 25.8359 4.17148 26.1877 5.86991 26.1877C9.97677 26.1877 12.8028 24.0563 12.8028 20.3519C12.775 14.185 5.25736 15.2817 5.25736 12.9639ZM18.5942 3.21698L13.7774 4.29301L13.7634 20.8692C13.7634 23.9321 15.9491 26.1877 18.8727 26.1877C20.4876 26.1877 21.6709 25.8772 22.3252 25.5048V21.3037C21.6987 21.5729 18.5803 22.5247 18.5803 19.4619V12.1155H22.3252V7.70762H18.5803L18.5942 3.21698ZM28.4507 9.23894L28.1444 7.70762H23.8844V25.8151H28.8127V13.5435C29.9681 11.9501 31.945 12.2398 32.5576 12.4673V7.70762C31.9311 7.45924 29.6201 7.00395 28.4507 9.23894ZM33.7548 7.70762H38.7109V25.8151H33.7548V7.70762ZM33.7548 6.13484L38.7109 5.01734V0.816406L33.7548 1.91324V6.1347V6.13484ZM49.0128 7.35579C47.0778 7.35579 45.8248 8.3077 45.1427 8.97004L44.8781 7.68696H40.5485V31.8164L45.4768 30.7197L45.4907 24.8632C46.2007 25.4012 47.2448 26.1669 48.985 26.1669C52.5211 26.1669 55.737 23.187 55.737 16.627C55.7091 10.6255 52.4654 7.35579 49.0128 7.35579ZM47.8295 21.6142C46.6601 21.6142 45.964 21.1797 45.4907 20.6416L45.4768 12.9639C45.9919 12.3639 46.7019 11.9501 47.8295 11.9501C49.6115 11.9501 50.8644 14.0607 50.8644 16.7717C50.8644 19.5448 49.6393 21.6142 47.8295 21.6142ZM71.2734 16.8338C71.2734 11.5361 68.8232 7.35579 64.1595 7.35579C59.454 7.35579 56.614 11.5362 56.614 16.7925C56.614 23.0214 59.9691 26.1669 64.786 26.1669C67.1248 26.1669 68.9068 25.6082 70.2432 24.8218V20.6829C68.9068 21.3866 67.3615 21.8213 65.4125 21.8213C63.5052 21.8213 61.8068 21.1176 61.584 18.6756H71.2317C71.2317 18.4065 71.2734 17.3304 71.2734 16.8338ZM61.5283 14.8679C61.5283 12.5295 62.8927 11.5568 64.1317 11.5568C65.3428 11.5568 66.6236 12.5295 66.6236 14.8679H61.5283Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            {/* Logo */}

            <a href="#" className="flex justify-center">
              <svg
                className="h-6 hover:text-gray-900 dark:hover:text-white"
                viewBox="0 0 124 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.813 0.069519L12.5605 11.1781L8.28275 0.069519H0.96875V20.2025H6.23233V6.89245L11.4008 20.2025H13.7233L18.8634 6.89245V20.2025H24.127V0.069519H16.813Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M34.8015 16.461V15.1601C34.3138 14.4663 33.2105 14.1334 32.1756 14.1334C30.9504 14.1334 29.8174 14.679 29.8174 15.8245C29.8174 16.9699 30.9504 17.5155 32.1756 17.5155C33.2105 17.5155 34.3138 17.1533 34.8015 16.4595V16.461ZM34.8015 20.201V18.7519C33.8841 19.8358 32.1117 20.5633 30.213 20.5633C27.9484 20.5633 25.1367 19.0218 25.1367 15.7614C25.1367 12.2326 27.9469 11.0578 30.213 11.0578C32.1756 11.0578 33.9183 11.6885 34.8015 12.7767V11.3277C34.8015 10.0605 33.7042 9.18487 31.8039 9.18487C30.3349 9.18487 28.8658 9.75687 27.6748 10.7542L25.9322 7.52314C27.831 5.92447 30.3691 5.26007 32.6291 5.26007C36.1783 5.26007 39.5179 6.561 39.5179 11.0871V20.2025H34.8015V20.201Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M40.1562 18.3002L42.1145 14.9826C43.2178 15.9447 45.57 16.9421 47.3186 16.9421C48.7237 16.9421 49.3051 16.5461 49.3051 15.9154C49.3051 14.1055 40.7094 15.9741 40.7094 10.0605C40.7094 7.4938 42.9739 5.26007 47.0391 5.26007C49.5489 5.26007 51.6276 6.04474 53.22 7.1902L51.4194 10.4858C50.5303 9.6366 48.8471 8.88127 47.0747 8.88127C45.9715 8.88127 45.2384 9.30514 45.2384 9.8786C45.2384 11.4773 53.7999 9.81994 53.7999 15.7966C53.7999 18.5686 51.3257 20.5633 47.103 20.5633C44.4429 20.5633 41.7205 19.6862 40.1562 18.3002Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M64.7231 20.2025V11.7149C64.7231 9.94019 63.7759 9.36672 62.2712 9.36672C60.8958 9.36672 59.9784 10.1177 59.4313 10.7821V20.201H54.7148V0.069519H59.4313V7.40285C60.3145 6.37619 62.063 5.26152 64.5372 5.26152C67.9065 5.26152 69.4335 7.13299 69.4335 9.81992V20.2025H64.7231Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M80.0535 16.461V15.1601C79.5643 14.4663 78.4626 14.1334 77.4217 14.1334C76.1965 14.1334 75.0635 14.679 75.0635 15.8245C75.0635 16.9699 76.1965 17.5155 77.4217 17.5155C78.4626 17.5155 79.5643 17.1533 80.0535 16.4595V16.461ZM80.0535 20.201V18.7519C79.1346 19.8358 77.3578 20.5633 75.465 20.5633C73.199 20.5633 70.3828 19.0218 70.3828 15.7614C70.3828 12.2326 73.199 11.0578 75.465 11.0578C77.4217 11.0578 79.1644 11.6885 80.0535 12.7767V11.3277C80.0535 10.0605 78.9488 9.18487 77.056 9.18487C75.5869 9.18487 74.1164 9.75687 72.9209 10.7542L71.1783 7.52314C73.0771 5.92447 75.6152 5.26007 77.8812 5.26007C81.4289 5.26007 84.7625 6.561 84.7625 11.0871V20.2025H80.0535V20.201Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M93.8157 16.461C95.6802 16.461 97.0913 15.097 97.0913 12.897C97.0913 10.7263 95.6802 9.36232 93.8157 9.36232C92.8046 9.36232 91.5854 9.90645 90.9995 10.6911V15.1601C91.5854 15.9447 92.8061 16.461 93.8157 16.461ZM86.2891 20.201V0.069519H90.9995V7.34419C92.0485 6.01247 93.6688 5.2418 95.3784 5.26152C99.0778 5.26152 101.895 8.13032 101.895 12.897C101.895 17.847 99.0198 20.5633 95.3784 20.5633C93.7235 20.5633 92.2247 19.8989 90.9995 18.5114V20.2025H86.2891V20.201Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M102.844 0.069519H107.554V20.2025H102.844V0.069519Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M116.336 9.00154C114.284 9.00154 113.49 10.2101 113.303 11.2646H119.396C119.27 10.2379 118.508 9.00154 116.336 9.00154ZM108.5 12.897C108.5 8.67447 111.712 5.26007 116.336 5.26007C120.709 5.26007 123.892 8.42807 123.892 13.3781V14.4385H113.368C113.704 15.7335 114.929 16.8218 117.067 16.8218C118.108 16.8218 119.821 16.3686 120.681 15.5839L122.725 18.6317C121.26 19.9267 118.81 20.5633 116.55 20.5633C111.991 20.5633 108.5 17.6358 108.5 12.897Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            {/* Logo */}
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <div className="grid w-full items-start rounded-lg border p-8">
          {/* whats included */}
          <div className="grid ">
            <h3 className="text-center text-6xl font-bold sm:text-4xl">
              {/* {data.whatsIncluded.heading} */}
              What's included in the program...
            </h3>
            {/* whats included */}
            <ul className="text-align-top grid p-5 text-lg text-muted-foreground ">
              {data.whatsIncluded.items.map((item, index) => (
                <li key={index} className="flex items-center">
                  <Icons.check className="mr-2 " /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/*  cta section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-center text-4xl font-bold">
            {data.cta.headline}
          </h3>
          <p className="text-center  text-muted-foreground">{data.cta.fomo}</p>
          <Link
            href="www.prospectingphd.com"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            {data.cta.text}
          </Link>{" "}
        </div>
      </div>

      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        {/* <!-- Row --> */}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Work with tools you already use
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </p>
            {/* <!-- List --> */}
            <ul
              role="list"
              className="my-7 space-y-5 border-t border-gray-200 pt-8 dark:border-gray-700"
            >
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
                  Continuous integration and deployment
                </span>
              </li>
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
                  Development workflow
                </span>
              </li>
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
                  Knowledge management
                </span>
              </li>
            </ul>
            <p className="mb-8 font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.
            </p>
          </div>
          <img
            className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-1.png"
            alt="office feature image"
          />
        </div>
        {/* <!-- Row --> */}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <img
            className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-2.png"
            alt="office feature image 2"
          />
          <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              We invest in the world’s potential
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </p>
            {/* <!-- List --> */}
            <ul
              role="list"
              className="my-7 space-y-5 border-t border-gray-200 pt-8 dark:border-gray-700"
            >
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
                  Dynamic reports and dashboards
                </span>
              </li>
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
                  Templates for everyone
                </span>
              </li>
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
                  Development workflow
                </span>
              </li>
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
                  Limitless business automation
                </span>
              </li>
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
                  Knowledge management
                </span>
              </li>
            </ul>
            <p className="font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
