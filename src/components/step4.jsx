import { Input } from "./input";
export function Step4() {
  return (
    <div className="w-full h-full justify-center items-center flex bg-[#f4f4f4]">
      <div className="w-[480px] h-[193px] flex flex-col justify-start items-center bg-white rounded-lg">
        <div className="w-[416px] h-[358px] flex flex-col justify-start items-start gap-[20px] pt-[32px]">
          <div>
            <div className="bg-[url(./assets/main.svg)] w-[60px] h-[60px]  "></div>
            <h1 className="text-[26px] font-semibold">
              You're All Set &#128293;
            </h1>
            <p className="font-normal text-[#838383] mt-1 ">
              We have received your submission. Thank you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
