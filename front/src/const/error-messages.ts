export enum ValidationErrors {
  /* --- Common errors --- */
  FIELD_EMPTY = 'Поле обязательно',

  /* --- Email error messages --- */
  EMAIL_INCORRECT = 'Формат Email некорректный',
  EMAIL_SHORT = 'Email не может быть короче 7 символов',
  EMAIL_LONG = 'Email не может быть длиннее 97 символов',

  /* --- Password error messages --- */
  PASSWORD_SHORT = 'Пароль должен содержанть не менее 8 символов',
  PASSWORD_LONG = 'Пароль не может содержать более 128 символов',
  PASSWORD_MATCH_EMAIL = 'Пароль не должен совпадать с адресом электронной почты',

  /* --- Username error messages */
  USERNAME_SHORT = 'Имя не может быть короче чем 3 символа',
  USERNAME_LONG = 'Имя не может быть длиннее чем 30 символов'
};
