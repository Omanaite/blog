import prisma from "../prisma"
export const connectToDatabase = async() => {
    try {
        // Connect to database
        await prisma.$connect();
    }
    catch (err) {
        // Handle error
        console.log(err)
        throw new Error("Unable to connect to database")
    }
    finally {
        // Close connection
    }
}