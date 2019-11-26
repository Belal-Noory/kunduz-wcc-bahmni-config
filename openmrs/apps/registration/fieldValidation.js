Bahmni.Registration.customValidator = {
  "age.days": {
    method: function (name, value) {
      return value >= 0;
    },
    errorMessage: "REGISTRATION_AGE_ERROR_KEY"
  },
  "reg.phoneNumber": {
    method: function (name, value, personAttributeDetails) {
      return value && (value.length = 0 || value.length = 10);
    },
    errorMessage: "The telephone number should be either or empty, or contain 10 digits."
  }
};

