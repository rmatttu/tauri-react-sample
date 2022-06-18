# tauri-react-sample

Tauri React Sample.

## Usage

...


## How to create Tauri app

macos

```bash
brew install cargo
yarn create tauri-app
```

```txt
Press any key to continue...
? What is your app name? tauri-react-sample
? What should the window title be? Tauri React Sample
? What UI recipe would you like to add? create-react-app (https://create-react-app.dev/)
? Add "@tauri-apps/api" npm package? Y
? Which create-react-app template would you like to use? create-react-app (Typescript)
```

```bash
cd tauri-react-sample
yarn install

# develop
yarn tauri dev

# build
yarn tauri build
```

## Env info

* yarn 1.22.19
* cargo 1.59.0
* npm 8.1.0

## References

* [Rust GUI の決定版！ Tauri を使ってクロスプラットフォームなデスクトップアプリを作ろう](https://zenn.dev/kumassy/books/6e518fe09a86b2)
