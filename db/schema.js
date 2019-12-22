let mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const profileSchema = new mongoose.Schema({
        firstName: {
                type: String,
                required: true,
                trim: true
        },
        lastName: {
                type: String
        },
        birthdate: {
                type: Date
        },
        gender: {
                type: String
        },
        locale: {
                type: String
        },
        profileImageUrl: {
                type: String
        },
        createdAt: {
                type: Date,
                default: Date.now
        }
})

const userSchema = new mongoose.Schema({
        email: {
                type: String,
                required: true,
                unique: true,
                lowercase: true,
                validate: value => {
                        if (!validator.isEmail(value)) {
                                throw new Error({
                                        error: 'Invalid Email address'
                                })
                        }
                }
        },
        passwordHash: { //salted and hashed using bcrypt
                type: String,
                required: true,
              },
        nickname: {
                type: String,
                minlength: 1,
                maxlength: 20
        },
        phoneNumber: {
                type: String,
                minlength: 7
        },
        profile: {
                type: profileSchema
        },
        items: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Item',
                index: true
        }],
        isAdmin: {
                type: Boolean,
                default: false
        },
        createdAt: {
                type: Date,
                default: Date.now
        }
})

userSchema.pre('save', async function (next) {
        // Hash the password before saving the user model
        const user = this
        if (user.isModified('password')) {
                user.password = await bcrypt.hash(user.password, 8)
        }
        next()
})

userSchema.methods.generateAuthToken = async function () {
        // Generate an auth token for the user
        const user = this
        const token = jwt.sign({
                _id: user._id
        }, process.env.JWT_KEY)
        user.tokens = user.tokens.concat({
                token
        })
        await user.save()
        return token
}

userSchema.statics.findByCredentials = async (email, password) => {
        // Search for a user by email and password.
        const user = await User.findOne({
                email
        }).exec()
        if (!user) {
                throw new Error({
                        error: 'Invalid login credentials'
                })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if (!isPasswordMatch) {
                throw new Error({
                        error: 'Invalid login credentials'
                })
        }
        return user
}

const usecaseSchema = new mongoose.Schema({
        title: {
                type: String
        },
        description: {
                type: String
        },
        images: [{type: String}]
})

const itemSchema = new mongoose.Schema({
        title: {
                type: String,
                required: true
        },
        description: {
                type: String
        },
        default: {
                type: Boolean,
                required: true
        },
        checked: {
                type: Boolean,
                default: false
        },
        thumbnailUrl: {
                type: String
        },
        category: {
                type: String,
                required:true
        },
        usecases: [{type: usecaseSchema}],
        photos: [{type: String, unique: true}],
        videos: [{type: String, unique: true}],
        user: {
                type: userSchema,
                required: true
        },
        createdAt: {
                type: Date,
                default: Date.now
        },
}, {
        timestamps: true
});

userSchema.set('autoIndex', false);
const User = mongoose.model('User', userSchema);
const Item = mongoose.model("Item", itemSchema);

module.exports = {
        User: User,
        Item: Item
};