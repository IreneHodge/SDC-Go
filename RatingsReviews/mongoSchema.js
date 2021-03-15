// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// // Connection URL -- port is usually 27017 arbituary
// //const url = 'mongodb://$[username]:$[password]@$[hostlist]/$[database]?authSource=$[authSource]';
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'ratingsReviews';

// // Create a new MongoClient
// const client = new MongoClient(url, { useUnifiedTopology: true });

// // Use connect method to connect to the Server
//   //in mongoose replaced by: mongoose.connect('mongodb://localhost:27017/ratingsReviews', {useNewUrlParser: true, useUnifiedTopology: true});
//   client.connect(function(err) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");

//   const db = client.db(db);

//   db.reviews.updateMany( {}, { $rename: { 'id': 'review_id' } })

//   db.reviews.createIndex({"review_id" : 1});
//   db.reviews.getIndexes();

//   db.reviewsPhotos.createIndex({'review_id': 1});
//   db.reviewsPhotos.getIndexes();

//   db.collection.dropIndex

//   db.reviews.aggregate([
//     { '$lookup' : {
//           from: 'reviewsPhotos',
//           localField: 'review_id',
//           foreignField: 'review_id',
//           as: 'photos'
//       }
//   },

//   {$out: 'reviewsWithPhotos' }
// ],
//  { allowDiskUse: true },  )

//  db.reviewsWithPhotos.update({}, {$unset: {_id:1}}, false, true);

//   db.characteristicReviews.aggregate([
//       { '$lookup' : {
//             from: 'characteristics',
//             localField: 'id',
//             foreignField: 'characteristic_id',
//             as: 'productValue'
//         }
//     },
//     {'$project' : {
//         'photos': {
//             'id': 1,
//             'url': 1,
//         }
//       }
//     },
//     {$out: '' }
//   ],
//    { allowDiskUse: true },  )

//     ///Mongo Schema Below

// // {
// //     "product_id": number,
// //     "characteristics": {
// //         "Size": {
// //             "id": number,
// //             "value": number
// //         },
// //         "Width": {
// //             "id": number,
// //             "value": number
// //         },
// //         "Comfort": {
// //             "id": number,
// //             "value": number
// //         },
// //         "Quality": {
// //             "id": number,
// //             "value": number
// //         }
// //     }
// // }

//  {
//             "review_id": number,
//             "product_id": number,
//             "rating": number,
//             "summary": string,
//             "recommend": boolean,
//             "response": string,
//             "body": string,
//             "date": Date,
//             "reviewer_name": string,
//             "helpfulness": number,
//             "photos": [
//                 {
//                  "id": number
//                  "url": string
//                 }
//             ],

//     }

// {'$project' : {
//     'photos': {
//         'review_id': 0,
//         'id': 1,
//         'url': 1,
//     }
//   }
// },
