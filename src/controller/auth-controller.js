const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();
function generateRandomSixDigitNumber() {
  // Generate a random number between 100,000 and 999,999 (inclusive)
  const min = 100000;
  const max = 999999;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

const loginUser = async (req, res) => {
  const { email } = req.body;
  let user = await prisma.user.findFirst({ where: { email: email } });

  if (!user) {
    user = await prisma.user.create({ data: { email: email } });
  }

  const userToken = await prisma.token.create({
    data: {
      user: { connect: { id: user.id } },
      type: "EMAIL",
      content: generateRandomSixDigitNumber().toString(),
      expiration: new Date(new Date().getTime() + 300000),
    },
  });
  res.status(201).json({ msg: "check your email for provided otp" });
  //   console.log(userToken);

  //   send this token to email
};

const authenticateUser = async (req, res) => {
  const { otp, email } = req.body;

  if (!otp || !email || email.trim() == "" || otp.trim() == "") {
    throw new Error("please povide otp or email");
  }

  const user = await prisma.user.findFirst({
    where: { email: email },
    include: {
      tokens: true,
    },
  });
  user.tokens.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  if (otp !== user.tokens[0].content) {
    throw new Error("provide a valid token");
  }
  if (user.tokens[0].expiration < new Date(new Date().getTime())) {
    throw new Error("already expired token generate another");
  }

  const updatedUser = await prisma.user.update({
    where: { id: user.id }, // Specify the unique identifier for the user you want to update
    data: {
      // Specify the fields you want to update and their new values
      isVerified: true,
    },
  });

  const jwtToken = jwt.sign({ userId: user.id }, "secret", { expiresIn: "1d" });
  res.status(201).json({ msg: jwtToken, user: user });
};

module.exports = { loginUser, authenticateUser };
