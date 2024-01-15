import { NextResponse } from "next/server";
import prisma from "../../../../prisma";
import { connectToDatabase } from "../../../../helpers/server-helpers";
import bcrypt from "bcrypt";
export const POST = async (req: Request) => {
    try {
        const {name,email,password} = await req.json();
        if(!name || !email || !password){
            throw new Error("Please fill all the fields")
            return NextResponse.json({message: "Invalid data"}, {status: 422});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        await connectToDatabase()
        const newUser = await prisma.user.create({
            data:{email,name, hashedPassword},
        });
        return NextResponse.json({ newUser }, { status: 201 }) ;
    }
    catch (err) {
        console.log(err)
        return NextResponse.json({message: "Server Error"}, {status: 500});
    }
    finally {
        await prisma.$disconnect();

    }
};
