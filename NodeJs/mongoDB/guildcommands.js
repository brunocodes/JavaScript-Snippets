const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommandSchecma = new Schema({
    name: String,
    description: String,    
    args: Boolean,
    guildOnly: Boolean,
    usage: Number
});

const GuildCommandsSchema = new Schema({
    guild_id: String,
    guild_name: String,        
    register_date: {
		type: Date,
		default: Date.now
    },
    commands: [ CommandSchecma ]    
});

module.exports = GuildCommands = mongoose.model('GuildCommands', GuildCommandsSchema);


// Passing the entire object
const newGuild = new GuildCommands({
  guild_id: guild.id,
  guild_name: guild.name,
  commands:  [{    
    name: comm.name,
    description: comm.description,
    args: comm.args,
    guildOnly: comm.guildOnly,
    usage: 0    
  }]
});  
newGuild.save();

// Adding subdocuments later
const newGuild2 = new GuildCommands({
  guild_id: guild.id,
  guild_name: guild.name
});
newGuild2.commands = [{    
  name: comm.name,
  description: comm.description,
  args: comm.args,
  guildOnly: comm.guildOnly,
  usage: 0    
}];
newGuild2.save();

// Find Guild and push command Obj to array
GuildCommands.findOne({ guild_id: guild.id }, (err, guildcommands)=> {  
  if (Array.isArray(guildcommands.commands)) {
    guildcommands.commands.push({
      name: comm.name,
      description: comm.description,
      args: comm.args,
      guildOnly: comm.guildOnly,
      usage: 0
    });
    guildcommands.save();
    console.log("* Saved.");
  }
});