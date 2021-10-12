const superAd = require('../models/superAd');



class SuperAdController {
    constructor() {

    }

    register(req, res) {
        superAd.create(req.body, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(201).json(data);
            }
        });
    }

    /* register(req, res) {
        //obtener datos
        let { id, nombre, apellido } = req.body;
        console.log("Usuario registrado con éxito");
        console.table({ id, nombre, apellido });
        users.push(req.body);
        res.status(200).json({
            message: "Usuario registrado con éxito"
        });
    } */

    /*    update(req, res) {
            let { id, nombre, apellido } = req.body;
            console.table({ id, nombre, apellido });
    
            users.forEach(element => {
                if (id == element.id) {
                    element.nombre = nombre;
                    element.apellido = apellido;
                }
            });
    
            if (users != null) {
                res.status(200).json(users);
            } else {
                res.status(400).json({ message: "Usuario no encontrado" });
            }
        }*/

    update(req, res) {
        let {id, idDocumentoUsu, nombre, apellido, rol, telefono, email,  clave } = req.body;
        let obj = {idDocumentoUsu, nombre, apellido, rol,  telefono, email, clave }
        superAd.findByIdAndUpdate(id, { $set: obj }, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }


    /*deleteUser(req, res) {
        let { id } = req.body;
        console.table({ id });

        let tempUser = [];
        users.forEach(element => {
            if (id != element.id) {
                tempUser.push(element);
            }
        });

        users = tempUser;
        if (users != null) {
            res.status(200).json(users);
        } else {
            res.status(400).json({ message: "Usuario no encontrado" });
        }
    }*/

    deleteSuperAd(req, res) {
        let { id } = req.body;
        superAd.findByIdAndDelete(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }


    /*    getUsers(req, res) {
            let id = req.params.id;
            let userResp = null;
            users.forEach(element => {
                if (id == element.id) {
                    userResp = element;
                }
            });
    
            if (userResp != null) {
                res.status(200).json(userResp);
            } else {
                res.status(400).json({ message: "Usuario no encontrado" });
            }
        }*/

    getSuperAd(req, res) {
        let id = req.params.id;
        superAd.findById(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

    /*    getAllUsers(req, res) {
            res.status(200).json(users);
        }*/

    getAllSuperAd(req, res) {
        superAd.find((error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

}

exports.default = SuperAdController;