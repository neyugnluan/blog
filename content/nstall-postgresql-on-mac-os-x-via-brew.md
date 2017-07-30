# Install PostgreSQL on Mac OS X via Brew


### Step-by-step instructions

PostgreSQL is an open source object-relational database. It is a popular database choice when using a relational database.

Installing PostgreSQL on Mac OS X is simple.

### Software versions
The instructions in this post were created / tested using the following sofware versions:

  - Mac OS X Yosemite 10.10
  - HomeBrew 0.9.5
  - PostgreSQL 9.4

### Install PostgreSQL via Brew
First, we will update Brew and then install PostgreSQL.

```
$ brew updat
$ brew install postgres
```

### Start PostgreSQL
Start the PostgreSQL server in the foreground. There are optional instructions below in case you would like to start PostgreSQL automatically.

Brew initializes the database during installation.
```
$ postgres -D /usr/local/var/postgres
```

### Login to PostgreSQL for the first time.
Press Cmd + T to open a new terminal tab.

whoami is surrounded by backticks, not single quotes.
```
$ createdb `whoami`
```
Login to PostgreSQL with your user account.
```
$ psql
```

### Optional: Install AdminPack
AdminPack is used by PgAdmin. If you plan on using the PgAdmin UI, then installing AdminPack is a good idea.
```
$ psql postgres -c 'CREATE EXTENSION "adminpack";'
```
Optional: Configure PostgreSQL to start automatically
The commands below configure PostgreSQL to start automatically.
```
$ mkdir -p ~/Library/LaunchAgents

$ ln -sfv /usr/local/opt/postgresql/*.plist ~/Library/LaunchAgents

$ launchctl load ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist
```
### Summary
Congrats. PostgreSQL is now installed on Mac OS X. You are now ready to start using PostgreSQL for development.

### Solved Problem
Error:
```
$ psql
psql: FATAL: role "user" does not exist 
```
Solution:
```
$ psql
$ \du

                             List of roles
 Role name |            Attributes             | Member of 
-----------+-----------------------------------+-----------
 postgres  | Superuser, Create role, Create DB | {}        
```
If there is not at least one role with `superuser`, then you have a problem :-)

If there is one, you can use that to login. And looking at the output of your `\l` command: The permissions for user on the `template0` and `template1` databases are the same as on my OS system for the `superuser` postgres. So I think your setup simple uses user as the `superuser`. So you could try this command to login:
```
$ sudo -u user psql user

$ CREATE USER postgres SUPERUSER;
$ CREATE DATABASE postgres WITH OWNER postgres;
```


