"use server"

import { google } from "googleapis"

export async function submitOrder(data: {
  name: string
  email: string
  phone: string
  address: string
  briefing: string
}) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth })

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:F1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[data.name, data.email, data.phone, data.address, data.briefing, new Date().toISOString()]],
      },
    })

    return { success: true, data: response.data }
  } catch (error) {
    console.error("Error submitting order:", error)
    return { success: false, error: "Failed to submit order" }
  }
}

