import { Schema } from "mongoose";

// Ecommerce example
const userCartSchecma = new Schema({
    items: [itemsSchelma],
    status: String
});

const userSchecma = new Schema({
    name: String,
    address: {
        line1: String,
        line2: String,
        city: String,
        state: String,
        zip: Number,
    },
    cart:{
        type: userCartSchecma,
        default: {
            items: [],
            status: "Active"
        }
    },
    orderHistory: [ {type: Schema.Types.ObjectId, ref: 'Cart'} ]
});
// *-------------------------------*

// My App user
const userSchecma2 = new Schema({
    name: String,
    address: {
        line1: String,
        line2: String,
        city: String,
        state: String,
        zip: Number,
    },
    cart:{
        type: userCartSchecma,
        default: {
            items: [],
            status: "Active"
        }
    },
    orderHistory: [ {type: Schema.Types.ObjectId, ref: 'Cart'} ]
});

const settingsSchecma = new Schema({
    bot_enable: Boolean,
    dark_mode: Boolean,
    email_notification: Boolean,
});
const TwitchUserSchema = new Schema({
    twitch_id: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    display_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profile_image_url: {
        type: String,
        required: true
    },
    register_date: {
		type: Date,
		default: Date.now
    },
    settings: {
        type: settingsSchecma,
        default: {
            bot_enable: true,
            dark_mode: true,
            email_notification: true,
        }        
    }    
});