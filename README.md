# Google Chat Desktop App

[![latest-tag](https://badgen.net/github/release/ankurk91/google-chat-electron)](https://github.com/ankurk91/google-chat-electron/tags)
[![downloads](https://img.shields.io/github/downloads/ankurk91/google-chat-electron/total?cacheSeconds=3600)](https://github.com/ankurk91/google-chat-electron/releases)
[![release-linux](https://github.com/ankurk91/google-chat-electron/actions/workflows/release-linux.yml/badge.svg)](https://github.com/ankurk91/google-chat-electron/actions/workflows/release-linux.yml)
[![release-mac](https://github.com/ankurk91/google-chat-electron/actions/workflows/release-mac.yml/badge.svg)](https://github.com/ankurk91/google-chat-electron/actions/workflows/release-mac.yml)
[![tests](https://github.com/ankurk91/google-chat-electron/actions/workflows/tests.yml/badge.svg)](https://github.com/ankurk91/google-chat-electron/actions/workflows/tests.yml)
[![snapcraft](https://snapcraft.io/google-chat-electron/badge.svg)](https://snapcraft.io/google-chat-electron)
[![dependabot](https://badgen.net/dependabot/ankurk91/google-chat-electron)](https://github.com/ankurk91/google-chat-electron/pulls)

An unofficial desktop app for [Google Chat](https://chat.google.com/) built with [Electron](https://www.electronjs.org/)

### Motivation

* The official Google Chat electron app
    - is not [available](https://chat.google.com/download/) on Linux
    - will [stop running](https://support.google.com/chat/answer/10194711) after March 2021
* Google is forcing users to use PWA which has fewer features

### Installation (Linux)

* Install via [snap](https://snapcraft.io/google-chat-electron) (recommended)

```bash
sudo snap install google-chat-electron
sudo snap connect google-chat-electron:removable-media :removable-media
```

* Alternatively you can download the latest debian installer from
  [releases](https://github.com/ankurk91/google-chat-electron/releases/latest) section
* Install the debian package with this command: (correct the path)

```bash
sudo apt install ~/path/to/google-chat-electron-xxx-amd64.deb
```

* :warning: Debian package does not have automatic background updates

### Uninstall (Linux)

* Quit from app if running
* Remove the app with this command if installed via snap

```bash
sudo snap remove google-chat-electron
```

or if installed via debian package

```bash
sudo apt-get remove --purge google-chat-electron
```

* The uninstallation script should remove all relevant files and folders.

### Installation (Mac)

* Download the zip file from [releases](https://github.com/ankurk91/google-chat-electron/releases/latest) section
* Extract the zip file
* Move the app to your `~/Applications` folder
* Fix the permission issue with this command

```bash
sudo xattr -rd com.apple.quarantine ~/Applications/google-chat-electron.app
```

* Above command should fix the Mac-OS Gatekeeper [issue](https://apple.stackexchange.com/questions/262355/)

### Uninstall (Mac)

* Quit from app if running
* Move the app to trash

### Supported Platforms

The app should work on most linux distros, but due to lack of time; we test on most popular only.

| OS                    | Version          | Tested              |
| :---                  | :---:            |                ---: |
| Ubuntu GNOME          | 20.x             |  :heavy_check_mark: |
| Linux Mint Cinnamon   | 20.x             |  :heavy_check_mark: |
| MacOS                 | 10.15            |  :white_check_mark: |

### Acknowledgements

* [@robyf](https://github.com/robyf/google-chat-linux) for the initial work
* [@squalou](https://github.com/squalou/google-chat-linux) for enhancements
* All other [contributors](https://github.com/ankurk91/google-chat-electron/graphs/contributors)

## Disclaimer

This desktop app is just a wrapper which starts a chromium instance locally and runs the actual web-app in it. All
rights to the [Google Chat](https://chat.google.com/) product is reserved by
[Google Inc.](https://en.wikipedia.org/wiki/Google)
This desktop client has no way to access none of your data.

[![Snap Store](https://snapcraft.io/static/images/badges/en/snap-store-black.svg)](https://snapcraft.io/google-chat-electron)

## License

[MIT](LICENSE.txt) License
