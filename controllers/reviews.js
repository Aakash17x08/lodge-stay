const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.createReview = async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  let { id } = req.params;
  newReview.author = req.user._id;
  listing.reviews.push(newReview);
  // console.log(newReview);

  await newReview.save();
  await listing.save();
  req.flash("success", "Successfully made a new Review!");
  // console.log("new review saved successfully")
  // res.send("success")
  res.redirect(`/listings/${id}`);
};

module.exports.destroyReview = async (req, res) => {
  let { id, reviewId } = req.params;

  // Remove review reference from Listing
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });

  // Delete review from Review collection
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "Successfully deleted a Review!");
  res.redirect(`/listings/${id}`);
};
