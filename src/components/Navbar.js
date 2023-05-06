import Image from "next/image";
import { useEffect, useState } from "react";
import Movies from "./Movies";

export default function Navbar() {
  const [active, setActive] = useState("Tüm Etkinlikler");
  const [isFilterOn, setFilterOn] = useState(false);
  const [checkedValues, setCheckedValues] = useState(["Maximum Uniq Hall"]);

  useEffect(() => {});

  const handleClick = () => {
    if (isFilterOn) {
      setFilterOn(false);
    }
    if (!isFilterOn) {
      setFilterOn(true);
    }
  };

  const handleCheckboxChange = (value) => {
    if (checkedValues.includes(value)) {
      // Eğer değer zaten varsa, diziden çıkar.
      setCheckedValues(checkedValues.filter((item) => item !== value));
    } else {
      // Eğer değer yoksa, diziye ekle.
      setCheckedValues([...checkedValues, value]);
    }
  };

  return (
    <>
      <div className="h-[155px] container w-full flex items-center justify-center">
        <Image width={60} height={63} src="/Exclude.png"></Image>{" "}
      </div>
      <div className="w-full container flex flex-col items-center justify-center">
        <div>
          <h1 className="text-[32px] leading-[40px] font-[Bold]">
            ETKİNLİKLER
          </h1>
        </div>
        <div className="flex h-[80px] items-center w-full">
          <ul className="flex md:gap-x-[30px] gap-x-[10px] h-full items-center justify-center w-full lg:pl-56 pl-0 md:text-[16px] text-[10px] sm:text-[14px] leading-[26px]">
            <li
              className={
                active === "Tüm Etkinlikler"
                  ? "h-full items-center border-b-4 border-[#FF0D87] inline-flex pt-[4px] transition-all"
                  : "h-full items-center  inline-flex transition-all"
              }
            >
              <a
                onClick={() => setActive("Tüm Etkinlikler")}
                className={
                  active === "Tüm Etkinlikler"
                    ? "text-[#FF0D87] font-[Bold] "
                    : "text-black font-[Regular]"
                }
                href="#"
              >
                Tüm Etkinlikler
              </a>
            </li>
            <li
              className={
                active === "Tiyatro"
                  ? "h-full items-center border-b-4 border-[#FF0D87] inline-flex pt-[4px] transition-all"
                  : "h-full items-center  inline-flex transition-all"
              }
            >
              <a
                onClick={() => setActive("Tiyatro")}
                className={
                  active === "Tiyatro"
                    ? "text-[#FF0D87] font-[Bold] "
                    : "text-black font-[Regular]"
                }
                href="#"
              >
                Tiyatro
              </a>
            </li>
            <li
              className={
                active === "Konser"
                  ? "h-full items-center border-b-4 border-[#FF0D87] inline-flex pt-[4px] transition-all"
                  : "h-full items-center  inline-flex transition-all"
              }
            >
              <a
                onClick={() => setActive("Konser")}
                className={
                  active === "Konser"
                    ? "text-[#FF0D87] font-[Bold] "
                    : "text-black font-[Regular]"
                }
                href="#"
              >
                Konser
              </a>
            </li>
            <li
              className={
                active === "Stand Up"
                  ? "h-full items-center border-b-4 border-[#FF0D87] inline-flex pt-[4px] transition-all"
                  : "h-full items-center  inline-flex transition-all"
              }
            >
              <a
                onClick={() => setActive("Stand Up")}
                className={
                  active === "Stand Up"
                    ? "text-[#FF0D87] font-[Bold] "
                    : "text-black font-[Regular]"
                }
                href="#"
              >
                Stand Up
              </a>
            </li>
            <li
              className={
                active === "Sinema"
                  ? "h-full items-center border-b-4 border-[#FF0D87] inline-flex pt-[4px] transition-all"
                  : "h-full items-center  inline-flex transition-all"
              }
            >
              <a
                onClick={() => setActive("Sinema")}
                href="#"
                className={
                  active === "Sinema"
                    ? "text-[#FF0D87] font-[Bold] "
                    : "text-black font-[Regular]"
                }
              >
                Sinema
              </a>
            </li>
            <li
              className={
                active === "Çocuk"
                  ? "h-full items-center border-b-4 border-[#FF0D87] inline-flex pt-[4px] transition-all"
                  : "h-full items-center  inline-flex transition-all"
              }
            >
              <a
                onClick={() => setActive("Çocuk")}
                className={
                  active === "Çocuk"
                    ? "text-[#FF0D87] font-[Bold] "
                    : "text-black font-[Regular]"
                }
                href="#"
              >
                Çocuk
              </a>
            </li>
          </ul>
          <div className="lg:flex hidden border p-2 items-center justify-end">
            <div className="">
              {" "}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.5 16C13.0899 16 16 13.0899 16 9.5C16 5.91015 13.0899 3 9.5 3C5.91015 3 3 5.91015 3 9.5C3 13.0899 5.91015 16 9.5 16ZM15.2929 16.7071L20.2929 21.7071L21.7071 20.2929L16.7071 15.2929L15.2929 16.7071Z"
                  fill="black"
                />
              </svg>
            </div>

            <input
              placeholder="Etkinlik Ara"
              className=" placeholder:text-[#9C9C9C] p-1  focus:ring-0 focus:outline-none"
            ></input>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F5F5F5] h-[52px] justify-center items-center flex">
        <div className="justify-between container flex">
          <a
            onClick={() => handleClick()}
            className="font-[Regular] Area2 flex items-center gap-x-[13px] cursor-pointer"
          >
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="1.5" fill="black" stroke="black" />
              <circle cx="8" cy="9" r="1.5" fill="black" stroke="black" />
              <circle cx="2" cy="16" r="1.5" fill="black" stroke="black" />
            </svg>
            <h1>Filtreler</h1>
          </a>

          <div
            className={
              isFilterOn
                ? "absolute top-[328px] z-20 bg-[#FFFFFF] flex flex-col gap-y-[18px] pt-[32px] pl-[32px] w-[290px] h-[450px] drop-shadow transition-opacity"
                : "hidden"
            }
          >
            <h1 className="font-[Bold] text-[16px]">Etkinlik Mekanı</h1>
            <label className="gap-x-[10px] font-[Regular] leading-[26px] flex items-center w-max">
              <input
                checked={checkedValues.includes("Maximum Uniq Hall")}
                onChange={() => handleCheckboxChange("Maximum Uniq Hall")}
                value="Maximum Uniq Hall"
                className="checked:text-[#FF0D87] h-5  w-5 focus:ring-0 transition-colors"
                type="checkbox"
              ></input>
              Maximum Uniq Hall
            </label>
            <label className="gap-x-[10px] font-[Regular] leading-[26px] flex items-center w-max">
              <input
                checked={checkedValues.includes("Maximum Uniq Box")}
                onChange={() => handleCheckboxChange("Maximum Uniq Box")}
                value="Maximum Uniq Box"
                className="checked:text-[#FF0D87] h-5  w-5 focus:ring-0 transition-colors"
                type="checkbox"
              ></input>
              Maximum Uniq Box
            </label>
            <label className="gap-x-[10px] font-[Regular] leading-[26px] flex items-center w-max">
              <input
                checked={checkedValues.includes("Maximum Uniq Lounge")}
                onChange={() => handleCheckboxChange("Maximum Uniq Lounge")}
                value="Maximum Uniq Lounge"
                className="checked:text-[#FF0D87] h-5  w-5 focus:ring-0 transition-colors"
                type="checkbox"
              ></input>
              Maximum Uniq Lounge
            </label>
            <label className="gap-x-[10px] font-[Regular] leading-[26px] flex items-center w-max">
              <input
                checked={checkedValues.includes("Maximum Uniq Açıkhava")}
                onChange={() => handleCheckboxChange("Maximum Uniq Açıkhava")}
                value="Maximum Uniq Açıkhava"
                className="checked:text-[#FF0D87] h-5  w-5 focus:ring-0 transition-colors"
                type="checkbox"
              ></input>
              Maximum Uniq Açıkhava
            </label>
            <label className="gap-x-[10px] font-[Regular] leading-[26px] flex items-center w-max">
              <input
                checked={checkedValues.includes("Bahçe Fuaye")}
                onChange={() => handleCheckboxChange("Bahçe Fuaye")}
                value="Bahçe Fuaye"
                className="checked:text-[#FF0D87] h-5  w-5 focus:ring-0 transition-colors"
                type="checkbox"
              ></input>
              Bahçe Fuaye
            </label>
            <h1 className="font-[Bold]">Etkinlik Tarihi</h1>
            <label className="gap-x-[10px] font-[Regular] leading-[26px] flex items-center w-max">
              <input
                checked={checkedValues.includes("Güncel")}
                onChange={() => handleCheckboxChange("Güncel")}
                value="güncel"
                className="checked:text-[#FF0D87] h-5  w-5 focus:ring-0 transition-colors"
                type="checkbox"
              ></input>
              Güncel Etkinlikler
            </label>
            <label className="gap-x-[10px] font-[Regular] leading-[26px] flex items-center w-max">
              <input
                checked={checkedValues.includes("Geçmiş")}
                onChange={() => handleCheckboxChange("Geçmiş")}
                value="geçmiş"
                className="checked:text-[#FF0D87] h-5  w-5 focus:ring-0 transition-colors"
                type="checkbox"
              ></input>
              Geçmiş Etkinlikler
            </label>
          </div>

          <a className="font-[Regular] Area flex items-center gap-x-[15px] cursor-pointer">
            <svg
              className=" "
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className=""
                d="M20 7.63636V18H0V7.63636H20ZM5 0V1.63636H3.88889V4.36364H5V1.63636H9.44444V0H10.5556V1.63636H9.44444V4.36364H10.5556V1.63636H15V0H16.1111V1.63636H15V4.36364H16.1111V1.63636H20V6.54545H0V1.63636H3.88889V0H5Z"
                fill="black"
              />
            </svg>
            <h1>Takvimde Gör</h1>
          </a>
        </div>
      </div>
      <div className="">
        <Movies values={checkedValues}></Movies>
      </div>
    </>
  );
}
