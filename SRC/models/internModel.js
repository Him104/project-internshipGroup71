const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.objectId;

let internSchema = mongoose.Schema({ 
    name: {
    type: String,
    required: true,
    trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,

    },

    mobile:{
        type:String,
        required:true,
        unique:true
    },

    collegeId:{
        type: objectId,
            refs: 'college',
            required: [true,"college id is required"],
    },
    isDeleted: {
        type: Boolean,
        default: false
    }

},
{timestamps:true})

module.exports= mongoose.model("intern",internSchema);