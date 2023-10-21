const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllUsers = async (req, res) => {
  const allUsers = await prisma.user.findMany();
  res.send(allUsers);
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  res.send(user);
};

const createUser = async (req, res) => {
  const { name, email, isVerified, userName } = req.body;
  const user = await prisma.user.create({
    data: {
      email,
      name,
      userName,
      isVerified,
    },
  });
  console.log(user);
  res.status(201).json({ user: user });
};

const updateUser = async (req, res) => {
  const { id } = req.params;

  const here = req.body;

  const fields = {};
  //   {
  //     name:hafiz,
  //     age:25
  //   }

  for (const key in here) {
    if (here.hasOwnProperty(key)) {
      const value = here[key];
      fields[key] = value;
    }
  }
  console.log(fields);

  const updateUsers = await prisma.user.updateMany({
    where: {
      email: user.email,
    },
    data: fields,
  });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const deletedUser = await prisma.user.delete({
    where: { id: id },
  });
  res.status(200).json({ msg: `deleted user with id ${deletedUser.id}` });
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser, getUser };
