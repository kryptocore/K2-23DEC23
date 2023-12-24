AFRAME.registerComponent('i-frame', {
    init: function () {
        // Create floor
        var floor = document.createElement('a-plane');
        floor.setAttribute('class', 'clickable-floor');
        floor.setAttribute('position', '0 0 0');
        floor.setAttribute('rotation', '-90 0 0');
        floor.setAttribute('width', '4');
        floor.setAttribute('height', '4');
        floor.setAttribute('color', 'maroon');
        this.el.appendChild(floor);

        // Create walls
        this.createWall('2 2 0', this.el);
        this.createWall('-2 2 0', this.el);

        // Create ceiling
        var ceiling = document.createElement('a-plane');
        ceiling.setAttribute('position', '0 4 0');
        ceiling.setAttribute('rotation', '90 0 0');
        ceiling.setAttribute('width', '4');
        ceiling.setAttribute('height', '4');
        ceiling.setAttribute('color', 'red');
        this.el.appendChild(ceiling);

        // Create columns
        this.createColumn('2 2 2', this.el);
        this.createColumn('-2 2 2', this.el);
        this.createColumn('2 2 -2', this.el);
        this.createColumn('-2 2 -2', this.el);
    },

    createWall: function (position, parentEntity) {
        var wall = document.createElement('a-box');
        wall.setAttribute('position', position);
        wall.setAttribute('rotation', '0 0 0');
        wall.setAttribute('width', '0.1');
        wall.setAttribute('height', '4');
        wall.setAttribute('depth', '4');
        wall.setAttribute('color', 'maroon');
        parentEntity.appendChild(wall);
    },

    createColumn: function (position, parentEntity) {
        var column = document.createElement('a-cylinder');
        column.setAttribute('position', position);
        column.setAttribute('radius', '0.2');
        column.setAttribute('height', '4');
        column.setAttribute('color', 'maroon');
        parentEntity.appendChild(column);
    }
    
});

AFRAME.registerComponent('t-frame', {
    init: function () {
        // Create floor
        var floor = document.createElement('a-plane');
        floor.setAttribute('class', 'clickable-floor');
        floor.setAttribute('position', '0 0 0');
        floor.setAttribute('rotation', '-90 0 0');
        floor.setAttribute('width', '4');
        floor.setAttribute('height', '4');
        floor.setAttribute('color', 'blue');
        this.el.appendChild(floor);

        // Create walls
        this.createWall('2 2 0', this.el);

        // Create ceiling
        var ceiling = document.createElement('a-plane');
        ceiling.setAttribute('position', '0 4 0');
        ceiling.setAttribute('rotation', '90 0 0');
        ceiling.setAttribute('width', '4');
        ceiling.setAttribute('height', '4');
        ceiling.setAttribute('color', 'blue');
        this.el.appendChild(ceiling);

        // Create columns
        this.createColumn('2 2 2', this.el);
        this.createColumn('-2 2 2', this.el);
        this.createColumn('2 2 -2', this.el);
        this.createColumn('-2 2 -2', this.el);
    },

    createWall: function (position, parentEntity) {
        var wall = document.createElement('a-box');
        wall.setAttribute('position', position);
        wall.setAttribute('rotation', '0 0 0');
        wall.setAttribute('width', '0.1');
        wall.setAttribute('height', '4');
        wall.setAttribute('depth', '4');
        wall.setAttribute('color', 'blue');
        wall.setAttribute('static-body', 'shape: box;');
        parentEntity.appendChild(wall);
    },

    createColumn: function (position, parentEntity) {
        var column = document.createElement('a-cylinder');
        column.setAttribute('position', position);
        column.setAttribute('radius', '0.2');
        column.setAttribute('height', '4');
        column.setAttribute('color', 'blue');
        parentEntity.appendChild(column);
    }
    
});
