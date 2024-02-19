export const phoneNumberValidFormat = (phoneNumber) => {
  let formattedPhoneNumber = phoneNumber.replace(/\D/g, "");
  if (formattedPhoneNumber.startsWith("1")) {
    return `+${formattedPhoneNumber}`;
  }
  return `+1${formattedPhoneNumber}`;
};
