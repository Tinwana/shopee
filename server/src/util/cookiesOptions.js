// Options for cookies
const options = {
  expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
  httpOnly: true,
  sameSite: "strict",
  secure: true,
  path: "/",
};
export { options };
