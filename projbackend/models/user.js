var mongoose = require('mongoose');
const crypto = require('crypto'); // 'crpto' encrypts the password by hashes the password into random long strings before it is stored in the DB
const uuidv1 = require('uuid/v1'); // 'uuid' generates random long strings against a plain password

// Creating a schema with various fields to later store the information
  const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    lastname: {
        type: String,
        maxlength: 32,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    userinfo: {
        type: String,
        trim: true
    },
    encry_password: {
        type: String,
        required: true
    },
    salt: String,
    role: {
        type: Number,
        default: 0
    },
    purchases: {
        type: Array,
        default: []
    }
  }, {timestamps: true});

// Virtual property to fetch passwords in DB using getters and setters but not actually storing them in the DB
  userSchema.virtual("password")
        .set(function(password){
            this._password = password
            this.salt = uuidv1();
            this.encry_password = this.securePassword(password);
        })
        .get(function(){
            return this._password;
        })
// Methods created for userSchema to authenticate and securePassword
  userSchema.methods = {

    authenticate: function(plainpassword){
        return this.securePassword(plainpassword) === this.encry_password;
    },
// This method encrypts the plain password using crpto
      securePassword: function(plainpassword){
          if(!plainpassword) return "";
          try{
            return crypto.createHmac('sha256', this.salt)
            .update(plainpassword)
            .digest('hex');
          } catch(err){
              return "";
          }
      }
  };

// Exporting the created Schema
  module.exports = mongoose.model("User", userSchema)