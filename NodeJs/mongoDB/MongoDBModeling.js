// Embedded

// ####  referenced / Populate  ####
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    age: Number,
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});


const storySchema = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Person' },
    title: String,
    fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});
  
const Story = mongoose.model('Story', storySchema);
const Person = mongoose.model('Person', personSchema);

// Saving refs
// Saving refs to other documents works the same way you normally save properties, just assign the _id value:
const author = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'Ian Fleming',
    age: 50
  });
  
author.save(function (err) {
    if (err) return handleError(err);

    const story1 = new Story({
        title: 'Casino Royale',
        author: author._id    // assign the _id from the person
    });

    story1.save(function (err) {
        if (err) return handleError(err);
        // that's it!
    });
});

// Population
// So far we haven't done anything much different. We've merely created a Person and a Story. 
// Now let's take a look at populating our story's author using the query builder:
Story.
    findOne({ title: 'Casino Royale' }).
    populate('author').
    exec(function (err, story) {
        if (err) return handleError(err);
        console.log('The author is %s', story.author.name);
        // prints "The author is Ian Fleming"
    });

