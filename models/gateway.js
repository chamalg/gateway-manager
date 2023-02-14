const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MasterDeviceSchema = new Schema({
    uid: {
        type: Number,
        maxLength: 50
    },
    vendor: {
        type: String,
        maxLength: 50,
        required: true
    },
    createdDate: {
        type: String,
        maxLength: 50,
        default: new Date().toISOString()
    },
    status: {
        type: String,
        maxLength: 50,
        required: true
    },

});


const GatewaySchema = new Schema({
    serialNumber: {
        type: String,
        maxLength: 50,
        required: true
    },
    name: {
        type: String,
        maxLength: 50,
        required: true
    },
    ipv4Address: {
        type: String,
        maxLength: 50,
        required: true
    },
    masterDeviceList: [{
        type: MasterDeviceSchema
    }]
},
    { timestamps: true }
);


GatewaySchema.path('ipv4Address').validate((val) => {
    urlRegex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/;
    return urlRegex.test(val);
}, 'Invalid URL.');


module.exports = mongoose.model("Gateways", GatewaySchema);