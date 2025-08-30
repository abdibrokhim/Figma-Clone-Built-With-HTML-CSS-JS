# Figma Clone - Professional Design Tool

A fully functional Figma clone built with vanilla HTML, CSS, and JavaScript. This application replicates Figma's core design functionality including shape creation, text editing, effects, export capabilities, and more.

## 🎯 Features

### Core Design Tools
- **Shape Creation**: Rectangle, Ellipse, Line, Arrow, Polygon, Star
- **Text Tool**: Fully editable text with live typing
- **Image Support**: Drag & drop, paste from clipboard, file picker
- **Comments**: Clickable comment system with position persistence
- **Selection Tools**: Multi-selection, move, resize with corner handles

### Advanced Functionality
- **Effects System**: Drop shadows with full control (X, Y, Blur, Spread, Color, Opacity)
- **Export System**: PNG export with real-time preview
- **Infinite Canvas**: Smooth pan and zoom in all directions
- **Collapsible Sidebars**: Space-efficient workspace management
- **Floating UI**: Dynamic floating controls when sidebars are collapsed

### Professional UI/UX
- **Figma-Accurate Design**: Pixel-perfect recreation of Figma's interface
- **Dark Theme**: Professional dark color scheme
- **Lucide Icons**: High-quality SVG icons throughout
- **Smooth Animations**: Polished transitions and micro-interactions
- **Glass Morphism**: Modern backdrop blur effects

## 📸 Screenshots

<!-- Add your screenshots here -->

### Main Interface
![Main Interface](screenshots/main-interface.png)

### Shape Tools
![Shape Tools](screenshots/shape-tools.png)

### Effects Panel
![Effects Panel](screenshots/effects-panel.png)

### Export Feature
![Export Feature](screenshots/export-feature.png)

### Text Editing
![Text Editing](screenshots/text-editing.png)

### Comments System
![Comments System](screenshots/comments-system.png)

### Collapsed Sidebars
![Collapsed Sidebars](screenshots/collapsed-sidebars.png)

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start designing immediately!

```bash
# Clone the repository
git clone [repository-url]

# Navigate to the project
cd figma-clone

# Open in browser
open index.html
```

## 🎨 How to Use

### Basic Tools
- **Select Tool (V)**: Click to select shapes, drag to move
- **Hand Tool (H)**: Pan around the canvas
- **Rectangle (R)**: Click and drag to create rectangles
- **Ellipse (O)**: Click and drag to create circles/ellipses
- **Line (L)**: Click and drag to create lines
- **Text (T)**: Click to create editable text
- **Comment**: Click to place comments

### Shape Manipulation
- **Move**: Select and drag shapes
- **Resize**: Drag corner handles to resize
- **Properties**: Use right sidebar to adjust X, Y, Width, Height
- **Styling**: Change fill color, stroke, opacity, rotation
- **Effects**: Add drop shadows with full control

### Advanced Features
- **Effects**: Click + in Effects panel to add drop shadows
- **Export**: Click + in Export panel to export as PNG
- **Images**: Drag & drop images or use image tool
- **Comments**: Click comment tool, then click on canvas
- **Zoom**: Ctrl/Cmd + scroll to zoom, or use zoom controls

## ⌨️ Keyboard Shortcuts

### Tools
- `V` - Select tool
- `H` - Hand tool
- `R` - Rectangle
- `O` - Ellipse
- `L` - Line
- `T` - Text
- `P` - Pen
- `F` - Frame

### Actions
- `Cmd/Ctrl + K` or `/` - Open command palette
- `Delete/Backspace` - Delete selected shapes
- `Cmd/Ctrl + +` - Zoom in
- `Cmd/Ctrl + -` - Zoom out
- `Cmd/Ctrl + 0` - Reset zoom
- `Escape` - Clear selection

## 🏗️ Technical Architecture

### File Structure
```
figma-clone/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── app.js              # Core application logic
├── README.md           # This file
└── screenshots/        # Screenshot assets
```

### Core Technologies
- **HTML5**: Semantic structure and canvas management
- **CSS3**: Advanced styling, animations, grid layout
- **Vanilla JavaScript**: Full application logic without frameworks
- **LocalStorage**: Data persistence between sessions
- **HTML5 Canvas**: Image export functionality

### Key Components

#### State Management
```javascript
this.state = {
  tool: 'select',           // Current active tool
  zoom: 1,                  // Canvas zoom level
  shapes: [],               // All shapes on canvas
  comments: [],             // All comments
  selectedIds: new Set(),   // Currently selected shapes
  effects: [],              // Applied effects
  // ... more state
}
```

#### Shape System
- Unified shape rendering system
- SVG generation for complex shapes (arrows, polygons, stars)
- Dynamic property binding
- Effect application with CSS filters

