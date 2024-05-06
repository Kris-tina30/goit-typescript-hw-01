type UserProf = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<UserProf>): UserProf {
  // Оновлення користувача
  const defaultUser: UserProf = {
    name: '',
    surname: '',
    email: 'user@mail.com',
    password: 'password',
  };

  return { ...defaultUser, ...initialValues };
}
