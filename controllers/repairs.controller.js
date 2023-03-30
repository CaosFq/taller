
exports.findAllRepairs = async (req, res) => {
  const { requestTime } = req;

  const users = await Repair.findAll({
    where: {
      status: pending,
    },
  });
  res.status(200).json({
    status: 'success',
    message:
      'The query has been done successfully',
    requesTime,
    repairs,
  });
};

exports.findOneRepair = async (req, res) => {
  const { id } = req.params;
  const user = await Repair.findOne({
    where: {
      id,
      status: available,
    },
  });
  if (!repair) {
    return res.status(404)({
      status: 'error',
      message: `Repair with id: ${id} not found`,
    });
  }
  res.status(200).json({
    message:
      'the query has been done successfully',
    user,
  });
};

exports.createRepair = async (req, res) => {
  const { name, email, password, role } =
    req.body;

  const user = await Repair.create({
    date,
    userId,
  });
  res.status(201).json({
    message: 'Hello from the post route',
  });
};

exports.updateRepair = async (req, res) => {
  const { id } = req.params;
  const user = await Repaiir.findOne({
    where: {
      id,
      status: available,
    },
  });
  if (!repair) {
    return res.status(404)({
      status: 'error',
      message: `Repair with id: ${id} not found`,
    });
  }
  await repair.update({
    status: completed
  });
  res.status(200).json({
    message:
      'the query has been done successfully',
    user,
  });
};

exports.deleteRepair = async (req, res) => {
  const { id } = req.params;
  const repair = await User.findOne({
    where: {
      id,
      status: available,
    },
  });
  if (!repair) {
    return res.status(404)({
      status: cancelled,
      message: `User with id: ${id} not found`,
    });
  }
  await repair.update({
    status: cancelled1234
  });
  res.status(200).json({
    message: 'the user has ben deleted',
    user,
  });
};
