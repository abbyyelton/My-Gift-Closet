'use strict';

var Gift = require('./models/gift.js');

var gifts = [
  {"title": "Red shirt",
    "price": "$20",
    "storeLink": "Land's End",
    "recipient": "Holly",
    "holiday": "Christmas",
    "notes": "May give for her birthday instead. Stored in closet downstairs.",
    "purchased": true,
    "wrapped": true
  },
  {"title": "Notebook",
    "price": "$10",
    "storeLink": "www.target.com/notebook.html",
    "recipient": "Kate",
    "holiday": "Birthday",
    "notes": "Stored in closet downstairs.",
    "purchased": true,
    "wrapped": false
  }

];


gifts.forEach(function(gift, index) {
  Gift.find({'title': gift.title}, function(err, gifts) {
    if (!err && !gifts.length) {
      Gift.create({title: gift.title,
                  description: gift.description,
                  price: gift.price,
                  storeLink: gift.storeLink,
                  recipient: gift.recipient,
                  holiday: gift.holiday,
                  notes: gift.notes,
                  purchased: gift.purchased,
                  wrapped: gift.wrapped
                });
    }
  });
})
