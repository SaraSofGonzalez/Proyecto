// Definimos el módulo de la aplicación
var app = angular.module('myApp', []);

// Definimos el controlador de la aplicación
app.controller('namesCtrl', function($scope) {
    // Datos de ejemplo
    $scope.users = [
        {name: 'Juan', apellido: 'Pérez', direccion: 'Calle Falsa 123', email: 'juan.perez@example.com'},
        {name: 'María', apellido: 'González', direccion: 'Avenida Siempre Viva 456', email: 'maria.gonzalez@example.com'},
        // Puedes agregar más usuarios de ejemplo aquí
    ];

    // Función para ordenar
    $scope.orderBy = function(property) {
        $scope.order = property;
    };

    // Función para añadir un nuevo usuario
    $scope.addUser = function() {
        $scope.triggerForm = true;
        $scope.addForm = true;
        $scope.editForm = false;
        $scope.crudFormName = '';
        $scope.crudFormApellido = '';
        $scope.crudFormDireccion = '';
        $scope.crudFormEmail = '';
        $scope.emailExisted = false;
    };

    // Función para editar un usuario existente
    $scope.editUser = function(user) {
        $scope.triggerForm = true;
        $scope.addForm = false;
        $scope.editForm = true;
        $scope.editUserId = user;
        $scope.crudFormName = user.name;
        $scope.crudFormApellido = user.apellido;
        $scope.crudFormDireccion = user.direccion;
        $scope.crudFormEmail = user.email;
        $scope.emailExisted = false;
    };

    // Función para eliminar un usuario
    $scope.deleteUser = function(user) {
        var index = $scope.users.indexOf(user);
        if (index !== -1) {
            $scope.users.splice(index, 1);
        }
    };

    // Función para guardar los cambios al editar o añadir un usuario
    $scope.saveEdit = function(editUserId) {
        if ($scope.addForm) {
            // Añadir nuevo usuario
            $scope.users.push({
                name: $scope.crudFormName,
                apellido: $scope.crudFormApellido,
                direccion: $scope.crudFormDireccion,
                email: $scope.crudFormEmail
            });
        } else if ($scope.editForm) {
            // Guardar cambios en el usuario existente
            editUserId.name = $scope.crudFormName;
            editUserId.apellido = $scope.crudFormApellido;
            editUserId.direccion = $scope.crudFormDireccion;
            editUserId.email = $scope.crudFormEmail;
        }
        $scope.triggerForm = false;
    };

    // Función para verificar si el correo ya está registrado
    $scope.checkEmail = function(editUserId) {
        $scope.emailExisted = false;
        for (var i = 0; i < $scope.users.length; i++) {
            if ($scope.users[i].email === $scope.crudFormEmail && $scope.users[i] !== editUserId) {
                $scope.emailExisted = true;
                break;
            }
        }
    };

    // Filtro para calcular el total de direcciones (ejemplo, aunque no tiene mucho sentido en este contexto)
    app.filter('totalDireccion', function() {
        return function(input, property) {
            var total = 0;
            angular.forEach(input, function(item) {
                total += item[property] ? 1 : 0; // Esto cuenta cuántos usuarios tienen una dirección registrada
            });
            return total;
        };
    });
});
