export default function Buttons({variation,text}){
    
    const baseState = "mx-[28px] xl:w-[367px] font-[Inter] rounded-[65px] font-bold text-[16px] flex items-center justify-center py-2 w-[334px] min-w-[85%] max-w-[90%] shadow-default " ;
 
    const Variation = {
        default : "bg-neutral-50  hover:bg-neutral-200 disabled:bg-neutral-500 text-Neutral-1000 mt-[40px]",
        outline : " mt-[20px] text-Twitterblue-default border border-signupstroke",
    };
  
    const classes = `${baseState} ${Variation[variation]}`;

    return <button className ={classes}>{text}</button>
}


