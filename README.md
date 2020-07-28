# Backend API Documentation

# `Database Schema`

### Users

| field    | data type        | metadata                                            |
| :------- | :--------------- | :-------------------------------------------------- |
| id       | unsigned integer | primary key, auto-increments, generated by database |
| username | text             | username, required, unique.                         |
| password | text, hashed     | required                                            |

### Projects Schema

| field             | data type        | metadata                                            |
| :---------------- | :--------------- | :-------------------------------------------------- |
| project_id        | unsigned integer | primary key, auto-increments, generated by database |
| user_id           | text             | joined with users table id, required                |
| title             | text             | Required.                                           |
| description       | text             | not required                                        |
| goal_amount       | text             | not required                                        |
| amount_received   | text             | not required                                        |
| funding_completed | boolean          | not required                                        |

# `Endpoints`

    BaseURL: https://vr-lambdaschool.herokuapp.com/api

## - Project Overview Router

1. Project Overview:

   GET All Projects - /api/projects_dashboard/

## - Auth Router

2.  REGISTER:

    POST a new User - /api/auth/register

         {
             "username":"insert username here", <----required
             "password":"insert password here" <----required
         }

3.  LOGIN:

    POST to log in as a User - /api/auth/login

         {
             "username":"insert username here", <----required, unique.
             "password":"insert password here" <----required
         }

         * returns a token. Assign token to "Authorization" header.

## - Users Router

4.  GET All Users:

         GET - /api/users

         * requires token from login function set to "Authorization" header.

5.  GET A specific user by user ID:

         GET - /api/users/:userId

         * requires token from login function set to "Authorization" header.

6.  UPDATE A User:

         PUT - /api/users/:userId

         {
             "username":"insert username here", <----required
             "password":"insert password here" <----required
         }

7.  DELETE A User:

         DELETE - /api/users/:userId

## - Projects Router

8.  GET All Projects:

         GET - /projects

9.  GET All Projects for a user:

         GET - /:userId/projects

         * requires token from login function set to "Authorization" header.

10. GET A users single project by project ID:

        GET - /:userId/projects/:id

        * requires token from login function set to "Authorization" header.

11. ADD A project by user ID:

        POST - /:userId/projects

        {
            user_id: same # as user.id  <----required
            title: text, required     <----required
            description: text
            goal_amount: integer
            amount_received: integer
            funding_completed: boolean
        }

        * requires token from login function set to "Authorization" header.

12. UPDATE A users project by project ID:

        PUT - /:userId/projects/:id

        {
            user_id: same # as user.id  <----required
            title: text, required     <----required
            description: text
            goal_amount: integer
            amount_received: integer
            funding_completed: boolean
        }

        * requires token from login function set to "Authorization" header.

13. DELETE A users project by project ID:

        DELETE - /:userId/projects/:id

        * requires token from login function set to "Authorization" header.

### Jaren Smart - Back End Dev

- https://github.com/JarenSmart
