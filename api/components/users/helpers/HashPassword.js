import sha1 from 'sha1';

const hashPassword = (password) => {
  return sha1(password);
};

export { hashPassword };
