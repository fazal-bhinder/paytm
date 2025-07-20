"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function createOnRampTranscation(amount:number, provider: string){
    
    const session = await getServerSession(authOptions);
    const userId = session.user.id;
    const token = Math.random().toString();
    if(!userId){
        return {
            msg : "User not logged in"
        }
    }
    await prisma.onRampTransaction.create({
        data:{
            userId:Number(session?.user?.id),
            amount: amount*100,
            status: "Processing",
            startTime: new Date(),
            provider, 
            token: token
        }   
    })
    return {
        msg: "On ramp transaction added"
    }
}