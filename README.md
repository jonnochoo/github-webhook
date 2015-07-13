# github-webhook

An Express app for receiving github-webhook requests that trigger commands.

## How it works

Send HTTP POST to ``http://your-domain.com/?apikey=secret-key``

## How to configure

Update the **services.json** file

```

[
  { "apiKey": "secret-key-goes-here", "path": "/var/www/example", "cmd": "echo hello" }
]

```

- **apikey** - the secret key
- **path** - the path from which the commands are executed
- **cmd** - the commands to execute

  
