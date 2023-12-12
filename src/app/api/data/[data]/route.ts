import { db } from "@/lib/MongoConnect";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { data: string } }
) {
  const collName = snakeToCamel(params.data);
  const data = await db.collection(collName).find().toArray();

  console.log(collName);

  return NextResponse.json(data);
}

function snakeToCamel(input: string): string {
  const words = input.split("_");

  const pascalCaseString = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  return pascalCaseString;
}
