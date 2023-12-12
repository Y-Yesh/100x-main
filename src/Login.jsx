
import imgLogo from "./assets/100.svg.svg"
import imgx from "./assets/X.svg.svg"
import Buttons from "./Buttons"

function Logo(){
    return (
      <div className="pt-[56px] xl:mt-0  flex items-baseline justify-center 
xl:w-[65%]">
  <img src={imgLogo} className=" lg:w-[65px] xl:w-[455px] xl:max-w-[75%]" />
  <img src={imgx} className=" lg:w-[20px] xl:w-[136px] xl:max-w-[25%]" />
</div>

    )
}

function MainContent(){
  return (
    <section className=" xl:w-[45%] flex flex-col ">
  <h1 className="text-Neutral-50 mt-[202px] font-[Inter] text-[31px] lg:text-[48px]
     mx-[28px] xl:text-[48px] font-extrabold xl:min-w-[334px] xl:mt-0 
    xl:max-w-[100%] ">Happening now</h1>
  <h2 className="text-Neutral-50 font-[Inter] mx-[28px] mt-[12px] lg:text-[26px]
    text-[16px] 2xl:text-[26px] xl:text-[20px] xl:font-medium">Join today.</h2>
      <Buttons variation="default" text="Create Account"/> 
  <section className="mx-[28px] mt-[40px] flex items-center">
    <p className="bg-neutral-700 w-[155px] min-w-[44%] xl:w-[172px] h-[1px]" />
    <p className="mx-[4px] font-[Chirp] text-[16px] text-Neutral-50">
      or</p>
    <p className="bg-neutral-700 w-[155px] min-w-[44%] xl:w-[172px] h-[1px]" />
  </section>
  <p className="mt-[40px] mx-[28px] font-[Inter] text-[15px] lg:text-[20px] 2xl:text-[20px]
     text-Neutral-50 ">Already have an account?</p>
        <Buttons variation="outline" text="Sign In"/>

    </section>
  )
}

export default function LoginPage(){
    return <div className="bg-black h-screen xl:flex xl:items-center w-screen debug-screens
    xl:justify-center">
  <main className=" xl:flex xl:w-[75%] xl:gap-[100px] xl:items-center 
 xl:justify-center">
    <Logo/>
    <MainContent/> 
  </main>
</div>
}