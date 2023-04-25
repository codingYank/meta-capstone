import * as Yup from "yup"

export const booking = Yup.object().shape({
  date: Yup.date().required("Please choose a date"),
})
