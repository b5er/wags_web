export const regex = {
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phone: /^([0-9]{3})([0-9]{3})([0-9]{4})$/,
  zip: /^[0-9]{5}(?:-[0-9]{4})?$/,
  amount: /^([1-9][0-9]{0,5})$/,
  card: /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
  exp: /^(([1-9])|(0[1-9]|1[0-2]))\/?([0-9]{4}|[0-9]{2})$/,
  cvc: /^([0-9]{3,4})$/
}
