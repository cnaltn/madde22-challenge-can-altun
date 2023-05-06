import React, { useEffect, useState } from "react";
import Data from "../pages/api/MOCK_DATA.json";

const Movies = ({ values }) => {
  const [isActve, setActive] = useState();
  const [checkedValues, setCheckedValues] = useState([]);

  const handleCheckboxChange = (value) => {
    if (checkedValues.includes(value)) {
      // Eğer değer zaten varsa, diziden çıkar.
      setCheckedValues(checkedValues.filter((item) => item !== value));
    } else {
      // Eğer değer yoksa, diziye ekle.
      setCheckedValues([...checkedValues, value]);
    }
  };

  useEffect(() => {
    console.log(checkedValues);
  });
  return (
    <div className="">
      {Data.map((m) => (
        <div movies={m} key={m.id}>
          <div
            className={
              String(values).includes(m.movie_where)
                ? "justify-center container pt-[60px] flex"
                : "hidden"
            }
          >
            <div className={"lg:w-[1064px] w-max gap-y-[16px] flex flex-col"}>
              <div
                className={
                  "lg:w-full w-[320px] md:w-[360px] border h-max lg:h-[204px] hover:shadow-md transition-shadow duration-200  flex flex-col lg:flex-row  items-center gap-x-5"
                }
              >
                <div className="lg:w-[41%] relative w-full bg-black lg:bg-transparent  flex flex-col lg:flex-row  h-[212px] lg:h-full">
                  <div className="lg:w-[200px] w-full bg-black absolute h-full">
                    <div className=" flex justify-center gap-x-1 lg:gap-x-0  lg:flex-col lg:items-center text-center lg:pl-14 font-[Regular] text-white lg:text-[#FF0D87] w-full lg:w-4 h-max lg:h-full items-center pt-[5px] ">
                      <p className="text-[24px] font-[Bold]">
                        {m.movie_time_number}
                      </p>
                      <p className="text-[16px] font-[Medium]">
                        {m.movie_time_month}
                      </p>
                      <p className="font-[Regular]">{m.movie_time_day}</p>
                      <p className="font-[Regular]">{m.movie_time_clock}</p>
                    </div>
                  </div>

                  <div className="w-full relative flex items-center justify-center lg:justify-end">
                    <img
                      className="absolute w-[290px] md:w-max top-16 lg:top-4 lg:-right-4"
                      src={m.movie_img}
                    ></img>
                  </div>
                  <div className="absolute top-4 -left-4 lg:top-8 lg:left-28">
                    {m.movie_type == "Tiyatro" ? (
                      <h1 className="bg-[#B77CB8]  w-max pl-5 pr-5 text-white font-[Bold]">
                        {m.movie_type}
                      </h1>
                    ) : (
                      ""
                    )}
                    {m.movie_type == "Stand Up" ? (
                      <h1 className="bg-[#F19653]  w-max pl-5 pr-5 text-white font-[Bold]">
                        {m.movie_type}
                      </h1>
                    ) : (
                      ""
                    )}
                    {m.movie_type == "Sinema" ? (
                      <h1 className="bg-[#F07266]  w-max pl-5 pr-5 text-white font-[Bold]">
                        {m.movie_type}
                      </h1>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-y-[10px] w-full lg:w-[41%] pt-[33px] lg:pt-0 pl-4 pr-4">
                  <h1 className="font-[Bold] text-[18px] leading-[26px]">
                    {m.movie_title}
                  </h1>
                  <h2 className="font-[Regular] text-[#9C9C9C] items-center flex gap-x-[7px]">
                    <span>
                      <svg
                        width="10"
                        height="14"
                        viewBox="0 0 10 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_11_296)">
                          <path
                            d="M4.99936 -0.000654058C4.34035 -0.00966691 3.68627 0.118441 3.07572 0.376111C2.46517 0.633782 1.91052 1.01579 1.44448 1.49961C0.978449 1.98343 0.610477 2.55925 0.362277 3.19309C0.114078 3.82694 -0.00932146 4.50598 -0.000639881 5.19014C-0.000639881 9.08323 4.52019 13.5387 4.70769 13.7333L4.99936 13.9993L5.29103 13.7333C5.47853 13.5387 9.99936 9.08323 9.99936 5.19014C10.008 4.50598 9.88464 3.82694 9.63644 3.19309C9.38824 2.55925 9.02027 1.98343 8.55424 1.49961C8.08821 1.01579 7.53355 0.633782 6.923 0.376111C6.31245 0.118441 5.65837 -0.00966691 4.99936 -0.000654058ZM4.99936 6.9204C4.66972 6.9204 4.34749 6.81892 4.07341 6.6288C3.79933 6.43868 3.58571 6.16845 3.45956 5.85228C3.33341 5.53612 3.30041 5.18822 3.36472 4.85258C3.42903 4.51694 3.58776 4.20864 3.82085 3.96666C4.05394 3.72467 4.35091 3.55988 4.67421 3.49312C4.99751 3.42636 5.33262 3.46062 5.63717 3.59158C5.94171 3.72254 6.20201 3.94431 6.38514 4.22886C6.56828 4.5134 6.66603 4.84792 6.66603 5.19014C6.66603 5.64903 6.49043 6.08913 6.17787 6.41362C5.86531 6.73811 5.44139 6.9204 4.99936 6.9204Z"
                            fill="#9C9C9C"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_11_296">
                            <rect width="10" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    {m.movie_where}
                  </h2>
                  <p className="text-[16px] leading-[26px] line-clamp-2 font-[Regular]">
                    {m.movie_desc}
                  </p>
                </div>
                <div className="p-4 lg:pt-0 lg:pb-0  lg:pl-0 gap-y-[5px]  justify-between  flex flex-row lg:flex-col w-full lg:w-[18%] h-max  lg:justify-center">
                  <button className="w-[120px] md:w-[150px] lg:w-[166px] font-[Bold]  h-[48px] bg-[#FF0D87] hover:bg-[#a71b61] transition-colors text-white flex items-center justify-center">
                    Bilet Al
                  </button>
                  <div
                    onClick={(e) => handleCheckboxChange(m.movie_id)}
                    className={
                      "cursor-pointer w-max text-[16px] font-[Regular] flex items-center gap-x-[10px] lg:pt-[8px]   "
                    }
                  >
                    {checkedValues.includes(m.movie_id) ? (
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="11"
                          cy="11"
                          r="10"
                          fill="#FF0D87"
                          stroke="#FF0D87"
                          stroke-width="2"
                        />
                        <path
                          d="M5 10.5L9.5 15L17.5 7"
                          stroke="white"
                          stroke-width="2"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="11"
                          cy="11"
                          r="10"
                          stroke="black"
                          stroke-width="2"
                        />
                        <path d="M7 11H15" stroke="black" stroke-width="2" />
                        <path d="M11 7L11 15" stroke="black" stroke-width="2" />
                      </svg>
                    )}
                    {checkedValues.includes(m.movie_id) ? (
                      <h1 className="">Takvime Eklendi</h1>
                    ) : (
                      <h1 className="">Takvime Ekle</h1>
                    )}
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
