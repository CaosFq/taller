exports.findAllUsers = async (req, res) => {
  const { requestTime } = req;

  const users = await User.findAll({
    where: {
      status: available,
    },
  });
  res.status(200).json({
    status: 'success',
    message:
      'The query has been done successfully',
    requesTime,
    users,
  });
};

exports.findOneUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({
    where: {
      id,
      status: available,
    },
  });
  if (!user) {
    return res.status(404)({
      status: 'error',
      message: `User with id: ${id} not found`,
    });
  }
  res.status(200).json({
    message:
      'the query has been done successfully',
    user,
  });
};

exports.createUser = async (req, res) => {
  const { name, email, password, role } =
    req.body;

  const user = await User.create({
    name,
    email,
    password,
    role,
  });
  res.status(201).json({
    message: 'Hello from the post route',
  });
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({
    where: {
      id,
      status: available,
    },
  });
  if (!user) {
    return res.status(404)({
      status: 'error',
      message: `User with id: ${id} not found`,
    });
  }
  await user.update({
    name,
    email,
  });
  res.status(200).json({
    message:
      'the query has been done successfully',
    user,
  });
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({
    where: {
      id,
      status: available,
    },
  });
  if (!user) {
    return res.status(404)({
      status: 'error',
      message: `User with id: ${id} not found`,
    });
  }
  await product.update({ status: false });
  res.status(200).json({
    message: 'the user has ben deleted',
    user,
  });
};
