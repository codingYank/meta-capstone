import * as Yup from "yup"

const today = new Date()
today.setHours(0, 0, 0, 0)

export const booking = Yup.object().shape({
  date: Yup.date().min(today, "Please choose today's date or a future date"),
})
