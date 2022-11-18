const pool = require("../../config/database");
const AvatarGenerator = require("named-avatar-generator");
const crypto = require('crypto')

module.exports = {
  create: (data, callBack) => {
    const imageName = crypto.randomBytes(20).toString('hex')
    AvatarGenerator.generate({ name: data.fullName, size: 100 }).then(avatar => {
      AvatarGenerator.writeAvatar(avatar, "./storage/images/profiles/" + imageName + ".jpg");
    });

    pool.query(
      `insert into users(userName, email, password, profileImg) 
                values(?,?,?,?)`,
      [
        data.userName,
        data.fullName,
        data.address,
        data.postCode,
        data.city,
        data.country,
        data.gender,
        data.email,
        data.password,
        data.phoneNumber,
        profile = imageName + '.jpg'
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from users where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  getUserByUserId: (id, callBack) => {
    pool.query(
      `SELECT userId, userName, email, profileImg FROM users WHERE userId = ?`,

      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUsers: callBack => {
    pool.query(
      `SELECT userId, userName, email, profileImg FROM users`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  updateUser: (data, callBack) => {
    pool.query(
      `UPDATE users SET userName=?, fullName=?, address=?, city=?, postCode=?, country=?, gender=?, email=?, password=?, phoneNumber=? WHERE userId = ?`,
      [
        data.userName,
        data.fullName,
        data.address,
        data.postCode,
        data.city,
        data.country,
        data.gender,
        data.email,
        data.password,
        data.phoneNumber,
        data.userId
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  makeaAdmin: (data, callBack) => {
    pool.query(
      `UPDATE users SET admin=? WHERE userId = ?`,
      [
        data.admin,
        data.userId
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  searchByKeywords: (keywords, callBack) => {
    pool.query(
      `SELECT * FROM users WHERE email = ?`,

      [keywords],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  deleteUser: (data, callBack) => {
    pool.query(
      `DELETE FROM users where userId = ?`,
      [data.userId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
