import { object, ref, string } from "yup";
import { ValidationErrors } from "../../const/error-messages";
import { MAIL_REG_EX } from "../../const/reg-ex";

export const schema = object({
  name: string()
    .trim()
    .required(ValidationErrors.FIELD_EMPTY)
    .min(3, ValidationErrors.USERNAME_SHORT)
    .max(30, ValidationErrors.USERNAME_LONG),
  email: string()
    .trim()
    .required(ValidationErrors.FIELD_EMPTY)
    .min(7, ValidationErrors.EMAIL_SHORT)
    .max(97, ValidationErrors.EMAIL_LONG)
    .matches(MAIL_REG_EX, ValidationErrors.EMAIL_INCORRECT)
    .test(
      'email',
      ValidationErrors.EMAIL_INCORRECT,
      (value) => {
        const secondPart = value.split('@')[1];
        if (secondPart === undefined) return false;
        return secondPart.length < 65;
      }
    ),
    password: string()
    .required(ValidationErrors.FIELD_EMPTY)
    .min(8, ValidationErrors.PASSWORD_SHORT)
    .max(128, ValidationErrors.PASSWORD_LONG)
    .notOneOf([ref('email'), undefined], ValidationErrors.PASSWORD_MATCH_EMAIL),
});
