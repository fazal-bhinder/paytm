import { OnRampTransactions } from "../../../components/OnRampTranscation";
import { SendCard } from "../../../components/SendCard";

export default function(){
    return <div className="w-full">
            <div className="flex flex-col ">   
                <div className="text-4xl text-[#6a51a6] pt-8 mb-1 font-bold flex justify-center">
                    Send Money
                </div>
                <div className="">
                    <SendCard/>
                </div> 
            </div>
        </div>
}