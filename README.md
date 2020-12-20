# Collect Theta

This is a site that will helps users collect theta by providing free options trading and automated options strategies that users can customize to fit their investing strategies. Users must be exerpeinced option traders to use this app.

## Links

1. [Roadmap](ROADMAP.md)
2. [Development Setup](#development-setup)
3. [Storybook](#storybook)

## Development Setup

### yarn

On macOS: `brew install yarn`
On Linux or Windows (with `npm` already installed): `sudo npm install -g yarn`

### Node Version

Run `nvm use` in the directory containing `.nvmrc` to set the Node version.

```bash
$ nvm use
Found '$HOME/collect-theta/collect-theta/.nvmrc' with version <v12.14.1>
N/A: version "v12.14.1 -> N/A" is not yet installed.

You need to run "nvm install v12.14.1" to install it before using it.

```

### Environment Variables

Unix:

.bashrc

```bash
export THETA_MONGO_URI=mongodb+srv://username:cluster@mongodb.net/theta...
export THETA_MONGO_SECRET=xxxxxx
```

Windows:

cmd

```cmd
C:\Users\username> SETX THETA_MONGO_URI mongodb+srv://username:cluster@mongodb.net/theta...
C:\Users\username> SETX THETA_MONGO_SECRET xxxxxx
```

## Storybook

Run `yarn storybook` to start Storybook's development server on `localhost:6006` (by default).
