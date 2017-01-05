# React/Redux Boilerplate with Material-UI wrapper components

This is my main react redux boilerplate with pre-built [material-ui](http://material-ui.com) wrapper components.

## Quick start

1. Clone this repo using `git clone --depth=1 https://github.com/kelsonic/react-redux-material-ui-boilerplate.git`
2. Run `npm run setup` to install dependencies and clean the git repo.<br />
   *We auto-detect `yarn` for installing packages by default, if you wish to force `npm` usage do: `USE_YARN=false npm run setup`*<br />
   *At this point you can run `npm start` to see the example app at `http://localhost:3000`.*
3. Run `npm run clean` to delete the example app.

Now you're ready to rumble!

## Documentation

- [Intro](docs/general): What's included and why
- [**Commands**](docs/general/commands.md): Getting the most out of this boilerplate
- [Testing](docs/testing): How to work with the built-in test harness
- [Styling](docs/css): How to work with the CSS tooling
- [Your app](docs/js): Supercharging your app with Routing, Redux, simple
  asynchronicity helpers, etc.

## Another React-Redux boilerplate?

A large inspiration came from Max's [React-Redux boilerplate](https://github.com/mxstbr/react-boilerplate), which has been battle-tested and is production-ready.

*So why create another React-Redux boilerplate?* A few reasons:

- I needed a separate `view.js` for each component/container.
- [PureComponents are preferred (ie. optimized) over stateless components](https://medium.com/modus-create-front-end-development/component-rendering-performance-in-react-df859b474adc#.8sz7sopg0).
- I needed material-ui wrapper components that could be easily used in containers.

There are more reasons, though I figured introducing pre-built material-ui wrapper components was reason enough to open-source this boilerplate.

## License

[MIT License](LICENSE).
