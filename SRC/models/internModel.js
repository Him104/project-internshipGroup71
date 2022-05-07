const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;

let internSchema = mongoose.Schema({ 
    name: {
    type: String,
    required: [true, "name is required"],
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
        required:[true, "phone number is required"],
        unique:true,
        trim:true,
        validate:{
            validator: function(str){
                return /\d{10}/.test(str)
            },
            message:props=>`${props.value} is not a valid phone number!`

        }
        
    },

    collegeId:{
        type: objectId,
            refs: 'college',
            required: [true,"college id is required"],
            trim:true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }

},
{timestamps:true})

module.exports= mongoose.model("intern",internSchema);