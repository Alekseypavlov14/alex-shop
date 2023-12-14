import { defaultExceptionCode } from "../constants"
import { NextResponse } from "next/server"

export function generateErrorResponse(error: any) {
  return NextResponse.json(null, { status: error.code || defaultExceptionCode })
}