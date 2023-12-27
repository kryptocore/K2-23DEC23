// Helper functions to create elements
function createPlane(position, rotation, width, height, color, isFloor = false) {
    var plane = document.createElement('a-plane');
    plane.setAttribute('position', position);
    plane.setAttribute('rotation', rotation);
    plane.setAttribute('width', width);
    plane.setAttribute('height', height);
    plane.setAttribute('color', color);
    plane.setAttribute('material', 'src: #rocks-img; normalMap: #rocks-map; metalness: 0.1;');
    if (isFloor) {
        plane.setAttribute('checkpoint', '')
        plane.setAttribute('class', 'collidable'); // Add class for collision detection
        plane.setAttribute('static-body', ''); // Make the floor a static physics body
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
    wall.setAttribute('material', 'src: #brickz-img; normalMap: #brickz-map; metalness: 0.1;');
        wall.setAttribute('class', 'collidable'); // Add class for collision detection
        wall.setAttribute('static-body', ''); // Make the floor a static physics body
    return wall;
}

function createColumn(position, color) {
    var column = document.createElement('a-cylinder');
    column.setAttribute('position', position);
    column.setAttribute('radius', '0.3');
    column.setAttribute('height', '4');
    column.setAttribute('color', color);
    column.setAttribute('material', 'src: #bricks-img; normalMap: #bricks-map; repeat: 1 3; normalTextureRepeat: 1 3; metalness: 0.1;');
    return column;
}

// Standardized colors
var floorColor = 'black';  // Color for floors
var wallColor = '#2e0000';  // Color for walls
var ceilingColor = '#2e0000';  // Color for ceilings
var columnColor = '#2e0000';  // Color for columns

// Hallway on Y axis (well, Z, thanks A-Frame)
AFRAME.registerComponent('y-hallway', {
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

// Hallway on X axis
AFRAME.registerComponent('x-hallway', {
    init: function () {
        this.el.appendChild(createPlane('0 0 0', '-90 0 0', '4', '4', floorColor, true));
        this.el.appendChild(createPlane('0 4 0', '90 0 0', '4', '4', ceilingColor));
        this.el.appendChild(createWall('0 2 -2', '0 90 0', '0.1', '4', '4', wallColor));
        this.el.appendChild(createWall('0 2 2', '0 90 0', '0.1', '4', '4', wallColor));
        this.el.appendChild(createColumn('2 2 2', columnColor));
        this.el.appendChild(createColumn('-2 2 2', columnColor));
        this.el.appendChild(createColumn('2 2 -2', columnColor));
        this.el.appendChild(createColumn('-2 2 -2', columnColor));

        this.el.appendChild(createMarker('0 0.2 0'));
        this.el.appendChild(createMarker('2 0.2 0'));
        this.el.appendChild(createMarker('-2 0.2 0'));
    }
});

// T-junction, North Wall
AFRAME.registerComponent('t-junct-n', {
    init: function () {
        this.el.appendChild(createPlane('0 0 0', '-90 0 0', '4', '4', floorColor, true));
        this.el.appendChild(createPlane('0 4 0', '90 0 0', '4', '4', ceilingColor));
        this.el.appendChild(createWall('0 2 2', '0 90 0', '0.1', '4', '4', wallColor));
        this.el.appendChild(createColumn('2 2 2', columnColor));
        this.el.appendChild(createColumn('-2 2 2', columnColor));
        this.el.appendChild(createColumn('2 2 -2', columnColor));
        this.el.appendChild(createColumn('-2 2 -2', columnColor));

        this.el.appendChild(createMarker('0 0.2 0'));
        this.el.appendChild(createMarker('2 0.2 0'));
        this.el.appendChild(createMarker('-2 0.2 0'));
        this.el.appendChild(createMarker('0 0.2 -2'));
    }
});

// T-junction, West Wall
AFRAME.registerComponent('t-junct-w', {
    init: function () {
        this.el.appendChild(createPlane('0 0 0', '-90 0 0', '4', '4', floorColor, true));
        this.el.appendChild(createPlane('0 4 0', '90 0 0', '4', '4', ceilingColor));
        this.el.appendChild(createWall('2 2 0', '0 0 0', '0.1', '4', '4', wallColor));
        this.el.appendChild(createColumn('2 2 2', columnColor));
        this.el.appendChild(createColumn('-2 2 2', columnColor));
        this.el.appendChild(createColumn('2 2 -2', columnColor));
        this.el.appendChild(createColumn('-2 2 -2', columnColor));

        this.el.appendChild(createMarker('0 0.2 0'));
        this.el.appendChild(createMarker('2 0.2 0'));
        this.el.appendChild(createMarker('-2 0.2 0'));
        this.el.appendChild(createMarker('0 0.2 -2'));
    }
});