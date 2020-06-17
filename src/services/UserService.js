const UserModel = require('../models');

class UserService {
  create(userData) {
    const user = new UserModel(userData);
    user.save();
    return user;
  }

  delete(id) {
    return UserModel.findByIdAndRemove(id);
  }

  search({
    page, size, order, sort,
  }) {
    const skip = (page - 1) * size;
    return UserModel.find({}, null, { limit: +size, skip }).sort({
      [sort]: order,
    });
  }
}

module.exports = new UserService();
