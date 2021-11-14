# Pinsight Task

## Overview

The task is to create a simple user management CRUD Application

## Pages

- Users list
- Create a user
- Update a user

## Fields

Every user should at least have these fields:
- Full Name
- Email
- Username
- Password
- Billing Plan

There should be 3 billing plans, where each one has:
- A name
- A price

All the data should be serialized and stored in localStorage.

## User List

The User list page should consist of a data table representing the users.
Every entry of the list should show some user data, such as Full Name / Username / Email and have two actions: Delete User and Edit User.
There should be a create user button,
search by username
and a filter by billing plan fields on top of the list.
The data table should also support pagination.

## Create a User

The page should consist of the data fields that a user has.
All the fields should have validaton and can not be blank.
The billing plan field should be a select component showing both the name and the price.
On top of the page there should be a button for going back to the list
and on the bottom there should be a save user button.
After creating a user the page should redirect back to the list page.

## Edit a User

The page should be the same as the create user page with a couple of differences.
The fields should be filled in with data from the selected user.
The username field should not be editable.
Also the save user button should be replaced with the update user button.

## Tech Stack

You should use:
- React / Redux / React Router
- MaterialUI
- TypeScript is a big plus

## Evaluation criteria:
- Task completion level
- Code quality
- Git commits frequency and messages

## Timing

The time to complete the task is 1 week. 

