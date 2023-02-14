const Gateway = require('../models/gateway');
const { errorHandler } = require("../helpers/errorHandler");

exports.list = (req, res) => {
    Gateway.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.status(200).json({
            data
        });
    })
}

exports.read = (req, res) => {
    return res.json(req.gateway);
}

exports.create = (req, res) => {
    console.log(req.body)
    const gateway = new Gateway(req.body);
    gateway.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.status(201).json({
            data
        });
    })
}

exports.update = (req, res) => {
    //Check mandatory fields
    const { ipv4Address } = req.body;
    const urlRegex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/;
    const isValid = ipv4Address.match(urlRegex);

    if (!ipv4Address || !isValid) {
        return res.status(400).json({
            error: "Please enter a valid IP address"
        })
    }

    Gateway.findOneAndUpdate({ _id: req.gateway._id }, { $set: req.body }, { new: true },
        (err, gateway) => {
            if (err) {
                res.status(400).json({
                    error: 'Update failed'
                });
            }
            res.json(gateway)
        })
}

exports.remove = (req, res) => {
    const gateway = req.gateway;
    gateway.remove((err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        res.json({
            message: 'Gateway & peripheral devices successfully deleted'
        })
    })
}

exports.gatewayById = (req, res, next, id) => {
    console.log('---id', id)
    Gateway.findOne({ serialNumber: id }).exec((err, gateway) => {
        if (err || !gateway) {
            return res.status(400).json({
                error: 'Gateway does not exists'
            })
        }
        req.gateway = gateway;
        next();
    })
}