#### Effects System
- Real-time drop shadow preview
- Customizable X, Y, blur, spread, color, opacity
- Multiple effects per shape
- CSS filter-based implementation

## 🎛️ Component Breakdown

### Left Sidebar
- **Pages**: Project page management
- **Layers**: Hierarchical shape listing with icons
- **Search**: Quick layer finding

### Main Canvas
- **Infinite Scroll**: 10000x10000px virtual canvas
- **Zoom System**: Smooth scaling with rulers
- **Shape Rendering**: Real-time shape updates
- **Selection System**: Multi-shape selection with handles

### Right Sidebar (Inspector)
- **Position**: X, Y coordinates with alignment tools
- **Layout**: Width, height, rotation controls
- **Appearance**: Opacity, corner radius, visibility
- **Fill**: Color picker with opacity control
- **Stroke**: Border styling options
- **Effects**: Drop shadow configuration
- **Export**: PNG export with preview

### Bottom Toolbar
- **Tool Groups**: Organized tool categories
- **Dropdowns**: Nested tool selection
- **View Controls**: Rulers, zoom, developer mode

## 💾 Data Persistence

All data is automatically saved to browser localStorage:

```javascript
// Saved data structure
{
  shapes: [
    {
      id: "unique-id",
      type: "rectangle",
      x: 100, y: 100,
      w: 200, h: 150,
      fill: "#0969da",
      effects: [...],
      // ... other properties
    }
  ],
  comments: [
    {
      id: "comment-id",
      x: 300, y: 200,
      text: "Design feedback",
      timestamp: "2023-..."
    }
  ],
  timestamp: "2023-..."
}
```

## 🎨 Styling System

### CSS Variables
```css
:root {
  --bg-0: #1e1e1e;           /* Primary background */
  --bg-1: #2d2d2d;           /* Secondary background */
  --text: #ffffff;           /* Primary text */
  --accent: #0969da;         /* Brand accent */
  --border: #3c3c3c;         /* Border color */
  --shadow: 0 4px 12px rgba(0,0,0,0.15);
}
```

### Animation System
- Smooth transitions with `cubic-bezier` easing
- Transform-based animations for performance
- Backdrop blur for modern glass effects
- Micro-interactions on hover states

## 🔧 Customization

### Adding New Shapes
1. Add shape type to tool creation logic
2. Implement rendering in `renderShape()` method
3. Add SVG generation method if needed
4. Update layer icons in `getShapeIcon()`

### Adding New Effects
1. Extend effects system in `addEffect()` method
2. Add UI controls in `createEffectElement()`
3. Implement CSS filter in `applyEffects()`
4. Update export canvas rendering

### Styling Modifications
- Modify CSS variables for theme changes
- Update component-specific styles
- Maintain responsive breakpoints
- Preserve animation timing

## 📱 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Required Features
- CSS Grid Layout
- CSS Custom Properties
- HTML5 Canvas
- LocalStorage API
- File API (for image uploads)
- Clipboard API (for image paste)

## 🚀 Performance

### Optimizations
- **Efficient Rendering**: Only re-render changed shapes
- **Event Delegation**: Minimal event listeners
- **LocalStorage**: Chunked data saving
- **CSS Transforms**: Hardware-accelerated animations
- **Debounced Saving**: Reduced localStorage writes

### Memory Management
- Automatic cleanup of removed elements
- Efficient shape data structures
- Optimized image handling with base64

## 🔮 Future Enhancements

### Potential Features
- [ ] More shape types (pentagon, octagon, custom polygons)
- [ ] Layer groups and nesting
- [ ] Copy/paste functionality
- [ ] Undo/redo system
- [ ] Grid and snap-to-grid
- [ ] Collaborative features
- [ ] Component system
- [ ] More export formats (SVG, PDF)
- [ ] Advanced text formatting
- [ ] Gradient fills
- [ ] More effects (blur, glow, etc.)

## 🐛 Known Issues

- Text selection may interfere with shape selection
- Large images may impact performance
- Complex shapes with many effects may slow rendering
- LocalStorage has size limitations (~5-10MB)

## 🤝 Contributing

This is a learning project demonstrating vanilla JavaScript capabilities. Feel free to:

1. Fork the repository
2. Create feature branches
3. Submit pull requests
4. Report issues
5. Suggest improvements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Figma**: For the original design inspiration
- **Lucide Icons**: For the beautiful icon set
- **Inter Font**: For the professional typography
- **CSS-Tricks**: For various CSS techniques
- **MDN Web Docs**: For comprehensive web API documentation

---

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**

*A demonstration of what's possible without frameworks*
