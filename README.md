## Overview

A  web application for JSON visualization and interaction, generated images are downloadable.


Live Preview: <https://JSON-previewer.vercel.app>

### Stack

- React
- react-component-export-image
- react-simple-code-editor
- reactflow
- sass

## Features

- Tabs
- Preview Board
- Code editor
- Zoom In/out
- Focus control
- Lock
- Download Button


## How It Works

Users can easily interact with the code editor and type in JSON structured code.

The code editor has a *debugging feature* - red indicator that shows error exist in the code. Thus, It can't be previewed until it is fixed.

At the bottom-left, it has features which allows:

- **Zoom in or out** from the workspace.
- **Fit to view** for easy switching on the vertical or horizontal direction.
- **Lock** to restrict the diagram generated from further edit or distortion.

At the top-right, there is:

- **Download** to the diagrams
- **Orientation adjustment** button for custom view.


## Installation

1. Clone the repository

```bash
git clone https://github.com/iBz-04/JSON-previewer.git
```

2. Change the working directory

```bash
cd json-preview
```

3. Install dependencies

```bash
npm install
```

4. Run the app

```bash
npm start
```

You can now see it at `http://localhost:3000` in your browser.
