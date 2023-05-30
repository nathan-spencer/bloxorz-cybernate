# Desktop Bloxorz
This is a modified version of the classic browser game [Bloxorz](https://www.coolmathgames.com/0-bloxorz/play). This desktop version provides some key features.
- [Tauri](https://tauri.app/)
  - Tauri converts the original browser code into a desktop application and optimizes performance by using the OS's native web renderer.
- In Game Timer
  - The addition of an in game timer makes timing and submitting speed runs far more reliable. The timer partitions are setup per the [speed run rules](https://www.speedrun.com/bloxorz/news/1707).
  - [Speed run times](https://www.speedrun.com/bloxorz).
- Themes
  - Additional themes to add variety while maintaining functionality.

## Setup
After checking out the code use `npm install` to install the required packages. The following script commands are available.
- `npm run tauri dev`
  - This will build and start the development version off the app.
- `npm run tauri build`
  - This builds the release version of the app and generates installer bundles.
