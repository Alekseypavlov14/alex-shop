import { connect } from "mongoose"

export async function connectDatabase() {
  const MONGO_URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.lttgd4h.mongodb.net/?retryWrites=true&w=majority`
  return await connect(MONGO_URL)
}
