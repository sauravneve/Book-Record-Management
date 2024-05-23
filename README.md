# Book-Record-Management

Server >> Storing certain book data >> User Register >> Subscriber

This is a book record management API Server/ Backed for the library system or management of records or manuals or books

Fine System:
User: 06/01/2024 - 06/04/2024 3Months
09/04/2024 -> Rs.5/-\*3 = Rs.15/-

## Subscribtion Types:

3 Months (Basic)
6 Months (Standard)
12 Months (Premium)

If the Subscription type is standard && if the subscription date is 06/01/2024
-> then subscription valid till 06/07/2024

within subscription date >> if we miss renewal >>Rs.5/- per day
subscription date is also been missed >> and also missed the renewal >>Rs.100 + Rs.5/- per day

> > book1
> > basic
> > 06/01/2024 -> subscription date
> > 07/01/2024 -> borrowed a book from library
> > book1 renewal date is on 21/01/2024 -> 15days
> > 23/01/2024 -> we need to pay a fine of Rs.5/- \* 2= Rs.10/-

> > book2
> > basic
> > 06/01/2024 -> subscription date
> > 07/01/2024 -> borrowed a book from library
> > book1 renewal date is on 21/01/2024 -> 15days
> > 23/04/2024 -> we need to pay a fine of Rs.100/- + Rs.5/-

Penalty:
missed by renewal date >> Rs.5/- per day
missed by subscription date >> Rs.100/-
missed by renewal && subscription date >>Rs.100/- + \*Rs.5/-

# Routes and Endpoints

## /users

POST: Create a new user
GET: Get all the new info here

## /users/(id)

GET: Get a user by id
PUT: update a user by their ID
DELETE: Delete a user by id(Check if he/she still have an issued book) Is (is there any fine to paid)

## /users/subscription-details/{id}

GET: Get user subscription details >> Date of Subscription >> Valid till >> Is there any fine

## /books

GET: Get all the books
POST: create/add a new book

## /books/{id}

GET: Get a book by id
PUT: update a book by id

## /books/issued

GET: Get all the books

## /books/issued/withfine

GET: get all issued books with their fine

## npm init

## npm i nodemon --save-dev

## npm run dev
