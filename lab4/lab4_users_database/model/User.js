const mongoose = require('mongoose');

let validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

let validateCity = function(city) {
    var re = /^[a-zA-Z ]*$/;
    return re.test(city);
};

let validateZipcode = function(zipcode) {
    var re = /\d{5}-\d{4}/;
    return re.test(zipcode);
};

let validatePhone = function(phone) {
    var re = /\d{1}-\d{3}-\d{3}-\d{3}/;
    return re.test(phone);
};

let validateWebsite = function(website) {
    var re = /(http|https)?:\/\/(\S+)/;
    return re.test(website);
};

let userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Name required.']
  },
  username: {
    type: String,
    trim: true,
    required: [true, 'Username required.'],
    minlength: [4, 'Minimum length is 4.']
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'Email required.'],
    validate: [validateEmail, 'Invalid email.']
  },
  address: {
    street: {
      type: String,
      required: [true, 'Street required.']
    },
    suite: {
      type: String,
      required: [true, 'Suite required.']
    },
    city: {
      type: String,
      required: [true, 'City required.'],
      validate: [validateCity, 'Invalid city.']
    },
    zipcode: {
      type: String,
      required: [true, 'Zipcode required.'],
      validate: [validateZipcode, 'Invalid zip code.']
    },
    geo: {
      lat: {
        type: String,
        required: [true, 'Lat required.']
      },
      lng: {
        type: String,
        required: [true, 'Lng required.']
      }
    }
  },
  phone: {
    type: String,
    trim: true,
    required: [true, 'Phone required.'],
    validate: [validatePhone, 'Invalid phone number.']
  },
  website: {
    type: String,
    trim: true,
    required: [true, 'Website required.'],
    validate: [validateWebsite, 'Invalid URL address.']
  },
  company: {
    name: {
      type: String,
      trim: true,
      required: [true, 'Company name required.']
    },
    catchPhrase: {
      type: String,
      trim: true,
      required: [true, 'Catch phrase required.']
    },
    bs: {
      type: String,
      trim: true,
      required: [true, 'Bs required.']
    },
  }
});

module.exports = mongoose.model('User', userSchema);