---
title: Start the server
description: 'In this section, we will start the server and manage our first process.'
order: 2
---

In this section, we will start the server and manage our first process.

## Start the server

To get the server rolling, type:

```bash
kurv server
```

**IMPORTANT**
- <b className="font-serif">kurv</b> will create a file called `.kurv` where it will store the current
state of the server. The file will be created in the same directory where
the binary is located or in the path specified by the `KURV_HOME_KEY`
environment variable.

- since <b className="font-serif">kurv</b> can be used both as a server and as a client, if you want
to run it as a server, you need to set the `KURV_SERVER` environment
to `true`. This is just a safety measure to prevent you from running
the server when you actually want to run the client.
To bypass this, you can use the `--force` flag (`kurv server --force`)

## Collect some eggs!
To deploy/start/daemonize an app (collect an egg), do:

```bash
kurv collect <egg-cfg-path>
```

The path should point to a YAML file that contains the configuration for the egg. 

It should look something like this:

```yaml title="myegg.kurv"
name: fastapi # the name of the egg / should be unique
command: poetry # the command/program to run
args: # the arguments to pass to the command
  - run
  - serve
cwd: /home/user/my-fastapi-app # the working directory in which the command will be run
env: # the environment variables to pass to the command
  FASTAPI_PORT: 8080
```

This will run the command `poetry run serve` in `/home/user/my-fastapi-app` with the environment variable `FASTAPI_PORT` set to `8080`.

If for some reason, the command/program crashes or exits, <b className="font-serif">kurv</b> will revive it!

## Show me my eggs

If you want a summary of the current state of your eggs, run:

```zsh
$ kurv list

🥚 eggs snapshot

╭───┬───────┬───────────┬─────────┬───┬────────╮
│ i │ pid   │ name      │ status  │ ↺ │ uptime │
├───┼───────┼───────────┼─────────┼───┼────────┤
│ 1 │ 35824 │ fastapi   │ running │ 0 │   1s   │
│ 2 │ 0     │ fastapi-2 │ stopped │ 0 │   -    │
╰───┴───────┴───────────┴─────────┴───┴────────╯
```

For details on a specific egg:

``` sh
$ kurv egg <egg:name|id|pid>
```

This will show you the egg's configuration, process details, etc.

## Stop an egg

To halt an egg without removing it:

``` sh
$ kurv stop <egg:name|id|pid>
```

This will stop the process but keep its configuration in the basket in case
you want to start it again later.

## Remove an egg

To actually remove an egg, run:

``` sh
$ kurv remove <egg:name|id|pid>
```

It will stop the process and remove the egg from the basket.

## Restart

If you need the process to be restarted, run:

``` sh
$ kurv restart <egg:name|id|pid>
```