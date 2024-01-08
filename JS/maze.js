// Helper functions to create elements
function createPlane(position, rotation, width, height, color, isFloor = false, navMesh = false) {
    var plane = document.createElement('a-plane');
    plane.setAttribute('position', position);
    plane.setAttribute('rotation', rotation);
    plane.setAttribute('width', width);
    plane.setAttribute('height', height);
    plane.setAttribute('color', color);
    // plane.setAttribute('material', 'src: #rocks-img; normalMap: #rocks-map; metalness: 0.1;');
    plane.setAttribute('physx-body', 'static');
    if (isFloor) {
        // might deprecate this dunno yet
    }
    if (navMesh) {
        plane.setAttribute('class', 'navmesh'); // auto generate navmesh based on maze component
        plane.setAttribute("visible", false);
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
    wall.setAttribute('material', 'metalness: 0.1;');
    wall.setAttribute('physx-body', 'static');
    return wall;
}

function createColumn(position, color) {
    var column = document.createElement('a-cylinder');
    column.setAttribute('position', position);
    column.setAttribute('radius', '0.3');
    column.setAttribute('height', '4');
    column.setAttribute('color', color);
    column.setAttribute('material', 'metalness: 0.1;');
    column.setAttribute('physx-body', 'static');
    return column;
}

// Standardized colors
var floorColor = '#360000';  // Color for floors
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
        this.el.appendChild(createWall('0 2 -2', '0 90 0', '0.2', '4', '4', wallColor));
        this.el.appendChild(createWall('0 2 2', '0 90 0', '0.2', '4', '4', wallColor));
        this.el.appendChild(createColumn('2 2 2', columnColor));
        this.el.appendChild(createColumn('-2 2 2', columnColor));
        this.el.appendChild(createColumn('2 2 -2', columnColor));
        this.el.appendChild(createColumn('-2 2 -2', columnColor));
            // Navmesh:
            this.el.appendChild(createPlane('0 0 0', '-90 0 0', '4', '3', 'none', false, true)); // TODO: make this less, I dunno, stupid? But hey it works aight.
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
    }
});