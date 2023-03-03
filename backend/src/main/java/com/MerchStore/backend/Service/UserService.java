package com.MerchStore.backend.Service;

import com.MerchStore.backend.Dao.UsersDao;
import com.MerchStore.backend.Model.Users;

import java.util.List;
import java.util.Optional;

public class UserService {


    public static List<Users> getAllUsers() {
        UsersDao userDao = new UsersDao();
        return userDao.getAll();
    }

    public static boolean updateUser (Users user) {
        UsersDao userDao = new UsersDao();
        return userDao.update(user);
    }

    public static boolean deleteUser (Users user) {
        UsersDao usersDao = new UsersDao();
        return usersDao.delete(user);
    }

    public static Optional<Users> getById(long id) {
        UsersDao userDao = new UsersDao();
        return userDao.get(id);
    }
}
