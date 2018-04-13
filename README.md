# v8-map-processor

Processes and visualizes maps (aka hidden classes) created by v8 during execution.

Derived from the one included with [v8/tools](https://github.com/v8/v8/tree/master/tools).

## Installation

    npm install -g v8-map-processor

## Usage

1. Install d8 via `npm install -g jsvu`
    - note that d8 is named `v8` so either link it to `d8` or use `v8` when typing the next
      command
2. Run your app with d8, i.e. `d8 --trace-maps example/points.js`
    - note that this will run just the JavaScript engine, so things like `setTimeout`,
      `console.log` and `process` are not available
3. Run `map-processor` in the same directory to load the produced `v8.log` into the maps
  visualizer

Once you load the visualizer scroll to the very right of the timeline to skip the maps that are
created during initialization. Then you can click on any of the bars do get more info.

The following keyboard shortcuts are available:

- arrow up: select previous edge
- arrow down: select next edge
- arrow left: move to previous chunk
- arrow right: move to next chunk
- `+`: increase timeline resolution
- `-`: decrease timeline resolution
