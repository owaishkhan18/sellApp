import mongoose from 'mongoose';

// Define the User schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true, // Ensure usernames are unique
        minlength: [3, 'Username must be at least 3 characters long']
    },
    email: {
        type: String,
    required:true, // Make sure the field is 'email'
    unique: true,
    trim: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long']
    },
    createdAt: {
        type: Date,
        default: Date.now // Automatically set the creation date
    }
});

// Create the User model from the schema
const User = mongoose.model('User', userSchema);

export default User;
