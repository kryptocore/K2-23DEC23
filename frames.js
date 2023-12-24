// Helper functions to create elements
function createPlane(position, rotation, width, height, color, isFloor = false) {
    var plane = document.createElement('a-plane');
    plane.setAttribute('position', position);
    plane.setAttribute('rotation', rotation);
    plane.setAttribute('width', width);
    plane.setAttribute('height', height);
    plane.setAttribute('color', color);
    plane.setAttribute('material', 'src: #wall; magFilter: nearest; minFilter: nearest;');
    if (isFloor) {
        // Add checkpoint attribute if it's a floor
        plane.setAttribute('checkpoint', '');
    }
    return plane;
}

function createWall(position, rotation, width, height, depth, color) {
    var wall = document.createElement('a-box');
    wall.setAttribute('position', position);
    wall.setAttribute('rotation', rotation);
    wall.setAttribute('width', width);
    wall.setAttribute('height', height);
    wall.setAttribute('depth', depth);
    wall.setAttribute('color', color);
    wall.setAttribute('material', 'src: #wall; magFilter: nearest; minFilter: nearest;');
    return wall;
}

function createColumn(position, color) {
    var column = document.createElement('a-cylinder');
    column.setAttribute('position', position);
    column.setAttribute('radius', '0.1');
    column.setAttribute('height', '4');
    column.setAttribute('color', color);
    return column;
}

// Standardized colors
var floorColor = 'none';  // Color for floors
var wallColor = 'none';  // Color for walls
var ceilingColor = 'none';  // Color for ceilings
var columnColor = 'maroon';  // Color for columns

// I-Frame Component
AFRAME.registerComponent('i-frame', {
    init: function () {
        this.el.appendChild(createPlane('0 0 0', '-90 0 0', '4', '4', floorColor, true));
        this.el.appendChild(createPlane('0 4 0', '90 0 0', '4', '4', ceilingColor));
        this.el.appendChild(createWall('2 2 0', '0 0 0', '0.1', '4', '4', wallColor));
        this.el.appendChild(createWall('-2 2 0', '0 0 0', '0.1', '4', '4', wallColor));
        this.el.appendChild(createColumn('2 2 2', columnColor));
        this.el.appendChild(createColumn('-2 2 2', columnColor));
        this.el.appendChild(createColumn('2 2 -2', columnColor));
        this.el.appendChild(createColumn('-2 2 -2', columnColor));
    }
});

// T-Frame Component
AFRAME.registerComponent('t-frame', {
    init: function () {
        this.el.appendChild(createPlane('0 0 0', '-90 0 0', '4', '4', floorColor, true));
        this.el.appendChild(createPlane('0 4 0', '90 0 0', '4', '4', ceilingColor));
        this.el.appendChild(createWall('2 2 0', '0 0 0', '0.1', '4', '4', wallColor));
        this.el.appendChild(createColumn('2 2 2', columnColor));
        this.el.appendChild(createColumn('-2 2 2', columnColor));
        this.el.appendChild(createColumn('2 2 -2', columnColor));
        this.el.appendChild(createColumn('-2 2 -2', columnColor));
    }
});

// C-Frame Component
AFRAME.registerComponent('c-frame', {
    init: function () {
        this.el.appendChild(createPlane('0 0 0', '-90 0 0', '4', '4', floorColor, true));
        this.el.appendChild(createPlane('0 4 0', '90 0 0', '4', '4', ceilingColor));
        this.el.appendChild(createWall('2 2 0', '0 0 0', '0.1', '4', '4', wallColor));
        this.el.appendChild(createWall('0 2 2', '0 0 0', '4', '4', '0.1', wallColor));
        this.el.appendChild(createWall('0 2 -2', '0 0 0', '4', '4', '0.1', wallColor));
        this.el.appendChild(createColumn('2 2 2', columnColor));
        this.el.appendChild(createColumn('2 2 -2', columnColor));
        this.el.appendChild(createColumn('-2 2 2', columnColor));
        this.el.appendChild(createColumn('-2 2 -2', columnColor));
    }
});

// L-Frame Component
AFRAME.registerComponent('l-frame', {
    init: function () {
        this.el.appendChild(createPlane('0 0 0', '-90 0 0', '4', '4', floorColor, true));
        this.el.appendChild(createPlane('0 4 0', '90 0 0', '4', '4', ceilingColor));
        this.el.appendChild(createWall('2 2 0', '0 0 0', '0.1', '4', '4', wallColor));
        this.el.appendChild(createWall('0 2 2', '0 0 0', '4', '4', '0.1', wallColor));
        this.el.appendChild(createColumn('2 2 2', columnColor));
        this.el.appendChild(createColumn('2 2 -2', columnColor));
        this.el.appendChild(createColumn('-2 2 2', columnColor));
        this.el.appendChild(createColumn('-2 2 -2', columnColor));
    }
});

// O-Frame Component
AFRAME.registerComponent('o-frame', {
    init: function () {
        this.el.appendChild(createPlane('0 0 0', '-90 0 0', '4', '4', floorColor, true));
        this.el.appendChild(createPlane('0 4 0', '90 0 0', '4', '4', ceilingColor));
        // No walls, as it's an open intersection
    }
});